import React from "react";

import GithubUser from "./GithubUser.jsx";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/users/${this.props.params.username}/followers`
    )
      .then((response) => response.json())
      .then((followers) => {
        // How can we use `this` inside a callback without binding it??
        // Make sure you understand this fundamental difference with arrow functions!!!
        console.log(followers);
        this.setState({
          followers: followers,
        });
      });
  }

  render() {
    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>;
    }

    return (
      <div className="followers-page">
        <h2>Followers of {this.props.params.username}</h2>
        <ul>
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
