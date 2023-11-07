import {Button, CardActionArea, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import * as React from "react";
import {useState} from "react";


export default function Login(){

    var uName = 'sasa@23';
    var pword = 'sasa@23';

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const loginAction= ()=>{
        if (username===uName && password===pword){
            alert("Login Success")
        }else{
            alert("Login fail")
        }
    }

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>

                <CardContent>
                    <Typography sx={{textAlign:'center'}} gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            onChange={(val)=>{setUserName(val.target.value)}}
                            value={username}
                            margin={'dense'}
                            fullWidth={true}
                            id="username"
                            label="Username"
                            variant="outlined"
                        />
                        <TextField
                            onChange={(val)=>{setPassword(val.target.value)}}
                            value={password}
                            margin={'dense'}
                            fullWidth={true}
                            id="password"
                            label="Password"
                            variant="outlined"
                            type={'password'}
                        />


                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display:'flex', justifyContent:'end'}}>
                <Button
                    onClick={()=>loginAction()}
                    variant="contained">
                    Login
                </Button>

            </CardActions>

        </Card>
    );
}