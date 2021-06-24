// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  clickSubscribeBtn = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.clickSubscribeBtn}
        >
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
