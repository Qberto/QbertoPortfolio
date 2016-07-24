/**
 * Created by gmh148 on 4/24/16.
 */
$(function(){
    // Declare variable for the current image
    var current_li;

    // Function to set the table image and use ajax to access image properties
    function setImg(src, id){
        // grabs image and looks for attribute source to set the frame's attribute
        $("#main").attr("src", src);

        $.get("path", function(data){
            
        });
    }


    // Logic to handle clicking of an image thumbnail
    $("#portfolio img").click(function(){
        // Grab the clicked image source and element id
        var src = $(this).attr("src");
        var id = $(this).attr("id");
        // Set the variable for the current image to the parent element
        current_li = $(this).parent();
        // Call the setImg function
        setImg(src, id);
        // Now we want the frame and overlay to appear
        $("#frame").fadeIn();
        $("#overlay").fadeIn();
    });

    // Logic to handle clicking of opaque overlay
    $("#overlay").click(function(){
        // Make overlay disappear
        $(this).fadeOut();
        // Make frame disappear
        $("#frame").fadeOut();
    });

    // Logic to handle right arrow clicking event
    $("#right").click(function(){
        // Check if the current line element is the last one in the list
        if (current_li.is(":last-child")){
            var next_li = $("#portfolio li").first();
        } else {
            // Declare a variable for the next list element (next picture) and its source
            var next_li = current_li.next();
        }
        var next_src = next_li.children("img").attr("src");
        var id = next_li.children("img").attr("id");
        // Grab the main image in the frame and set its source attribute to the next_src value
        setImg(next_src, id);
        // Change the value of the current_li element to the newly determined list element
        current_li = next_li;
    });

    // Logic to handle left arrow clicking event
    $("#left").click(function(){
        if (current_li.is(":first-child")){
            var prev_li = $("#portfolio li").last();
        } else {
            var prev_li = current_li.prev();
        }
        var prev_src = prev_li.children("img").attr("src");
        var id = prev_li.children("img").attr("id");
        setImg(prev_src, id);
        current_li = prev_li;
    });

    // Logic to handle opacity change for buttons when mouseover and mouseleave
    $("#right, #left").mouseover(function(){
       $(this).css("opacity", "0.75");
    });
    $("#right, #left").mouseleave(function(){
        $(this).css("opacity", "0.50");
    });


    
});