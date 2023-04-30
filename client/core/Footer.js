import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'


const isActive = (history, path) => {
    if (history.location.pathname == path)
      return {color: '#f57c00'}
    else
      return {color: '#fffde7'}
  }

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    alignItems:'center',
    backgroundColor: '#616161',
    padding: '24px',
    fontSize: '16px',
    color: '#ffffff', 
    boxSizing: 'border-box',
    flexDirection: 'column',
    boxShadow: '2px 0px 4px -1px rgba(0,0,0,0.2), 4px 0px 5px 0px rgba(0,0,0,0.14), 1px 0px 10px 0px rgba(0,0,0,0.12)',
    
},
  company: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textUnderlineOffset:'5px',
    textDecorationColor:'#f57c00',
    textDecorationThickness:'2px'
  },
  link: {
    color:' #ffffff',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
        color: ' #f57c00',
    },
  },
}));

export default function Footer() {
    const classes = useStyles();
  
    return (
      <footer className={classes.footer} style={{zIndex:12343455}}>
        <Grid container spacing={4} alignItems="center" >
          <Grid item xs={12} md={3} lg={3} >
            <Typography variant="h6" className={classes.company} style={{width:'50%',boxShadow:'0.5px 0.5px 2px 2px #f57c00', fontSize:'25px', textDecorationLine:'none', boxSizing:'border-box', border:'3px solid white', textAlign:'center', borderRadius:'10px'}}>
              E-learning
            </Typography>
            <Typography variant="subtitle1"  style={{color:'#ffffff' , marginTop:'10px'}}>
              Address: 123 Main St, Anytown, XYZ
            </Typography>
            <Typography variant="subtitle1" style={{color:'#ffffff'}}>
              Phone: +1 (555) 555-5555
            </Typography>
            <Typography variant="subtitle1"  style={{color:'#ffffff'}}>
              Email: info@companyname.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant="h6" className={classes.company}>
              Quick Links
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/"  className={classes.link}>
                 <span>&#8250;</span> Home
               </Link>
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/about"  className={classes.link}>
                 <span>&#8250;</span> About Us
                </Link>
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/" className={classes.link}>
                 <span>&#8250;</span> Courses
                </Link>
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/contact" className={classes.link}>
                 <span>&#8250;</span> Contact Us
                </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant="h6" className={classes.company}>
              Others
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/" className={classes.link}>
                 <span>&#8250;</span> Help & Support</Link>
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/signup" className={classes.link}>
                 <span>&#8250;</span> Sign Up</Link>
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/signin"  className={classes.link}>
                 <span>&#8250;</span> Sign In</Link>
            </Typography>
            <Typography variant="subtitle1" >
              <Link to="/" className={classes.link}>
                 <span>&#8250;</span> FAQ</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant="h6" className={classes.company}>
              Social Media
            </Typography>
            <IconButton aria-label="YouTube"  className={classes.link}>
                 
              <YouTubeIcon />
            </IconButton>
            <IconButton aria-label="Facebook" className={classes.link}>
                 
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter"  className={classes.link}>
                 
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn"   className={classes.link}>
                 
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Instagram" className={classes.link}>
                 
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </footer>
    );
  }