import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from '@mui/icons-material/Search';
import makeStyles from '@mui/styles/makeStyles';
import { styled, alpha } from '@mui/material/styles';
import Posts from '../database/dis_board.json'

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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    margin: 20
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));

export default function Discussion(props) {
    const classes = useStyles();
    const [posts, setPosts] = React.useState({});
    const [open, setOpen] = React.useState(false);
    // Dialog stuff
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [comments, setComments] = React.useState("");
    const [user, setUser] = React.useState("");

    React.useEffect(() => {
        if(Object.keys(posts).length === 0) {
            setPosts(Posts);
        }
        console.log(posts)
    },[Posts])

    const numOfcomments = (post) =>{
        return Object.keys(posts[post]['comments']).length
    }

    const handleDialog = () => {
        setOpen(!open);
    }

    const setDialog = (post) => {
        setTitle(posts[post]['title']);
        setText(posts[post]['discussion']);
        setComments(posts[post]['comments']);
        setUser(posts[post]['user']);

        setOpen(true);
        console.log(comments);
    }

    return <Grid container spacing={.5}>
        <Grid item xl={2} lg={2} md={2} sm={1} xs={1} />
        <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>
            <Card className={classes.card}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>

                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    fullWidth
                    />
                </Search>
            </Card>
            {Object.keys(posts).map(post => 
                <Card className={classes.card} onClick={ ()=> { setDialog(post)}}>
                    <div className={classes.title}>
                        <Typography variant="h7">{posts[post]['user']}</Typography> 
                        <Box sx= {{ border: 1, p: 2, borderRadius: 1 }}>
                            <Typography variant="h4">{posts[post]['title']}</Typography>
                            <Divider />
                            <Typography variant="h7">{posts[post]['discussion']}</Typography>
                        </Box>
                        <Typography variant="h7" >{numOfcomments(post)} Comments</Typography> 
                        <div style={{ float:'right'}}>
                            <Button sx={{ my: .5, display: 'block' }} >
                                Open
                            </Button>
                        </div>
                    </div>
                </Card> 
                )
            }

            <Dialog
                open={open}
                onClose={handleDialog}
            >
                <DialogTitle sx={{ mb:-3}}>{user + ': '}</DialogTitle>
                <div className={classes.dialog}>
                       <Typography variant="h5">{title}</Typography>
                    
                    <div style={{ marginLeft:10}}>
                        <Typography variant="h7">{text}</Typography>
                    </div>
                </div>
                <Divider />
                <div style={{ marginLeft:30}}>
                    {Object.keys(comments).map(comment =>
                        <div style={{ margin:20}}>
                            <Box sx={{ fontWeight: 'bold' }}>{comments[comment]['user']}:</Box>
                            <Typography variant="h7">{comments[comment]['text']}</Typography> 
                        </div>)
                    }
                </div>
                    
            </Dialog>
        </Grid>
        <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'} />
    </Grid>
}