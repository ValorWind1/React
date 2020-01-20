import React,{PureComponent} from 'react'
import Person from './Person/Person'
import AuthContext from '../../context/auth-context'


class Persons extends PureComponent {

    static getDerivedStateFromProps(props,state) {
        console.log(' persons.js getderivedstatefromprops')
        return state ; 
    }


    // shouldComponentUpdate(nextProps,nextState) {
    //     console.log('persons.js shouldcomponentupdate')
    //     if (nextProps.people !== this.props.people){
    //         return true;
    //     }else {
    //         return false;
    //     }
       
    // }

     //Pure Component = or this compare all props that matter to a component for difference 
     // shouldComponent Updated for ^ 
    shouldComponentUpdate(nextProps,nextState) {
        console.log('persons.js shouldcomponentupdate')
        if (nextProps.people !== this.props.people || nextProps.changed !== this.props.changed || nextProps.clicled !== this.props.clicled){
            return true;
        }else {
            return false;
        }  
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
        return (
        <Person
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