import React from "react";

const History = React.memo(function History({histories,total, onClearHistories}){
    console.log("histories");
	return (
		<>
			<h2>Lịch sử</h2>
			{histories.map((item, index) => {
				return <h3 key={index}>{item}</h3>;
			})}
			<h2>Tổng: {total}</h2>
            <button onClick={onClearHistories}>Xóa lịch sử</button>
		</>
	);
});

export default History;
