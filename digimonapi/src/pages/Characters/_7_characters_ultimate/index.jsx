import React, { useEffect, useState } from "react";
import api from "../../../services";
import styles from './ultimate.module.scss'

const CharactersUltimate = () => {
    
    const [digimon, setDigimon] = useState([])

    const digimonUltimate = digimon
       .filter(function(obj){
        return obj.level==="Ultimate"
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
        <h1 className={styles.digimonTitle}>Characters Level Ultimate</h1>
        <ul className={styles.digimon}>
            {
                digimonUltimate.map(character => {
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

export default CharactersUltimate;