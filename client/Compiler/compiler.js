import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
      marginTop: theme.spacing(6.6),
      paddingBottom: theme.spacing(2),
      width:"100%"
    },
}))
function compiler() {
     const classes = useStyles()
  return (
     <div className={classes.card}>
            <iframe src="https://mahak-23.github.io/code-compiler-editor/" 
                   title="Embedded Website"   
                   style={{width:"100%", height:"100%", border: 'none',}} >
                
            </iframe>
    </div>
  )
}

export default compiler
