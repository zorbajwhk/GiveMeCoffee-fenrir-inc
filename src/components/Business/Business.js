import React from 'react';
import BusinessImage from '../BusinessImage/BusinessImage';
import './Business.css';


class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <BusinessImage src={this.props.business.imageSrc} alt={this.props.business.name}/>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
          <a target="_blank" rel="noopener noreferrer" href={this.props.business.googleURL}>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.zipCode}`}</p>
          </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} ★`}</h3>
            <a target="_blank" rel="noopener noreferrer" href={this.props.business.yelpURL}>{`${this.props.business.reviewCount} 口コミ`}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;