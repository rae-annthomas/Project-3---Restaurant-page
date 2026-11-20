 import sushiImage1 from "./images/homePage/img1.jpg";
 import sushiImage2 from "./images/homePage/img2.jpg";
import sushiImage3 from "./images/homePage/img3.jpg";

const aboutLoad = () => {
    const bodyContent = document.querySelector("#content")

    const div = document.createElement('div');
    div.id= "menu-content";
    
    const heading = document.createElement('h1');
    const description = document.createElement('p');           
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const image3 = document.createElement('img');

    heading.textContent = "Our Menu";
    description.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste?";
    image1.src = sushiImage1;
    image1.alt = "Sushi dish on a plate";
    image2.src = sushiImage2;
    image2.alt = "Sushi roll with avocado";
    image3.src = sushiImage3;
    image3.alt = "Sushi platter with various pieces";
 
    div.appendChild(heading);
    div.appendChild(description);
    div.appendChild(image1);
    div.appendChild(image2);
    div.appendChild(image3);
    bodyContent.appendChild(div);
    
};


export { aboutLoad };
