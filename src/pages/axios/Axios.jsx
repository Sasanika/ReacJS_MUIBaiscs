import axios from "axios";
import Button from "@mui/material/Button";
import * as React from "react";


export default function Axios(){

    function getAllData(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
          //  .finally(function () {
                // always executed
          //  });
    }

    function getUserById(){
        axios.get('https://jsonplaceholder.typicode.com/posts/80')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    function postData(){
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        },{
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function updateData(){
        axios.put('https://jsonplaceholder.typicode.com/posts/2', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function deleteData(){

        axios.delete('https://jsonplaceholder.typicode.com/posts/1', )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div>
            <h1>Axios</h1>
            <Button
                sx = {{margin:5}}
                onClick={()=>getAllData()}
                variant="contained">Get All Data</Button>

            <Button
                sx = {{margin:5}}
                onClick={()=>getUserById()}
                variant="contained">Get User By ID</Button>

            <Button
                sx = {{margin:5}}
                onClick={()=>postData()}
                variant="contained">Post Data</Button>

            <Button
                sx = {{margin:5}}
                onClick={()=>updateData()}
                variant="contained">Update Data</Button>

            <Button
                sx = {{margin:5}}
                onClick={()=>deleteData()}
                variant="contained">Delete Data</Button>
        </div>
    );
}