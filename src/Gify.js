import Picker from './gifpicker'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes, } from 'react'

class TestComponent extends Component {



  log (gif) {
    console.log(gif)
  }

  


  

  render () {
    return (
      <div>
        <Picker onSelected={this.log.bind(this)} />
      
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  
  document.getElementById('root')
)

export default TestComponent;