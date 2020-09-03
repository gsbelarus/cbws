import * as React from "react";
import { Language, languages } from "../consts";
import classNames from "classnames";

export type LangSelectorProps = {
  selectedLang: Language;
  onSetLanguage: (lang: Language) => void;
};

export const LangSelector = (props: LangSelectorProps): JSX.Element => {
  const { selectedLang, onSetLanguage } = props;
	return (
		<div className="lang_selector">
			{languages.map((l, idx) => (
				<span
					key={idx}
					className={classNames({ Selected: selectedLang === l })}
					onClick={() => onSetLanguage(l)}
				>
					{l.toUpperCase()}
				</span>
			))}
		</div>
	);
};
