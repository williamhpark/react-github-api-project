import React from "react";

import GithubRepo from "./GithubRepo.jsx";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        // How can we use `this` inside a callback without binding it??
        // Make sure you understand this fundamental difference with arrow functions!!!
        console.log(repos);
        this.setState({
          repos: repos,
        });
      });
  }

  render() {
    if (!this.state.repos) {
      return <div>LOADING...</div>;
    }

    return (
      <div className="repos-page">
        <hr />
        <h2>Repos of {this.props.params.username}</h2>
        <ul className="repos-list">
          {this.state.repos.map(function (repo) {
            return (
              <GithubRepo
                key={repo.name}
                name={repo.name}
                html_url={repo.html_url}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Repos;
