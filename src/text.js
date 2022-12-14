import React from "react";

class Text extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:{},
        }
    }

    updateChange(e){
        this.setstate({arr : e.currentTarget.value});
    }

    render(){
        return(
        <div className="input">
            <input type="text" name="" onChange={(e)=>{this.updateChange(e)}} placeholder="task......" id="text" />
            <button className="add" onClick={this.props.onClick(this.state.arr)}>Add</button>
        </div>
        )
    }
    
}

export default Text;