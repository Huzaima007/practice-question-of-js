document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      document.getElementById("loading").style.display = "none";
      const grid = document.getElementById("product-grid");
      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>$${product.price}</p>
                    <button class="button">Add to Cart</button>
                `;
        grid.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
