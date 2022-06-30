import React, { useEffect, useState } from "react";
import api from "../../../services";
import styles from './mega.module.scss'

const CharactersMega = () => {
    
    const [digimon, setDigimon] = useState([])

    const digimonMega = digimon
       .filter(function(obj){
        return obj.level==="Mega"
    });


    useEffect(() => {
        api
        .get('/digimon')
        .then(response => {
            setDigimon(response.data);
            
        })
        .catch(err => console.log(err))
    } , [])

    return (
        <>
        <h1 className={styles.digimonTitle}>Characters Level Mega</h1>
        <ul className={styles.digimon}>
            {
                digimonMega.map(character => {
                    return (
                        <li key={character.id}>
                            <div className={styles.digimon__card}>
                                <h2 className={styles.digimon__name}>{character.name}</h2>
                                <img className={styles.digimon__img} src={character.img} alt="" />
                                <p className={styles.digimon__level}>Level: {character.level}</p>
                            </div>
                        </li>
                    )
                })
            }    
        </ul>       
        
        </>
        
    )
}

export default CharactersMega;