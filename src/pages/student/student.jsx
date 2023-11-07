import Box from "@mui/material/Box";
import * as React from "react";
import AddStudent from "../../components/addStudent/AddStudent.jsx";
import ViewStudent from "../../components/viewStudent/ViewStudent.jsx";
import {useState} from "react";

export default function Student(){

    const [data, setData]= useState([]);

    const studentDataSave = (value)=>{
        const arr = [...data];
        arr.push(value);
        setData(arr)
    }
    const deleteStudent = (nic)=>{
        const arr = [...data];
        arr.splice(nic,1)
        setData(arr)
    }
    return(
        <div>
            <Box sx={{marginBottom:2,backgroundColor:'#ccd9ee',borderRadius:3, display:'flex',justifyContent:'center'}}>
               <AddStudent saveStudentData={(val)=>studentDataSave(val)}/>
            </Box>

            <Box sx={{backgroundColor:'#ccd9ee', display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                {data.map((val,index)=>(
                    <ViewStudent index={index} data={val} key={index} deleteStudent={(val)=>deleteStudent(val)}/>
                ))}




            </Box>


        </div>
    );
}