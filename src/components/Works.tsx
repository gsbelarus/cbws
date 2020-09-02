import React from "react";

export const Works = () => {
	return (
		<div className="bot-works">
			<div className="bot-content bot-works__content">
				<div className="bot-works__animation">
					{/* <img className="bot-works__pepper" src="/assets/741b82f2/img/bot/pepper.png" alt="Перец">
<img className="bot-works__tomato" src="/assets/741b82f2/img/bot/tomato.png" alt="Томат">
<img className="bot-works__phone" src="/assets/741b82f2/img/bot/papas-bot.png" alt="Папа-бот"> */}
					<div className="bot-works__header">
						Все еще не уверены, что чат-бот сработает?
					</div>
					<div className="bot-works__text bot-works__shorter">
						Посмотрите, какие результаты принес бот сети пиццерий «Папа Джонс»
						за несколько месяцев тестового использования!
					</div>
					<div className="papa-item">
						<div className="papa-item__icon">
							{/* <img src="/assets/741b82f2/img/bot/papa-icon-1.png" alt=""/> */}
						</div>
						<div className="papa-item__thesis">
							<div className="papa-item__text">1 400 000 рублей</div>
							<div className="papa-item__time">
								выручка от&nbsp;заказов через чат-бота за&nbsp;3 месяца
							</div>
						</div>
					</div>
					<div className="papa-item">
						<div className="papa-item__icon">
							{/* <img src="/assets/741b82f2/img/bot/papa-icon-2.png" alt=""/> */}
						</div>
						<div className="papa-item__thesis">
							<div className="papa-item__text">4000 пользователей</div>
							<div className="papa-item__time">к концу августа</div>
						</div>
					</div>
					<div className="papa-item">
						<div className="papa-item__icon">
							{/* <img src="/assets/741b82f2/img/bot/papa-icon-3.png" alt=""/> */}
						</div>
						<div className="papa-item__thesis">
							<div className="papa-item__text">20% конверсия</div>
							<div className="papa-item__time">из установок в заказы</div>
						</div>
					</div>
					<div className="papa-item">
						<div className="papa-item__icon">
							{/* <img src="/assets/741b82f2/img/bot/papa-icon-4.png" alt=""/> */}
						</div>
						<div className="papa-item__thesis">
							<div className="papa-item__text">1.97</div>
							<div className="papa-item__time">вовлеченность пользователей</div>
						</div>
					</div>
					<div className="bot-works__text">
						Запуск — июнь 2016.
						<br />
						Вложения в рекламу – 0 рублей, т. к. клиенты пиццерии получили
						электронные письма со ссылкой на канал в Telegram.
					</div>
					<div className="bot-works__button">
						<a href="#" className="btn btn-transparent-pink popup-show">
							Оформить заявку
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
