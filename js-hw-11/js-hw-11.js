// ==================================task #HmvAfRQM======================================

fetch('https://dummyjson.com/products')
  .then(value => value.json())
  .then(res => {
    console.log(res);
    let {products} = res;

    document.write(`<div>`);
    for (const product of products) {
      document.write(`<div>`);
      document.write(`<p>${product.id}___ ${product.brand} - ${product.price}</p>`);
      document.write(`<img src="${product.thumbnail}" alt="">`)
      document.write(`</div>`);
    }
    document.write(`</div>`);


  });
