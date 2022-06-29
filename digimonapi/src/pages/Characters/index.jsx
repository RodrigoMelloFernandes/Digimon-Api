import React, { useEffect, useState } from "react";
import api from "../../services";

const Characters = () => {
    const [digimon, setDigimon] = useState([])
    useEffect(() => {
        api
        .get('/digimon')
        .then(response => {
            setDigimon(response.data);
            console.log('Segundo Log' , digimon);
        })
        .catch(err => console.log(err))
    } , [])

    return (
        <>
        
        <h1>Characters</h1>
        <ul>
            {
                digimon.map(character => {
                    return (
                        <li>
                            <span>{character.name}</span>
                            <img src={character.img} alt="" />
                            <span>{character.level}</span>

                        </li>
                    )
                })
            }
        </ul>
        </>
        
    )
}

export default Characters;