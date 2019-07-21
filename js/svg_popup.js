(function() {
	// http://stackoverflow.com/a/2450976
	function shuffle(array) {
		var currentIndex = array.length
		, temporaryValue
		, randomIndex
		;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	var Chetna_popup = document.getElementById('chetna'),
		vidhi_popup = document.getElementById('vidhi'),
		meet_popup = document.getElementById('meet'),
		ridhima_popup = document.getElementById('ridhima'),
		samta_popup = document.getElementById('samta'),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' ),
		paths = [].slice.call( overlay.querySelectorAll( 'svg > path' ) ),
		pathsTotal = paths.length;
	 
	function toggleOverlay() {
		var cnt = 0;

		shuffle( paths );

		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			
			paths.forEach( function( p, i ) {
				setTimeout( function() {
					++cnt;
					p.style.display = 'none';
					if( cnt === pathsTotal ) {
						classie.remove( overlay, 'close' );
					}
				}, i * 30 );
			});
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			paths.forEach( function( p, i ) {
				setTimeout( function() {
					p.style.display = 'block';
				}, i * 30 );
			});
		}
	}

	Chetna_popup.addEventListener( 'click', toggleOverlay );
	vidhi_popup.addEventListener( 'click', toggleOverlay );
	meet_popup.addEventListener( 'click', toggleOverlay );
	ridhima_popup.addEventListener( 'click', toggleOverlay );
	samta_popup.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();