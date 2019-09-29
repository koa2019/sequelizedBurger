// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
$(document).ready(function() {

    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id)
        var newdevoured = true;

        var newdevouredState = {
            devoured: newdevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevouredState
        }).then(
            function() {
                console.log("changed devoured to", newdevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // initializing new obj with data from index.html form
        var newBurger = {
            burgerName: $("#burger").val().trim(),
        };
        console.log('javascript.js newBurger ', newBurger);

        // Send the POST request with ajax method
        // pass the newBurger obj that was captured by the html form to the api
        $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            })
            .then(
                function() {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                });
        // ).catch(function(err) {
        //     console.log("Error. Burger not saved to API");
        // });

    });
});