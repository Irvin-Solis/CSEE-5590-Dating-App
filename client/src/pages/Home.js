import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";

export default function Home(props) {

    return <Grid container>
        <Grid item xl={2} lg={2} md={2} sm={1} xs={1} />
        <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>
            <Card>
                <Typography variant="h2" gutterBottom>
                    ghriutgh
                </Typography>
            </Card>
        </Grid>
        <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'} />
    </Grid>
}