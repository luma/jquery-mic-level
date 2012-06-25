// jQuery.micLevel
//  $(...selector...).micLevel({
//      min: 10,
//      max: 100,
//      value: 50
//  });
//
//  $(...selector...).micLevel('updateValue', 60);
//
(function( $ ){
    var methods = {
        init: function(options) {
            var settings = $.extend( {
                min: 0,
                max: 100
            }, options);

            return this.each(function() {
                var $this = $(this),
                     data = $this.data('micLevel');

                 // Create the DOM element
                 $this.addClass('mic-volume-widget').append("<strong></strong>");

                 $this.data('micLevel', $.extend(data, {
                    min: settings.min,
                    max: settings.max,
                    indicator: $this.find('strong')
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
            percent = value / (data.max - data.min);

         $this.data('micLevel', $.extend(data, {
            value: value
         }));

         data.indicator.css('width', $this.width() * percent);
    };
})( jQuery );