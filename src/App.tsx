import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Why } from "./components/Why";
import { Where } from "./components/Where";
import { BotCan } from "./components/BotCan";
import { BotCant } from "./components/BotCant";
import { Tasks } from "./components/Tasks";
import { BotTypes } from "./components/BotTypes";
import { Steps } from "./components/Steps";
import { Call } from "./components/Call";
import { Works } from "./components/Works";
import { Contacts } from "./components/Contacts";
import { mainMenu, Language, languages, getLocString, stringResources } from "./consts";
import { LangSelector } from "./components/LangSelector";
import { OrderForm } from "./components/OrderForm";

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

export default function App() {
	const [lng, setLanguage] = useState(languages[0]);
	const [viewOrderForm, setViewOrderForm] = useState(false);
	return (
		<div>
			<div className="header">
				{/* <div className="flex header-container"> */}
        <header className="flex header-container">
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
					<div className="orderMakeRequest">
						<a href="#" className="btn" onClick={() => setViewOrderForm(!viewOrderForm)}>{getLocString(stringResources.orderMakeRequest, lng)}</a>
					</div>
				{/* </div> */}
			</div>
			<div>
				<About />
				<Why />
				<Where />
				{/* <BotCan /> */}
				{/* <BotCant /> */}
				<Tasks />
				{/* <Steps /> */}
				{/* <BotTypes />
				<Call />
				<Works /> */}
				<Contacts />
			</div>
      {viewOrderForm && <OrderForm selectedLang={lng} onClose={() => setViewOrderForm(false)}/>}
			<footer>
				<div className="flex bot-content">
					<div className="footer-copyright">
						Copyright © 1994-2020 by Golden Software of Belarus, Ltd. All rights
						reserved.
						<br />
					</div>
					<div className="footer-socials">
						<label>Мы в соцсетях</label>
						<div className="socials">
							<a
								href="https://www.gsbelarus.com"
								className="icon icon-telegram"
								target="_blank"
							></a>
							<a
								href="https://www.gsbelarus.com"
								className="icon icon-viber"
								target="_blank"
							></a>
							<a
								href="https://www.gsbelarus.com"
								className="icon icon-youtube"
								target="_blank"
							></a>
							<a
								href="https://www.gsbelarus.com"
								className="icon icon-fb"
								target="_blank"
							></a>
						</div>
					</div>
				</div>
			</footer>
		</div>

		// <Router>
		// 	<div className="section-top">
		// 		<nav>
		// 			<ul>
		// 				<li>
		// 					<Link to="/">Главная</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/services">Услуги</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/contacts">Контакты</Link>
		// 				</li>
		// 			</ul>
		// 		</nav>

		// 		<Switch>
		// 			<Route path="/services">
		// 				<Services />
		// 			</Route>
		// 			<Route path="/contacts">
		// 				<a href="/#solutions">Решения</a>
		// 			</Route>
		// 			<Route path="/">
		// 				<Home />
		// 			</Route>
		// 		</Switch>
		// 	</div>
		// </Router>
	);
}
