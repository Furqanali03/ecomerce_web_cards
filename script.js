const div = document.querySelector(".cards");

axios("https://fakestoreapi.com/products")
  .then((res) => {
    console.log(res.data);
    const rowContainer = `
      <div class="row row-cols-1 row-cols-md-3 g-4">
        ${res.data.map(item => `
          <div class="col">
            <div class="card h-100" style="width: 14rem; margin-bottom: 1rem;">
              <img width="80" src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 200px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title">Title: ${item.title}</h5>
                <p class="card-text">Price: $${item.price}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Set the innerHTML of the div to the row container
    div.innerHTML = rowContainer;
  })
  .catch((err) => {
    console.log(err);
  });
