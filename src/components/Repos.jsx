import React from "react";

import GithubUser from "./GithubUser.jsx";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/users/${this.props.params.username}/repos`
    )
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
    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>;
    }

    return (
      <div className="followers-page">
        <hr />
        <h2>Followers of {this.props.params.username}</h2>
        <ul className="follower-list">
          {this.state.followers.map(function (follower) {
            return (
              <GithubUser
                key={follower.login}
                login={follower.login}
                avatar_url={follower.avatar_url}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Followers;
