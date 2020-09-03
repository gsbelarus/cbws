import React, { useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Why } from "./components/Why";
import { Where } from "./components/Where";
import { Tasks } from "./components/Tasks";
import { Contacts } from "./components/Contacts";

import {
	mainMenu,
	languages,
	getLocString,
	stringResources,
	socials,
} from "./consts";
import { LangSelector } from "./components/LangSelector";
import { OrderForm } from "./components/OrderForm";

export default function App() {
	const [lng, setLanguage] = useState(languages[0]);
	const [viewOrderForm, setViewOrderForm] = useState(false);
	return (
		<div>
			<div className="header">
				<div className="bot-content">
					<header className="flex">
						<div className="menu">
							<nav>
								<ul>
									{mainMenu.map((mi, idx) => (
										<li key={idx}>
											<a href={mi.path}>{mi.caption[lng].name}</a>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className="phone">
							<span>+375-17-2562782</span>
						</div>
						<LangSelector
							selectedLang={lng}
							onSetLanguage={(lng) => setLanguage(lng)}
						/>
					</header>
					<div className="order">
						<button onClick={() => setViewOrderForm(!viewOrderForm)}>
							{getLocString(stringResources.orderMakeRequest, lng)}
						</button>
					</div>
				</div>
			</div>
			<div className="bot-content">
				<About />
				<Why />
				<Where />
				<Tasks />
			</div>
			{viewOrderForm && (
				<OrderForm selectedLang={lng} onClose={() => setViewOrderForm(false)} />
			)}
			<Contacts />
			<footer>
				<div className="flex bot-content">
					<div className="footer-copyright">
						Copyright © 1994-2020 by Golden Software of Belarus, Ltd. All rights
						reserved.
						<br />
					</div>
					<div className="footer-socials">
						<label>{getLocString(stringResources.socials, lng)}</label>
						<div className="socials">
							{socials.map((soc) => (
								<a
									key={soc.id}
									href={soc.href}
									className={soc.className}
									target="_blank"
									rel="noopener noreferrer"
								/>
							))}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export const divStyle = {
	width: "341.333px",
	marginRight: "0px",
};

export const divStyle2 = {
	width: "1024px",
	marginRight: "0px",
};

export const styleDisplayNone = {
	display: "none",
};

export const styleDisplayBlock = {
	display: "block",
};
