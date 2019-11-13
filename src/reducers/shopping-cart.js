
const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const quantity = state.shoppingCart.cartItems.find(({id}) => id === action.payload).count;
            return updateOrder(state, action.payload, -quantity);
        default:
            return state.shoppingCart;
    }
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCart: {cartItems, orderTotal}} = state;
    const book = books.find((book) => book.id === bookId);

    const itemIdx = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIdx];
    const newItem = updateCartItem(book, item, quantity);

    return {
        cartItems: updateCartItems(cartItems, newItem, itemIdx),
        orderTotal: orderTotal + book.price * quantity
    };
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        //remove empty item from cart list
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        //add new
        return [...cartItems, item];
    } else {
        //replace existing
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
};

const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price * quantity
    }

};

export default updateShoppingCart;