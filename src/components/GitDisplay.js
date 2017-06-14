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
    axios({
      method: 'get',
      url: "https://api.github.com/users/adsf23/repos"
    }).then((response) => {
      this.setState({
        name: response.data
      })
    }).catch((error) => {
        if (error.response) {
          this.setState({
            error: error.response.data.message
          })
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(`This is error.request ${error.request}`);
        } else {
          console.log('Error message is', error.message);
        }
        console.log(`This is error.config ${error.config}`);
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
