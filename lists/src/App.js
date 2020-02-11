import React, { Component } from 'react';
import Stationary from './Stationary/Stationary'
import './App.css';

class App extends Component  {
  state = {
    stationaries: [
      {name: 'Pen', price: 10},
      {name: 'Pencil', price: 30},
      {name: 'Marker', price: 5},
      {name: 'Ruler', price: 12}
    ]
  }
  deleteItemHandler = (itemIndex) => {
    const deleted = [...this.state.stationaries];
    deleted.splice(itemIndex,1);
    this.setState({stationaries:deleted})
  }

 changeNameHandler = () =>{
      this.setState({
        Stationary: [
          {name: 'Pen', price: 10},
          {name: 'Sticky Notes', price: 30},
          {name: 'Marker', price: 5},
          {name: 'Scale', price: 12}
        ]
      })
  }
//   toggleContentHandler = () => {
//     const doesShow = this.state.showContent;
//     this.setState( { showContent: !doesShow } )
// }

  render(){
    // let items = null;
    // if(this.state.showContent){
      let items = (
      <div> 
       
       {this.state.stationaries.map((item,index) => { 
          return <Stationary 
          name = {item.name} 
          price = {item.price}
          click = {this.deleteItemHandler.bind(this,index)}/>
       })
       }
          
  
      </div>
      );
      // }
      
  return (
    <div className="App">
      <h1>My Lists React App</h1>
      <button>Toggle Content</button>
        {items}
    </div>
  );
}
}

export default App;
