import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { brown } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
            <AppBar position='static'>
              <Toolbar  >
              <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1}}>Welcome</Typography>
              <Link to='/'>
                      <Button variant='contained'>Home</Button></Link>&nbsp;
                      <Link to='/signin'>
                      <Button variant='contained'>Sign In</Button></Link>&nbsp;
                      <Link to='/login'>
                      <Button variant='contained'>Log In</Button></Link>&nbsp;
              </Toolbar>
          </AppBar>

    </div>
  )
}

export default Nav
