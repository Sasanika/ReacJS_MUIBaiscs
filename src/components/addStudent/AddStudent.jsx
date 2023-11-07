import Card from "@mui/material/Card";
import {Button, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useState} from "react";


export default function AddStudent({saveStudentData}){

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const [nic,setNIC] = useState('');

    const saveStudent= ()=> {
        if(name!=='' && address!=='' && age!=='' && nic!==''){
            saveStudentData({name: name, age: age, address: address, nic: nic})
            setName('');
            setAge('');
            setAddress('');
            setNIC('');
        }else{
            alert('Input cannot empty !')
        }

    }

    return(
            <Card sx={{ maxWidth: 345 , margin:2,borderRadius:8}}>

                    <CardContent>
                        <Typography sx={{textAlign:'center'}} gutterBottom variant="h5" component="div">
                            Add Student
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                onChange={(val)=>setName(val.target.value)}
                                value={name}
                                margin={'dense'}
                                fullWidth={true}
                                id="name"
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(val)=>setAge(val.target.value)}
                                value={age}
                                margin={'dense'}
                                fullWidth={true}
                                id="age"
                                label="Age"
                                variant="outlined"

                            />

                            <TextField
                                onChange={(val)=>setAddress(val.target.value)}
                                value={address}
                                margin={'dense'}
                                fullWidth={true}
                                id="address"
                                label="Address"
                                variant="outlined"

                            />

                            <TextField
                                onChange={(val)=>setNIC(val.target.value)}
                                value={nic}
                                margin={'dense'}
                                fullWidth={true}
                                id="nic"
                                label="NIC"
                                variant="outlined"

                            />


                        </Box>
                    </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'end'}}>
                    <Button
                        onClick={()=>saveStudent()}
                        variant="contained">
                        Save Student
                    </Button>

                </CardActions>

            </Card>
    );
}