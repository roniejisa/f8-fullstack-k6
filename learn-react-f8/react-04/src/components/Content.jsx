import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Reset from "./Reset";

const Content = () => {
    const [histories, setHistories] = useState([]);
    const [amount, setAmount] = useState(0);
    const handleAdd = (e) => {
        e.preventDefault();
        setHistories([...histories, +amount]);
        setAmount(0);
        e.target.amount.focus();
    };

    const total = useMemo(() => {
        return histories.reduce((prev, current) => prev + +current, 0);
    }, [histories]);

    console.log("re-render");

    const handleClear = useCallback(() => {
        setHistories([]);
    },[]);

    

    return (
        <div>
            <h1>Giao dịch: {total}</h1>
            <form action="" onSubmit={handleAdd}>
                <input
                    required
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    name="amount"
                    placeholder="Nhập số tiền"
                />
                <button>Add</button>
                <hr />
                <Reset onClick={handleClear} />
                {histories.map((history, index) => (
                    <h4 key={index}>{history}</h4>
                ))}
            </form>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Content);
