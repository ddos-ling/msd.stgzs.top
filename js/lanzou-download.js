function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return decodeURI(decodeURI(r[2])); return null;
};

var id=GetQueryString("id");
document.getElementById("download").src='https://stgzs.lanzous.com/'+id