import React, { Component } from 'react';
import '../modal/index.css';
class Modal extends Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (this.props.open) {
            return null;
        }

        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <h1>Hello</h1>
                    <button onClick={this.onClose}>Close Modal</button>
                </div>
            </section>
        );
    }
}

export default Modal;