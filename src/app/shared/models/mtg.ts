export interface Mtg {
  id: string;
  name: string;
  color: string;
  manaCost: string | number;
  cardType: string;
  creatureType?: string;
}

export interface ScryfallCard {
  id: string;
  name: string;
  type_line: string;
  mana_cost?: string;
  colors?: string[];
}

export interface ScryfallList {
  object: 'list';
  has_more: boolean;
  total_cards?: number;
  data: ScryfallCard[];
}
