import React from "react";
class Button extends React.Component{
    constructor(){
        super();
        this.state = {
            counter : 0,
            color : "red",
        };

        this.buttonClick = this.buttonClick.bind(this); // binding gareko
        this.changeColor = this.changeColor.bind(this);
    }
    buttonClick(){
        console.log("test");
        this.setState({counter : this.state.counter + 1, color : "k chha"});
    }

    changeColor(){
        this.setState({color :  'green'});
    }

    render(){
        return(
            <>
                <div>{this.state.counter}</div>
                <div>{this.state.color}</div>
                <button onClick={this.buttonClick}>Click Me</button>
                <button onClick={this.changeColor}>Change Color</button>
            </>
        );
    }
}

export default Button;