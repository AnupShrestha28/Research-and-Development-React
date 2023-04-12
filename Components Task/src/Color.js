import React from "react";

class Color extends React.Component{

    constructor(){
        super();
        this.state = {
            bgColor : "White"
        };
        this.buttonBlack = this.buttonBlack.bind(this);
        this.buttonPurple = this.buttonPurple.bind(this);
        this.buttonGray = this.buttonGray.bind(this);
        this.buttonYellow = this.buttonYellow.bind(this);
        this.buttonPink = this.buttonPink.bind(this);
    }

    buttonBlack(){
        this.setState({bgColor: "Black"});
    }

    buttonPurple(){
        this.setState({bgColor: "Purple"});
    }

    buttonGray(){
        this.setState({bgColor: "Gray"});
    }

    buttonYellow(){
        this.setState({bgColor: "Yellow"});
    }

    buttonPink(){
        this.setState({bgColor: "Pink"});
    }

    render(){
        return(
            <>
            <div className="App" style={{backgroundColor : this.state.bgColor}}>
                <button className="btn-color" onClick={this.buttonBlack}>Black</button>
                <button className="btn-color" onClick={this.buttonPurple}>Purple</button>
                <button className="btn-color" onClick={this.buttonGray}>Gray</button>
                <button className="btn-color" onClick={this.buttonYellow}>Yellow</button>
                <button className="btn-color" onClick={this.buttonPink}>Pink</button>
            </div>
            </>
        );
    }
}

export default Color;