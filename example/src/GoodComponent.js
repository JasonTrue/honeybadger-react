import React, { Component } from 'react'

export default class GoodComponent extends Component {
  clearError = () => {
    console.log('setstate clean')
    this.setState({error: true})
  }

  render () {
    return (
      <div>
        <button onClick={this.clearError}>Click here to have nothing go wrong</button>
      </div>
    )
  }
}
