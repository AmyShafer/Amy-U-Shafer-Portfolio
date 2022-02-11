const projects = $("dropdown-items")
const squareForLivetLink = $("work-square");
const triangleForRepoLink = $("work-triangle");
const circleForYear = $("work-circle");
const yellowTriangle = $("yellow-triangle");
const blueTriangle = $("blue-triangle");
const pinkTriangle = $("pink-triangle");

const projects = [
    {
        title: "Computer Science Icons Quiz",
        date: "December 2021",
        deployedLink: "https://amyshafer.github.io/CS-Icons-Quiz/",
        repoLink: "https://github.com/AmyShafer/CS-Icons-Quiz",
        gif: "CS-Icons-Quiz.gif"
    },
    {
        title: "It's Raining Men...Or Is It?",
        date: "February 2022",
        deployedLink: "https://amyshafer.github.io/Its-Raining-Again-Or-Is-It",
        repoLink: "https://github.com/AmyShafer/Its-Raining-Again-Or-Is-It",
        gif: "weatherGirlsApp.gif"
    },
    {
        title: "Mad Archer's Cookbook",
        date: "January 2022",
        deployedLink: "https://amyshafer.github.io/Mad-Archers-Cookbook",
        repoLink: "https://github.com/AmyShafer/Mad-Archers-Cookbook",
        gif: "madArchersCookbook.gif"
    },
    {
        title: "Scheduler for the Wicked Quiz",
        date: "January 2022",
        deployedLink: "https://amyshafer.github.io/Scheduler-for-the-Wicked ",
        repoLink: "https://github.com/AmyShafer/Scheduler-for-the-Wicked ",
        gif: "scheduler666.gif"
    }
]

/* Function allows user to select a project to look at */
function showProject() {
  // hide all the triangles     
  $("yellowTriangle").attr("display", "none");
  $("blueTriangle").attr("display", "none");
  $("pinkTriangle").attr("display", "none");
  // show the gif of the selected project

  // change the text of "Live Link" to the title of the selected project and a link to the deployed project

  // change the date to the month and year the project was most recently published to GitHub

  // change the Repo link so it is a link to the Repo
}  

/* jQuery event listener - listens for the project being selected in the dropdown menu */
  $(".dropdown-items").each(function() {
    $(this).change(function(event) {
      showProject(event);
    })
  })

  /*
  $( "select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  })
  .change();
  */