import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import History from "./History";
import { useCallback } from "react";
const MoneyTransfer = () => {
	const [histories, setHistories] = useState([]);
	const [money, setMoney] = useState("");
	const total = useMemo(() => {
		console.log("total");
		return histories.reduce((money, current) => +money + +current, 0);
	}, [histories]);

	const handleRemoveHistory = useCallback(() => {
		console.log(1);
		setHistories([]);
	}, []);

	return (
		<div>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					setHistories([...histories, money]);
					setMoney("");
				}}>
				<input
					type="number"
					placeholder="Nhập số tiền"
					onChange={(e) => setMoney(e.target.value)}
					value={money}
				/>
			</form>
            <History
                onClearHistories={handleRemoveHistory}
                histories={histories}
                total={total}
            />
		</div>
	);
};

export default MoneyTransfer;
