import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';

class BookModal extends Component {
    state = {
        modal: false,
        title: '' 
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.title]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newBook = {
            title: this.state.title
        }

        //Add book via addBook action
        this.props.addBook(newBook);

        //Close modal 
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                 color="dark"
                 style={{marginBottom: '2rem'}}
                 onClick={this.toggle}
                >Add Book</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Books</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="book">Book</Label>
                                <Input 
                                    type="text"
                                    title="title"
                                    id="book"
                                    placeholder="Add CookBook"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add CookBook</Button>
                            </FormGroup>    
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    book: state.book
});

export default connect(mapStateToProps, { addBook })(BookModal);