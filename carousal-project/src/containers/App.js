import React, { Component } from "react";
import Card from "../components/Cards/Card";
import "./App.css";

class App extends Component {
  state = {
    applica: [
      { questions: "Define HTML", answers: "" },
      { questions: "Define HTML2", answers: "" },
      { questions: "Define HTML3", answers: "" }
    ],
    showAnswer: false
  };

  toggleAnswerHandler =() =>{
    var doesShow = this.state.showAnswer;
    this.setState({
      showAnswer: !doesShow
    });
  }
  showInputHandler = (event) => {
    this.setState({
      applica: [
        { questions: "Define HTML", answers: event.target.value },
        { questions: "Define HTML2", answers: event.target.value },
        { questions: "Define HTML3", answers: event.target.value }
      ]
    });
  }

  showAnswerHandler = () => {
    this.setState({
      applica: [
        { questions: "Define HTML", answers: "Hyper text Markup Language" },
        { questions: "Define HTML2", answers: "Hyper text Markup Language" },
        { questions: "Define HTML3", answers: "Hyper text Markup Language" }
      ]
    });
  };



  render() {
    
    
    var newApplica = this.state.applica.map((question, index) => {
      return (
        <Card
          ques={question.questions}
          ans={question.answers}
          key={index}
          click={this.showAnswerHandler}
          toggle = {this.toggleAnswerHandler}
        />
        
      );
    });
  

    return <div className="App">
      {newApplica}
      

      </div>;
  }
}

export default App;
