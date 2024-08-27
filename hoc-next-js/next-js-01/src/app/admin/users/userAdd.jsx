const UserAdd = ({mutate, data}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_API + "/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            e.target.reset();
            mutate();
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default UserAdd;
