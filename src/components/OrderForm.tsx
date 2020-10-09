import React, { useState } from "react";
import { stringResources, getLocString, Language } from "../consts";
// import emailjs from 'emailjs-com';

interface IFormProps {
	selectedLang: Language;
	onClose: () => void;
  onSend: () => void;
}

export const styleDisplayBlock = {
	display: "block",
};

export const OrderForm = (props: IFormProps): JSX.Element => {
	const { selectedLang, onClose, onSend } = props;
	const [responseMessage, setResponseMessage] = useState("");
	const onClear = () => {
		if (responseMessage !== "") setResponseMessage("");
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		e.preventDefault();
		onSend();
	};
	return (
		<div className="popup_wrp show">
			<div className="popup_content popup-form" style={styleDisplayBlock}>
				<a href="#" className="close" onClick={onClose} />
				<div>
					<h3 className="popup_title">
						{getLocString(stringResources.orderTitle, selectedLang)}
					</h3>
					<p className="popup_text">
						{getLocString(stringResources.orderText, selectedLang)}
					</p>
					<form id="formOrder" method="post">
						<div className="input-wrp name">
							<div>
								<input
									type="text"
									id="feedback-name"
									className="popup_phone"
									name="user_name"
									placeholder={getLocString(
										stringResources.orderName,
										selectedLang
									)}
								/>
							</div>
						</div>
						<div className="input-wrp phone">
							<div>
								<input
									type="tel"
									id="feedback-phone"
									className="popup_phone"
									name="user_phone"
									placeholder={getLocString(
										stringResources.orderPhone,
										selectedLang
									)}
									aria-invalid="true"
								/>
							</div>
						</div>
						<div className="input-wrp email">
							<div>
								<input
									type="email"
									id="feedback-email"
									className="popup_phone"
									name="user_email"
									placeholder="E-mail"
									aria-required="true"
									aria-invalid="true"
								/>
							</div>
						</div>
						<div>
							<textarea
								id="feedback-body"
								className="popup_textarea"
								name="message_html"
								placeholder={getLocString(
									stringResources.orderComment,
									selectedLang
								)}
							/>
						</div>
						<button id='submit' className="popup_submit" onClick={onSend}>
							{getLocString(stringResources.orderSend, selectedLang)}
						</button>
						<div className="popup_privacy-text">
							{getLocString(stringResources.orderPrivacy, selectedLang)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
