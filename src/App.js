// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources
import React from "react";
import './App.css';
import './index.css'
// import Text from "./text";
import Container from "./container";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term:'',
      items :[],
      allItems:[],
      check : [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.term===''){
      return alert("Please Write your task first before Add");
    }
    this.setState({
      items: [...this.state.items, this.state.term],
      allItems: [...this.state.allItems, this.state.term],
      term: '',
    });
  }

  remove(e){
    let index = e.target.id;
    let arr= [...this.state.items];
    arr.splice(index,1);
    console.log(arr);
    // console.log(arr);
    console.log(index);
    this.setState({
      items: arr,
    })
  }

  onCheck(e){
    console.log(e.target.checked);
    if(e.target.checked){
      let index = e.target.id;
      let arr= [...this.state.items];
      arr.splice(index,1);
      console.log(arr);
      // console.log(arr);
      console.log(index);
      this.setState({
        items: arr,
      })
    }
    // }else{
    //   this.setState({
    //     check : [...this.state.check,e.target.id]
    //   })
    // }
  }

  render(){
    return (
      <div className="App">
          <div id='main'>
              <h1>Cool Todo-List</h1> 
              <div className="input">
                <input type="text" name="" placeholder="task......" id="text" onChange={this.onChange} value={this.state.term} />
                <button className="add" onClick={this.onSubmit}>Add</button>
              </div> 

              <div className="container">
                  <Container items={this.state.items} 
                  remove={this.remove.bind(this)} onCheck={this.onCheck.bind(this)} />
              </div>  
          </div>
      </div>
    )
  }
}

export default App;
