// ==================================task #HmvAfRQM======================================

// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(res => {
//         const carts = res.carts;
//         console.log(carts);
//
//         let wrapper = document.createElement('div')
//         wrapper.classList.add('wrapper')
//
//         for (let cart of carts) {
//
//             let cartWrapper = document.createElement('div')
//             cartWrapper.classList.add('cartWrapper')
//             cartWrapper.innerHTML = `
//
//                 <div class = "cartHeader">
//                     <h2>Кошик №: ${cart.id}</h2>
//                     <p><strong>Користувач ID:</strong> ${cart.userId}</p>
//                     <p><strong>Кількість товарів:</strong> ${cart.totalProducts}</p>
//                     <p><strong>Загальна сума:</strong> $${cart.total.toFixed(2)}</p>
//                     <p><strong>Сума зі знижкою:</strong> $${cart.discountedTotal.toFixed(2)}</p>
//                     <h3>Товари:</h3>
//                 <div>
//             `
//             let products = document.createElement('div')
//             products.classList.add('products')
//
//             for (const product of cart.products) {
//                 let productWrapper = document.createElement('div')
//                 productWrapper.classList.add('productWrapper')
//                 productWrapper.innerHTML = `
//
//                 <img src="${product.thumbnail}" alt="${product.title}">
//                     <div>
//                         <h4>${product.title}</h4>
//                         <p>Ціна: $${product.price}</p>
//                         <p>Кількість: ${product.quantity}</p>
//                         <p>Загальна сума: $${product.total.toFixed(2)}</p>
//                         <p>Зі знижкою: $${product.discountedTotal.toFixed(2)}</p>
//                     </div>
//
//                 `
//                 products.appendChild(productWrapper)
//             }
//             cartWrapper.appendChild(products)
//             wrapper.appendChild(cartWrapper)
//         }
//         document.body.appendChild(wrapper)
//     })

// ==================================task #HmvAfRQM======================================

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res =>{
        const recipes = res.recipes
        console.log(recipes);

        let wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')
x
        let ingredientsUl = document.createElement('ul')
        for (let ingredientsUlElement of recipes.ingredients) {
            let ingredientLi = document.createElement('li')
            ingredientLi.appendChild(ingredientsUlElement)
            ingredientsUl.appendChild(ingredientLi)
        }

        console.log(ingredientsUl);
    });


