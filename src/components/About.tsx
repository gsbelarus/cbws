import React from "react";

export const About = () => {
	return (
		<div className="bot-about">
			{/* <div className="bot-content"> */}
				<div className="bot-header bot-about-header">Что такое чат-бот?</div>
				<div className="bot-description bot-about_description">
					Чат-бот&nbsp;— виртуальный собеседник, который встраивается
					в&nbsp;мессенджеры и&nbsp;помогает бизнесу быть ближе к&nbsp;клиентам.
					Это автоматизированная интеллектуальная система общения
					с&nbsp;пользователями.
				</div>
				<div className="bot-about_animation">
					<div className="bot-message">
						<div className="bot-about_img bot-about_img-1"></div>
					</div>
					<div className="bot-message">
						<div className="bot-about_img bot-about_img-2"></div>
						<div className="phrase phrase-2">Повышаем лояльность клиентов?</div>
					</div>
					<div className="bot-message">
						<div className="bot-about_img bot-about_img-3"></div>
						<div className="phrase phrase-3">
							Сокращаем издержки на колл-центр?
						</div>
					</div>
					<div className="bot-message">
						<div className="bot-about_img bot-about_img-4"></div>
						<div className="phrase phrase-4">Увеличиваем продажи?</div>
					</div>
				</div>
			{/* </div> */}
		</div>
	);
};
