import React from "react";

export const Why = () => {
	return (
		<div className="bot-why">
			{/* <div className="bot-content"> */}
				<div className="bot-header bot-why__header">
					Почему чат-бот полезен?
				</div>
				<label htmlFor="business" className="column column-header business">
					<span className="bot-why__category">Бизнесу</span>
				</label>
				<label htmlFor="client" className="column column-header client">
					<span className="bot-why__category">Клиентам</span>
				</label>
				<div className="bot-why__animation">
					<div className="column">
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-1.png"
								alt=""
							/>
							<div className="column-item__text">
								Создать чат-бота дешевле, чем разработать мобильное приложение —
								вы не&nbsp;тратите деньги на&nbsp;дизайн интерфейса
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-2.png"
								alt=""
							/>
							<div className="column-item__text">
								Подключить бота очень просто, если у сайта, мобильного
								приложения или CRM-системы уже есть API
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-3.png"
								alt=""
							/>
							<div className="column-item__text">
								Чат-боты — это еще один новый канал, который хорошо работает на
								повторные продажи и лояльность клиентов, но в&nbsp;сравнении
								с&nbsp;email-рассылками и SMM обеспечивает более тесный контакт
								с&nbsp;клиентом
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-4.png"
								alt=""
							/>
							<div className="column-item__text">
								Чат-боты легко масштабируются — после запуска бота в&nbsp;одном
								мессенджере создание его в другом не потребует большого
								количества времени
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-5.png"
								alt=""
							/>
							<div className="column-item__text">
								Дополнительное неформальное конкурентное преимущество —
								вау-эффект
							</div>
						</div>
					</div>
					<div className="column">
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-6.png"
								alt=""
							/>
							<div className="column-item__text">
								Вашим пользователям не&nbsp;нужно устанавливать дополнительное
								программное обеспечение — они подключат бота одним кликом
								в&nbsp;имеющемся мессенджере!
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-7.png"
								alt=""
							/>
							<div className="column-item__text">
								Нет особых требований к&nbsp;технике — мессенджеры работают даже
								на&nbsp;самых простых смартфонах
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-8.png"
								alt=""
							/>
							<div className="column-item__text">
								Пользователь взаимодействует с&nbsp;чат-ботом в&nbsp;привычном
								ему интерфейсе — это удобно
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-9.png"
								alt=""
							/>
							<div className="column-item__text">
								Чат-боты хорошо работают даже при медленном интернете
							</div>
						</div>
						<div className="column-item">
							<img
								className="column-item__icon"
								src="/assets/741b82f2/img/bot/icon-10.png"
								alt=""
							/>
							<div className="column-item__text">
								Обновления, которые вносятся в&nbsp;бота, не&nbsp;связаны
								с&nbsp;Google Play или App Store. Вы сможете быстро
								модернизировать чат-бота, не&nbsp;ожидая долгой проверки новой
								версии
							</div>
						</div>
					</div>
				</div>
			{/* </div> */}
		</div>
	);
};
