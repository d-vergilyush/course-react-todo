import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  };

  createTodoItem(label) {
    return {
      label, 
      important: false,
      done: false,
      id: this.maxId++
    };
  };
  
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newArray = todoData.filter((item) => item.id !== id)
      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(id, prop, items) {
    return items.map(item => (item.id === id) ?
        { ...item, [prop]: !item[prop] } :
        item
    );
  };

  addItem = (text) => {

    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });

  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(id, 'important', todoData)
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(id, 'done', todoData)
      }
    })
  };

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={ todoData }
          onDeleted={ this.deleteItem } 
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <ItemAddForm 
          onItemAdded={ this.addItem }
        />
      </div>
    );
  }
  
};