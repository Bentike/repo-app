import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Styles/Error.css';

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

    render(){
        if(this.state.hasError){
            return (
                <div className='err'>
                     <h1>Something Went Wrong!!!</h1>
                     <Link to='/'>
                         Go back home.
                     </Link>
                     <Outlet/>
                </div>
            );
        }
        return this.props.children;
    }
}

export default Error;