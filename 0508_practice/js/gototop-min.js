$(window).scroll(function(){$(this).scrollTop()>10?$(".GoToTop").fadeIn():$(".GoToTop").fadeOut()}),$("a[href='#top']").click(function(){return $("html,body").animate({scrollTop:0},"slow"),!1});