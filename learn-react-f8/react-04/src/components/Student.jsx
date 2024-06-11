import { startTransition, useState, useTransition } from "react";
import students from "../assets/db.json";
import styled from "styled-components";
const Student = () => {
    const [name, setName] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSearch = (value) => {
        if (name.length === 0) return value;
        let position = value.toLowerCase().indexOf(name.toLowerCase());
        if (position < 0) return value;
        let content =
            value.slice(0, position) +
            "<span style='background: yellow'>" +
            value.slice(position, position + name.length) +
            "</span>" +
            value.slice(position + name.length);
        return content;
    };

    const setKeyword = (e) => {
        startTransition(() => {
            setName(e.target.value);
        });
    };
    return (
        <div>
            <input type="search" placeholder="Từ khóa" onChange={(e) => setKeyword(e)} />
            <div>
                {isPending && <p>Loading...</p>}
                {students.map((student) => (
                    <div key={student.id}>

                        <h3 dangerouslySetInnerHTML={{ __html: handleSearch(student.fullName) }}></h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Student;
