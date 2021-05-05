import React from "react";

class GithubRepo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="github-repo" href={`${this.props.html_url}`}>
        {this.props.name}
      </a>
    );
  }
}

export default GithubRepo;
