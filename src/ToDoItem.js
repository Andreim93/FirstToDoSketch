import React, { Component } from "react";

class ToDoItem extends Component {
    checkedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    check() {
        // this.props.item.completed = !this.props.item.completed;
        // console.log('wtf')
        // this.render()

        console.log('plm')
    }



    render() {
        return (
            <div className='todo-item'>
                <input type='checkbox' checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)} />
                <p style={this.props.item.completed ? this.checkedStyle : {}}>{this.props.item.text}</p>
                <hr />
            </div >
        );
    }

}

export default ToDoItem;
