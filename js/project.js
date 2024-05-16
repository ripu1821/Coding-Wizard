const projects = [
  {
    id: 1,
    name: "Wirring Softwares",
    description:
      "I recently completed an exciting website project for an innovative IT company, and I am thrilled to showcase it in my portfolio.Utilizing the advanced capabilities of Supabase, I engineered a robust and secure backend system that efficiently manages data storage and authentication, ensuring a seamless user experience.The website boasts a responsive design, seamlessly adapting to diverse devices and screen sizes.Collaborating closely with the client, I unique details, array of services, and remarkable success stories.Prioritizing user experience, I meticulously crafted the website to be intuitive and easily navigable.Rigorous testing and optimization were conducted to guarantee optimal performance across a variety of browsers and devices.This project exemplifies my unwavering commitment to delivering top- notch, client - centric solutions that consistently exceed expectations.",
    image: "images/wirringsoftwares1.png",
    url: "https://wirringsoftwares.in/",
  },
  {
    id: 2,
    name: "WISE-Wireless Industry Service Excellence",
    description:
      "Harnessing the capabilities of Supabase, I engineered a robust and secure backend solution to seamlessly manage data storage and authentication, enhancing the user experience. The website boasts a responsive design, effortlessly adapting to diverse devices and screen sizes. Collaborating closely with the client, I meticulously tailored the website to meet their unique specifications, showcasing the company details, services, and success stories. With a keen focus on user experience, I ensured the website is intuitive and easy to navigate. Rigorous testing and optimization were conducted to guarantee optimal performance across various browsers and devices. This project exemplifies my unwavering commitment to delivering high-quality, client-focused solutions that consistently exceed expectations.",
    image: "images/wise1.png",
    url: "https://wiseit.in/",
  },
  {
    id: 3,
    name: "Bala Ji Multi Sales",
    description:
      "I spearheaded the creation of a dynamic website for Bala Ji Multi Sales, an esteemed company dedicated to delivering top-tier electronic products and services. The website stands as a testament to the company unwavering commitment to excellence, emphasizing its core values of quality, reliability, and customer satisfaction. Showcasing an extensive array of electronic products, including smartphones, laptops, home appliances, and audio systems from renowned brands, the website offers visitors a seamless shopping experience. With a focus on user-centric design, the website provides personalized attention and detailed product information, ensuring customers make informed choices. This project was a remarkable endeavor aimed at spotlighting the company offerings and its steadfast dedication to delivering exceptional quality and customer service.",
    image: "images/balajimultisales1.png",
    url: "https://www.balajimultisales.in/",
  },
];

function toggleProjectDetails(projectId) {
  const details = document.getElementById(`projectDetails-${projectId}`);
  const detailsHide = document.getElementById(
    `projectDetailsHide-${projectId}`
  );
  const button = document.getElementById(`view-details-${projectId}`);

  if (details.style.display === "none") {
    details.style.display = "block";
    detailsHide.style.display = "none";
    button.textContent = "Hide Details";
  } else {
    details.style.display = "none";
    detailsHide.style.display = "block";
    button.textContent = "View Details";
  }
}

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const projectHtml = `
    <div class="row mt-5">
        <div class="col-md-6 ">
            <div class="img-box">
               <img src="${project.image}" alt="${
    project.name
  }" style="max-width: 100%;">
            </div>
        </div>
        <div class="col-md-6">
            <div class="detail-box">
                <h3>${project.name}</h3>
                <p id="projectDetailsHide-${
                  project.id
                }">${project.description.substring(0, 350)}...</p>
                <p id="projectDetails-${project.id}" style="display: none;">${
    project.description
  }</p>
                <div class="btn-box">
                <a href="${
                  project.url
                } class="btn btn-primary" target="_blank">View
                    Project</a>
                    <button class="view-details" id="view-details-${
                      project.id
                    }" onclick="toggleProjectDetails(${
    project.id
  })">View Details</button>
            </div>
            </div>
        </div>
     </div>
    `;
  projectsContainer.innerHTML += projectHtml;
});
