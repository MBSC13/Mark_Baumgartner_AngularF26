import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MtgService } from '../../services/mtg-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-mtg-form',
  styleUrl: './mtg-form.scss',
  templateUrl: './mtg-form.html',
})
export class MtgForm {
  private fb = inject(FormBuilder);
  private service = inject(MtgService);

  protected mtgForm = this.fb.nonNullable.group({
    name: ['', Validators.required, Validators.minLength(2)],
    color: ['', Validators.required, Validators.minLength(1)],
    manaCost: ['', Validators.required],
    cardType: ['', Validators.required],
    creatureType: [''],
  });

  public onSubmit() {
    if (this.mtgForm.invalid) return;

    const value = this.mtgForm.getRawValue();

    this.service.addCard({id: Date.now(), ...value });

    this.mtgForm.reset({ cardType: ''});
  }
}
