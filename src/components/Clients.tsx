import React from "react";
import { clients } from "../consts";

export const Clients = () => {
	return (
		<div id="clients">
			<div className="bot-content">
				<div className="bot-header">Наши клиенты</div>
				<div className="bot-clients">
					<ul className="flex">
						{clients.map((cl) => (
							<li>
								<a
									key={cl.id}
									href={cl.href}
									className={cl.className}
									target="_blank"
									rel="noopener noreferrer"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
