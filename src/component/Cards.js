import React, {Component} from 'react'
import Card from '../component/Card'
// import {Link} from 'react-router-dom'

class Cards extends Component {
  
  render() {
    return (
      <div className="weather-widget">
        <Card day="Mon" low="10" high="17">
          <i class="fas fa-cloud-sun-rain"></i>
        </Card>
        <Card day="Tue" low="8" high="12">
          <i class="fas fa-cloud-sun"></i>
        </Card>
        <Card day="Wed" low="-3" high="2">
          <i class="fas fa-cloud-showers-heavy"></i>
        </Card>
        <Card day="Thurs" low="8" high="10">
          <i class="fas fa-snowflake"></i>
        </Card>
        <Card day="Fri" low="3" high="5">
          <i class="fas fa-wind"></i>
        </Card>
        <Card day="Sat" low="10" high="15">
          <i class="fas fa-sun"></i>
        </Card>
        <Card day="Sun" low="12" high="17">
          <i class="fas fa-sun"></i>
        </Card>
      </div>
    )
  }
}
export default Cards