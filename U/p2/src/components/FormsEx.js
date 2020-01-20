import React from 'react'

class CharComponents extends React.Component {
    state = {
        firstName :""
    }

    handleChange =(event)=>{
        this.setState =({firstName:event.target.value})
    }

    render () {
        return (

            <div>
                <form>
                    <input  placeholder="first Name" onChage={this.handleChange}/>
                    <h1>{this.state.firstName}</h1>
                </form>
            </div>
        )
    }
}

export default CharComponents