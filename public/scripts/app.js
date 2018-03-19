var $games-list;

$(document).ready(function() {
  $gamesList = $("#games-list");
  //the secodn arg, '.selectedTeam' is event delegation
  $gamesList.on("click", ".selectedTeam", function() {
    console.log(
      "clicked selectedTeam to",
      "/" + $(this).attr("data-id")
    );
    $.ajax({
      method: "GET",
      url: "/api/projects/" + $(this).attr("data-id"),
      success: viewProjectSuccess,
      error: viewProjectError
    });
  });
}); //end docunment ready
