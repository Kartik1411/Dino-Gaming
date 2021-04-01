// // $('.navTrigger').click(function () {
// //     $(this).toggleClass('active');
// //     console.log("Clicked menu");
// //     $("#mainListDiv").toggleClass("show_list");
// //     $("#mainListDiv").fadeIn();

// // });

// $(document).ready(function() {
//         // Transition effect for navbar 
//         $(window).scroll(function() {
//           // checks if window is scrolled more than 500px, adds/removes solid class
//           if($(this).scrollTop() > 500) { 
//               $('.navbar').addClass('solid');
//           } else {
//               $('.navbar').removeClass('solid');
//           }
//         });
// });

 $(document).ready(function() {
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
 });