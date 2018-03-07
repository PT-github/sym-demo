$(document).ready(function(){
    var initArry = {v:false,h:false};
   /*左右滚动*/
    var mySwiper = new Swiper('.swiper-container',{
      observer:true,//修改swiper自己或子元素时，自动初始化swiper  
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: '.swiper-pagination',
        
      },
    });
    $(".s-nav a").click(function(){
        var index=$(this).index();
          // alert(index);
        $(this).addClass("active").siblings().removeClass("active");
        $(".container .main").eq(index).addClass("selected").siblings().removeClass("selected");
    });
    $('#pmenu').bind('click',function(){
        $('.menu-container').addClass('menu-active');
    });
    $('.menu-container').bind('click',function(e){
        var target = e.target;
        var box = $('.right-con')[0];
        if(!box.contains(target) && target.className.indexOf('menu') === -1){
            $('.menu-container').removeClass('menu-active');
        }
    })
    
});


// function formatHnm(obj) {
//     var str = obj.value.replace(/[^\d]/g, "");
//     if (str.length > 21) {
//         obj.value = str.substr(0, 21);
//     }
//     // obj.value = obj.value.replace(/\D/g, '').replace(/\s/g, '').replace(
//     //     /(\d{5})(?=\d)/g, "$1 ");
// }
// function commOnKeyPress_(e, sType, oElement, iLength){
//     if(13 == window.event.keyCode){
//         validate();
//         return false;
//     }
//     return commOnKeyPress(e, sType, oElement, iLength);
// }
// //***************************** 输入功能函数 begin********************************/
//
// //输入对象 格式 处理 (不能挡住中文 请使用： style="ime-mode:disabled"; onpaste="return false;");
// //必须在 onkeypress event 才会有作用;
// //    sType
// //    "9" 仅能输入数字
// //    "-9" 仅能输入数字与"-";
// //    "N" 仅能输入数字, "."
// //    "-N" 仅能输入数字, "."与"-";
// //    "C" 仅能输入英文字母
// //    "C9" 仅能输入英文字母和数字;
// //    "9C" 仅能输入英文字母和数字
// //	  "1C" 仅能输入英文字母和数字以及斜杠/
// //    "T" 不准输入特殊字符;
// //    oElement: 对象物件
// //    iLength: 对象长度控制
// function commOnKeyPress(e, sType, oElement, iLength) {
//
//     var _isIE=false;// 判断是否为IE浏览器;
//     var _iKeyCode;// 键盘事件值;
//     // 判断是否为IE浏览器;
//     if(navigator.appName == "Microsoft Internet Explorer") {
//         _isIE=true;
//         _iKeyCode = e.keyCode;
//     }else {
//         _isIE=false;
//         _iKeyCode = e.which;
//     }
//     // ficommox的Backspace与tab处理;
//     if(!_isIE && (_iKeyCode==13 || _iKeyCode==9||_iKeyCode==8 || _iKeyCode==0)){
//         e.returnValue=true;
//         return true;
//     }
//
//     // ENTER, TAB 至下一对象
//     // IE 不是 Button 按 ENTER, TAB 至下一对象
//     if (_isIE && (_iKeyCode==13 || _iKeyCode==9) && window.event.srcElement.type!="button") {
//         window.event.keyCode = 9;
//         return true;
//     }
//
//     // 判断中文字串长度
//     if (!commEmpty(oElement.value)) {
//         if (!commChkLength(oElement.value, iLength-1)) {
//             e.returnValue=false;
//             return false;
//         }
//     }
//     // 类型转成大写;
//     sType=sType.toUpperCase();
//     // "9" 仅能输入０－９数字
//     if (sType == "9") {
//         if (_iKeyCode < 48  || _iKeyCode > 57){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "9" 仅能输入０－９数字与,"-";
//     if (sType == "-9") {
//         if ((_iKeyCode < 48  || _iKeyCode > 57) && _iKeyCode!=43 &&_iKeyCode!=61 && _iKeyCode!=45 && _iKeyCode!=95){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "N" 仅能输入数字, "."
//     if (sType == "N") {
//         if ((_iKeyCode < 48  || _iKeyCode > 57) && _iKeyCode!=46){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "N" 仅能输入数字0-9, ".","-";
//     if (sType == "-N") {
//         if ((_iKeyCode < 48  || _iKeyCode > 57) && _iKeyCode!=46 && _iKeyCode!=43 &&_iKeyCode!=61 && _iKeyCode!=45 && _iKeyCode!=95){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "C" 仅能输入英文字母
//     if (sType == "C") {
//         if (_iKeyCode < 65  || _iKeyCode > 123 ){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "B" 仅能输入英文字母及数字
//     if (sType == "C9" || sType == "9C") {
//         if (!((_iKeyCode>=65 && _iKeyCode<=123) || (_iKeyCode>=48 && _iKeyCode<=57))){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "1C" 仅能输入英文字母和数字以及斜杠/
//     if (sType == "1C") {
//         if (!((_iKeyCode>=65 && _iKeyCode<=123) || (_iKeyCode>=47 && _iKeyCode<=57))){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // "B" 仅能输入英文字母及数字
//     if (sType == "C9" || sType == "9C") {
//         if (!((_iKeyCode>=65 && _iKeyCode<=123) || (_iKeyCode>=48 && _iKeyCode<=57))){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
//
//     // 不能输入特别字符;
//     if(sType == "T" || sType == "t"){
//         // var pattern = new
//         // RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]");
//         var pattern = new RegExp("[<\"]");
//         var charStr = String.fromCharCode(_iKeyCode);
//         if(pattern.test(charStr)){
//             e.returnValue=false;
//             return false;
//         }
//         return true;
//     }
// }
// // ***************************** 输入功能函数 end********************************/
// // 左边去空白(含中文的全角空白)
// // sStr:传入之字串
// function commLtrim(sStr) {
//     //return sStr.replace(/(^\s*)/g, "");
//     if(commEmpty(sStr)) return "";
//     return sStr.replace(/(^\s*)|(^\u3000*)|(\u3000*$)|(^\ue4c6*)|(\ue4c6*$)|(\s*$)/g,"");
// }
//
// // 右边去空白 (含中文的全角空白)
// // sStr:传入之字串;
// function commRtrim(sStr) {
//     //replace(/(\s*$)/g, "");
//     if(commEmpty(sStr)) return "";
//     return sStr.replace(/(\s*$)|(^\u3000*)|(\u3000*$)|(^\ue4c6*)|(\ue4c6*$)|(\s*$)/g,"");
// }
//
// // 左右边去空白(含中文的全角空白)
// // sStr:传入之字串
// function commTrim(sStr) {
//     return commRtrim(commLtrim(sStr));
// }
//
// //判断是否为空白;
// function commEmpty(oValue){
//     if (oValue == null || oValue == "null" || oValue == "undefined" || oValue == "NaN" || oValue == ""){
//         return true;
//     }
//     return false;
// }
//
// //取得字串长度(一个中文算1个长度);
// //sStr:传入之字串
// function commLength(sStr) {
//     var _iLength = 0;
//     for( var i=0; i < sStr.length ; i++) {
//         _iLength +=1;
//     }
//     return _iLength;
// }
//
// //判断中文字串长度
// //sStr:传入之字串
// //iLength:传入之长度
// function commChkLength(sStr, iLength) {
//     if (commLength(sStr)>iLength)
//         return false;
//     return true;
// }
// function isNum(s) {
//
//     if (s != null) {
//         var r, re;
//         re = /\d*/i; //\d表示数字,*表示匹配多个数字
//         r = s.match(re);
//         return (r == s) ? true : false;
//     }
//     return false;
// }
// function validate(){
//     var hnmId = document.getElementById("search").value;
//     hnmId = $.trim(hnmId);
//     hnmId = hnmId.replace(/[ ]/g,"");
//     document.getElementById("search").value = hnmId;
//
//     if(!isNum(hnmId)) {
//         alert("请输入21位数字真源码！");
//         return;
//     } else if(document.getElementById("search").value==""){
//         alert("请输入21位数字真源码！");
//         return;
//     }else if(document.getElementById("search").value=="请输入真源码21位数字"){
//         alert("请输入21位数字真源码！");
//         return;
//     }else if(document.getElementById("search").value.length!=21){
//         alert("请输入21位数字真源码！");
//         return;
//     }
//     // document.getElementById("validateForm").action="validate/"+document.getElementById("search").value;
//     // document.getElementById("validateForm").submit();
// }