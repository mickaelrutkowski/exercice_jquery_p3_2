// $(document).ready(function() {
//   var count = 0;
//   $("#update").click(function() {
//     count++;
//     $("#counter").html("nombre de clics: "+count);
//   });
// });
// $(document).ready(function() {
//   var count = 0;
//   $("#update").click(function() {
//     count ++;
//     $("#counter").html("nombre de clics: "+count);
//   });
// });

//autres version!!!!!!
// $('#counter').data('count', 0);
// $('#update').click(function(){
//     $('#counter').html(function(){
//         var $this = $(this),
//             count = $this.data('count') + 1;
//
//         $this.data('count', count);
//         return count;
//     });
// });




$(function() {
var $input = $("#compteur");
$input.val(0);
$(".test").click(function(){
    if ($(this).hasClass('acrescimo'))
        $input.val(parseInt($input.val())+1);
    else if ($input.val()>=1)
        $input.val(parseInt($input.val())-1);
});
});
