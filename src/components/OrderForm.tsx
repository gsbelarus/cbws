import React, { ReactNode, useState } from "react";
import { styleDisplayBlock } from "../App";
import { stringResources, getLocString, Language } from "../consts";

interface IFormProps {
  selectedLang: Language;
  onClose: () => void;
}

export const OrderForm = (props: IFormProps): JSX.Element => {
  const { selectedLang, onClose } = props;
	return (
		<div className="popup__wrp order-popup show">
			<div className="popup__content popup-form" style={styleDisplayBlock}>
				<a href="#" className="close" onClick={onClose}/>
				<h3 className="popup__title">{getLocString(stringResources.orderTitle, selectedLang)}</h3>
				<p className="popup__text">
				{getLocString(stringResources.orderText, selectedLang)}
				</p>
				<form
					id="w7"
					className="js-ajax_form"
					action="/feedback/feedback/send"
					method="post"
					data-popup=".popup__content"
					data-thank=".popup__thank-content"
					data-error=".popup__thank-content"
					data-event="orderFormSubmit"
				>
					<input
						type="hidden"
						name="_csrf"
						value="9gYEoWeVVuqdRLWm8FFKfJO06i57sYtrO7eQqeev9CvATnT7VcBhsvAgmNLINCYG5YOcXgr9vAJ0wNXuveeWHQ=="
					/>{" "}
					<div className="popup__input-wrp name">
						<div className="form-group field-feedback-name has-error">
							<input
								type="text"
								id="feedback-name"
								className="popup__phone"
								name="Feedback[name]"
								placeholder={getLocString(stringResources.orderName, selectedLang)}
								aria-invalid="true"
							/>
							<div className="popup-error"></div>
						</div>{" "}
					</div>
					<div className="popup__input-wrp phone">
						<div className="form-group field-feedback-phone has-error">
							<input
								type="tel"
								id="feedback-phone"
								className="popup__phone"
								name="Feedback[phone]"
								placeholder={getLocString(stringResources.orderPhone, selectedLang)}
								aria-invalid="true"
							/>
							<div className="popup-error"></div>
						</div>{" "}
					</div>
					<div className="popup__input-wrp email">
						<div className="form-group field-feedback-email required has-error">
							<input
								type="email"
								id="feedback-email"
								className="popup__phone"
								name="Feedback[email]"
								placeholder="E-mail"
								aria-required="true"
								aria-invalid="true"
							/>
							<div className="popup-error"></div>
						</div>{" "}
					</div>
					<div className="form-group field-feedback-body">
						<textarea
							id="feedback-body"
							className="popup__textarea"
							name="Feedback[body]"
							placeholder={getLocString(stringResources.orderComment, selectedLang)}
						></textarea>
						<div className="popup-error"></div>
					</div>
					<button className="popup__submit">{getLocString(stringResources.orderSend, selectedLang)}</button>
					<div className="popup__privacy-text">
						{getLocString(stringResources.orderPrivacy, selectedLang)}
					</div>
				</form>
			</div>
		</div>
	);
};
