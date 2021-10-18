import React,{useEffect,useState} from 'react';
import axios from 'axios';

function Section({setdata}) {

        const getInputValue = (e) => {
            axios.get(`https://www.breakingbadapi.com/api/characters?name=${e.target.value}`)
            .then(fac => {
            setdata(fac.data);
            })
            .catch(err => {
            console.log(err);
            })
        }

    return (
        <div className="form">
            <form>
                <input 
                   type="text" 
                   name="caracter" 
                   onChange={getInputValue}
                   />
            </form>
        </div>
    )
}

export default Section
