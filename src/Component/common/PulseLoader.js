import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';

class PulseLoader extends Component {
    state = {  }
    render() { 
        let classes=this.props.classes;
        return ( <div className={classes.pulse_loader} style={this.props.style && this.props.style}>

               </div> );
    }
}
const styles=theme=>({  
    '@keyframes pulse_loader': {
        "0% ":{
          opacity: "0",
          transform: "scale(0)"
        },
        "60%": {
          opacity: "1"
        },
        "100% ":{
          opacity: "0",
          transform: "scale(1)"
        }
      },
      pulse_loader:{
        animationName: "$pulse_loader",
        animationIterationCount: "infinite",
        boxShadow: "0 0 5px #6290D1",
        borderRadius: "50%",
        border: "3px solid #6290D1",
        content: '',
        display: "block",
        opacity: "0",
        position: "absolute",
        animationDuration: "1s",
        width:"50px",
        height:"50px",
      } 
    })
 
export default withStyles(styles) (PulseLoader);
