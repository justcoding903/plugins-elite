// Stable 2020 release dev version, (2020/6/7);
function getId(id){
var r_id = document.getElementById(id);
return r_id;
}
function getBody(){
var r_body = document.body;
return r_body;
}
function getTagName(tag){
var r_tag = document.getElementsByTagName(tag);
return r_tag;
}
function changeBackgroundColorById(id, color){
document.getElementById(id).style.backgroundColor = color;
}
function changeFontColorById(id, fontcolor){
document.getElementById(id).style.color = fontcolor;
}
function changeFontFamilyById(id, font){
document.getElementById(id).style.fontFamily = font;
}