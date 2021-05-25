import React from "react"

class Conditional extends React.Component {

    render() {
        if (this.props.isLoading === true) {
            return (
                <div><h1 className='loading'>
                    <span className='loading-1'>L</span>
                    <span className='loading-2'>o</span>
                    <span className='loading-3'>a</span>
                    <span className='loading-4'>d</span>
                    <span className='loading-5'>i</span>
                    <span className='loading-6'>n</span>
                    <span className='loading-7'>g</span>
                    <span className='loading-8'>.</span>
                    <span className='loading-9'>.</span>
                    <span className='loading-10'>.</span>

                </h1></div>
            )
        } else {
            return (
                <div><h1>Temp heading</h1></div>
            )
        }
    }
}

export default Conditional;