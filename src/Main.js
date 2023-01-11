import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data/data.json";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {data.map((beast) => {
            return (
              <HornedBeast
                title={beast.title}
                description={beast.description}
                image_url={beast.image_url}
              />
            );
          })}
        </main>
      </>
    );
  }
}

export default Main;
