import React, { useState } from "react";

class ClassBasedComponent extends React.Component{
    
    constructor(){
        super();
        console.log("This is from Constructor");
        this.state = {
            viewType : "Tile"
        }
        
    }

    render() {
        console.log(this.props);
        console.log("This is from render");
        if(this.state.viewType === "Tile"){
            return(
                <div>
                    <h1>This is from Class Based Component</h1>
                    <button onClick={() => {
                        this.state.viewType === "Tile" ? this.setState({viewType : "List"}) :  this.setState({viewType : "Tile"});
                    }}>{this.state.viewType} View</button>
                </div>
            )
        }

        if(this.state.viewType === "List"){
            return(
               <div>
                 <h1>
                    This is from List
                </h1>
                <button onClick={() => {
                        this.state.viewType === "Tile" ? this.setState({viewType : "List"}) :  this.setState({viewType : "Tile"});
                    }}>{this.state.viewType} View</button>
               </div>
            )
        }
    }

    componentDidMount(){
        console.log("This is from Component Did Mount");
    }

    componentDidUpdate(){
        console.log("This is from Component Did Update");
    }

    componentWillUnmount() {
        console.log("This is from Component Did Unmount");
    }
}

export default ClassBasedComponent;