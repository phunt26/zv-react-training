import React,{Component} from 'react';
import '../home/index.css'

class Home extends Component {
    state={
        open : false
    };
    
    openModal = (e) => {
        
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return (
            <main>
                <section>
                    <h1>Simple-React-Modal</h1>
                    <button
                        onClick={(e) => {
                            this.openModal(e);
                        }}>
                        Open Modal
                    </button>
                </section>
                <section style={{display: this.state.open ? 'block' : 'none' }} className="modal-container" id="modal">
                <div className="modal-content">
                    <h1>Hello</h1>
                    <button onClick={this.openModal}>Close Modal</button>
                </div>
                 </section>
            
            </main>
        );
    }
}

export default Home;