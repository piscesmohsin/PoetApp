import React, { Component } from "react";
import { render } from "react-dom";
import Gify from "./Gify";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  border:"none",
};

class AddGif extends Component {
  state = {
    showHelloComponent: false
  };
  toggleHelloComponentVisibility = () => {
    this.setState(prevState => ({
      ...prevState,
      showHelloComponent: !prevState.showHelloComponent
    }));
  };
  render() {
    return (
      <div style={styles}>
    <button className='g-button' name="gif" value="Gif-view" onClick={this.toggleHelloComponentVisibility}>
         Add Gif
        </button>
        {this.state.showHelloComponent && <Gify/>}
        
      </div>
      
    );
  }
}

export default AddGif;