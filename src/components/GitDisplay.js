import React, { Component } from 'react'
import axios from 'axios'

class GitDisplay extends Component {

  constructor(){
    super()
    this.state = {
      name: [],
      error: false
    }
  }

  handleClick(){
    axios.get("https://api.github.com/users/kevwang424/repos")
      .then((response) => {
        this.setState({
          name: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      })
  }


  render(){

    let lis = this.state.name.map((repo) => {
      return <li key={repo.id}>{repo.name}</li>
    })



    if (this.state.error){
      return (
          <div>
            {this.state.error}
          </div>
        )
      } else {
        return (
          <div>
            <div>This is GitDisplay</div>
            <button onClick={this.handleClick.bind(this)}>Click to retrieve Kevins git repos</button>
            <ul>
              {lis}
            </ul>
          </div>
        )
      }
  }
}

export default GitDisplay
