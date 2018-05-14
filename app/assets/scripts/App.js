import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll( $( '.feature-item' ), '85%' );
new RevealOnScroll( $( '.testimonials' ), '60%' );