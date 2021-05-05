import React from "react";
import { Link } from "react-router";

class GithubUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="github-user" to={`/user/${this.props.login}`}>
        <img src={`${this.props.avatar_url}`} alt={`${this.props.login}`} />
        {this.props.login}
      </Link>
    );
  }
}

export default GithubUser;
