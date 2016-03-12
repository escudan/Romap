$(document).ready(function() {
	var $this

	resize()

	$('polygon, text').on('mouseover', function(ev) {
		if (ev.target.id != '') {
			$this = '#' + ev.target.id
		} else {
			$this = '#' + $(ev.target).prev().attr('id')
		}

		$data = data[$($this).next().text()]

		transition($($this), '#6bb120')
		transition($($this).next(), '#003333')
	})

	$('polygon, text').on('mouseleave', function(ev) {
		$($this).css({
			'fill': '#008080'
		})

		$($this).next().css({
			'fill': '#fff'
		})
	})

	$('polygon, text').on('click', function(ev) {
		$('#map, #map-info').fadeIn()
		initMap()
		$('#map-contents').html($data.geninfo)
	})

	$(window).on('resize', function() {
		initMap()
		resize()
	})

	$('#close-button').on('click', function(ev) {
		$('#map, #map-info').fadeOut()
		$('#map-contents').html('')
	})
})

function transition(a, color) {
	a.css({
		'fill': color,
		'-webkit-transition': 'fill .1s ease',
		'-moz-transition': 'fill .1s ease',
		'-ms-transition': 'fill .1s ease',
		'-o-transition': 'fill .1s ease',
		'transition': 'fill .1s ease'
	})
}

function resize() {
	var wi = window.innerWidth

	function scale(a) {
		$('#container').css({
			'-webkit-transform': 'scale(' + a + ')',
			'-moz-transform': 'scale(' + a + ')',
			'-ms-transform': 'scale(' + a + ')',
			'-o-transform': 'scale(' + a + ')',
			'transform': 'scale(' + a + ')',
			'width': +$('svg').attr('width') * a + 'px'
		})
	}

	if (wi > 980) {
		scale(.6)
	} else if (wi < 980 && wi > 640) {
		scale(.4)
	} else if (wi < 640 && wi > 490) {
		scale(.3)
	} else if (wi < 490) {
		scale(.19)
	}
}