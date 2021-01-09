import React from 'react';
import { connect } from 'react-redux';

import './item-add-form.css';

class ItemAddForm extends React.Component {

    state = {
        text: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text.trim().length > 0) {
            this.props.onAddTrack(this.state.text);
            this.setState({
                text: ''
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='item-add-form'>
                <input type='text'
                    className='form-control'
                    placeholder='What needs to be done'
                    value={this.state.text}
                    onChange={this.handleChange} />
                <input type='submit' value='Add Item' className='button' />
            </form>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onAddTrack: (todo) => {
            dispatch({
                type: 'ADD_TODO',
                payload: todo
            })
        }
    })
)(ItemAddForm);