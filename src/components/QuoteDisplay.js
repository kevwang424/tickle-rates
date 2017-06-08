import React, { Component } from 'react';

class QuoteDisplay extends Component {

  render(){
    const { name, amount } = this.props.quote

    if (name && amount){
      return (
        <div className="col-md-6">
          <h1 className="text-center">Thank you for using TICKLE <span className="text-success">{name}</span>!</h1>
          <h3 className="text-center">We have calculated the cost of your plan and it comes out to be <span className="text-success">${amount}</span> annually.</h3>
        </div>
      )} else {
        return (
          <div className="col-md-6">
            <h1 className="text-center">Welcome to TICKLE!</h1>
            <h2 className="text-center">Fill in your information to get a quote</h2>
          </div>
        )
      }
    }
  }

export default QuoteDisplay;
