import $ from 'jquery'; 

class MobileMenu {

    /** INITIALIZATION */

    constructor() {
        this.siteHeader = $( '.site-header' );
        this.menuIcon    =  $( '.site-header__menu-icon' );
        this.menuContent =  $( '.site-header__menu-content' );
        this.events();
    }


    /** EVENTS HANDLER */

    events() {
        this.menuIcon.click( this.toggleMenu.bind(this) );
    }


    /** METHODS HANDLER */

    toggleMenu() {
        this.menuContent.toggleClass( 'site-header__menu-content--is-visible' );
        this.siteHeader.toggleClass( 'site-header--is-expanded' );
        this.menuIcon.toggleClass( 'site-header__menu-icon--close-x' );

    }

}

export default MobileMenu;