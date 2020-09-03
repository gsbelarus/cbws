import React from "react";
import { divStyle, divStyle2, styleDisplayNone } from "../App";



export const BotCant = () => {
	return (
		<div className="bot-cant">
			<div className="bot-content">
				<div className="bot-header bot-cant_header">
					Что чат-боты пока не умеют?
				</div>
				<div className="bot-description bot-cant_description">
					В работе чат-ботов есть ограничения, но мы знаем, как их обойти!
				</div>
				<div
					className="slider-block owl-carousel owl-theme owl-center owl-loaded owl-text-select-on"
					id="bot-slider"
				>
					<div className="owl-stage-outer">
						<div className="owl-stage">
							<div className="owl-item cloned" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/interactive-bot.jpg" alt=""/>
<img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/interactive-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Паттерны
											<br />
											взаимодействия
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/money-bot.jpg" alt=""/>
<img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/money-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Платежи внутри
											<br />
											мессенджеров
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned active" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/language-bot.jpg" alt=""/>
<img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/language-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Понимание
											<br />
											естественного языка
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active center" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/interactive-bot.jpg" alt=""/>
<img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/interactive-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Паттерны
											<br />
											взаимодействия
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/money-bot.jpg" alt=""/>
<img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/money-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Платежи внутри
											<br />
											мессенджеров
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/language-bot.jpg" alt=""/>
<img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/language-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Понимание
											<br />
											естественного языка
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/interactive-bot.jpg" alt=""/> */}
										{/* <img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/interactive-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Паттерны
											<br />
											взаимодействия
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/money-bot.jpg" alt=""/> */}
										{/* <img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/money-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Платежи внутри
											<br />
											мессенджеров
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle}>
								<div className="bot-cant_action">
									<div className="bot-cant_image">
										{/* <img className="bot-cant_inactive-image" src="/assets/741b82f2/img/bot/language-bot.jpg" alt=""/> */}
										{/* <img className="bot-cant_active-image" src="/assets/741b82f2/img/bot/language-bot.gif" alt=""/> */}
										<div className="bot-cant_text">
											Понимание
											<br />
											естественного языка
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="owl-controls">
						<div className="owl-nav">
							<div className="bot-nav_item bot-nav_left"></div>
							<div className="bot-nav_item bot-nav_right"></div>
						</div>
						<div className="bot-dots owl-dots">
							<div className="owl-dot active">
								<span></span>
							</div>
							<div className="owl-dot">
								<span></span>
							</div>
							<div className="owl-dot">
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div className="problem-wrapper owl-carousel owl-theme owl-loaded owl-text-select-on">
					<div className="owl-stage-outer">
						<div className="owl-stage">
							<div className="owl-item cloned" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											Клиент не&nbsp;может совершить покупку в&nbsp;диалоге
											с&nbsp;чат-ботом — мессенджеры пока не&nbsp;предоставляют
											такую функцию.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Сейчас мы можем давать ссылку для перехода
											на&nbsp;платежный сервис, чтобы пользователь завершил
											процесс покупки. Однако скоро многие мессенджеры обещают
											реализацию оплаты прямо в&nbsp;чате!
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											Простой чат-бот не умеет обрабатывать информацию,
											полученную от&nbsp;пользователя в&nbsp;свободной форме —
											обычную письменную речь. Технологии понимания
											естественного языка пока не&nbsp;столь широко
											распространены, чтобы обучаемый бот с&nbsp;нейросетями был
											прост в&nbsp;реализации и дешев в&nbsp;производстве.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Наши чат-боты сами задают вопросы и ведут диалог,
											в&nbsp;котором работают корректно, поэтому пользователи не
											требуют уточнений. Еще мы учим ботов выделять
											из&nbsp;запроса отдельные слова и правильно их
											обрабатывать.
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											В&nbsp;чат-ботах еще не&nbsp;сформировались интуитивно
											понятные, однозначные и&nbsp;общепринятые паттерны для
											совершения похожих действий&nbsp;— из-за того, что текущий
											уровень развития мессенджеров и&nbsp;использования ботов
											пока что не&nbsp;очень высокий.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Мы&nbsp;применяем естественный паттерн общения через
											мессенджер&nbsp;— используем текст и&nbsp;задаем вопросы
											по&nbsp;порядку, тем самым линейно приближаем пользователя
											к&nbsp;достижению конечной цели, например, заказу пиццы.
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											Клиент не&nbsp;может совершить покупку в&nbsp;диалоге
											с&nbsp;чат-ботом — мессенджеры пока не&nbsp;предоставляют
											такую функцию.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Сейчас мы можем давать ссылку для перехода
											на&nbsp;платежный сервис, чтобы пользователь завершил
											процесс покупки. Однако скоро многие мессенджеры обещают
											реализацию оплаты прямо в&nbsp;чате!
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											Простой чат-бот не умеет обрабатывать информацию,
											полученную от&nbsp;пользователя в&nbsp;свободной форме —
											обычную письменную речь. Технологии понимания
											естественного языка пока не&nbsp;столь широко
											распространены, чтобы обучаемый бот с&nbsp;нейросетями был
											прост в&nbsp;реализации и дешев в&nbsp;производстве.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Наши чат-боты сами задают вопросы и ведут диалог,
											в&nbsp;котором работают корректно, поэтому пользователи не
											требуют уточнений. Еще мы учим ботов выделять
											из&nbsp;запроса отдельные слова и правильно их
											обрабатывать.
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											В&nbsp;чат-ботах еще не&nbsp;сформировались интуитивно
											понятные, однозначные и&nbsp;общепринятые паттерны для
											совершения похожих действий&nbsp;— из-за того, что текущий
											уровень развития мессенджеров и&nbsp;использования ботов
											пока что не&nbsp;очень высокий.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Мы&nbsp;применяем естественный паттерн общения через
											мессенджер&nbsp;— используем текст и&nbsp;задаем вопросы
											по&nbsp;порядку, тем самым линейно приближаем пользователя
											к&nbsp;достижению конечной цели, например, заказу пиццы.
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={divStyle2}>
								<div className="problem-container">
									<div className="column problem">
										<div className="column-header">Проблема</div>
										<div>
											Клиент не&nbsp;может совершить покупку в&nbsp;диалоге
											с&nbsp;чат-ботом — мессенджеры пока не&nbsp;предоставляют
											такую функцию.
										</div>
									</div>
									<div className="column answer">
										<div className="column-header">Решение</div>
										<div>
											Сейчас мы можем давать ссылку для перехода
											на&nbsp;платежный сервис, чтобы пользователь завершил
											процесс покупки. Однако скоро многие мессенджеры обещают
											реализацию оплаты прямо в&nbsp;чате!
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="owl-controls">
						<div className="owl-nav">
							<div className="owl-prev" style={styleDisplayNone}>
								prev
							</div>
							<div className="owl-next" style={styleDisplayNone}>
								next
							</div>
						</div>
						<div className="owl-dots" style={styleDisplayNone}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
