import dish1 from "./images/menuPage/dish1.jpg";
import dish2 from "./images/menuPage/dish2.jpg";
import dish3 from "./images/menuPage/dish3.jpg";
import dish4 from "./images/menuPage/dish4.jpg";
import dish5 from "./images/menuPage/dish5.jpg";
import dish6 from "./images/menuPage/dish6.jpg";
import dish7 from "./images/menuPage/dish7.jpg";
import dish8 from "./images/menuPage/dish8.jpg";
import dish9 from "./images/menuPage/dish9.jpg";
import dish10 from "./images/menuPage/dish10.jpg";
import dish11 from "./images/menuPage/dish11.jpg";
import dish12 from "./images/menuPage/dish12.jpg";


const menuItems = [
    {
        image: dish1,
        title: "California Roll",
        description: "Crab meat, creamy avocado and fresh cucumber wrapped in seasoned sushi rice and nori."
    },
    {
        image: dish2,
        title: "Salmon Nigiri",
        description: "Fresh slices of salmon delicately placed over hand-pressed seasoned sushi rice."
    },
    {
        image: dish3,
        title: "Dragon Roll",
        description: "A delicious sushi roll filled with shrimp tempura and cucumber, topped with avocado and eel sauce."
    },
    {
        image: dish4,
        title: "Spicy Tuna Roll",
        description: "Fresh tuna mixed with spicy mayo, cucumber and sushi rice, wrapped in crisp nori."
    },
    {
        image: dish5,
        title: "Philadelphia Roll",
        description: "Smoked salmon, cream cheese and cucumber combined in a smooth and flavorful sushi roll."
    },
    {
        image: dish6,
        title: "Shrimp Tempura Roll",
        description: "Crispy golden shrimp tempura rolled with avocado, cucumber and seasoned sushi rice."
    },
    {
        image: dish7,
        title: "Rainbow Roll",
        description: "A California roll topped with colorful slices of tuna, salmon and avocado."
    },
    {
        image: dish8,
        title: "Eel Nigiri",
        description: "Grilled freshwater eel glazed with sweet and savory sauce over sushi rice."
    },
    {
        image: dish9,
        title: "Vegetable Roll",
        description: "A refreshing combination of avocado, cucumber, carrot and fresh vegetables."
    },
    {
        image: dish10,
        title: "Salmon Avocado Roll",
        description: "Fresh salmon and creamy avocado rolled together with sushi rice and nori."
    },
    {
        image: dish11,
        title: "Tuna Nigiri",
        description: "Premium fresh tuna served over hand-shaped sushi rice for a simple, delicate flavor."
    },
    {
        image: dish12,
        title: "Tempura Uramaki",
        description: "A crispy tempura-filled inside-out roll with avocado, cucumber and a drizzle of special sauce."
    }
];

const createMenuItem = (item) => {
    const menuItemDiv = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    image.src = item.image;
    image.alt = item.title;
    title.textContent = item.title;
    description.textContent = item.description;
     
    menuItemDiv.classList.add("menuItem");
    menuItemDiv.appendChild(image);
    menuItemDiv.appendChild(title);
    menuItemDiv.appendChild(description);

    return menuItemDiv;
};

const menuLoad = () => {
    const bodyContent = document.querySelector("#content")
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const homeDiv = document.createElement('div');
    const menuGalleryContainer = document.createElement('div');

   
    heading.textContent = "OUR MENU";
    description.textContent = "lore ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste?";
    menuGalleryContainer.classList.add("menuGalleryContainer");
    homeDiv.classList.add("homePageDiv");

   
    
    bodyContent.appendChild(homeDiv);
    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);
    homeDiv.appendChild(menuGalleryContainer);
    bodyContent.appendChild(menuGalleryContainer);

    function addMenuItems(menuItems) {
            menuItems.forEach(item =>{
            menuGalleryContainer.appendChild(createMenuItem(item));
          })
        }
      
        addMenuItems(menuItems);
};





export { menuLoad };
 