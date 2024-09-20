import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      
            <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <Typography>
        <h1>Welcome to Sign in page !!!!</h1>
        <TextField label='Full Name' variant='filled'></TextField><br></br><br></br>
        <TextField label='Email' variant='filled'></TextField><br></br><br></br>
        <TextField label='Phone Number' variant='filled'></TextField><br></br><br></br>
        <TextField label='Password' variant='filled'></TextField><br></br><br></br>
        <FormControl>
      <FormLabel id="">Occupation</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="None"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Student" control={<Radio />} label="Student" />
        <FormControlLabel value="Recruiter" control={<Radio />} label="Recruiter" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <br></br><br></br>
    <Button variant='contained'>Clear All</Button> &nbsp;
    <Link to='/login'>
        <Button variant='contained'>Submit</Button></Link><br></br>
        </Typography>
        </Box>
    </div>
  )
}

export default Signin
