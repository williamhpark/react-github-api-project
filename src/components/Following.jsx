import React from "react";

import GithubUser from "./GithubUser.jsx";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/users/${this.props.params.username}/following`
    )
      .then((response) => response.json())
      .then((followingList) => {
        // How can we use `this` inside a callback without binding it??
        // Make sure you understand this fundamental difference with arrow functions!!!
        this.setState({
          followingList: followingList,
        });
      });
  }

  render() {
    if (!this.state.followingList) {
      return <div>LOADING...</div>;
    }

    return (
      <div className="following-page">
        <hr />
        <h2>Followed by {this.props.params.username}</h2>
        <ul className="follow-list">
          {this.state.followingList.map(function (following) {
            return (
              <GithubUser
                key={following.login}
                login={following.login}
                avatar_url={following.avatar_url}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Followers;
