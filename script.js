
        	function updateOutput() {
                
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>");

                document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
                
            }     


			
			$(".toggle").hover(function(){
				$(this).addClass("highlight");
   			}, function(){
    			$(this).removeClass("highlight");
			})	



			$(".toggle").click(function(){
				$(this).toggleClass("active");
				$(this).removeClass("highlight");

				var panelid = $(this).attr("id") + "panel";
				$("#" + panelid).toggleClass("hidden");
				var numberOfActivePanels = 4 - $('.hidden').length;
                
                $(".panel").width(($("#top").width() / numberOfActivePanels)-2);
               
			})



			$(".panel").height($(window).height() - $("#header").height() - 50);
			$(".panel").width(($(window).width() / 2) - 2);

			updateOutput();	
			 $("textarea").on('change keyup paste', function() {

                updateOutput();
            });	

			 $("#logo").animate({
			 	margin: "0px",
			 	fontSize: "130%",
				fontWeight: "bold"
			 },2000);

			 $("#name").animate({
			 	opacity:"1"
			 },3000);