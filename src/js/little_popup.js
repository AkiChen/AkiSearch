$(document).ready(function() {
	$("#pop_search_input").keydown(function(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	go_go_go();
	 };
	});
	$("#pop_search_btn").mousedown(function(){
		go_go_go();
	});
});

function go_go_go() {
	var keyword=document.getElementById("pop_search_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("main.html?q="+keyword,'_blank');
}