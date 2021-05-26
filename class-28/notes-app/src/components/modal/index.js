import './_modal.scss';

import React from 'react';

class Modal extends React.Component {

  render() {

    return (
      <div className="overlay">
        <div className="modal">
          <div className="header">
            <span class="title">{this.props.title}</span>
            <button onClick={this.props.close}>X</button>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );

  }

}

export default Modal;
