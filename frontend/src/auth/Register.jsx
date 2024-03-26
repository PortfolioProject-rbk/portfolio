import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';







const defaultTheme = createTheme();

export default function SignUp() {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  console.log(username,password)

 const navigate  = useNavigate()


  const create = (username,password)=>{
    axios.post("http://localhost:3000/api/users/signup",{
      username:username,
      password:password
    }).then((result)=>{
      console.log(result)
      navigate("/login")
    }).catch((error)=>{
      console.log(error)
    })
  }

  ;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
         
            <Grid container spacing={2}>
             
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="User Name "
                  onChange={(e)=>setUsername(e.target.value)}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
           
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={()=>{
                create(username,password)}
                
              }
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                <h3 className='hover' onClick={()=>{navigate("/login")}} >Already have an account? Sign in</h3>  
                
              </Grid>
            </Grid>
          </Box>
        
        
      </Container>
    </ThemeProvider>
  );
        }
      
