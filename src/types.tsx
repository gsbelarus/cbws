export interface ListItem {
	id: number;
	path?: string;
	caption: LName;
}

export type ListItems = ListItem[];

export interface IRef {
	name?: string;
	href: string;
	className: string;
}

export type ListRefs = IRef[];

export interface TName {
	name: string;
	fullName?: string;
}

export interface LName {
	[key: string]: TName;
}
