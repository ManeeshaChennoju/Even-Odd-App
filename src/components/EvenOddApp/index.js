import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const getRandomValue = Math.floor(Math.random() * 100)
    this.setState(prevCount => {
      console.log('------------------')
      return {count: prevCount.count + getRandomValue}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg_con">
        <div className="container">
          <h1 className="heading"> Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="statement">Count is Even</p>
          ) : (
            <p className="statement">Count is Odd</p>
          )}
          <button onClick={this.onIncrement} className="button" type="button">
            Increment
          </button>
          <p className="rule"> *Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

// <p className="statement"> Count is Even </p>
