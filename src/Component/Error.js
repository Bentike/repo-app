import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Error.css';

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
        this.setError = this.setError.bind(this);
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
    
   setError(){
     this.state.setState({
        hasError: false
     });
   }

    render(){
        if(this.state.hasError){
            return (
                <div className='err'>
                     <h1>Something Went Wrong!!!</h1>
                     <Link to='/' onClick={this.setError}>Go Back Home</Link>
                </div>
            );
        }
        return this.props.children;
    }
}

export default Error;