export interface ListItem {
  id: number,
  path?: string;
  caption: LName;
}

export type ListItems = ListItem[];

export interface ListSocial {
  id: number,
  href: string;
  className: string;
}

export type ListSocials = ListSocial[];

export interface TName {
  name: string;
  fullName?: string;
}

export interface LName {
  [key: string]: TName;
}