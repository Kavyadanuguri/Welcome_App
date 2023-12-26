// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {value: false}

  onPress = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }
  getButton = () => {
    const {value} = this.state
    return value ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButton()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="p1">Thank you! Happy Learning</p>
        <button onClick={this.onPress} className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
