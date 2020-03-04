import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todoaction } from '../actions/todoActions';
import { v4 as uuidv4 } from 'uuid';



class AddTodo extends Component {

    state = {
        text: "",
    }

    handelchange = (e) => {

        this.setState({ text: e.target.value })
    }
    addnewtodo = () => {
        let id = uuidv4();
        let todo = this.state.text;
        var newtodo = { id, todo };
        this.props.add(newtodo);
    }

    render() {

        return (
            <div>
                <button onClick={this.addnewtodo}>Add new todo</button>
                <input type="text" name="todoadd" onChange={this.handelchange} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (newTodo) => dispatch(Todoaction(newTodo))
    }

}
export default connect(null, mapDispatchToProps)(AddTodo);