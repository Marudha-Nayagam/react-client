import React from 'react';
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { API } from './global';



export async function AddTodo() {
    const tData = {
        title : "" ,
        description: ""
    }
    const [ data, setData ] = useState("");

    const handleClick =  async (e) => {
        e.preventDefault();
        try {
            const res = await fetch (`${API}/todo`,{
                method: "POST",
                headers:{"content-type":"application/json"},
                body : JSON.stringify(data)
            });
            const output  = await res.json();
            setData(output);
            console.log(output);
        } catch (err) {
            console.log("Error uploading data", err);
        }
    }

  return (
    <div>
      <Container maxWidth="sm" className="todo "> 
        
        <h1>Todo Application</h1>
        <h3>Title :</h3>
        <TextField 
        id="outlined-basic" 
        label="Title" 
        variant="outlined" 
        style={{width: '100%'}}
        />
        <h3>Description :</h3>
        <TextField 
        id="outlined-basic" 
        label="Description" 
        variant="outlined" 
        style={{width: '100%'}}
        />
        <Button 
        variant="contained" 
        color="primary" 
        className='btn'
        onClick={handleClick}
        >Save</Button>
          
      </Container>
    </div>
  )
}

