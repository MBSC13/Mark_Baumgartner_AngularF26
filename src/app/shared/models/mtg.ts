
//The original interface (id changed to string now)
//Now mapped to from API data
export interface Mtg {
  id: string;
  name: string;
  color: string;
  manaCost: string | number;
  cardType: string;
  creatureType?: string;
}

//API model
//type_line is split() into cardType and creatureType
export interface ScryfallCard {
  id: string;
  name: string;
  type_line: string;
  mana_cost?: string;
  colors?: string[];
}

//List model to hold array of query results
export interface ScryfallList {
  object: 'list';
  has_more: boolean;
  total_cards?: number;
  data: ScryfallCard[];
}
