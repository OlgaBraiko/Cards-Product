class Products {
  render() {
    let htmlCatalog = "";
    catalog.forEach(
      ({ id, title, price, image, description, category, rating }) => {
        htmlCatalog += `
            <li>
            <title>${title}</title>
            <img src ='${image}' />
            <span>${price}</span>
            <span>${description}</span>
            <span>${category}</span>
            <span>${rating}</span>
             
            </li>
            
            `;
      }
    );
    const html = `
        <ul>
        ${htmlCatalog}
        </ul>
        `;

    cardFirst.innerHTML = html;
    cardSecond.innerHTML = html;
    cardThird.innerHTML = html;
    cardFourth.innerHTML = html;
    cardFifth.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();

const cardFirst = document.getElementById("1");
const cardSecond = document.getElementById("2");
const cardThird = document.getElementById("3");
const cardFourth = document.getElementById("4");
const cardFifth = document.getElementById("5");
