;(function ( $ ) {
	'use strict';


	$('[data-accordion-trigger]')
		.on('click', function(e) {
			const item = $(this).data('accordion-trigger');
			const $accordionItem = $(this).closest(`[data-accordion-item="${ item }"]`);
			$($accordionItem).parent().toggleClass('tab-active');
			$accordionItem.toggleClass('active').siblings().removeClass('active');

		});


	/**
	 * @TODO Code a function the calculate available combination instead of use WC hooks
	 */
	$.fn.tawcvs_variation_swatches_form = function () {

		var openModal = function(e) {
			$('#masthead').addClass('c-header--hidden');
			e.stopPropagation();
			var id = e.currentTarget.dataset.selector;

			if(id) {
				$('[data-selector-modal="'+id+'"]').addClass('c-modal--open');
				$('#page').css('overflow-y', 'hidden');
			}
		};

		var closeModal = function(e) {
			var data = e.target.dataset.selectorClose;
			$('[data-selector-modal="'+data+'"]' ).removeClass('c-modal--open');
			$('#page').css('overflow-y', 'auto');
			$('#masthead').removeClass('c-header--hidden');
		};

		var modalFollowScroll = function (e) {
			$('[data-selector-modal]').css('top', $(e.target).scrollTop());
		};

		return this.each( function() {
			var $form = $( this ),
				clicked = null,
				selected = [];

			$('[data-selector]').click(openModal);
			$('[data-selector-close]').click(closeModal);
			$('#page').scroll(modalFollowScroll);


			$form.off('.swatch');

			$('.woocommerce-cart-form').wrap('<div class="product"><div class="images"></div></div>');

			$form
				.addClass( 'swatches-support' )
				.on( 'click', '.swatch', function ( e ) {
					e.preventDefault();

					var $el = $( this );

					if($el.hasClass('swatch-readonly')) {
						return;
					}

					var	$select = $el.closest( '.value' ).find( 'select' ),
						attribute_name = $select.data( 'attribute_name' ) || $select.attr( 'name' ),
						value = $el.data( 'value' );



					$select.trigger( 'focusin' );

					// Check if this combination is available
					if ( ! $select.find( 'option[value="' + value + '"]' ).length ) {
						$el.siblings( '.swatch' ).removeClass( 'selected' );
						$select.val( '' ).change();
						$form.trigger( 'tawcvs_no_matching_variations', [$el] );
						return;
					}

					clicked = attribute_name;

					if ( selected.indexOf( attribute_name ) === -1 ) {
						selected.push(attribute_name);
					}

					if ( $el.hasClass( 'selected' ) ) {
						$select.val( '' );
						$el.removeClass( 'selected' );

						delete selected[selected.indexOf(attribute_name)];
					} else {
						$el.addClass( 'selected' ).siblings( '.selected' ).removeClass( 'selected' );
						$select.val( value );
					}

					$select.change();
				} )
				.on( 'click', '.reset_variations', function () {
					$( this ).closest( '.variations_form' ).find( '.swatch.selected' ).removeClass( 'selected' );
					selected = [];
				} )
				.on( 'tawcvs_no_matching_variations', function() {
					window.alert( wc_add_to_cart_variation_params.i18n_no_matching_variations_text );
				} );
		} );
	};

	$( function () {
		$( '.variations_form' ).tawcvs_variation_swatches_form();
		//$('.variations_form').wc_variation_form();
		$( document.body ).trigger( 'tawcvs_initialized' );
	} );
})( jQuery );