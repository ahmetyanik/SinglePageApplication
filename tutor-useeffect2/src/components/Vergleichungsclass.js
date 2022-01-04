import React, { Component } from 'react'

export class Vergleichungsclass extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){

        const bett1 = document.querySelector("#bett1");
        bett1.innerText = this.state.count;

    }

    componentDidUpdate(){
        const bett1 = document.querySelector("#bett1");
        bett1.innerText = this.state.count;
    }

    render() {
        return (
            <div >
                <div className='d-flex justify-content-around' > <span>state:{this.state.count}</span> <span>Betroffenes element:<span id='bett1'></span></span> </div>
                <button onClick={()=> this.setState({count:this.state.count + 1})}>Click</button>
            </div>
        )
    }
}

export default Vergleichungsclass
