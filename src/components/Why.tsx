import React from "react";

export const Why = () => {
	return (
		<div className="bot-why">
			<div className="bot-header">Почему чат-бот полезен?</div>
			<label htmlFor="business" className="column column-header">
				<span>Бизнесу</span>
			</label>
			<label htmlFor="client" className="column column-header">
				<span>Клиентам</span>
			</label>
			<div>
				<div className="column">
					<div className="column-item">
						<div className="column-item_text">
							Создать чат-бота дешевле, чем разработать мобильное приложение —
							вы не&nbsp;тратите деньги на&nbsp;дизайн интерфейса
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Подключить бота очень просто, если у сайта, мобильного приложения
							или CRM-системы уже есть API
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Чат-боты — это еще один новый канал, который хорошо работает на
							повторные продажи и лояльность клиентов, но в&nbsp;сравнении
							с&nbsp;email-рассылками и SMM обеспечивает более тесный контакт
							с&nbsp;клиентом
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Чат-боты легко масштабируются — после запуска бота в&nbsp;одном
							мессенджере создание его в другом не потребует большого количества
							времени
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Дополнительное неформальное конкурентное преимущество — вау-эффект
						</div>
					</div>
				</div>
				<div className="column">
					<div className="column-item">
						<div className="column-item_text">
							Вашим пользователям не&nbsp;нужно устанавливать дополнительное
							программное обеспечение — они подключат бота одним кликом
							в&nbsp;имеющемся мессенджере!
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Нет особых требований к&nbsp;технике — мессенджеры работают даже
							на&nbsp;самых простых смартфонах
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Пользователь взаимодействует с&nbsp;чат-ботом в&nbsp;привычном ему
							интерфейсе — это удобно
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Чат-боты хорошо работают даже при медленном интернете
						</div>
					</div>
					<div className="column-item">
						<div className="column-item_text">
							Обновления, которые вносятся в&nbsp;бота, не&nbsp;связаны
							с&nbsp;Google Play или App Store. Вы сможете быстро
							модернизировать чат-бота, не&nbsp;ожидая долгой проверки новой
							версии
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
