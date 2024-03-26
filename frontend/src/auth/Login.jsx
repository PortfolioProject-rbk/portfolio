import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const defaultTheme = createTheme();

export default function SignInSide() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { id } = useParams();
  const navigate = useNavigate()

  const sendsms = ()=>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App d1042f2ad1f68a7b808591ac06fd727a-d315c77c-431c-4099-bc6c-e283a9ef4d6a");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    
    const raw = JSON.stringify({
        "messages": [
            {
                "destinations": [{"to":"21694289822"}],
                "from": "ProPlex",
                "text": `Hello ${username}, you have successfuly logged in `
            }
        ]
    });
    
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("https://1vnzkn.api.infobip.com/sms/2/text/advanced", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}


  const login = async (username, password) => {
    console.log(username, password);
    try {
      const result = await axios.post("http://localhost:3000/api/users/signin", {
        username: username,
        password: password
      })
      
      const token = result.data.token
      const id = result.data.payload.userId
      localStorage.setItem("token", token)
      localStorage.setItem("userId", id)
      sendsms()
     

      const Portfolio = await axios.get(`http://localhost:3000/api/portfolio/user/${id}`)
      // to get the profile  of an user 
      
      
      
      if (!Portfolio.data) {                /// if the user has no profile he needs to  create a profile 
        navigate("/wizard")
      }
      else if (Portfolio.data) {               /// if  the user has a profile he will be directed to it 
        navigate("/profile")
      }
    } catch (error) {
       alert("check your information and try again")
      console.log(error)

    }
  }

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
            Sign in 
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
                login(username,password)}
                
              }
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                <h3 className='hover' onClick={()=>{navigate("/register ")}} >Don't have an acoount ? Sign up</h3>  
                
              </Grid>
            </Grid>
          </Box>
        
        
      </Container>
    </ThemeProvider>
  );
}