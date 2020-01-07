import React from 'react'
import Person from './Person/Person'


class Persons extends React.Component {

    static getDerivedStateFromProps(props,state) {
        console.log(' persons.js getderivedstatefromprops')
        return state ; 
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log('persons.js shouldcomponentupdate')
        return true ; 
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('persons.js getSnapshotBeforeUpdate')
        return {message:'Snapshot'}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('persons.js componentdidupdate')
        console.log(snapshot)
    }

    componentWillUnmount (){
        console.log('persons.js componentwillunmount')
    }

    render(){
    
    console.log('persons.js rendering .... ')
    
        return this.props.people.map( (i, index) => {
        return (<Person
        clikingboi = {() => this.props.clicled(index)} 
        name={i.name} 
        age={i.age}
        key={i.id}
        changed={(event) => this.props.changed(event , i.id)}
        />
        )
    })
}
}

export default Persons