import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    search: {
        margin: 20,
        width: '90%'
    },
    card: {
      marginBottom: 20,
    },
    title: {
        marginTop:25,
        marginLeft: 25,
        marginRight: 25
    },
    dialog: {
        margin: 20,
        
    }
  }));

  export default function Signin() {
    const classes = useStyles();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }


    let navigate = useNavigate(); 
    const handleSubmit = (event) => {
        console.log(inputs);
        event.preventDefault();
        console.log("correct password")
        window.localStorage.setItem("user", inputs.email);
        window.localStorage.setItem('loggedin', true);
        console.log(localStorage.getItem('loggedin'))
        navigate('/Discussion');    
      }

    return(
        <Grid container spacing={.5}>
        <Grid item xl={2} lg={2} md={2} sm={1} xs={1} />
        <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>
            <Card>
            <div class="container-fluid" className={classes.title}>
                <h1 class="mt-5">Log in</h1>
                <form onSubmit={handleSubmit}> 
                    <div class="form-group">
                        <div class="form-group col-lg-6 col-lg-offset-3 input-group" >
                            <label>Email </label>
                            </div>
                            <div class="form-group col-lg-6 col-lg-offset-3 input-group" >
                            <input  class="form-control" type="text" name="email" value={inputs.email || ""}  onChange={handleChange}/>
                            <span class="input-group-addon">-</span>
                            </div>
                            <div class="form-group col-lg-6 col-lg-offset-3 input-group">
                            <label>Password </label>
                            </div>
                            <div class="form-group col-lg-6 col-lg-offset-3 input-group">
                            <input  class="form-control"  type="text" name="password" value={inputs.password || ""}  onChange={handleChange}/>
                            <span class="input-group-addon">-</span>
                        </div>
                        <div class="form-group col-lg-6 col-lg-offset-3 input-group">
                        <p></p>
                        </div>
                        <Button sx={{ mb:2 }} color="primary" variant="outlined" type="submit">Log in</Button>
                    </div>
                </form>
            </div>
           </Card>
           </Grid>
        <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'} />
        </Grid>
    );
}
