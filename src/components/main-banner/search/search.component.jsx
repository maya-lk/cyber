import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchItem } from '../../../redux/search/search.actions';

import './search.styles.scss';

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : `${process.env.PUBLIC_URL}/` ;

class Search extends React.Component{

    handleClick = event => {
        event.preventDefault();
        const { searchItem } = this.props;

        this.props.history.push(`${BaseURL}search/${searchItem}`);
        setTimeout(
            function() {
                this.props.setSearchItem('');
            }
            .bind(this),
            3000
        );        
    }

    handleChange = event => {
        const { value } = event.target;
        this.props.setSearchItem( value );
    }

    render(){
        const { searchItem } = this.props;
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
                            value={searchItem}
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

const mapStateToProps = ({ search }) => ({
    searchItem : search.searchItem
});

const mapDispachToProps = dispach => ({
    setSearchItem : (searchItem) => dispach( setSearchItem(searchItem) )
});

export default connect(mapStateToProps , mapDispachToProps)(withRouter(Search));