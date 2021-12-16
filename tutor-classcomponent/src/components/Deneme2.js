import React, { Component } from 'react'


export class Deneme2 extends Component {
    
      


    render() {
        return (
            <div>
                <h3>My name is ahmet</h3>

                {this.props.state.personnen.map(element=>{

                    return(
                        
                        <h4 key={element.name}>{element.name}</h4>

                    )
                })
                }
            </div>
        )
    }
}

export default Deneme2
