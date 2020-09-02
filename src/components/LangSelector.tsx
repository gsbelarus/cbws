import * as React from "react";

import { Language, languages } from "../consts";
import { useState } from "react";
import classNames from "classnames";

export type LangSelectorProps = {
  selectedLang: Language;
  onSetLanguage: (lang: Language) => void;
};

export const LangSelector = (props: LangSelectorProps): JSX.Element => {
  const { selectedLang, onSetLanguage } = props;
	return (
		<div className="lang-selector">
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
