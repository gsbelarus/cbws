import React from "react";

export const Contacts = () => {
	return (
		<div className="contacts">
			<div className="bot-content">
				<div className="bot-header">Наши контакты</div>
				<label className="column column-header">
					<span>Офис</span>
				</label>
				<label className="column column-header">
					<span>Время работы</span>
				</label>
				<div>
					<div className="column">
						<div className="column-item">
							<div className="column-item_text">
								<ul>
									<li>
										<i className="icon icm-icon-map-marker"> </i>
										<span>220073, Минск, ул. Скрыганова 6, офис 2-204</span>
									</li>
									<li>
										<i className="icon icm-icon-call"> </i>
										<span>+375-17-2562782, 2562783</span>
									</li>
									<li>
										<i className="icon icm-icon-print"> </i>
										<span>+375-17-2561759</span>
									</li>
									<li>
										<i className="icon icm-icon-facebook2"> </i>
										<span>
											<a href="https://www.facebook.com/gsbelarus">Facebook</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="column-item">
							<div className="column-item_text">
								<ul>
									<li>
										<span>Понедельник - Пятница с 9:00 до 18:00</span>
									</li>
									<li>
										<span>Cуббота, Воскресенье - Выходной</span>
									</li>{" "}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="google-map">
				<iframe
					title="gsGoogleMap"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.146771511647!2d27.51488871540917!3d53.9113677399398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc55ea0c18659%3A0x89db612157d67ddf!2z0JfQntCb0J7QotCr0JUg0J_QoNCe0JPQoNCQ0JzQnNCrINCe0JTQng!5e0!3m2!1sru!2sby!4v1597862349105!5m2!1sru!2sby"
					width="600"
					height="450"
					style={{ border: "0", width: "100%" }}
					aria-hidden="false"
				></iframe>
			</div>
		</div>
	);
};
