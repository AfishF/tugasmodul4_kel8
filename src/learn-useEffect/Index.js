import React, { useState, useEffect } from "react";
import "./Index.css";

export default function Index() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    //dijalankan 1 kali
    useEffect(() => {
        fetch("https://backendcatatantugas.herokuapp.com/mahasiswa/all")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //dijalankan trus setiap ada perubahan count
    useEffect(() => {
        if (count > 0) {
            alert(`component will update & count ${count}`);
        }
    }, [count]);

    //dijalankan terus menerus
    useEffect(() => {
        console.log('spam console kuy');
    });

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    return (
        <div className="Main">
            <p className="Text">Learn useEffect</p>
            <p>Kelompok 8</p>
            <ul>
                {data.slice(0, 15).map((value) => (
                    <li key={value.id}>{value.nama}</li>
                ))}
            </ul>

            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>
        </div>
    );
}