(function($){
    $(document).ready(function(){
        $('.main-carousel').flickity({
            cellAlign: 'left',
            contain: true,
            lazyLoad: true,
            pageDots: true,
            wrapAround: true,
        });
        //     // external js: flickity.pkgd.js

        // var flkty = new Flickity('.carousel');
        // var carouselStatus = document.querySelector('.carousel-status');

        // function updateStatus() {
        // var slideNumber = flkty.selectedIndex + 1;
        // carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
        // }
        // updateStatus();

        // flkty.on( 'select', updateStatus );

        // $('.carousel-container').each( function( i, container ) {
        //     var $container = $( container );
    
        //     var $carousel = $container.find('.carousel').flickity({
        //       cellSelector: 'div',
        //       imagesLoaded: true,
        //       percentPosition: false
        //     });
        //     var $caption = $container.find('.carousel-status');
        //     // Flickity instance
        //     var flkty = $carousel.data('flickity');
    
        //     $carousel.on( 'select.flickity', function() {
        //       // set image caption using img's alt
        //       $caption.text( flkty.selectedElement.alt )
        //     });
    
        //   });
    

    });
})(jQuery)