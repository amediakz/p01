$(function(){
	gal()

	$('.pageasd').click(function(e){
		e.preventDefault();
		gal($('#select-an').val(),$(this).attr('href'))
	})

	function gal(id, pageNum){
		if($('#select-an').val()){
			var pa 	  = $('#select-an').val(),
				th    = $(pa).children('li'),
				l     = th.length,
				ar 	  = [],
				x 	  = 0,
				i 	  = 0;
					
			var pn    =1;
				pna    = 0;
			if(pageNum != 0)
				var pages = l/6;
			else
				var pages = 0;

			$('.page-list').empty();
			if(pages > 0){
				while(x<=pages){
					$('.page-list').append('<li><a href="'+pna+'" class="pageasd">'+pn+'</a></li>');
					x++;
					pna+=6;
					pn++;
				}
			}
			$('#gallary-cont').empty();
				
			$(pa).children('li').each(function(){
				var t = $(this).text();
				ar.push(t)
			})
			if(pageNum)
				i = pageNum;

			while(i!=l){
				$('#gallary-cont').append('<div class="gallary-box"><img src="'+ar[i]+'" alt="" /></div>');
				i++;
				if(i==6){
					break
				}
			}
		}
	}
	$('#select-an').change(function(){
		gal($('#select-an option').val()) 
	})


    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
})
