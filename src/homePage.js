import sushiImage1 from "./images/homePage/img1.jpg";
import sushiImage2 from "./images/homePage/img2.jpg";
import sushiImage3 from "./images/homePage/img3.jpg";        

const pageLoad = () => {
    const bodyContent = document.querySelector("#content")

    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const menuButton = document.createElement('button'); 
    const orderButton = document.createElement('button');           
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const image3 = document.createElement('img');
    const homeDiv = document.createElement('div');
    const homeBtnContainer = document.createElement('div');
    const homeGalleryContainer = document.createElement('div');

    heading.textContent = "THE BEST PLACE TO EAT SUSHI IN THE CITY";
    description.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste?";
    menuButton.textContent = "View Menu";
    menuButton.classList.add("homeBtn");
    orderButton.textContent = "Order Now";
    orderButton.setAttribute('id', 'orderBtn');
    homeGalleryContainer.classList.add("homeGalleryContainer");

    homeDiv.classList.add("homePageDiv");
    homeBtnContainer.classList.add("homeBtnContainer");

    image1.src = sushiImage1;
    image1.alt = "Sushi dish on a plate";
    image2.src = sushiImage2;
    image2.alt = "Sushi roll with avocado";
    image3.src = sushiImage3;
    image3.alt = "Sushi platter with various pieces";
 
    bodyContent.appendChild(homeDiv);
    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);
    homeDiv.appendChild(homeBtnContainer);
    homeBtnContainer.appendChild(menuButton);
    homeBtnContainer.appendChild(orderButton);
    homeDiv.appendChild(homeGalleryContainer);
    bodyContent.appendChild(homeGalleryContainer);
    homeGalleryContainer.appendChild(image1);
    homeGalleryContainer.appendChild(image2);
    homeGalleryContainer.appendChild(image3);
};


export { pageLoad };

