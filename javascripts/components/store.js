import book from '../helpers/book.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const bookInfo = book.getBook();
    console.log(bookInfo);
};

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = ``;
    domString += `<div class="d-flex flex-column" style="width: 250px; margin-left: 20px;">`
    domString += `<h2>Title: ${bookInfo.title}</h2>`;
    domString += `<img src=${bookInfo.image} alt="book cover"/>`;
    domString += `<p>Price: ${bookInfo.price}</p>`;
    domString += `<button id="addToCartButton" class="btn btn-danger">Add to Cart</button>`;
    domString += `</div>`
    util.printToDom('store-container', domString);
    document.getElementById("addToCartButton").addEventListener("click", addToCartEvent);
};

export default { makeStore };