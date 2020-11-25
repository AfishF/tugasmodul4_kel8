import React, { useState, useCallback } from 'react';
import Count from './Count';
import Tombol from './Tombol';
import Judul from './Judul';

function Callback() {
    const [kelompok, setKelompok] = useState(0)
    const [gaji, setGaji] = useState(100000)

    const incrementKelompok = useCallback(() => {
        setKelompok(kelompok + 1)
    }, [kelompok])

    const incrementGaji = useCallback(() => {
        setGaji(gaji + 50000)
    }, [gaji])

    return (
        <div className="Main">
            <Judul />
            <Count text="Kelompok" count={kelompok} />
            <Tombol handleClick={incrementKelompok}>Increment Kelompok</Tombol>
            <br />
            <Count text="Gaji" count={gaji} />
            <Tombol handleClick={incrementGaji}>Increment Gaji</Tombol>
        </div>
    )
}

export default Callback;