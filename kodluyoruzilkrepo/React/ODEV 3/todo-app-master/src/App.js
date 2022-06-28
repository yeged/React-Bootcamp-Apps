import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
        checked: false,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  deleteItem = (id) => {
    this.setState({todos:[...this.state.todos.filter(value => (value.id !== id))]})
  }

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList onDelete={this.deleteItem} onClick={(id) => {
              const checkTodos = [...this.state.todos]
              checkTodos[this.state.todos.indexOf(this.state.todos.find(value => (value.id ===id)))].checked =  !checkTodos[this.state.todos.indexOf(this.state.todos.find(value => (value.id ===id)))].checked
              return this.setState({todos:[...checkTodos]})
              }} todos={this.state.todos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
