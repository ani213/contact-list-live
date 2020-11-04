import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { handleAddContactForm, addContact, clearError, clearSuccess } from './contactState';
import { connect } from 'react-redux';
const Auto_clear_interval=6;
class AddContact extends Component {
    state = { 
        details:{},
     }

    handleCancle=()=>{
        this.props.handleAddContactForm(false)
    }
  handleSave=()=>{
    this.props.addContact(this.state.details)
    if(this.props.store.success){
        this.props.handleAddContactForm(false)
    }
  }
  handleOnchange=(e)=>{
    //   console.log(e.target.name,e.target.value)
      this.setState({
          details:{...this.state.details,[e.target.name]:e.target.value}
      })
  }
  AutoclearError=()=>{
      if(this.props.store.error){
         this.props.clearError()
      }
  }
  _Auto_clear_success=()=>{
   if(this.props.store.success)
   {
       this.props.clearSuccess()
       this.props.handleAddContactForm(false)

   }
  }
componentDidMount(){
    setInterval( this.AutoclearError, (Auto_clear_interval*1000));
    setInterval(this._Auto_clear_success,1)
}

    render() { 
        let classes=this.props.classes;
        console.log(this.props.store.error,"add")
        return ( 
                  <div className={classes.relative}>
                  <div className={classes.mainContainer}>
                  <div className={classes.formContainer}>
                 <div className={classes.form}>
                     <div className={classes.closeIcon}>
                         <IconButton onClick={this.handleCancle}><CloseIcon/></IconButton>
                     </div>
                  <form onSubmit={this.handleSave}>
                   <div className={classes.content}>  
                      <label className={classes.font}>Name<span className={classes.fontColor}>*</span></label>  
                      <input type="text" 
                      className={`form-control`} 
                      name="firstName"
                      placeholder="Name" 
                      onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.content}>
                   <label className={classes.font}>Last Name <span className={classes.fontColor}>*</span></label>
                   <input type="text" 
                   className={`form-control`} 
                   name="lastName"
                   placeholder="Last Name" 
                   onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.content}>
                    <label className={classes.font}>Email<span className={classes.fontColor}>*</span></label>
                   <input type="email" 
                   className={`form-control`} 
                   placeholder="Email" 
                   name="email"
                   onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.content}>
                    <label className={classes.font}>Phone <span className={classes.fontColor}>*</span></label>
                   <input type="number" 
                   className={`form-control`} 
                   placeholder="Phone" 
                   name="phone"
                   onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.buttonContainer}>
                       { this.props.store.error && <p className={classes.fontColor}>{this.props.store.error} </p>}
                       <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                   </div>
                   </form>
                   </div>
                  </div>
                </div> 
                </div>);
    }
}
const styles=theme=>({
    relative:{
        position:"relative",
    },
    mainContainer:{
    position:"absolute",
    borderWidth:"19px",
    content: " ",
    borderStyle:"solid",
    borderColor:'#39ac73 transparent transparent transparent',
    left:"33px",
    width:"20px",
    },
    '@keyframes pulse_loader': {
        "0% ":{
         width:"300px",
         height:"0px",
        },
        "100% ":{
            width:"300px",
            height:"450px",
        }
      },
      '@keyframes for_content': {
        "0% ":{
         width:"60%",
         height:"60%",
        },
        "100% ":{
            width:"100%",
            height:"100%",
        }
      },

    formContainer:{
       position:"absolute",
       top:"0px",
       left:"-150px",
       zIndex:"999",
    },
    form:{
        paddingTop:"20px",
        width:"300px",
        height:"450px",
        background:"#39ac73",
        // background:"#3c9681",
        borderRadius:"30px",
        boxShadow: "-20px 25px 6px 3px darkslategrey",
        animationName: "$pulse_loader",
        animationIterationCount: "1",
        animationDuration: "1s",
    },
    closeIcon:{
        position:"absolute",
        top:"0px",
        right:"5px",
    },
    content:{
     padding:"0px 15px 15px 15px",
     animationName: "$for_content",
     animationIterationCount: "1",
     animationDuration: "1s",
     

    },
    font:{
        fontWeight:"bold"
    },
    fontColor:{
        color:"red"
    },
    buttonContainer:{
        textAlign:"center"
    },
})
const mapStateToProps=(state)=>{
    return {
        store:state.contacts
    }
}
const mapDispatchToProps={
    handleAddContactForm,
    addContact,
    clearError,
    clearSuccess,

}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AddContact));