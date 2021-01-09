import { connect } from 'react-redux';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

function App(props) {
    return (
        <div className='container'>
            <h1 className='title'>Todo List</h1>
            <TodoList todos={props.todos} />
            <ItemAddForm />
        </div>
    );
}

export default connect(
    state => ({
        todos: state
    })
)(App);