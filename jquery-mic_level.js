// jQuery.micLevel
 // $(...selector...).micLevel({
 //     min: 10,
 //     max: 100,
 //     value: 50
 // });
//
//  $(...selector...).micLevel('updateValue', 60);
//
// https://github.com/luma/jquery-mic-level
//
(function( $ ){
    var methods = {
        init: function(options) {
            var settings = $.extend( {
                min: 0,
                max: 100,
                step: 1
            }, options);

            return this.each(function() {
                var $this = $(this),
                     data = $this.data('micLevel');

                 // Create the DOM element
                 $this.addClass('mic-volume-widget').append("<strong></strong>");

                 $this.data('micLevel', $.extend(data, {
                    step: settings.step,
                    min: settings.min,
                    max: settings.max,
                    interval: 1.0 / (settings.max - settings.min),
                    $indicator: $this.find('strong')
                 }));

                 // Set the current value
                 _updateValue($(this), settings.value);
            });
        },

        updateValue: function(value) {
            return this.each(function() {
                _updateValue($(this), value);
            });
        }
    };

    $.fn.micLevel = function(method) {
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.micLevel' );
        }
    };

    var _updateValue = function($this, value) {
        var data = $this.data('micLevel'),
            steppedValue = value;

        if (data.step > 1) {
            steppedValue = steppedValue + (steppedValue % data.step);
        }

        if (steppedValue > data.max) steppedValue = data.max;
        else if (steppedValue < data.min) steppedValue = data.min;

        $this.data('micLevel', $.extend(data, {
            value: steppedValue
        }));

        data.$indicator[0].style.width = $this.width() * steppedValue * data.interval + 'px';
    };
})( jQuery );