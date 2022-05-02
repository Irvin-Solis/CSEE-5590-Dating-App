import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate();

    return <Grid container>
        <Grid item xl={2} lg={2} md={2} sm={1} xs={1} />
        <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>
            <Card>
                <div style={{ margin: 20}}>
                    <Typography variant="h3" gutterBottom>
                        UMKC Community.
                    </Typography>
                    <div style={{ textAlign: "center"}}>
                        <Typography variant="h4" gutterBottom>
                            Ask, Play, Join
                        </Typography> 
                    </div>
                    
                </div>

            </Card>
            <div style={{ float:"right"}}>
                <Button sx={{ my: 3, display: 'block' }} variant="outlined" onClick={ ()=>{navigate('/Signin')}}>
                    Sign Up
                </Button>
            </div>
            
        </Grid>
        <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'} />
    </Grid>
}