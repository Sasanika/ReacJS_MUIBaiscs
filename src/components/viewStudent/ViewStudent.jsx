import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Button, CardActions} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete.js";
import Card from "@mui/material/Card";
import * as React from "react";


export default function ViewStudent({data,index,deleteStudent}){
    console.log(data);
    return(
        <Card sx={{ maxWidth: 345 , margin:2,borderRadius:8}}>

            <CardContent>
                <Typography sx={{textAlign:'center', fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                    View Student
                </Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h6" gutterBottom>
                        Name : {data.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Age : {data.age}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Address : {data.address}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        NIC : {data.nic}
                    </Typography>


                </Box>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'end'}}>
                <Button onClick={()=>deleteStudent(index)} variant="outlined" color={'error'}>
                    <DeleteIcon />
                </Button>


            </CardActions>

        </Card>
    );
}