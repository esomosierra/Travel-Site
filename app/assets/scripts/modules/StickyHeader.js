import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

/** INITALIZATION */

constructor() {

    this.siteHeader = $( '.site-header');
    this.headerTriggerElement = $( '.large-hero__title' ); // <h1>Your Clarity</h1>
    this.createHeaderWaypoint();

}


/** METHODS / FUNCTIONS HANDLERS */

createHeaderWaypoint() {
    var that = this;
    new Waypoint({
        // Waypoints expects and accept native DOM elements, But we are putting a JQUERY object element.
        // By putting  [0] -> We can access JQUERY object element Because the first item in the array like object is always a pointer to the native DOM element.
        element: this.headerTriggerElement[0], 
        handler: function(direction) {
            if ( direction == 'down' ) {
                that.siteHeader.addClass( 'site-header--dark' );
            } else {
                that.siteHeader.removeClass( 'site-header--dark' );
            }
        }
    });
}

}

export default StickyHeader;