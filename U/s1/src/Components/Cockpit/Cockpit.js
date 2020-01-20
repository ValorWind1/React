import React,{useEffect, useRef,useContext} from 'react'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContextt = useContext(AuthContext);

    console.log(authContextt.authenticated)
    useEffect(() => {
        console.log('cockpit.js useEffect')
        // DO HTTP REQUESTS HERE 
        // const timer = 
        // setTimeout(() => {
        //     // alert('saved data to cloud!')
        //     console.log('saved data to cloud')
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
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
            ref ={toggleBtnRef}
            // onClick={() => this.switchNameHandler("Maximilian!$")}
            onClick={props.toggle}
            >Switch Name
            </button>
            
            <button onClick={authContextt.login}>Log in</button>
            

        </div>
    )
}


export default React.memo(Cockpit);