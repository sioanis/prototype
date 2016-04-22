$(function() {
	$('.slide').waypoint(function(direction) {
    if ($(this.element).index() === 2) {
      $(this.element).addClass('bounceInRight');       
    } else {
      $(this.element).addClass('bounceInUp');      
    }

    setTimeout(function() {
      $('.slide').removeClass('bounceInUp bounceInRight');
    }, 1000);
	});
});