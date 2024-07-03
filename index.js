$(".nav-toggle").on('click', function(){
    $("nav").animate({width: "250px"}, 500)
    $(".home-content").animate({marginLeft: "250px"}, 500)
});

$(".closeBtn").on("click", function() {
    $("nav").animate({width: "0"}, 500)
    $(".home-content").animate({marginLeft: "0"}, 500)
});

$(".c-nav-link").on("click", function(e){
    const sectionId = $(e.target).attr("href");
    const sectionOffset = $(sectionId).offset().top;
    $("html, body").animate({scrollTop: sectionOffset}, 1000)
});


$(".accordion-toggle").on("click", function(e){
    let currentAccordionContent = $(e.target).next();
    $(".custom-accordion-content").not(currentAccordionContent).slideUp(500)
    currentAccordionContent.slideToggle(500);
});

function DisplayTimeLeft () {
    const eventDate = new Date('25 january 2025 10:00 PM').getTime();
    const dateNow = new Date().getTime();

    const dateDiff = eventDate - dateNow;

    const days = Math.floor(dateDiff / (24*60*60*1000));
    const hours = Math.floor((dateDiff % (24*60*60*1000)) / (60*60*1000));
    const minutes = Math.floor((dateDiff % (60*60*1000)) / (60*1000));
    const seconds = Math.floor((dateDiff % (60*1000)) / (1000));

    $(".days").html(`${days} Days`);
    $(".hours").html(`${hours} Hours`);
    $(".minutes").html(`${minutes} Min`);
    $(".seconds").html(`${seconds} Sec`);

    if (dateDiff < 0) {
        clearInterval(counter);
        $(".event").html(`<p class="fs-1 text-white">Event has ended!<p>`);
    }
}

let counter = setInterval(DisplayTimeLeft, 1000);

const maxLength = 100;
$("textarea").on("input", function(){
    let textLength = $("textarea").val().length;
    let leftLength = maxLength - textLength;
    if (leftLength <= 0) {
        $(".characters").text("You've reached your maximum characters limit");
        $(".characters").next().text("");

    } else {
        $(".characters").text(leftLength);
        leftLength == 1
        ?  $(".characters").next().text(" Character Reamining")
        :  $(".characters").next().text(" Characters Reamining");
    }

});