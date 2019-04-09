import book from '../helpers/book.js';
import util from '../helpers/util.js';

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = ``;
    domString += `Title: ${bookInfo.title}`;
    domString += `<img src=${bookInfo.image} alt="book cover"/>`;
    domString += `<p>Price: ${bookInfo.price}</p>`;
    domString += `<button class="btn btn-danger">Add to Cart</button>`;
    util.printToDom('store-container', domString);
};

export default { makeStore };