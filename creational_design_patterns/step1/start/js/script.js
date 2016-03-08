(function(win, $){
	$(win.document).ready(function(){
		$('.chat').click(function(e){
			var circle = $('<div class="circle"></div>');
				circle.css('left',e.pageX-25);
				circle.css('top',e.pageY-25)
			$('.chat').append(circle);
		});

	});

})(window, jQuery);