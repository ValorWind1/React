import React from 'react'
import todoData from './data/todo'
import Dos from './components/Dos'

class Phase6 extends React.Component {
    constructor(){
        super()
        this.state = { 

            arr : todoData

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState((i) => {
            const updatearr = i.arr.map((i) => {
                if(i.id === id){
                    i.completed = !i.completed
                }
                return i
            })
            return {
                arr : updatearr
            }
        })
        console.log("checked" , id)
    }


    render () {
        const data7 = this.state.arr.map((i) => <Dos key={i.id} haha={i} handleChange = {this.handleChange} />) 

        return (

            <div>
                {data7}
            </div>

        )
    }
}

export default Phase6