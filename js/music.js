
$(document).ready(function() {

  $('#text').hide();

   $('#main').click(function() {
     $('#text').slideToggle();
   });

 });


 $(document).ready(function() {

   function hideAll() {
     $('#goodCharlotte').hide();
     $('#young').hide();
     $('#life').hide();
     $('#cardiology').hide();
   }

   hideAll();

   $('.album').click(function() {

     hideAll();

     switch ($(this).attr("id")) {
       case "first":
         $('#goodCharlotte').show();
         break;
       case "second":
         $('#young').show();
         break;
       case "third":
         $('#life').show();
         break;
       case "fourth":
         $('#cardiology').show();
         break;
     }
     $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
  });

   });

 });
