//事件绑定 兼容ie8
function addEvent(element, type, handel) {
  if (element.addEventListener) {
    element.addEventListener(type, handel, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handel);
  } else {
    element["on" + type] = null;
  }
}

//解除绑定
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handel, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handel);
  } else {
    element["on" + type] = null;
  }
}

//获得事件 ie为window.event
function getEvent(event) {
  return event ? event : window.event;
}

//获得事件目标 ie 为srcElement
function getTarget(event) {
  return event.target || event.srcElement;
}

//获取元素节点
function $(id) {
  return document.getElementById(id);
}

//获取标签名
function getElementsByTagName(id) {
  return document.getElementsByTagName(id);
}

//获取选择器的所有节点，返回的是一个类数组
function getSelectorAll(id) {
  return document.querySelectorAll(id);
}

var flag = false;
// 显示Menu
function showMenu(element) {
  // 先找到父节点 然后再找到父节点的第一个节点显示
  var li = element.target.parentNode;
  var ul = li.querySelector(".level-nav");
  flag = !flag;
  if (flag) {
    ul.style.display = 'block';
  } else {
    ul.style.display = 'none';
  }
}