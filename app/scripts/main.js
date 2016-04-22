$(function() {
    var currentSlide = 1;

    var throttled = _.throttle(direction, 1500); 

    $('.slide').on('mousewheel', throttled);

    function direction(e) {
        
      var deltaY = e.originalEvent.deltaY;

      if(deltaY < 0){
        console.log('up' + currentSlide)
        
        switch (currentSlide) {
            case 2: 
                $('.slide:nth-child(1)').removeClass('bounceOutUp');
                $('.slide:nth-child(1)').addClass('bounceInDown');
                currentSlide = 1;
                break;
            case 3: 
                $('.slide:nth-child(2)').removeClass('bounceOutLeft');
                $('.slide:nth-child(2)').addClass('bounceInLeft');
                currentSlide = 2;
                break;            
        }

      } else {
        console.log('down' + currentSlide);

        $('.slide').removeClass('bounceInUp');

        switch (currentSlide) {
            case 1: 
                $('.slide:nth-child(1)').addClass('bounceOutUp');
                currentSlide = 2;
                break;
            case 2: 
                $('.slide:nth-child(2)').addClass('bounceOutLeft');
                currentSlide = 3;
                break;            
        }
      }        
    }

    

});