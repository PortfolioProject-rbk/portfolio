import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
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

      const Portfolio = await axios.get(`http://localhost:3000/api/portfolio/user/${id}`)
      // to get the profile  of an user 
      if (!Portfolio.data) {                /// if the user has no profile he needs to  create a profile 
        navigate("/wizard")
      }
      else if (Portfolio.data) {               /// if  the user has a profile he will be directed to it 
        navigate("/OneCard/" + Portfolio.data.id, { state: { data: Portfolio.data } })
      }
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images-ext-1.discordapp.net/external/xW3YsAffsq79kgwgIfNuKRV8BFOi_7uF4h3LDuwzS2o/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1807355941.1705010241%26semt%3Dais/https/img.freepik.com/free-vector/polygon-lines-background_1035-7063.jpg?format=webp&width=660&height=662)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={(e) => setUsername(e.target.value)}
                label="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}

              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => { login(username, password) }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid  item>
                  
                      <h3 className='hover'  onClick={()=>navigate("/register")}>Don't have an account? Sign Up</h3> 
                 
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}