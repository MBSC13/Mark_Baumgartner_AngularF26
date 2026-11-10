import { Component, computed, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MtgService } from '../../services/mtg-service';
import { Router } from '@angular/router';
import { manaCostValidator } from '../../validators/mana-cost.validator';
import { colorValidator } from '../../validators/color.validator';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-mtg-form',
  styleUrl: './mtg-form.scss',
  templateUrl: './mtg-form.html',
})
export class MtgForm {
  private fb = inject(FormBuilder);
  private service = inject(MtgService);
  private router = inject(Router);

  id = input<string>();

  protected isEditMode = computed(() => this.id() !== undefined);

  protected mtgForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    color: ['', Validators.required],
    manaCost: ['' as string | number, [Validators.required, manaCostValidator]],
    cardType: ['', Validators.required],
    creatureType: [''],
  },
    { validators: colorValidator } //This is where you attach the Validator for the whole FormGroup
  );

  constructor() {
    effect(() => {
      const id = this.id();
      if (id === undefined) {
        return;
      }
      const mtg = this.service.getMtg(id);
      if (mtg) {
        this.mtgForm.patchValue( mtg );
        //   name: mtg.name,
        //   color: mtg.color,
        //   manaCost: mtg.manaCost,
        //   cardType: mtg.cardType,
        //   creatureType: mtg.creatureType
        // }); Unnecessary
      }
    });
  }

  public onSubmit() {
    if (this.mtgForm.invalid) return;

    const value = this.mtgForm.getRawValue();
    const id = this.id() ?? this.service.nextId();

    if (this.isEditMode()) {
      this.service.updateMtg({ id, ...value });
    } else {
      this.service.addCard({ id, ...value });
    }
    this.mtgForm.reset({ cardType: ''});
    this.router.navigate(['/mtg', id]);
  }

}
