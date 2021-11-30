import React, { useEffect, useState } from 'react'
import TierCards from './TierCards';

function Main() {

    const [animals,setAnimals] = useState([]);

    async function getAnimals(){

        const animals = await fetch("./Animals.json");

        const animalsArray = await animals.json();

        setAnimals(animalsArray);
    }

    useEffect(()=>{

        getAnimals();
    },[])




   

    return (
        <div style={{minHeight:"90vh"}} className = "d-flex flex-wrap justify-content-center">
            

           
             {
                 animals.map((animal,index)=>{
                    return (

                     <TierCards
                         key = {index}
                         name = {animal.name}
                         content = {animal.content}
                         image = {animal.image}
                         adress = {animal.adress}

                     />
                    )
                 })
             }

           

        </div>
    )
}

export default Main
