import React, { Component } from 'react'

export class Mounting extends Component {

    constructor(props){
        super(props)
        this.state = {
            a:10
        }

        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        //api istekleri burada gerceklesir
        //calisma sirasi söyledir:
        // 1.constructor
        // 2.render
        // 3.componentDidMount

        this.setState({
            a:20
        })
    }

    componentDidUpdate(prevProps, prevState) {        
        
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        
    }

    render() {

        console.log("Render");

        return (
            <div>
                
            </div>
        )
    }
}

export default Mounting
