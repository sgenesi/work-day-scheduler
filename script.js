$(document).ready(function () {
    // current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


    $("saveBtn").on("click", function () {
        var userInput = $(this).siblings(".text-entry").val();
        var time = $(this).parent().attr("id");

        // save to local storage
        localStorage.setItem(time, value);

    })




    // color coding for past, present, and future
    function timeTracking() {
        // get current time
        var presentHour = moment().hours();


        $(".time-block").each(function () {
            debugger
            var timeBlock = parseInt($(this).attr("id"));

            // loop over time boxes
            if (timeBlock < presentHour) {
                $(this).addClass("past");
            }
            else if (timeBlock === presentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    timeTracking();

    var interval = setInterval(timeTracking, 15000);


    $("#nine.text-entry").val(localStorage.getItem("nine"));
    $("#ten.text-entry").val(localStorage.getItem("ten"));
    $("#eleven.text-entry").val(localStorage.getItem("eleven"));
    $("#twelve.text-entry").val(localStorage.getItem("twelve"));
    $("#one.text-entry").val(localStorage.getItem("one"));
    $("#two.text-entry").val(localStorage.getItem("two"));
    $("#three.text-entry").val(localStorage.getItem("three"));
    $("#four.text-entry").val(localStorage.getItem("four"));
    $("#five.text-entry").val(localStorage.getItem("five"));




})

