import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {this.props.data.map((beast) => {
            return (
              <HornedBeast
                title={beast.title}
                description={beast.description}
                image_url={beast.image_url}
                addAnimals={this.props.addAnimals}
                handleOpenModal={this.props.handleOpenModal}
              />
            );
          })}
        </main>
      </>
    );
  }
}

export default Main;
