import React from "react";

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
    return (
      <div className="followers-page">
        <h3>Followers of USERNAME</h3>
        <ul>
          {this.state.followers.map(function (follower) {
            return <li>{follower.login}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Followers;
