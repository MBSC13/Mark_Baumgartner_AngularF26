export interface Mtg {
  id: number;
  name: string;
  color: string;
  manaCost: string | number;
  cardType: string;
  creatureType: string;
  power: number;
  toughness: number;
  cardText: string;
  foil?: boolean;
}
