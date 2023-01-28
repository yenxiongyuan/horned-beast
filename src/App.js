// 1st import
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data/data.json";
import Modal from "react-bootstrap/Modal";
import { Form, ListGroup, Accordion } from "react-bootstrap";
import HornedBeast from "./HornedBeast";


// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "",
      showModal: false,
      selectedAnimal: '',
      animalData: data,
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

  handelSelect = (event) => {
    const selected = event.target.value;

    if(selected === 'even') {
      const newData = data.filter(newAnimal => newAnimal.horns % 2 === 0);
      this.setState({
        animalData : newData
      })
    } else if(selected === 'odd') {
      const newData = data.filter(newAnimal => newAnimal.horns % 1 === 0);
      this.setState({
        animalData : newData
      })
    } else if(selected ==='all'){
      this.setState({
        animalData : data
    })
   }
  }

  render() {
    return (
      <>
        <Header animal={this.state.animal} />
        <Main
          data={data}
          addAnimals={this.addAnimals}
          handleOpenModal={this.handleOpenModal}
        />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedAnimal}</Modal.Header>
        </Modal>
        <ListGroup>
          {this.state.animalData.map((animal, idx) => {
            return (
              <HornedBeast
                title={animal.title}
                description={animal.description}
                image_url={animal.image_url}
                addAnimals={this.props.addAnimals}
                key={idx}
                handleOpenModal={this.props.handleOpenModal}
              />
            );
          })}
        </ListGroup>
        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option>Select Menu</option>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Footer />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>number 1</Accordion.Header>
            <Accordion.Body>number 1 content</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>number 2</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                
                  <HornedBeast
                    title={this.state.animal.title}
            
                  />
                </li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

// 3rd Export the component so other files can import them
export default App;
