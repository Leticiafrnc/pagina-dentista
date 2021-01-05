$('nav.desktop a').hover(function(){
    $('nav li').removeClass('select');
    	$(this).parent().addClass('select');
  })