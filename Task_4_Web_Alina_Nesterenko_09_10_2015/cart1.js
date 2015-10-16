var total_items = 0;

	var total_price = 0;

	$(document).ready(function() {

	 

	    $(".item").draggable({

	        revert: true           

	    });

	    $("#cart_items").draggable({

	        axis: "x"

	    });

	 

	    $("#cart_items").droppable({

	        accept: ".item",

	        activeClass: "drop-active",

	        hoverClass: "drop-hover",

	        drop: function(event, ui) {

	            var item = ui.draggable.html();

	            var itemid = ui.draggable.attr("id");

	            var html = '<div class="item icart">';

	            html = html + '<div class="divrm">';

	            html = html + '<a onclick="remove(this)" class="remove '+itemid+'">&times;</a>';

	            html = html + '<div/>'+item+'</div>';

	            $("#cart_items").append(html);

	 

	            // Обновление общего количества

	            total_items++;

	            $("#citem").html(total_items);

	 

	            // Обновление общей цены

	            var price = parseInt(ui.draggable.find(".price").html().replace(" р.", ""));

	            total_price = total_price + price;

	            $("#cprice").html(total_price + " р.");

	 

	            // Расширяем корзину

	            if (total_items > 4) {

	                $("#cart_items").animate({width: "+=120"}, 'slow');

	            }

	        }

	    });

	});