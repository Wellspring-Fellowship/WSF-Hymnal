// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

/* =============================
 * Disable / Enable Page Scroll
 * when Bootstrap Modals are
 * shown / hidden
 * ============================= */

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function theMouseWheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', theMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = theMouseWheel;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', theMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;
}

$(function () {
    // disable page scrolling when modal is shown
    $(".modal").on('show', function () {
        disable_scroll();
    });
    // enable page scrolling when modal is hidden
    $(".modal").on('hide', function () {
        enable_scroll();
    });
});


// CLEARABLE INPUT
function tog(v) {
    return v ? 'addClass' : 'removeClass';
}
$(document).on('input', '.clearable', function () {
    $(this)[tog(this.value)]('x');
}).on('mousemove', '.x', function (e) {
    $(this)[tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');
}).on('click', '.onX', function () {
    $(this).removeClass('x onX').val('').change();
});
