import { Button, Card, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'


const Login = () => {
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}
  const row={display:"flex",marginTop:"1rem"}
  const btnstyle={marginTop:"1rem",fontSize:"0.5rem",fontWeight:"400",backgroundColor:"blue"}
  return (
    <div>
      <Grid align="center">
      <Paper style={paperStyle} sx={{width:{
        xs:"40vw",
        sm:"25vw",
        md:"20vw",
        lg:"15.5vw",
        xl:"15.5vw"
      },
      height:"60vh"}}>
  
           
      <Typography style={{heading}}>LOGIN PAGE </Typography>
      <form>
      <TextField sx={{label:{fontSize:"1rem",fontWeight:"550"}}}style={row} label='Username' variant='filled'></TextField><br></br><br></br>
        <TextField sx={{label:{fontSize:"1rem",fontWeight:"550"}}}style={row} label='Password' variant='filled'></TextField><br></br><br></br>
        <Button style={btnstyle} type='submit' variant='contained'>Clear All</Button> &nbsp;
        <Button style={btnstyle} type='submit'variant='contained'>Submit</Button>
      <br></br>
        <br></br><br></br><br></br><br></br>
        <Link to='/admin'>
        <Button variant='contained'>Admin Login</Button></Link>
      </form>
      </Paper>
   </Grid>
      
    </div>
  )
}

export default Login
