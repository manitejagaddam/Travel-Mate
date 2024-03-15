// // Define an object to store username-password pairs
// const users = {
//     "admin": "password",
//     // Add more users if needed
// };



// // Event listener for login button
// document.getElementById('loginBtn').addEventListener('click', function(){
// 	const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Check if the entered username exists in the users object
//     if (users.hasOwnProperty(username)) {
//         // Check if the entered password matches the password associated with the username
//         if (users[username] === password) {
//             alert('Login successful!');
//         } else {
//             alert('Incorrect password!');
//         }
//     } else {
//         alert('Username not found!');
//     }
// });

// (function($) {

//     "use strict";

//     var fullHeight = function() {

//         $('.js-fullheight').css('height', $(window).height());
//         $(window).resize(function(){
//             $('.js-fullheight').css('height', $(window).height());
//         });

//     };
//     fullHeight();

//     $(".toggle-password").click(function() {

//       $(this).toggleClass("fa-eye fa-eye-slash");
//       var input = $($(this).attr("toggle"));
//       if (input.attr("type") == "password") {
//         input.attr("type", "text");
//       } else {
//         input.attr("type", "password");
//       }
//     });

// })(jQuery);
