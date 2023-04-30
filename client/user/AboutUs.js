import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '90%',
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(11),
        paddingBottom: theme.spacing(2)
      },
    title: {
      fontSize:'35px',
      fontWeight:'600',
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle,
    },
}
))

function AboutUs() {
    const classes = useStyles()

  return (
    <Card className={classes.card}>
         <CardContent>
          <Typography variant="h1" className={classes.title}>
           About Us
           </Typography>

           <h1>We share knowledge with the world</h1>
           <h2>Improving lives through learning</h2>

           <p>
           Whether you want to learn or to share what you know, you’ve come to the right place
           As a global destination for online learning, we connect people through knowledge.</p>
           <p>
             Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
             blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
             volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
              molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.
           </p>
           <p>
             Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
             blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
             volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
              molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.
           </p>
           <p>
             Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
             blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
             volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
              molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.
           </p>
          
           <p>
             Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
             blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
             volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
              molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.
           </p>
           </CardContent>
    </Card>
  )

}

export default AboutUs

