import React from "react";

export const BotCan = () => {
	return (
		<div className="bot-can">
			{/* <div className="bot-content"> */}
				<div className="bot-header bot-can_header">Что умеют чат-боты?</div>
				<div className="bot-description">
					Всё, что можно оформить как диалог:
				</div>
				<div className="bot-can_animation">
					{/* <img className="bot-can_general-bot" src="/assets/741b82f2/img/bot/bot-can.png" alt="Бот"/> */}
					<div className="skill search">
						Искать
						<br />
						информацию
						{/* <img src="/assets/741b82f2/img/bot/search.png" alt="Лупа"/> */}
					</div>
					<div className="skill chat">
						Общаться тет-а-тет
						<br />и в групповом чате
						{/* <img src="/assets/741b82f2/img/bot/chat.png" alt="Рупор"/> */}
					</div>
					<div className="skill product">
						Показывать товары
						<br />и добавлять их в корзину
						{/* <img src="/assets/741b82f2/img/bot/product.png" alt="Одежда"/> */}
					</div>
					<div className="skill pictures">
						Находить и показывать
						<br />
						картинки
						{/* <img src="/assets/741b82f2/img/bot/pictures.png" alt="Изображения"/> */}
					</div>
					<div className="skill suggestion">
						Подсказывать, давать советы
						<br />
						в зависимости от ответов
						<br />
						пользователя
						{/* <img src="/assets/741b82f2/img/bot/suggestion.png" alt="рекомендации"/> */}
					</div>
				</div>

				<div className="bot-can_carousel">
					<div className="bot-can_item">
						{/* <img className="carousel-image" src="/assets/741b82f2/img/bot/search.png" alt="Лупа"/> */}
						<div className="carousel-description">Искать информацию</div>
					</div>
					<div className="bot-can_item">
						{/* <img className="carousel-image" src="/assets/741b82f2/img/bot/chat.png" alt="Рупор"/> */}
						<div className="carousel-description">
							Общаться тет-а-тет и в групповом чате
						</div>
					</div>
					<div className="bot-can_item">
						{/* <img className="carousel-image" src="/assets/741b82f2/img/bot/product.png" alt="Одежда"/> */}
						<div className="carousel-description">
							Показывать товары и добавлять их в корзину
						</div>
					</div>
					<div className="bot-can_item">
						{/* <img className="carousel-image" src="/assets/741b82f2/img/bot/pictures.png" alt="Изображения"/> */}
						<div className="carousel-description">
							Находить и показывать
							<br />
							картинки
						</div>
					</div>
					<div className="bot-can_item">
						{/* <img className="carousel-image" src="/assets/741b82f2/img/bot/suggestion.png" alt="рекомендации"/> */}
						<div className="carousel-description">
							Подсказывать, давать советы
							<br />
							в зависимости от ответов
							<br />
							пользователя
						</div>
					</div>
				</div>
				<div className="bot-can_example">
					Вот как выглядит переписка с чат-ботом:
				</div>
				<div className="telegram-messages">
					<div className="telegram-message inbox clearfix">
						<div className="telegram-message_userpic"></div>
						<div className="telegram-message_text">
							Какую пиццу заказываем сегодня?
							<div className="telegram-message_time">12:50</div>
						</div>
					</div>
					<div className="telegram-message outbox clearfix">
						<div className="telegram-message_userpic"></div>
						<div className="telegram-message_text">
							Супер папа
							<div className="telegram-message_time">12:50</div>
						</div>
					</div>
					<div className="telegram-message inbox clearfix">
						<div className="telegram-message_userpic"></div>
						<div className="telegram-message_text">
							Это то, что надо?
							<div className="telegram-message_time">12:51</div>
						</div>
					</div>
					<div className="telegram-message inbox clearfix">
						<div className="telegram-message_userpic"></div>
						<div className="telegram-message_text">
							<div className="telegram-message_img"></div>
							Фирменный томатный соус «Папа Джонс», сыр моцарелла, пепперони,
							ароматная свинина, ветчина, шампиньоны, сладкий зеленый перец,
							лук, маслины
							<div className="telegram-message_time">12:51</div>
						</div>
					</div>
					<div className="telegram-message outbox clearfix">
						<div className="telegram-message_userpic"></div>
						<div className="telegram-message_text">
							Да, а варианты?
							<div className="telegram-message_time">12:52</div>
						</div>
					</div>
				</div>
			{/* </div> */}
		</div>
	);
};
