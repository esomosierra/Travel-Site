import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

    /** INITALIZATION */

    constructor() {

        this.lazyImages = $( '.lazyload' );
        this.siteHeader = $( '.site-header' );
        this.headerTriggerElement = $( '.large-hero__title' ); // <h1>Your Clarity</h1>
        this.pageSections = $( '.page-section' );
        this.headerLinks = $( '.primary-nav a' );
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();

    }


    /** METHODS / FUNCTIONS HANDLERS */

    refreshWaypoints() {
        this.lazyImages.on( 'load', function() {
            Waypoint.refreshAll();
        } );
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    
    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            // Waypoints expects and accept native DOM elements, But we are putting a JQUERY object element.
            // By putting  [0] -> We can access JQUERY object element Because the first item in the array like object is always a pointer to the native DOM element.
            element: this.headerTriggerElement[0],
            handler: function( direction ) {
                if ( direction == 'down' ) {
                    that.siteHeader.addClass( 'site-header--dark' );
                } else {
                    that.siteHeader.removeClass( 'site-header--dark' );
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
           var currentPageSection = this; // Points to the 'pageSection' property which reference to the 'div' with a class of .page-section
           new Waypoint({
                element: currentPageSection,
                handler: function( direction ) {
                    if ( direction == 'down' ) {
                        var matchingHeaderLink = currentPageSection.getAttribute( 'data-matching-link' );
                        that.headerLinks.removeClass( 'is-current-link' );
                        $(matchingHeaderLink).addClass( 'is-current-link' );
                    }
                },
                offset: '20%'
           });

           new Waypoint({
                element: currentPageSection,
                handler: function( direction ) {
                    if ( direction == 'up' ) {
                        var matchingHeaderLink = currentPageSection.getAttribute( 'data-matching-link' );
                        that.headerLinks.removeClass( 'is-current-link' );
                        $(matchingHeaderLink).addClass( 'is-current-link' );
                    }
                },
                offset: '-30%'
            });
        });

    }

}

export default StickyHeader;