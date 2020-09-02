export interface ListItem {
  id: number,
  path?: string;
  caption: LName;
}

export type ListItems = ListItem[];

export interface TName {
  name: string;
  fullName?: string;
}

export interface LName {
  [key: string]: TName;
}