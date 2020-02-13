import React, {Component} from 'react';
import Card from './Cards/Card'
import './App.css';



class App extends Component{
  
  state = {
    applica:[
      {questions: "Define HTML", answers: "Answer1"},
      {questions: "Define HTML2", answers: "Answer2"},
      {questions: "Define HTML3", answers: "Answer3"}
    ]
      
    } 

  showAnswerHandler = () =>{
      var doesShow = this.state.showAnswer;
      this.setState({
        questions: ["Define HTML","What is difference between == and ===","What is a functional component"],
        answers: ["Hyper Text Markup Language","Checks only value, checks also the type","created using ES6 functions"]
        ,showAnswer: !doesShow
      })
  }
  render(){
    let newApplica = (
      this.state.applica.map((question,index) => {
        return <Card 
        ques = {question.questions} 
        ans = {question.answers}
        key = {index} 
        />
      }))
      
  
    return (
    <div className="App">
      Hello
      {newApplica}
      
      
    </div>
  );
    }
}

export default App;
