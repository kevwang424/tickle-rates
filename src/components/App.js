import React, { Component } from 'react';
import QuoteForm from './QuoteForm'
import QuoteDisplay from './QuoteDisplay'

var helpers = require('../helpers.js')

class App extends Component {

  state = {
    name: "",
    amount: ""
  }

  updateQuote = (info) => {
    var name = info.name
    var amount = helpers.checkCondition(helpers.baseAndAgeIncrease(parseInt(info.age, 10)), info.condition)

    if (info.gender === "female"){
      this.setState({name: name, amount: helpers.femaleDiscount(amount)})
    } else {
      this.setState({name: name, amount: amount})
    }
  }

  render() {
    return (
      <div className="row">
        <QuoteForm updateQuote={this.updateQuote}></QuoteForm>
        <QuoteDisplay quote={this.state}></QuoteDisplay>
      </div>
    );
  }
}

export default App;
