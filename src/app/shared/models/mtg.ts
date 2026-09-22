export interface Mtg {
  id: number;
  name: string;
  color: string;
  manaCost: string | number;
  cardType: string;
  // cardText: string;
  creatureType?: string;
  // power?: number;
  // toughness?: number;
  // foil?: boolean;
}
