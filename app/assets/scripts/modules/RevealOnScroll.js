import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

    /** INIALIZATION */
    constructor( element, offset ) {
        this.itemsToReveal = element;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }


    /** EVENTS HANDLER */


    /** FUNCTIONS / METHODS HANDLER */
    hideInitially() {
        this.itemsToReveal.addClass( 'reveal-item' );
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var currentItem = this; // Points to 'itemsToReveal' css class
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass( 'reveal-item--is-visible' );
                },
                offset: that.offsetPercentage
            });
        });
    }


}

export default RevealOnScroll;