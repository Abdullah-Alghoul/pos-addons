odoo.define('pos_mobile_restaurant.gui', function (require) {
    "use strict";

    if (!odoo.is_mobile) {
        return;
    }

    var gui = require('pos_mobile.gui');
    var chrome = require('pos_mobile_restaurant.chrome');

    gui.Gui.include({
        change_screen_type: function(current_screen) {
            var swiper_floor_container = $('.swiper-floor-container');
            if (current_screen === "floors") {
                swiper_floor_container.addClass('mobile-active-screen');
                swiper_floor_container.css({display:''});
            } else {
                swiper_floor_container.removeClass('mobile-active-screen');
                swiper_floor_container.css({display:'none'});
            }
            this._super(current_screen);
        }
    });
    return gui;
});
