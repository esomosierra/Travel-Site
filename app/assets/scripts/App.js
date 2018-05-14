import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import $ from 'jquery';


var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll( $( '.feature-item' ), '85%' );
new RevealOnScroll( $( '.testimonials' ), '60%' );
var modal = new Modal();