// 1st import
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data/data.json";
import Modal from "react-bootstrap/Modal";

// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "",
      showModal: false,
      selectedAnimal: ''
    };
  }

  addAnimals = () => {
    this.setState({
      animal: this.state.animal + "🐅",
    });
  };

  handleOpenModal = (name) => {
    this.setState({
      showModal: true,
      selectedAnimal: name
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <Header animal={this.state.animal} />
        <Main
          data={data}
          addAnimals={this.addAnimals}
          handleOpenModal={this.handleOpenModal}
        />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>{this.state.selectedAnimal}</Modal.Header>
        </Modal>
    
        <Footer />
      </>
    );
  }
}

// 3rd Export the component so other files can import them
export default App;
