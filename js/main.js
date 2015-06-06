jQuery(document).ready(function($) {

    skrollr.init({
            smoothScrolling: true
    });

    skrollr.menu.init(s, { 
        duration: function(currentTop, targetTop) {
            return 1; 
        } 
    });

});