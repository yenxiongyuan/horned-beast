import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  handleNameClick = () => {
    this.props.handleOpenModal(this.props.title)
  }

  render() {
    return (
      <>
        <article>
          <h2 onClick={this.handleNameClick}>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p onClick={this.handleFavorite}>
            {" "}
            ❤️ {this.state.favorites} Favorites
          </p>
          <img
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.props.addAnimals}
          />
        </article>
      </>
    );
  }
}

export default HornedBeast;
