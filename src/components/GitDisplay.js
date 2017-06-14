import React, { Component } from 'react'
import axios from 'axios'

class GitDisplay extends Component {

  constructor(){
    super()
    this.state = {
      name: []
    }
  }

  handleClick(){
    axios.get("https://api.github.com/users/kevwang424/repos")
      .then((response) => {
        this.setState({
          name: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render(){

    let lis = this.state.name.map((repo) => {
      return <li key={repo.id}>{repo.name}</li>
    })

    console.log(lis)

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

export default GitDisplay
