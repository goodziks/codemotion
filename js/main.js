var state = {};

/* Check main menu state */

var checkClick = function (id) {
   if (!((state.id == 'users') && (state.click == true))) {
      $('#users a').removeClass('active');
   }
   if (!((state.id == 'settings') && (state.click == true)))  {
      $('#settings a').removeClass('active');
   }
};

/* Show sub-menu and holden click */

var showSubMenu = function (id) {
   var subMenu =  $('#' + id + '-sub');
   subMenu.fadeIn(200);
   var topMenu = $('#' + id + ' a');
   topMenu.addClass('active');

   subMenu.on('mouseleave', function () {
      checkClick();
      $('.sub-menu').fadeOut(200);
   });

   $('.sub-menu a').on('click', function () {
      $('.sub-menu a').removeClass('active');
      $('.top-menu a').removeClass('active');
      $(this).addClass('active');
      state.id = id;
      state.click = true;
      $('#' + id + ' a').addClass('active');
      $('.main-menu').unbind('mouseleave');
      subMenu.unbind('mouseleave');
   });
};

/* Hide hover if leave main-menu area*/


/* This is magic :) */

$('.top-menu li').mousemove(function () {
   var id = $(this).attr('id');
   $('.main-menu').on('mouseleave', function () {
   checkClick();
   $('.sub-menu').fadeOut(200);
});

   switch (id) {
      case 'settings': 
         checkClick(id);
         $('#users-sub').fadeOut(200);
         showSubMenu(id);     
         break;
      case 'users':
         checkClick(id);
         $('#settings-sub').fadeOut(200);
         showSubMenu(id);
         break;
      default:
         checkClick(id);
         $('.sub-menu').fadeOut(200);
   }; 
});

