import React from 'react'

class StarWarsComponent extends React.Component {
    // constructor() {
    //     super();

    // }
    componentDidMount() {
        fetch('https://swapi.dev/api/people/11')
            .then(res => res.json())
            .then(data => {
                // console.log(this.props)
                this.props.handle(data)

            })
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default StarWarsComponent