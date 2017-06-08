import React, { Component } from 'react';

class QuoteForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const quote = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      gender: this.refs.gender.value,
      condition: this.refs.condition.value
    }
    this.props.updateQuote(quote)
    this.refs.form.reset()
  }

  render() {

    function ages(){
      var dropdown = []
      for(var i = 18; i <= 115; i++){
        dropdown.push(<option key={i} value={i}>{i}</option>)
      }
      return dropdown
    }

    function conditions(){
      const conditions = ["Allergies", "Sleep Apnea", "Heart Disease"]
      return conditions.map((condition) => {
        return <option key={condition} value={condition}>{condition}</option>
      })
    }

    return (
      <div className="col-md-6">
        <h1 className="text-center">Get your free quote today!</h1>
        <div className="well">
          <form ref="form" onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" id="inputName" placeholder="Name" ref="name" required/>
            </div>

            <div className="form-group">
              <label htmlFor="inputAge">Age:</label>
              <select className="form-control" id="inputAge" ref="age">
                  {ages()}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="inputGender">Gender:</label>
              <select className="form-control" id="inputGender" ref="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="inputCondition">Condition:</label>
              <select className="form-control" id="inputCondition" ref="condition">
                {conditions()}
              </select>
            </div>

            <button type="submit" className="btn-success">Get Quote!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuoteForm;
