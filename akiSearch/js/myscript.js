$(document).ready(function() {
	$('a.page_a_button').on('click', function() {

		$("#b_waitting").css("display","block");
		var target_page = $(this).text();
		var clicked_btn = $(this).attr("data");
		if(clicked_btn>0 && clicked_btn<7){
			baidupage = target_page;
			b_sub_search();
		}
		else if(clicked_btn == 0 && baidupage>1){
			baidupage--;
			b_sub_search();
		}
		else if(clicked_btn == 8){
			baidupage++;
			b_sub_search();
		}

		$("#baiduframe").animate({scrollTop: $("#baiduaction").offset().top}, 500);
	});
	if(inputkey.length>0)
	{
		setresult();
	}
	else
	{
		alert("错误，长度为0的关键字！");
	};

	$("#save_new_googleip").bind("click",saveNewGIP);
	$("#btn_update_gip").bind("click",UpdateGoogleIP);
	$("#main_input").keydown(function(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	jump_search();
	 };
	});
	$("#goGoogle").bind("click",setgoogle);
	$("#goBaidu").bind("click",setbaidu);
	$("#invisible_search").bind("click",jump_search);
	$("#g_input").keydown(function(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	googlepage=1;
	 	g_sub_search(true);
	 };
	});
	$("#invisible_g_search").click(function(){
		g_sub_search(true);
	});
	$("#forimage").bind("click",forimage);
	$("#changel1").click(function(){
		changelocal(1);
	});
	$("#changel2").click(function(){
		changelocal(2);
	});
	$("#g_one_more_page").bind("click",g_one_more_page);
	$("#b_input").keydown(function(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	googlepage=1;
	 	b_sub_search(true);
	 };
	});
	$("#invisible_b_search").click(function(){
		b_sub_search(true);
	});
	$("#getbaike").bind("click",getbaike);
	$("#gettieba").bind("click",gettieba);
	$("#getditu").bind("click",getditu);
	$("#getzhidao").bind("click",getzhidao);
	$("#gettupian").bind("click",gettupian);
	$("#b_one_more_page").bind("click",b_one_more_page);
	$("#show_current_gip").html("当前 GIP : "+google_IP.substr(7));
	$("#show_current_gip").click(function(){
		window.open(google_IP+" ");
	});
});

function setresult(){
	/*var realkeyword=inputkey;
	realkeyword=decodeURIComponent(inputkey);
	document.title=realkeyword+" - Akiの搜索";*/
	$("#main_input").val(realkeyword);
	main_search();
}
function jump_search(){
	var keyword=document.getElementById("main_input").value;
	keyword=encodeURIComponent(keyword);
	window.location.href="main.html?q="+keyword;
}

