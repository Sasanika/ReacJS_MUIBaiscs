
import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import UserCard from "../../components/userCard/UserCard.jsx";
import Box from "@mui/material/Box";


export default function Item() {

    const [data,setData]= useState([]);

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        getAllData();
    }, []);
    function getAllData(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setData(response.data);
                setLoader(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div>
            {loader ?
            <Box sx={{display:'flex',justifyContent:"center"}}>
            <h1>Loading</h1>
            </Box>
            :

            <Box sx={{display:'flex',flexWrap:'wrap'}}>
                {data.map((val,index)=>(
                    <UserCard key={index} userID={val.id} title={val.title} description={val.body}/>

                ))}
                </Box>
            }

        </div>
    );
}
