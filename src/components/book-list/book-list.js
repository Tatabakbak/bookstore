import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import "./book-list.css";
import {withBookstoreService} from "../hoc";
import {fetchBooks, bookAddedToCart} from "../../actions";
import {compose} from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}
                            />
                        </li>)
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if (error) return <ErrorIndicator/>;

        if (loading) return <Spinner/>;

        return <BookList books={books} onAddedToCart={onAddedToCart}/>;
    }
}

const mapStateToProps = ({bookList}) => {
    return {
        books: bookList.books,
        loading: bookList.loading,
        error: bookList.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);