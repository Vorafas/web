import './todo-list.css';

const TodoList = function (props) {
    return (
        <ul>
            {props.todos.map((todo, index) =>
                <li className='todo-label' key={index}>{todo}</li>
            )}
        </ul>
    );
};

export default TodoList;