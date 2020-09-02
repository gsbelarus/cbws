import React from "react";

export const Tasks = () => {
	return (
		<div className="bot-tasks">
			{/* <div className="bot-content"> */}
				<div className="bot-header bot-tasks__header">
					Какие задачи можно
					<br />
					поручить чат-боту сейчас?
				</div>
				<div className="column">
					<div className="column-item">
						{/* <img className="column-item__icon" src="/assets/741b82f2/img/bot/tasks-icon-1.png" alt=""/> */}
						<div className="column-item__text">
							Первичный опрос пользователя (будет полезным при&nbsp;массовом
							подборе персонала, в&nbsp;предложениях банковских продуктов,{" "}
							<span className="no-wrap">в e-commerce</span>)
						</div>
					</div>
					<div className="column-item">
						<img
							className="column-item__icon"
							src="/assets/741b82f2/img/bot/tasks-icon-2.png"
							alt=""
						/>
						<div className="column-item__text">
							Ответ на&nbsp;частые и&nbsp;стандартные вопросы (автоматизируйте
							часть вашего сервиса и&nbsp;сократите время ожидания)
						</div>
					</div>
					<div className="column-item">
						<img
							className="column-item__icon"
							src="/assets/741b82f2/img/bot/tasks-icon-3.png"
							alt=""
						/>
						<div className="column-item__text">
							Загрузка документов, фотографий, быстрое анкетирование
							(используйте при проведении конкурсов, приеме-подаче заявок
							и&nbsp;т.&nbsp;п.)
						</div>
					</div>
				</div>
				<div className="column">
					<div className="column-item">
						<img
							className="column-item__icon"
							src="/assets/741b82f2/img/bot/tasks-icon-4.png"
							alt=""
						/>
						<div className="column-item__text">
							Получение обратной связи от&nbsp;клиентов (получайте отзывы
							о&nbsp;работе компании через&nbsp;мессенджер)
						</div>
					</div>
					<div className="column-item">
						<img
							className="column-item__icon"
							src="/assets/741b82f2/img/bot/tasks-icon-5.png"
							alt=""
						/>
						<div className="column-item__text">
							Запрос и&nbsp;получение актуальной информации (особенно пригодится
							организаторам мероприятий и&nbsp;конференций)
						</div>
					</div>
					<div className="column-item">
						<img
							className="column-item__icon"
							src="/assets/741b82f2/img/bot/tasks-icon-6.png"
							alt=""
						/>
						<div className="column-item__text">
							Запись на&nbsp;определенное время и&nbsp;дату или иная работа
							с&nbsp;календарем (актуально для медицинских центров, автосервисов
							и&nbsp;пр.)
						</div>
					</div>
					<div className="column-item">
						<img
							className="column-item__icon"
							src="/assets/741b82f2/img/bot/tasks-icon-7.png"
							alt=""
						/>
						<div className="column-item__text">
							Апсейлы, поддержание контакта с&nbsp;клиентами после продажи
						</div>
					</div>
				</div>
			{/* </div> */}
		</div>
	);
};
