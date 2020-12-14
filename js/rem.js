function resizeFont() {
  //获取屏幕宽度
  let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //设计图参考宽度
  let design = 750;
  if (clientWidth > 750)
    document.getElementsByTagName('html').item(0).style.fontSize = '100px';
  else
    document.getElementsByTagName('html').item(0).style.fontSize = clientWidth / design * 100 + 'px';
}
resizeFont();
window.onresize = function () {
  resizeFont();
}

function getUrlArg(url,key){
  var arr = url.split('?');
  var argStr = arr.length >1 ? arr[1]:"";
  if(!argStr){
    return "";
  }
  var arr2 = argStr.split('&').map(item=>item.split('='));
  var res = arr2.find(item=>item[0] == key);
  if(res){
    return res.length > 1 ? res[1] :"";
  }else{
    return "";
  }
}
function judegFun () {
  const category = navigator.userAgent
  const isiOS = !!category.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isiOS) {
    return 'ios'
  } else {
    return 'android'
  }
}