import React,{useEffect} from 'react'

const Cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit.js useEffect')
        // DO HTTP REQUESTS HERE 
        setTimeout(() => {
            alert('saved data to cloud!')
        },1000);
        return () => {
            console.log('Cockpit.js cleanup work in useeffect')
        }
    }, []);

    useEffect(() => {
        console.log('cockpit.js 2nd useEffect')
        return () => {
            console.log('Cockpit.js cleanup work in 2nd useeffect')
        }
    })

    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
        
      };

    return (
        <div>
            <h1>{props.title}</h1>
            <button
            style={style}
            // onClick={() => this.switchNameHandler("Maximilian!$")}
            onClick={props.toggle}
            >Switch Name</button>

        </div>
    )
}


export default Cockpit