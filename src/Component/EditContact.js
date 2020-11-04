import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { showEditForm, editDetailsChange, editDetails, clearSuccess, clearError } from './contactState';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PulseLoader from './common/PulseLoader';
const Auto_clear_interval=10;
class EditContact extends Component {
    state = { }
    handleCancle=()=>{
        this.props.showEditForm({id:"",YN:false})
    }
   handleOnchange=(e)=>{
     this.props.editDetailsChange(e.target.name,e.target.value)
   } 
   handleSave=()=>{
    this.props.editDetails(this.props.store.editDetails);
    // this.props.showEditForm({id:"",YN:false})
   }
   _Auto_clear_success=()=>{
    if(this.props.store.success)
    {
        this.props.clearSuccess()
        this.props.showEditForm({id:"",YN:false})
 
    }
   }
   AutoclearError=()=>{
    if(this.props.store.error){
       this.props.clearError()
    }
}
   componentDidMount(){
    setInterval( this.AutoclearError, (Auto_clear_interval*1000));
    setInterval(this._Auto_clear_success,1)
   }
    render() { 
        let classes=this.props.classes
        let details=this.props.store.editDetails
        // let data={width:"100%",height:"100%",top:"0", animationDuration: "3s",}
        // let data1={width:"100%",height:"100%",top:"0", animationDuration: "5s",}

        // console.log(this.props.store,"details")
        return ( 
            <div className={classes.mainContainer}>
                <div className={classes.cancleButtonContainer}>
                    <IconButton onClick={this.handleCancle}><CloseIcon /></IconButton>
                </div>
            <div className={classes.formContainer} style={{animationDirection:`${this.state.YN?'reverse':'normal'}`}}>
                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="first_name"
                      value={details.first_name || details.first_name}
                      onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="last_name"
                      value={details.last_name||details.last_name}
                      onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="email"
                      value={details.email||details.email}
                      onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="phone"
                      value={details.phone||details.phone}
                      onChange={this.handleOnchange}/>
                    </div>
                </div>
                <div className={classes.saveButtonContainer}>
                { this.props.store.error && <p className={classes.fontColor}>{this.props.store.error} </p>}
                <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </div>
            </div>
             {/* <PulseLoader style={data1}/>     */}
             {/* <PulseLoader style={data}/>        */}
            </div>
         );
    }
}
const styles=theme=>({
mainContainer:{
    position:"absolute",
    right:"110px",
    bottom:"-118px", 
},
formContainer:{
    width:"300px",
    height:"395px",
    background:"#39ac73",
    padding:"20px",
    borderRadius:"15px",
    boxShadow: "-20px 25px 6px 3px darkslategrey",
    animationName: "$for_content",
    animationIterationCount: "1",
    animationDuration: "0.4s",
},
cancleButtonContainer:{
    float:"right"
},
saveButtonContainer:{
    textAlign: "center",
    margin: "12px"
},
'@keyframes for_content': {
  "0% ":{
   width:"60px",
   height:"360px",
  },
  "100% ":{
      width:"300px",
      height:"395px",
  }
},
fontColor:{
  color:"red"
},
  
})

const mapStateToProps=(state)=>{
    return{
        store:state.contacts
    }
}
const mapDispatchToProps={
    showEditForm,
    editDetailsChange,
    editDetails,
    clearSuccess,
    clearError

} 

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(EditContact));