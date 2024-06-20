const getCountries = async () => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/countries");
        const data = await response.json();
        return data;
    } catch (e) {
        return [];
    }
};
const SelectCountry = async () => {
    const { data: countries } = await getCountries();
    return (
        <select className="w-full bg-[transparent] rounded-md p-[10px] outline-none text-[var(--text)]">
            <option value="" className="text-[var(--text)] bg-[var(--box)]">
                -- Chọn quốc gia --
            </option>
            {countries &&
                countries.map(({ id, name }) => (
                    <option key={id} value={id} className="text-[var(--text)] bg-[var(--box)]">
                        {name}
                    </option>
                ))}
        </select>
    );
};

export default SelectCountry;
