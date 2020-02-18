import React, { PureComponent} from 'react';
import Grocery from './Grocery/Grocery';


class Groceries extends PureComponent{
  // static getDerivedStateFromProps(){
  //   console.log('Groceries.js... getDerivedStateFromProps() ')
    
  // }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('Groceries.js... shouldComponentUpdate() ');
  //   //If there is any change to groceries, only then render this component or else dont do anything ani chepthunattu
  //   if(nextProps.Groceries !== this.props.Groceries){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
    
  // }
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('Groceries.js... getSnapshotBeforeUpdate() ');
  return {message:'Snap Taken'};
}
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Groceries.js... componentDidUpdate() ');
    console.log(snapshot);
  }
  componentWillUnmount(){
    console.log('ApGroceries.js...componentWillUnmount() ')
  }
  render(){
    console.log('Groceries.js... Rendering');
    return(
       (this.props.groceries.map(grocery => {
        return (
            <Grocery items={grocery.items} 
            price={grocery.price} 
            key = {grocery.id} />
      )}))
    );
  }
}

export default Groceries;