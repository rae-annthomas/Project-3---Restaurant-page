import team from './images/aboutPage/team.jpg';

const aboutLoad = () => {
    const bodyContent = document.querySelector("#content")
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const homeDiv = document.createElement('div');
    const teamImage = document.createElement('img');

   
    heading.textContent = "About us";
    description.textContent = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? loremipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iste?";
    homeDiv.classList.add("homePageDiv");
    teamImage.src = team;
    teamImage.alt = "Team of chefs in the kitchen";
    teamImage.classList.add("teamImage");

    
    bodyContent.appendChild(homeDiv);
    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);
    homeDiv.appendChild(teamImage);
   
};





export { aboutLoad };
 