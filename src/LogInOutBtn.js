import React from 'react'

class LogInOutBtn extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleLog}>Log {this.props.isLogged ? 'out' : 'in'}</button>
        )
    }
}

export default LogInOutBtn;