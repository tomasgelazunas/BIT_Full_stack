import { products } from './products.js';

const stars = rating => {
    const remainder = parseInt(rating.toFixed(2).toString().slice(-2));
    let str = '';

    for (let i = 0; i < 5; i++) {
        if (remainder >= 25 && remainder <= 75 && Math.floor(rating) === i) {
            str += '<i class="bi bi-star-half"></i>';
        } else if (i <= Math.round(rating) - 1) {
            str += '<i class="bi bi-star-fill"></i>';
        } else {
            str += '<i class="bi bi-star"></i>';
        }
    }

    str += rating;
    return str;
}

const columns = data => {
    const priceBeforeDiscound = (data.price + Math.round(data.price * data.discountPercentage / 100)).toFixed(2);

    return `
    <div class='col col-3 flex justify-center align-center'>
    <img src='${data.thumbnail}' alt='Thumbnail'>
    <div class='discount'>-${Math.round(data.discountPercentage)}%</div>
    </div>
    <div class='col col-6'>
    <h3 class='title'>${data.title}</h3>
    <div class='rating'>${stars(data.rating)}</div>
    <p class='description'>${data.description}</p>
    </div>
    <div class='col col-3'>
    <div class='price'>
    <span class='afterDiscount'>$${data.price.toFixed(2)}</span>
    <sup class='beforeDiscount'>$${priceBeforeDiscound}</sup>
    </div>
    <div class='addToCart'>Add to cart</div>
    </div>
    `;
}

const appendRow = data => {
    const node = document.createElement('DIV');
    node.className = 'row main';
    node.id = 'row-' + data.id;
    node.innerHTML = columns(data);
    document.getElementById('products').appendChild(node);
}

products.forEach((el, index) => appendRow(el));