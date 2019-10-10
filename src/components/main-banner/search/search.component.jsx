import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

import './search.styles.scss';

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : `${process.env.PUBLIC_URL}/` ;

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchItem : ''
        }
    }

    handleClick = event => {
        event.preventDefault();
        this.props.history.push(`${BaseURL}search/${this.state.searchItem}`);
        setTimeout(
            function() {
                this.setState({ searchItem : '' });
            }
            .bind(this),
            3000
        );        
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ searchItem : value })
    }

    render(){
        return(
            <div className="searchWrapper">
                <h4>What can we help you with today?</h4>
                <Form onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <FormControl
                            placeholder="Type in any service or any vendor you are looking for"
                            aria-label="Type in any service or any vendor you are looking for"
                            aria-describedby="searchSubmit"
                            name="searchItem"
                            value={this.state.searchItem}
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="searchSubmit">
                                <Button 
                                    type="submit" 
                                    className="searchBtn"
                                    onClick={this.handleClick}
                                >
                                    <FontAwesomeIcon icon={faSearch}/>
                                </Button>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        )
    }
}

export default withRouter(Search);