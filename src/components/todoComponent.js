import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Deletetodo } from '../actions/todoActions';
import { Complete, Edit } from '../actions/todoActions';
import { v4 as uuidv4 } from 'uuid';
import { Todoaction } from '../actions/todoActions';


// import { connect } from 'react-redux'; not 'React-redux'

// connect our component to store : holds whole state tree of our react app 
//store like big javascript object

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",

        }
    }

    Update = (X, id) => {
        this.setState({ text: X, id: id, edit: true })
    }


    handelchange = (e) => {

        this.setState({ text: e.target.value })
    }
    addnewtodo = () => {
        if (this.state.edit) {
            this.props.HanDelEit(this.state.text, this.state.id)
            this.setState({ text: "", edit: false })

        } else {
            this.props.add({
                id: uuidv4(),
                edit: false,
                todo: this.state.text,
                classe: false

            })
            this.setState({ text: "" })
        }

    }

    hanDelete = (x) => {

        this.props.Delete(x);

    }

    render() {
        return (
            <div className="todo">
                <div className="titre">
                <h1>Daily Todo Lists</h1>
                </div>
                

                <div className="Recherche">
                    <input type="text" name="todoadd" onChange={this.handelchange} value={this.state.text} placeholder="Add your todo..." />
                    <button onClick={this.addnewtodo}>{this.state.edit ? "Edit" : "Add"}</button>
                </div>

                {
                    this.props.todos.map((el,i) => (
                        <div key={el.id}>
                            <div className={i % 2===0?"class":"class2"}>
                            <h2 className={el.classe ? "barre" : "" }  >{el.todo}</h2>
                            </div>
                            <button className="buttonclass" onClick={() => this.hanDelete(el.id)}  >supprimer</button>
                            <button  className="buttonclass" onClick={() => this.props.HanDelCompelete(el.id)}  >Complete</button>
                            <button  className="buttonclass" onClick={() => { this.Update(el.todo, el.id) }}>Edit </button>
                        </div>))
                }


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.TodoReducres

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (newTodo) => dispatch(Todoaction(newTodo)),
        Delete: (id) => dispatch(Deletetodo(id)),
        HanDelCompelete: (x) => dispatch(Complete(x)),
        HanDelEit: (x, id) => dispatch(Edit(x, id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);