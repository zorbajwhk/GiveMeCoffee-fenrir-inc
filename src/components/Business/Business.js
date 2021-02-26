import React from 'react';
import './Business.css';

class Business extends React.Component {
  
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a target="_blank" href={this.props.business.googleURL}>
          <img src={this.props.business.imageSrc} alt=''/>
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
          <a target="_blank" href={this.props.business.googleURL}>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.zipCode}`}</p>
          </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} ★`}</h3>
            <a href={this.props.business.yelpURL}>{`${this.props.business.reviewCount} 口コミ`}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;