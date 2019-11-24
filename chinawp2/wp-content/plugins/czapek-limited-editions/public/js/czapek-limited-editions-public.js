(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

    var $limEdSelect = $('#czapek-limited-editions');
    var limitedEdition = $('#czapek-limited-editions').val();

	var swatch = function(html, label, disabled, modal) {
		var disabledClass = (disabled)? 'disabled' : '';
		var selected = (modal)? "data-limited-number-selected" : "";
		return "<span class='c-edition__number swatch-label " + disabledClass + "'  data-limited-number=" + label + " " + selected + " title=" + label + " >" + html + "</span>";
	};

    var label = function(html, value, position) {
        var result = '<div class="label c-variations__image" data-selector=' + position + '>';

        result += '<div class="c-variations__selected" data-variation-selected >';
        result += swatch(html, value, false, true);

        return result += '</div></div>';
    };

	var modalContent = function(position) {
		var result = '<section class="c-modal__content">';
		result += '<header class="c-modal__header"><span class="c-modal__pretitle">Select your</span><span class="c-modal__title">Limited Edition no.</span></header>';
		result += '<div class="tawcvs-swatches" id="limited-editions-swatches"></div>';

        result += '<footer class="c-modal__bottom"><div class="c-modal__confirm" data-selector-close=' + position + '>OK</div></footer>';

		return result += '</section>';

	};

    var value = function(position) {
		return '<div class="value" id="limited-edition-value"><div class="c-modal" data-selector-modal=' + position + '>' + '<div class="c-modal__bg" data-selector-close=' + position +  '></div>' + modalContent(position) + '</div></div>';
	};


    $(document).ready(function() {
    	if($('#czapek-limited-editions').length !== 0) {
            var $limEdSelect = $('#czapek-limited-editions');
            var limitedEdition = $('#czapek-limited-editions').val();
            var position = $('.c-variations__row .c-variations__item').length;

			if($('#czapek-limited-editions').children(':enabled')) {
				$('#czapek-limited-editions').val($('#czapek-limited-editions').children(':enabled:first').val());
			}

			if (position === 4) {
				$('table.c-variations').clone().insertAfter('table.c-variations').addClass('table-copy');
				$('table.c-variations.table-copy .c-variations__header .c-variations__row').html('').append('<th class="label c-variations__name">Limited<br>Edition no.</th>');
				$('table.c-variations.table-copy .c-variations__body .c-variations__row').html('').append('<td class="c-variations__item" data-variation>' + label( $('#czapek-limited-editions option:selected').html(), limitedEdition, position ) + value(position) + '</td>');
			} else {
				$('.c-variations__header .c-variations__row').append('<th class="label c-variations__name">Limited<br>Edition no.</th>');
				$('.c-variations__body .c-variations__row').append('<td class="c-variations__item" data-variation>' + label( $('#czapek-limited-editions option:selected').html(), limitedEdition, position ) + value(position) + '</td>');
			}

            $('#czapek-limited-editions').find('option').each( function(i) {
                var disabled = $(this).is(':disabled');
                var swatchHtml = swatch( $(this).html(), $(this).val(), disabled, false );
                var $swatch = $( swatchHtml ).appendTo( '#limited-editions-swatches' );

                $swatch.on('click', function() {
                    var isNotActive = $(this).is('.disabled');

                    if(isNotActive) return;

                    $(this).addClass('selected').siblings().removeClass('selected');

					$('#czapek-limited-editions').val( $(this).data('limited-number') );
					$('[data-limited-number-selected]').html( $(this).html() );
                });
            } );

            $('[data-limited-number="' + $('#czapek-limited-editions').val() + '"]:not([data-limited-number-selected])').addClass('selected');

			/*if ($('.c-variations__row .c-variations__item').length === 5) {
				$('.single-product .variations').css('margin-left', '-20px');
				$('.single-product .variations').css('margin-right', 'inherit');
			}*/
    	}

		$(window).load(function() {
            if( $('select#czapek-limited-editions').length !== 0 && !$('select#czapek-limited-editions').val() ) {
                $('[data-limited-number-selected]').html( '' );
                $('.single_add_to_cart_button[type="submit"]').addClass('disabled').after("<h4 style='margin-top: 1.25rem'>No more special editions available</h4>");
            }
		});
    });

})( jQuery );