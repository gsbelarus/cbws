import { ListItems, LName, ListSocials } from "./types";

type FormatFunc = (...args: any[]) => string;

export interface ILocString {
	en: string | null | FormatFunc;
	ru: string | null | FormatFunc;
	be: string | null | FormatFunc;
}

export type Language = keyof ILocString;

export function getLName(
	n: LName,
	langPref: Language[] = [],
	getFullName: boolean = false
): string {
	for (let i = 0; i < langPref.length; i++) {
		const tn = n[langPref[i]];
		if (tn) {
			return getFullName && tn.fullName ? tn.fullName : tn.name;
		}
	}

	return (
		(getFullName ? n.ru?.fullName : undefined) ??
		n.ru?.name ??
		(getFullName ? n.be?.fullName : undefined) ??
		n.be?.name ??
		(getFullName ? n.en?.fullName : undefined) ??
		n.en?.name ??
		""
	);
}

export const socials: ListSocials = [
	{ id: 1, href: "http://gsbelarus.com/", className: "icon telegram" },
	{ id: 2, href: "http://gsbelarus.com/", className: "icon viber" },
	{ id: 3, href: "http://gsbelarus.com/", className: "icon youtube" },
	{ id: 4, href: "http://gsbelarus.com/", className: "icon fb" }
];

export const mainMenu: ListItems = [
	{
		id: 1,
		path: `/#contacts`,
		caption: {
			ru: {
				name: "Разработка чат-ботов",
			},
			be: {
				name: "Распрацоўка чат-ботаў",
			},
			en: {
				name: "Chatbot development",
			},
		},
	},
	{
		id: 2,
		path: `/#contacts`,
		caption: {
			ru: {
				name: "Наши клиенты",
			},
			be: {
				name: "Нашы кліенты",
			},
			en: {
				name: "Our clients",
			},
		},
	},
	{
		id: 3,
		path: `/#contacts`,
		caption: {
			ru: {
				name: "Контакты",
			},
			be: {
				name: "Кантакты",
			},
			en: {
				name: "Contacts",
			},
		},
	},
];

export const languages: Language[] = ["be", "ru", "en"];

export const stringResources = {
	orderTitle: {
		en: "Order",
		ru: "Заявка",
		be: "Заяўка",
	},
	orderText: {
		en: `Leave your phone and email,\nand we will contact you!`,
		ru: `Оставьте номер телефона и email,\nи мы свяжемся с вами!`,
		be: `Пакіньце тэлефон і email,\nі мы звяжамся з вамі!`,
	},
	orderName: {
		en: "Your name",
		ru: "Ваше имя",
		be: "Ваша імя",
	},
	orderPhone: {
		en: "Phone",
		ru: "Телефон",
		be: "Тэлефон",
	},
	orderComment: {
		en: "Your comment",
		ru: "Ваш комментарий",
		be: "Ваш каментар",
	},
	orderSend: {
		en: "Send",
		ru: "Отправить",
		be: "Адправіць",
	},
	orderPrivacy: {
		en: `By clicking this button, I \nconsent to\nthe processing of personal data`,
		ru: `Нажимая эту кнопку, я\nдаю согласие на\nобработку персональных данных`,
		be: `Націскаючы гэтую кнопку, я\nдаю згоду на\nапрацоўку персанальных дадзеных`,
	},
	orderMakeRequest: {
		en: "Make a request",
		ru: "Оформить заявку",
		be: "Аформіць заяўку",
	},
	socials: {
		en: "We are in social networks",
		ru: "Мы в соцсетях",
		be: "Мы ў сацсетках",
	},
};

export const getLocString = (r: ILocString, lang: Language, ...args: any[]) => {
	const sr = r[lang] ?? r["ru"] ?? r["be"] ?? r["en"];

	if (typeof sr === "function") {
		return sr(...args);
	} else if (sr === null) {
		throw new Error(`String resource isn't defined for a given lanuage.`);
	} else {
		return sr;
	}
};
