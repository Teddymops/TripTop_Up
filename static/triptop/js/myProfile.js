
$(document).ready(function() {

    var userID = $.session.get("userID");
    var firstname = $.session.get("firstname");
    var lastname = $.session.get("lastname");
    var fullname = $.session.get("fullname");
    var email = $.session.get("email");
    var picurl = $.session.get("picurl");

    $('#pic').hide();
    $('#email').hide();
    $('#emaillabel').hide();
    $('#name').hide();
    $('#welcome').hide();
    $('#itineraries').hide();
    $('#forumposts').hide();
    $('.buttons').hide();

    $('#pic').attr('src', picurl);
    $('#email').text(email);
    $('#name').text(firstname);

    $('#welcome').fadeIn(3000);
    $('#welcome').fadeOut(1000);



    $('#name').delay(4000).fadeIn(3000);
    $('#pic').delay(5000).fadeIn(3000);
    $('#email').delay(6000).fadeIn(3000);
    $('#emaillabel').delay(6000).fadeIn(3000);
    $('.buttons').delay(8000).fadeIn(1000);


    console.log(userID);

    var formData = {'user_id': userID};

    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: 'https://oeij9npzf6.execute-api.us-east-2.amazonaws.com/prod/itineraries/user', // the url where we want to POST
        crossDomain: true,
        dataType: 'json',
        data: JSON.stringify(formData), // our data object
        encode: true,
        // using the done promise callback
        success: function (data) {
            var results = JSON.parse(data.body);
            console.log(results);

            $.each(results, function (k, v) {


                $('#inputOrigin2').append('<option value=\"' + iata + '\">' + name + ' - ' + iata + '</option>');
            });
        }
    });

    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: 'https://oeij9npzf6.execute-api.us-east-2.amazonaws.com/prod/forum/user', // the url where we want to POST
        crossDomain: true,
        dataType: 'json',
        data: JSON.stringify(formData), // our data object
        encode: true,
        // using the done promise callback
        success: function (data) {
            var results = JSON.parse(data.body);
            console.log(results);

            $.each(results, function (k, v) {


                $('#inputOrigin2').append('<option value=\"' + iata + '\">' + name + ' - ' + iata + '</option>');
            });
        }
    });


});

function showItineraries() {
    $('#itineraries').show();
     $('html, body').animate({
        scrollTop: $("#itineraries").offset().top
     }, 2000);
}

function hideItineraries() {
    $('#itineraries').hide();
    $('html, body').animate({
        scrollTop: $("#profileInfo").offset().top
     }, 2000);
}

function showForumPosts() {
    $('#forumposts').show();
     $('html, body').animate({
        scrollTop: $("#forumposts").offset().top
     }, 2000);
}

function hideForumPosts() {
    $('#forumposts').hide();
    $('html, body').animate({
        scrollTop: $("#profileInfo").offset().top
     }, 2000);
}

function scrollToAboutUs() {

    window.location.href = "index.html";


     $('html, body').animate({
        scrollTop: $("#scrollToAboutUs").offset().top
     }, 2000);


  };

  function scrollToTeam() {

      window.location.href = "index.html";


     $('html, body').animate({
        scrollTop: $("#scrollToTeam").offset().top
     }, 2000);


  };