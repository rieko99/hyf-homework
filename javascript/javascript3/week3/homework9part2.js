class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        // Implement functionality here
        return this.products.push(product)
    }

    removeProduct(product) {
        // Implement functionality here
        let index = this.products.indexOf(product)
        this.products.splice(index, 1)
    }

    getTotal() {
        // Implement functionality here
          let p1 = document.createElement('p');
          document.body.appendChild(p1);
          let totleAmout = 0;
          let totle = this.products.map(b => b)
          totle.forEach(product => totleAmout += product.price)
          p1.innerHTML = 'Totle price: ' + totleAmout;
    }

    renderProducts() {
        // Implement functionality here
        let ul = document.querySelector('.ul');
        this.products.map((product) => {
          let lis = document.createElement('li');
          lis.innerHTML = product.name;
          ul.appendChild(lis);
        })

    }

    getUser() {
        // Implement functionality here
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then((data) => {
          let p = document.createElement('p');
          document.body.appendChild(p);
          p.innerHTML = 'username: ' + data.username;
        })
    }
}

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);
const something = new Product('something', 2000);
shoppingCart.getUser();
shoppingCart.addProduct(something);
shoppingCart.renderProducts();
shoppingCart.getTotal();
// shoppingCart.removeProduct(something);
