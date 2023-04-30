import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 500,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(10),
      paddingBottom: theme.spacing(0.5)
    },
    title: {
      fontSize:'25px',
      fontWeight:'600',
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle
    },
   
      formStyle: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        fontSize: '16px',
      },
      inputArea: {
        marginTop:'7px',
        width: '90%',
        height: '20px',
        padding: '7px',
        outline: 'none',
        borderRadius: '5px',
        border: '1px solid rgb(220, 220, 220)',
        '&:focus': {
          border: '2px solid rgba(0, 206, 158, 1)',
        },
      },
      textareaStyle: {
        maxWidth: '90%',
        minWidth: '60%',
        width: '90%',
        maxHeight: '100px',
        minHeight: '100px',
        padding: '7px',
        outline: 'none',
        borderRadius: '10px',
        border: '1px solid rgb(220, 220, 220)',
        '&:focus': {
          border: '2px solid rgba(0, 206, 158, 1)',
        },
      },
      labelStyle: {
        marginTop: '1rem',
      },
      submitBtn: {
        marginTop: '1rem',
        cursor: 'pointer',
        background: 'rgb(249, 105, 14)',
        color: 'white',
        border: 'none',
        width:'50%',
        height:'30px',
        fontWeight:'600',
        fontSize:'16px',
        borderRadius: '5px',
        border: '1px solid rgb(220, 220, 220)',
        margin: 'auto',
        marginBottom: theme.spacing(1)
      },
}))

function ContactUs() {
    const classes = useStyles()
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_igj8zpv",
        "template_lvuvzzy",
        form.current,
        "XmMxFC8kfp2wdckYZ",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent!!");

          
        },
        (error) => {
          console.log(error.text);
          alert("something is wrong!!");
        }
      );
      e.target.reset()
  };

  return (
    <Card className={classes.card}>
        
          <Typography variant="h6" className={classes.title}>
            Contact Us
          </Typography>
          <CardContent>
        <form ref={form} onSubmit={sendEmail} className={classes.formStyle}>

        <label className={classes.labelStyle} >Name :</label>
        
        <input type="text" name="user_name" required className={classes.inputArea}/>
        <label className={classes.labelStyle}>Email :</label>
        <input type="email" name="user_email" required className={classes.inputArea}/>
        
        <label className={classes.labelStyle}>Subject :</label>
        <input type="text" name="subject" required className={classes.inputArea}/>

        <label className={classes.labelStyle}>Message :</label>
        <textarea name="message" className={classes.textareaStyle} />       
        
        <input type="submit" value="Send"  className={classes.submitBtn} />
        
         </form>
        </CardContent>
    </Card>
  )
}

export default ContactUs


