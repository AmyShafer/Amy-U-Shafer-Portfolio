const projects = $(".dropdown-items")
const yellowTriangle = $("#yellow-triangle");
const blueTriangle = $("#blue-triangle");
const pinkTriangle = $("#pink-triangle");
const noTriangles = $("#no-triangles");
const addGif = $("#project-gif");
const squareForLiveLink = $("#work-square > a"); 
const circleForYear = $("#work-circle > a");
const triangleForRepoLink = $("#work-triangle > a");
const showProjectGif = $("#black-half3");

const projectsArray = [
    {
        title: "",
        seeProject: "Take Quiz",
        deployedLink: "https://amyshafer.github.io/CS-Icons-Quiz/",
        repoLink: "https://github.com/AmyShafer/CS-Icons-Quiz",
        gif: "./assets/images/CS-Icons-Quiz.gif"
    },
    {
        title: "",
        seeProject: "Find Weather",
        deployedLink: "https://amyshafer.github.io/Its-Raining-Again-Or-Is-It",
        repoLink: "https://github.com/AmyShafer/Its-Raining-Again-Or-Is-It",
        gif: "./assets/images/weatherGirlsApp.gif"
    },
    {
        title: "",
        seeProject: "Get Recipes",
        deployedLink: "https://amyshafer.github.io/Mad-Archers-Cookbook",
        repoLink: "https://github.com/AmyShafer/Mad-Archers-Cookbook",
        gif: "./assets/images/madArchersCookbook.gif"
    },
    {
        title: "",
        seeProject: "Plan Ahead",
        deployedLink: "https://amyshafer.github.io/Scheduler-for-the-Wicked ",
        repoLink: "https://github.com/AmyShafer/Scheduler-for-the-Wicked ",
        gif: "./assets/images/scheduler666.gif"
    }
]

/* Function allows user to select a project to look at */
function showProject(event) {
  event.preventDefault();
  // hide all the triangles  
  const selectedProject = $(event.currentTarget).text();
  const index = $(event.currentTarget).find('a:first').attr("data-set");
  yellowTriangle.hide();
  blueTriangle.hide();
  pinkTriangle.hide();
  noTriangles.show();
  addGif.show();
  addGif.attr("src", projectsArray[index].gif);
  addGif.attr("alt", projectsArray[index].title);

  // change the text of "Live Link" to the title of the selected project and a link to the deployed project
  squareForLiveLink.attr("href", projectsArray[index].deployedLink);
  squareForLiveLink.text(projectsArray[index].title)
  // change the date to the month and year the project was most recently published to GitHub
  circleForYear.attr("href", projectsArray[index].deployedLink);
  circleForYear.text(projectsArray[index].seeProject)
  // change the Repo link so it is a link to the Repo
  triangleForRepoLink.attr("href", projectsArray[index].repoLink);
  triangleForRepoLink.text("Repo")
}  

/* jQuery event listener - listens for the dropdown menu to be clicked */
$('#dropdownMenuButton1').on("click", function () {
  const dropdownBtn = $(this).siblings("ul");
  if (dropdownBtn.attr("class").includes("hidden")) {
    dropdownBtn.removeClass("hidden");
  } else {
    dropdownBtn.addClass("hidden");
  } 
})

/* jQuery event listener - listens for the project selection */
$('.dropdown-menu li').each(function() {
  $(this).click(function(event) {
    showProject(event);
  })
})

/* jQuery Events for Mobile */
$('#dropdownMenuButton1').on("tap", function () {
  const dropdownBtn = $(this).siblings("ul");
  if (dropdownBtn.attr("class").includes("hidden")) {
    dropdownBtn.removeClass("hidden");
  } else {
    dropdownBtn.addClass("hidden");
  } 
})

/* jQuery Events for Mobile */
$('.dropdown-menu li').each(function() {
  $(this).tap(function(event) {
    showProject(event);
  })
})
