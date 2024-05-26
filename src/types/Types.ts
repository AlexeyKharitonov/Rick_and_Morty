export interface ICharacters {
  id: number;
  [key: string]: string | number;
}

export interface IEpisods {
  id: number;
  [key: string]: string | number;
}

export interface ILocation {
  id: number;
  [key: string]: string | number;
}

export interface IData {
  characters: ICharacters[];
  episods: IEpisods[];
  location: ILocation[];
}
