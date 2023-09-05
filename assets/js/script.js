$(document).ready(function () {
    $('#toggle-password').click(function () {
        var passwordField = $('#password');
        var eyeIcon = $('#eye-icon');
        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            eyeIcon.attr('src', '../assets/img/eye.png');
        } else {
            passwordField.attr('type', 'password');
            eyeIcon.attr('src', '../assets/img/hidden.png');
        }
    });
});

$(document).ready(function () {
    $('#toggle-password2').click(function () {
        var passwordField2 = $('#password2');
        var eyeIcon2 = $('#eye-icon2');
        if (passwordField2.attr('type') === 'password') {
            passwordField2.attr('type', 'text');
            eyeIcon2.attr('src', '../assets/img/eye.png');
        } else {
            passwordField2.attr('type', 'password');
            eyeIcon2.attr('src', '../assets/img/hidden.png');
        }
    });
});

// Toggle_Swith_Button=============================

$(document).ready(function () {
    $("#switch").change(function () {
        if ($(this).is(":checked")) {
            // Do something when the switch is toggled on
            console.log("Switch is ON");
        } else {
            // Do something when the switch is toggled off
            console.log("Switch is OFF");
        }
    });
});



$(document).ready(function () {
    // Initialize intlTelInput on the phone input element
    $("#phone-input").intlTelInput({
        initialCountry: "auto", // Automatically detect user's country
        preferredCountries: ["us", "gb", "ca"], // Specify preferred countries (add more as needed)
        separateDialCode: true, // Show country code separately
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js" // utils.js is required for formatting/validation
    });

    // Listen for changes to the selected country
    $("#phone-input").on("countrychange", function (e, countryData) {
        console.log("Selected country: ", countryData);
    });
});


