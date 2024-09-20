import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navuser = () => {
  return (
    <div>
            <AppBar position='static'>
              <Toolbar >
              <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1}}>Welcome</Typography>
              <Link to='/userdash'>
                      <Button variant='contained'>HOME</Button></Link>&nbsp;
             <Link to='/browser'>
                      <Button variant='contained'>BROWSER JOBS</Button></Link>&nbsp;
             <Link to='/viewappjob'>
                      <Button variant='contained'>VIEW APPLIED JOBS</Button></Link>&nbsp; 
            <Link to='/updateprof'>
                      <Button variant='contained'>UPDATE PROFILE</Button></Link>&nbsp;              
                    
              </Toolbar>
          </AppBar>
      
    </div>
  )
}

export default Navuser
