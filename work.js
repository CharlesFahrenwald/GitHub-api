'use strict';

function userInput(){
let textInput = $("#listen-user-input").val();
return textInput;
}

function submitLink(){
$("search-form").submit(e => {
    e.preventDefault();
    searchName(userInput)
});
}

function seachName(){
    featch("https://api.github.com/users/" + usreInput() + "/repo")
    .then(response => response.json())
    .then (responseJson => displayResults(responseJson))
    .catch(error => alert ("Unable to find github user"))
}

function displayResults(respnseJson) {
    console.log(respnseJson);
    $("#display-profile").empty();
    let responseHtml = "";
    respnseJson.forEach(userRepo => {
        responseHtml += ` <div class = "panel panel-default"
        <div class="panel-heading">
        <h2 class="panel-title">${userRepo.name}</h2>
        </div>
        <div class="panel-body">
        <div class="row"
        <div class="col"
        <a href="${userRepo.html_url}">Repo Link</a>
        </div>
        </div>
        </div>`;
    });
    $("#display-profile").html(responseHtml);
    $(".display-results-container").removeClass("hidden");
}

$(document).ready(function() {
    searchName();
});