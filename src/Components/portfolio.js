import React from 'react'
import {useState, useEffect} from "react";

export default function Portfolio() {
    const [name, setName] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Fanniepersson/repos')
        .then(res => res.json())
        .then(data =>{
            setName((prevname)=>[
                ...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].html_url
                },
                {
                    name: data[3].name,
                    description: data[3].description,
                    html_url: data[3].html_url
                }
            ]);
        });    
    },[]);

    return (
        <div>
            <h1>My Portfolio</h1>
            <main>
            <h2>My Github Projects</h2>
            {name.map((names)=>(
                <>
                <h3>
                    {names.name}
                </h3>
                <p>{names.description}</p>
                <p><a href={names.html_url}>{names.html_url}</a></p>
                </>
            ))
            

            }
        </main>
        </div>
    )
}