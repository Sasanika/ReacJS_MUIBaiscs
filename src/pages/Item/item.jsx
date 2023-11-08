
import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import UserCard from "../../components/userCard/UserCard.jsx";
import Box from "@mui/material/Box";
import instance from "../../services/AxiosOrder.jsx";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Item() {

    const [data,setData]= useState([]);
    const [open, setOpen] = React.useState(false);
    const [loader, setLoader] = useState(false);
    const [id,setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        setLoader(true);
        getAllData();
    }, []);
    function getAllData(){
        instance.get('/posts')
            .then(function (response) {
                setData(response.data);
                setLoader(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function saveData(){
        const data = {
            title:title,
            body:body,
            userId:id,
        }

        instance.post('/posts',data)
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Box sx={{display:'flex',justifyContent:'end'}}>
                <Button
                    sx = {{margin:5}}
                    onClick={()=>setOpen(true)}
                    variant="contained">Add Data</Button>
            </Box>

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

            <Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Data</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={id}
                            onChange={(val)=>{
                                setId(val.target.value)}}
                            autoFocus
                            margin="dense"
                            id="id"
                            label="User Id"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            value={title}
                            onChange={(val)=>{
                                setTitle(val.target.value)}}
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            value={body}
                            onChange={(val)=>{
                                setBody(val.target.value)}}
                            autoFocus
                            margin="dense"
                            id="body"
                            label="body"
                            type="Body"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained">Cancel</Button>
                        <Button onClick={()=>saveData()} variant="contained">Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>

        </div>
    );
}
