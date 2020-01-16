import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {
    const todoData = [
        { label: 'Drink coffee', important: false, id: '1' },
        { label: 'Learn React', important: false, id: '2' },
        { label: 'Сorrespond in a telegram', important: false, id: '3' },
        { label: 'Create awesome app', important: true, id: '4' }
    ]    

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
