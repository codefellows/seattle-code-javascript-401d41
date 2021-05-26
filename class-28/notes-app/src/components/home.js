import React from 'react';
import Modal from './modal';
import { If, Then, Else } from './if';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <section className="homepage">
        <If condition={this.state.open}>
          <Then>
            <Modal title="test modal window" close={this.toggleModal}>
              <p>cool content for my modal</p>
            </Modal>
          </Then>
          <Else>
            <button onClick={this.toggleModal}>Click for Rando Modal Window!</button>
          </Else>
        </If>
      </section>
    )
  }
}

export default HomePage;