import './book-list.css';
import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import {connect} from 'react-redux';
import {booksLoaded} from '../../actions/actions';
import withBookstoreService from '../hoc/with-bookstore-service';
// import {bindActionCreators} from 'redux';

class Booklist extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props;        
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        
        return (
            <ul>
                {books.map(book => (
                    <li key = {book.id} ><BookListItem book = {book} /></li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {books}
}

// const mapDispatchToProps = (dispatch) => {
//     // return {
//     //     booksLoaded: (newBooks) => {
//     //         dispatch(booksLoaded(newBooks))
//     //     }
//     // }
//     return bindActionCreators({booksLoaded}, dispatch)
// }

const mapDispatchToProps = {booksLoaded}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(Booklist))