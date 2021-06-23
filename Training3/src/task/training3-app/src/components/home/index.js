import React,{Component} from 'react';
import Modal from '../modal';

class Home extends Component {
    state={
        open : true
    };
    
    openModal = (e) => {
        
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    };

    handleCallback = (childData) =>{
        
        this.setState({name: childData})
    }
   


    render() {
        return (
            <main className="formNumber">
                <section>
                    <h1>{this.state.name}</h1>
                    <button className="btn"
                        onClick={(e) => {
                            this.openModal(e);
                        }}>
                        Open Modal
                    </button>
                </section>

                <Modal open={this.state.open}
                 onClose={this.openModal} 
                 parentCallback = {this.handleCallback}
                 >

                    </Modal>
            </main>
        );
    }
}

export default Home;