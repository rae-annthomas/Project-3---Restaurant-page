 import sushiImage1 from "./images/homePage/img1.jpg";
 import sushiImage2 from "./images/homePage/img2.jpg";
import sushiImage3 from "./images/homePage/img3.jpg";
const pageLoad = () => {
    const bodyContent = document.querySelector("#content")

    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const orderButton = document.createElement('button');
    const menuButton = document.createElement('button');            
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const image3 = document.createElement('img');

    heading.textContent = "THE BEST PLACE TO EAT SUSHI IN THE CITY";
    description.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste?";
    orderButton.textContent = "Order Now";
    menuButton.textContent = "View Menu";
    image1.src = sushiImage1;
    image1.alt = "Sushi dish on a plate";
    image2.src = sushiImage2;
    image2.alt = "Sushi roll with avocado";
    image3.src = sushiImage3;
    image3.alt = "Sushi platter with various pieces";
 
    bodyContent.appendChild(heading);
    bodyContent.appendChild(description);
    bodyContent.appendChild(orderButton);
    bodyContent.appendChild(menuButton);
    bodyContent.appendChild(image1);
    bodyContent.appendChild(image2);
    bodyContent.appendChild(image3);
};


export { pageLoad };
