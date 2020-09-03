import React from "react";
import { divStyle2 } from "../App";

export const Steps = () => {
	return (
		<div className="bot-steps">
			{/* <div className="bot-content"> */}
				<div className="bot-header bot-steps_header">
					Этапы создания чат-бота для бизнеса
					<div className="bot-steps_wrapper owl-carousel owl-theme owl-loaded">
						<div className="owl-stage-outer">
							<div className="owl-stage">
								<div className="owl-item cloned" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-4.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Непосредственная разработка чат-бота
												</p>
												<div className="step-description_list">
													<div className="list-item">Внедряем команды,</div>
													<div className="list-item">подключаем к API,</div>
													<div className="list-item">
														регистрируем бота в мессенджере,
													</div>
													<div className="list-item">
														настраиваем параметры.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-5.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Запуск, аналитика
												</p>
												<div className="step-description_list">
													<div className="list-item">
														Выводим бота из тестового режима,
													</div>
													<div className="list-item">
														устанавливаем системы аналитики и отслеживания
														воронки продаж.
													</div>
												</div>
												<div className="step-description_text">
													После запуска первого бота и&nbsp;анализа статистики
													при необходимости мы&nbsp;корректируем сценарии
													и&nbsp;алгоритмы. Затем разрабатываем ботов для других
													мессенджеров. Чем больше чат-ботов, тем больше
													сегментов аудитории мы&nbsp;охватим.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item active" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-2.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Проектирование
												</p>
												<div className="step-description_text">
													Помимо команд и сценариев мы прорабатываем стиль
													общения бота. Все ответы бота должны быть четко
													сформулированы и соответствовать текущим действиям.
												</div>
												<div className="step-description_list">
													В рамках этапа мы:
													<div className="list-item">
														разрабатываем интерфейс клавиатур
														<br />с наборами команд;
													</div>
													<div className="list-item">
														пишем текстовые ответы бота.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-3.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Разработка API
												</p>
												<div className="step-description_text">
													Бота необходимо подружить с&nbsp;другими участниками
													бизнес-процесса: с&nbsp;сайтом (его&nbsp;данными и
													функциональностью){" "}
													<span className="no-wrap">и/или</span>
													&nbsp;корпоративной CRM-системой. Для этого
													разрабатывается API*.
													<br />
													Если API уже имеется, мы подключаем бота к&nbsp;нему.
												</div>
												<div className="step-description_text step-description_footnote">
													<span className="step-description_footnote">
														*API
													</span>{" "}
													(интерфейс программирования приложений) — это набор
													готовых классов, процедур, функций, структур и
													констант, предоставляемых приложением (библиотекой,
													сервисом) или операционной системой
													для&nbsp;использования во&nbsp;внешних программных
													продуктах.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-4.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Непосредственная разработка чат-бота
												</p>
												<div className="step-description_list">
													<div className="list-item">Внедряем команды,</div>
													<div className="list-item">подключаем к API,</div>
													<div className="list-item">
														регистрируем бота в мессенджере,
													</div>
													<div className="list-item">
														настраиваем параметры.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-5.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Запуск, аналитика
												</p>
												<div className="step-description_list">
													<div className="list-item">
														Выводим бота из тестового режима,
													</div>
													<div className="list-item">
														устанавливаем системы аналитики и отслеживания
														воронки продаж.
													</div>
												</div>
												<div className="step-description_text">
													После запуска первого бота и&nbsp;анализа статистики
													при необходимости мы&nbsp;корректируем сценарии
													и&nbsp;алгоритмы. Затем разрабатываем ботов для других
													мессенджеров. Чем больше чат-ботов, тем больше
													сегментов аудитории мы&nbsp;охватим.
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="owl-item cloned"
									style={{ width: "1024px", marginRight: "0px" }}
								>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-2.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Проектирование
												</p>
												<div className="step-description_text">
													Помимо команд и сценариев мы прорабатываем стиль
													общения бота. Все ответы бота должны быть четко
													сформулированы и соответствовать текущим действиям.
												</div>
												<div className="step-description_list">
													В рамках этапа мы:
													<div className="list-item">
														разрабатываем интерфейс клавиатур
														<br />с наборами команд;
													</div>
													<div className="list-item">
														пишем текстовые ответы бота.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={divStyle2}>
									<div className="step">
										<div className="column step_image">
											<img
												src="/assets/741b82f2/img/bot/steps-icon-3.gif"
												alt=""
											/>
										</div>
										<div className="column step_text">
											<div className="step-description">
												<p className="step-description_header">
													Разработка API
												</p>
												<div className="step-description_text">
													Бота необходимо подружить с&nbsp;другими участниками
													бизнес-процесса: с&nbsp;сайтом (его&nbsp;данными и
													функциональностью){" "}
													<span className="no-wrap">и/или</span>
													&nbsp;корпоративной CRM-системой. Для этого
													разрабатывается API*.
													<br />
													Если API уже имеется, мы подключаем бота к&nbsp;нему.
												</div>
												<div className="step-description_text step-description_footnote">
													<span className="step-description_footnote">
														*API
													</span>{" "}
													(интерфейс программирования приложений) — это набор
													готовых классов, процедур, функций, структур и
													констант, предоставляемых приложением (библиотекой,
													сервисом) или операционной системой
													для&nbsp;использования во&nbsp;внешних программных
													продуктах.
												</div>
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
							<div className="bot-dots owl-dots step-dots">
								<div className="owl-dot active">
									<span></span>
								</div>
								<div className="owl-dot">
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
				</div>
			{/* </div> */}
		</div>
	);
};
