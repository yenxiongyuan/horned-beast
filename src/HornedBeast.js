import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <article>
          <p>{this.props.title}</p>
          <p>{this.props.description}</p>
          <p>{this.props.imageUrl}</p>
          <p>{this.props.alt}</p>
        </article>
      </>
    );
  }
}

export default HornedBeast;
