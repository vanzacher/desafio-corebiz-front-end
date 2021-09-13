// Função que busca os dados da API - Construido com fetch

function fechData() {
    fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const html = data
        .map(products => {
            return `
            <div class="products">
                <p><img src="${products.imageUrl}"</p>
                <p>${products.productName}</p>
                <p>${products.price}</p>
            </div>
            `;
        })
        .join("");
        console.log(html);
        document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
};

fechData();