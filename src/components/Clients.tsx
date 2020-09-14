import * as React from "react";
import { clients } from "../consts";

export const Clients = () => {
  console.log(clients[0].href);
	return (
		<div id="clients">
			<div className="bot-content">
				<div className="bot-header">Наши клиенты</div>
				<div className="bot-clients flex">
					{clients.map(
						(cl, xid) => <div key={xid} className={cl.className}/>
					)}
				</div>
			</div>
		</div>
	);
};
