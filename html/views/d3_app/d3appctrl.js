var d3_app_ctrl = function ($scope) {
    let setTooltip = () => {
        jQuery('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
            template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        })
        // Toggle the side navigation
        jQuery("#sidenavToggler").click(function (e) {
            // addEventListener(document, function (e) {
            // console.log(e.defaultPrevented);  // will be false
            e.preventDefault();   // does nothing since the listener is passive
            // console.log(e.defaultPrevented);  // still false
            // }, Modernizr.passiveeventlisteners ? { passive: true } : false);
            $("body").toggleClass("sidenav-toggled");
            jQuery(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
            jQuery(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
        });
        // Force the toggled class to be removed when a collapsible nav link is clicked
        jQuery(".navbar-sidenav .nav-link-collapse").click(function (e) {
            e.preventDefault();   // does nothing since the listener is passive
            jQuery("body").removeClass("sidenav-toggled");
        });
        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

        jQuery('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse')
            .on("mousewheel DOMMouseScroll", function (e) {
                var e0 = jQuery.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;
                this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                e.preventDefault();
            }, Modernizr.passiveeventlisteners ? { passive: true } : false); 
            
        // Scroll to top button appear
        jQuery(document).scroll(function () {
            var scrollDistance = jQuery(this).scrollTop();
            if (scrollDistance > 100) {
                jQuery('.scroll-to-top').fadeIn();
            } else {
                jQuery('.scroll-to-top').fadeOut();
            }
        });
        // Configure tooltips globally
        $('[data-toggle="tooltip"]').tooltip()

    }
    $scope.toggleLeft = setTooltip();
}
