import React, {Component} from 'react'

class Card extends Component {
  state = {
    display: false
  }
  clickHandler = () => {
    if (this.state.display === false) {
      this.setState({display: true});
      console.log(this.state.display)
    }
    if (this.state.display === true) {
      this.setState({display: false});
      console.log(this.state.display);
    }
  }
  render() {
    return (
      <div className="card" onClick={this.clickHandler}>
        <h5>{this.props.day}</h5>
        <p>{this.props.children}</p>
        {this.state.display ? (<div hidden="true" className="extends">
          <div className="small-card">
            <h5>12:00</h5>
            <i class="fas fa-cloud-sun-rain"></i>
            <p>10&#176;</p>
          </div>
          <div className="small-card">
            <h5>16:00</h5>
            <i class="fas fa-cloud-sun-rain"></i>
            <p>10&#176;</p>
          </div>
          <div className="small-card">
            <h5>20:00</h5>
            <i class="fas fa-cloud-sun-rain"></i>
            <p>10&#176;</p>
          </div>
          <div className="small-card">
            <h5>22:00</h5>
            <i class="fas fa-cloud-sun-rain"></i>
            <p>10&#176;</p>
          </div>
    </div>):null}
        <div className="temp">
          <span>{this.props.low}&#176;</span>
          <span>{this.props.high}&#176;</span>

        </div>
      </div>
    )
  }
}

export default Card