import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{flexGrow:1}}>
                    <Button color='inherit' variant='contained'><Link to={'/add'}>ADD VLOG</Link></Button>
                    <Button color='inherit' variant='contained'><Link to={'/view'}>VIEW VLOG</Link></Button>
                     <Button color='inherit' variant='contained'><Link to={'/'}>EXIT</Link></Button>
                </Typography>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
