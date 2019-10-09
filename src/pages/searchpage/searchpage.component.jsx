import React from 'react';

import './searchpage.styles.scss';

//import API from '../../lib/api';

class SearchPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchQuery : this.props.match.params.id,
            openSearch : false,
            hideQuery : false
        }
    }

    openSeachHandle = () => {
        setTimeout(
            function() {
                this.setState({ openSearch : true });
            }
            .bind(this),
            1000
        );
        this.setState({ hideQuery : true });
    }

    render() {
        console.log(this.state.searchQuery)
        return (
            <div className="searchPage">
                <div className="searchSidebarWrap">
                    <div className={`${this.state.hideQuery ? 'hideQuery' : ''} searchQuery`}>
                        <h1>Heard you are looking for</h1>
                        <span className="searchItem">{this.state.searchQuery}</span>
                        <div className="anotherSearch">
                            <h5>Not what you want?</h5>
                            <h3 
                                className="openSearch"
                                onClick={this.openSeachHandle}
                            >Make another search</h3>
                        </div>
                    </div>
                    <div className={`${this.state.openSearch ? 'openSeach' : ''} searchBarWrap`}></div>
                </div>
                <div className="searchItemWrapper"></div>
            </div>
        )
    }
}

export default SearchPage;