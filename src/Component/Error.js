import React from 'react';

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
            return "Something Went Wrong!!!";
        }
        return this.props.children;
    }
}

export default Error;