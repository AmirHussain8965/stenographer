$(document).ready(function () {
    // Handle file input change
    $('#file-input').on('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var img = $('#preview-image');
                img.attr('src', e.target.result);
                img.show();
            };

            reader.readAsDataURL(file);
        }
    });

    // Handle upload button click
    $('#upload-button').on('click', function () {
        // Perform the file upload operation here
        // You can use AJAX or a form submit to send the file to the server
        // For simplicity, we won't implement the server-side part in this example
        alert('File uploaded successfully (simulated).');
    });
});



$(document).ready(function () {
    $(".sidebar_links_inner a").click(function () {
        $(".sidebar_links_inner a").removeClass("active");
        $(this).addClass("active");
    });
});


const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');
const sidebar = document.getElementById('mysidebar');

showButton.addEventListener('click', () => {
    sidebar.style.display = 'block';
});

hideButton.addEventListener('click', () => {
    sidebar.style.display = 'none';
});
