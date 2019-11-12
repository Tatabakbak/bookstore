import React from 'react';
import {BookstoreServiceConsumer} from "../bookstore-service-context";

const withBookstoreService = () => (Wrapper) => (props) =>{
    return (
        <BookstoreServiceConsumer>
            {
                (bookstoreService) => {
                    return <Wrapper {...props} bookstoreService={bookstoreService}/>
                }
            }
        </BookstoreServiceConsumer>
    )
};

export default withBookstoreService;