import React from 'react';
import loadable from '@loadable/component';
import { withHooksHOC } from './withHooksHOC';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PerfectScrollbar from 'react-perfect-scrollbar';

import './searchpage.styles.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

import API from '../../lib/api';

const Seller = loadable(() => import('../../components/seller/seller.component'), {
    fallback: <div>Loading...</div>,
});
const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});
const SearchBar = loadable(() => import('../../components/main-banner/search/search.component'), {
    fallback: <div>Loading...</div>,
});

document.body.classList.add('search-body');
 
class SearchPage extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchQuery : (this.props.match.params.id !== undefined ) ? this.props.match.params.id : '',
            openSearch : false,
            hideQuery : false,
            searchResults : '',
            height: null,
            loading: true
        }
    }

    componentDidMount(){
        const self = this;
        API.get(`search?query=${this.state.searchQuery}`)
        .then(function(response){
            self.setState({ searchResults : response.data });
            setTimeout(
                function() {
                    self.setState({ loading : false });
                },
                1000
            );
        });

        self.setState({ 
            height : (this.props.size.height - 352)
        });
    }
    
    componentWillReceiveProps(nextProps) {

        const query = (nextProps.match.params.id !== undefined ) ? nextProps.match.params.id : '' ;
        this.setState({ 
            searchQuery : query
        });

        const self = this;
        API.get(`search?query=${query}`)
        .then(function(response){
            self.setState({ 
                searchResults : response.data,
                openSearch : false,
                hideQuery : false,
            });
        });
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
        const { searchResults , height } = this.state;
        console.log('loading' , this.state.loading);     
        return (
            <div className="searchPage">                
                <div className="searchSidebarWrap" style={{ minHeight : `${height}px` }}>
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
                    <div className={`${this.state.openSearch ? 'openSeach' : ''} searchBarWrap`}>
                        <SearchBar/>
                    </div>
                </div>
                <div 
                    className="searchItemWrapper"
                >
                    <div className="clipbg"/>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {
                            searchResults.length ?
                            (<div className="searchDirectory">
                                <h2 className="title">Hear's what we found for u</h2>
                                <h4 className="subtitle">We found <span>{searchResults.length}</span> matches for you</h4>
                                <PerfectScrollbar 
                                    className="searchItems d-flex justify-content-between flex-wrap"
                                    style={{
                                        height : `calc(${height}px - 200px)`
                                    }}
                                >
                                    {
                                        Object.values(searchResults)
                                            .map(({id , ...otherTermProps}) => (
                                                <Seller key={id} {...otherTermProps}/>
                                            ))
                                    }
                                </PerfectScrollbar>
                            </div>)
                            :
                            (<div className="searchDirectory" ref={this.Sediv}>
                                <div className="noResults">
                                    <h2>No results found.</h2>
                                </div>
                            </div>)
                        }
                    </CSSTransitionGroup>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withHooksHOC(SearchPage);