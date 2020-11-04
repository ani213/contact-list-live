import React, { Component } from 'react';
class SearchInput extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <input type="text"  value={this.props.value||""}
                 className={`form-control`} 
                 placeholder="search..." 
                 onChange={(e)=>{this.props.onChange&&this.props.onChange(e)}}/>
            </div>
         );
    }
}
 
export default SearchInput;