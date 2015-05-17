function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		if (str.indexOf("&") != -1) {
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		} else {
			theRequest[str.split("=")[0]] = (str.split("=")[1]);
		}
	}
	return theRequest;
}

function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

var Request = new Object();
Request = GetRequest();
var inputkey;
inputkey = Request['q'];
/*var reg=new RegExp("+","g")*/
inputkey = (inputkey.toString()).replace("+"," ");
var realkeyword=decodeURIComponent(inputkey);
var baidu_ok=false;

document.title=realkeyword+" - Akiの搜索";
var google_IP="";
setTheGIP();

var googletype=1;
var googlepage=1;
var baidupage=1;
var bigsearch=0;