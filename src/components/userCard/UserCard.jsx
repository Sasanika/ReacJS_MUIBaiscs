import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";


export default function UserCard({userID, title, description}){
    return(
        <Card sx={{ maxWidth: 345, margin:1 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{backgroundColor:'#17617c', }} aria-label="recipe">
                        {userID}
                    </Avatar>
                }

                title={title}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>



        </Card>
    );
}