function setbaidu(){
	var keyword=document.getElementById("main_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("http://www.baidu.com/s?wd="+keyword,'_blank');
}

function setgoogle(){
	var keyword=document.getElementById("main_input").value;
	keyword=encodeURIComponent(keyword);
	window.open(google_IP+"/search?hl=zh-CN&q="+keyword,'_blank');
}

function getbaike(){
	var keyword=document.getElementById("b_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("http://baike.baidu.com/search?word="+keyword,'_blank');
}

function gettieba(){
	var keyword=document.getElementById("b_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("http://tieba.baidu.com/f?ie=utf-8&kw="+keyword,'_blank');
}

function getditu(){
	var keyword=document.getElementById("b_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("http://map.baidu.com/?ie=utf-8&s=s%26wd%3D"+keyword,'_blank');
}

function getzhidao(){
	var keyword=document.getElementById("b_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("http://zhidao.baidu.com/search?word="+keyword,'_blank');
}

function gettupian(){
	var keyword=document.getElementById("b_input").value;
	keyword=encodeURIComponent(keyword);
	window.open("http://image.baidu.com/i?word="+keyword,'_blank');
}

function googleinit(){
	$("#waitting").css("display","none");
	$("#googlepager").css("display","block");
}

function baiduinit(){
	if(bigsearch==1)
	{
		g_sub_search();
		bigsearch=0;
	}
	$("#b_content").find(".result-op").each(function(){
		var tpl=$(this).attr("tpl")+"0";
		if(tpl.indexOf("baike")==-1&&tpl.indexOf("wenku")==-1&&tpl.indexOf("zhidao")==-1&&tpl!="url0")
			$(this).remove();
	});
	$("#b_content").find("a").each(function(){
		$(this).removeAttr("style");
	});
	$("#b_content").find("a:empty").remove();
	$("#b_content").find("img").each(function(){
		 	$(this).parent().parent().remove();
	});

	$("#b_waitting").css("display","none");

}

function g_sub_search(newKeyword){
			$("#waitting").css("display","block");
			var g_sub_key=document.getElementById("g_input").value;		
			var g_url;
			if(googletype==1)
			{
				g_url = google_IP + "/custom?&hl=EN&q=" + g_sub_key;
			}
			else if(googletype==2)
			{
				g_url = google_IP + "/custom?q="+g_sub_key+"&hl=zh-CN";
			}

			var truepage = (googlepage-1)*10;
			if(truepage!=0)
				g_url = g_url+"&start="+truepage;
			
			httpRequest(g_url, function(rs){
    			var google_rs = rs;
    			var med = $(google_rs).find("#spe");
    			google_rs = $(google_rs).find("ol");
    			google_rs = $(google_rs).find("li");
    			$(google_rs).find("img").remove();
    			$(google_rs).find("ol.ads-container-list").remove();

				if(newKeyword == true)
            		$("#g_content").empty();

            	$("#g_content").append(google_rs);

            	googleinit();
			});
		}

function b_sub_search(newKeyword){
			$("#b_waitting").css("display","block");
			var b_sub_key=document.getElementById("b_input").value;
			/*b_sub_key=encodeURIComponent(encodeURIComponent(b_sub_key));*/
			var b_url="http://www.baidu.com/s?wd="+b_sub_key+"&cl=3";
			var truepage=(baidupage-1)*10;
			if(truepage!=0)
				b_url=b_url+"&pn="+truepage;
			/*htmlobj = $.ajax({url:"actions/sub_getbaidu.jsp?b_sub_key="+b_sub_key+"&baidupage="+baidupage,async:false});*/
			var flag = false;
			httpRequest(b_url, function(rs){
    			var baidu_rs = $(rs).find("#content_left");
    			baidu_rs = $(baidu_rs).find(".result,.hit_top,.result-op");
				$(baidu_rs).find("img").remove();
				$(baidu_rs).find("script").remove();
				if(newKeyword == true)
            		$("#b_content").empty();
            	$("#b_content").append(baidu_rs);
            	
            	baiduinit();

			});
			httpRequest(b_url, function(rs){
    			var baidu_rs = $(rs).find("#content_left");
    			baidu_rs = $(baidu_rs).find(".result,.hit_top,.result-op");
				$(baidu_rs).find("img").remove();
				$(baidu_rs).find("script").remove();
				if(newKeyword == true)
            		$("#b_content").empty();
            	$("#b_content").append(baidu_rs);
            	
            	baiduinit();        	
			});

		}

function b_one_more_page(){
			baidupage++;
			b_sub_search(false);
}

function g_one_more_page(){
			googlepage++;
			g_sub_search(false);
}

function main_search(){
		bigsearch=1;
		var mainkeyword=document.getElementById("main_input").value;
		$("#waitting").css("display","block");
	 	$("#g_input").val(mainkeyword);
	 	$("#b_input").val(mainkeyword);
	 	b_sub_search(true);
}

function forimage(){
			var g_sub_key=document.getElementById("g_input").value;
			window.open(google_IP + "/search?hl=zh-CN&tbm=isch&q="+g_sub_key,'_blank');
}

function showgoogle(){
			if (http_request.readyState == 4) 
              { // 判断对象状态
                if (http_request.status == 200) 
                { // 信息已经成功返回，开始处理信息
               		var searchresult=http_request.responseText;
                	$("#g_content").empty();
                	$("#g_content").append(searchresult);
                	googleinit();
                } 
                else 
                { //页面不正常
                    alert("您所请求的页面有异常1");
                    google404();
                }
              }
}

function showbaidu(){
			if (http_request.readyState == 4) 
              { // 判断对象状态
                if (http_request.status == 200) 
                { // 信息已经成功返回，开始处理信息
               		var searchresult=http_request.responseText;/*.replace(/\r\n/g,"");*/
                	$("#b_content").empty();
                	$("#b_content").append(searchresult);
                	baiduinit();
                } 
                else 
                { //页面不正常
                    alert("您所请求的页面有异常");
                }
              }
}

function google404(){
			$("#waitting").css("display","none");
}

function g_checkkey(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	googlepage=1;
	 	g_sub_search(true);
	 };
}

function b_checkkey(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	baidupage=1;
	 	b_sub_search(true);
	 };
}

function main_checkkey(e){
	 var keynum;
	 if(window.event)
	 	keynum=e.keyCode;
	 else if(e.which)
	 	keynum=e.which;
	 if (keynum==13)
	 {	
	 	jump_search();
	 };
}

function changelocal(type){
		$("#waitting").css("display","block");
		if(type=="1")
		{
			googletype=1;
			$("#currentlocal").html("EN"+"<span class='caret'></span>");
		}
		else if(type=="2")
		{
			googletype=2;
			$("#currentlocal").html("CN"+"<span class='caret'></span>");
		}
		googlepage=1;
		g_sub_search(true);
}

function changepage(type){
		$("#waitting").css("display","block");
		if(type==0&&googlepage>1)
		{
			googlepage--;
			g_sub_search();
		}
		else if(type==6&&googlepage<5)
		{
			googlepage++;
			g_sub_search();
		}
		else
		{
			googlepage=type;
			g_sub_search();
		}
		$("#leftframe").animate({scrollTop: $("#googleaction").offset().top}, 500);
}

function b_changepage(type){
		$("#b_waitting").css("display","block");
		if(type==0&&baidupage>1)
		{
			baidupage--;
			b_sub_search();
		}
		else if(type==6&&baidupage<5)
		{
			baidupage++;
			b_sub_search();
		}
		else
		{
			baidupage=type;
			b_sub_search();
		}
		$("#baiduframe").animate({scrollTop: $("#baiduaction").offset().top}, 500);

		var clicked_btn = $(this).text();
		alert(clicked_btn);
}

//********************This part processing the cookie operation, the google IP is saved in cookies******//
function getCookie(c_name)
{
	if (document.cookie.length>0)
  	{
  		c_start=document.cookie.indexOf(c_name + "=")
  		if (c_start!=-1)
    	{ 
    		c_start=c_start + c_name.length+1 
    		c_end=document.cookie.indexOf(";",c_start)
    		if (c_end==-1) c_end=document.cookie.length
    		return unescape(document.cookie.substring(c_start,c_end))
    	} 
  	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function setTheGIP()
{
	
	google_IP = getCookie('currentGIP')
	if (google_IP!=null && google_IP!="")
	{}
	else 
	{
  		UpdateGoogleIP();
  		google_IP=getCookie('currentGIP');
  	}

  	google_IP.replace("/n","");
  	google_IP.replace("/t","");

}

function UpdateGoogleIP()
{
	var stick_index_table = new Array();
	var GipList = String(getCookie('GoogleIP_List'));

	if (GipList!=null && GipList!="")
	{}
	else
	{
		GipList="173.194.38.197|203.211.0.82|203.211.0.165|203.211.0.72|64.15.119.90|64.15.119.92|163.28.83.133|64.15.124.81|208.117.225.33|208.117.227.140|208.117.226.18|64.15.119.124|64.15.116.242|64.15.116.233|64.15.116.204|64.15.118.17|64.15.116.205|203.211.0.222|64.233.160.180|64.15.118.48|64.15.118.47|64.15.118.11|208.117.225.32|208.117.228.172|118.174.27.140|208.117.227.13|64.15.124.197|64.15.116.235|64.15.124.166|178.60.128.47|178.60.128.13|118.174.27.69|64.15.117.4|1.179.251.133|208.117.229.243|64.15.117.70|118.174.27.81|118.174.27.221|118.174.27.206|208.117.229.231|64.15.116.207|118.174.27.244|118.174.27.179|111.92.162.134|178.60.128.18|111.92.162.141|62.201.216.181|62.201.216.166|62.201.216.146|62.201.216.161|";
	}

	for(var tmp_var = GipList.indexOf('|',0); tmp_var > 0 && tmp_var < GipList.length;){
		stick_index_table.push(tmp_var);
		if( tmp_var+1 == GipList.length)
			break;
		tmp_var = GipList.indexOf('|',tmp_var + 1);
	}
	var decide_count = Math.round(stick_index_table.length*Math.random());
	
	var start = 0;
	if(decide_count != 0)
		start = stick_index_table[decide_count-1]+1;
	var end = stick_index_table[decide_count];

	var real_ip = "http://"+GipList.substring(start, end);

	setCookie('currentGIP' , real_ip, 30);
	google_IP = real_ip;

	$("#show_current_gip").html("当前 GIP : "+google_IP.substr(7));
}


function GetTheGipList(){

	htmlobj = $.ajax({url:"actions/get_Gip_list.jsp",async:false});
	var newGipList = htmlobj.responseText;
	newGipList.replace("/n","");
	newGipList.replace("/t","");
	setCookie('GoogleIP_List', newGipList, 360);

}

function saveNewGIP(){
	var input_raw_googleip = $('#new_google_ip').val();
	input_raw_googleip.replace("/n","");
	input_raw_googleip.replace("/t","");
	setCookie('GoogleIP_List', input_raw_googleip, 360);
	UpdateGoogleIP();
}