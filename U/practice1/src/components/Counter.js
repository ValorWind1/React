import React from 'react' 


class Counter extends React.Component {
    constructor () {
        super ();
        this.state ={
            counter : 0 , 
        }
    }


    hoverHandleChange = () => {
        this.setState ({
            counter : this.state.counter +1
        })
    }

    render () {
        let style = {
            color : "red",
            fontWeight: "bold",
            textAlign :"center"
        }

        return (
            <div>
                <h5 style={style} onClick = {this.hoverHandleChange}>Counter : {this.state.counter} </h5>
            </div>
        )
    }
}



export default Counter 