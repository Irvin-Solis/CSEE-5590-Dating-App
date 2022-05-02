import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExploreIcon from '@mui/icons-material/Explore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AccountMenu } from './Componenets/UI/Organisms/AccountMenu/AccountMenu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar({LogOut, ...props}) {
  const classes = useStyles();
  const history = useHistory();
  const [user] = useGlobal('User');

  const changeTheme = () => {
    props.handleTheme();
  }
  const redirect = (link)=>{
    history.push(link);
  }
  const logOut = ()=>{
    console.log("Pressed")
  }
  return (
      <AppBar position="static" >
        <Toolbar>

          <Typography href="/" variant="h6" className={classes.title}>
            Just Scout <ExploreIcon />
          </Typography>
          {props.darkState ? <Brightness7Icon onClick={changeTheme} /> : <Brightness4Icon onClick={changeTheme} />}

          <div>
            <NotificationMenu {...props} />
          </div>
          <AccountMenu SettingsList={SettingsList} loggedIn={user !== null} redirect={redirect} redirectLogOut={logOut} />

        </Toolbar>
      </AppBar>
  );
}