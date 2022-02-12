const projects = $(".dropdown-items")
const yellowTriangle = $("#yellow-triangle");
const blueTriangle = $("#blue-triangle");
const pinkTriangle = $("#pink-triangle");
const squareForLiveLink = $("#work-square > a"); 
const circleForYear = $("#work-circle > a");
const triangleForRepoLink = $("#work-triangle > a");

const projectsArray = [
    {
        title: "CS Icons Quiz",
        date: "Dec. 2021",
        deployedLink: "https://amyshafer.github.io/CS-Icons-Quiz/",
        repoLink: "https://github.com/AmyShafer/CS-Icons-Quiz",
        gif: "./assets/images/CS-Icons-Quiz.gif"
    },
    {
        title: "Weather App",
        date: "Feb. 2022",
        deployedLink: "https://amyshafer.github.io/Its-Raining-Again-Or-Is-It",
        repoLink: "https://github.com/AmyShafer/Its-Raining-Again-Or-Is-It",
        gif: "./assets/images/weatherGirlsApp.gif"
    },
    {
        title: "Mad Archer's Cookbook",
        date: "Jan. 2022",
        deployedLink: "https://amyshafer.github.io/Mad-Archers-Cookbook",
        repoLink: "https://github.com/AmyShafer/Mad-Archers-Cookbook",
        gif: "./assets/images/madArchersCookbook.gif"
    },
    {
        title: "Scheduler",
        date: "Jan. 2022",
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

  // change the text of "Live Link" to the title of the selected project and a link to the deployed project
  squareForLiveLink.attr("href", projectsArray[index].deployedLink);
  squareForLiveLink.text(projectsArray[index].title)
  // change the date to the month and year the project was most recently published to GitHub
  circleForYear.attr("href", projectsArray[index].deployedLink);
  circleForYear.text(projectsArray[index].date)
  // change the Repo link so it is a link to the Repo
  triangleForRepoLink.attr("href", projectsArray[index].repoLink);
  triangleForRepoLink.text("Repo Link")
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

/* jQuery event listener - listens for the save buttons being clicked */
$('li').each(function() {
  $(this).click(function(event) {
    showProject(event);
  })
})
