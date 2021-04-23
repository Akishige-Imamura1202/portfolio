"use strict"

const w = 200/2;
const h = 200/2;

var Ai_canvas = document.getElementById('Ai_text');
if(Ai_canvas.getContext){
    var Ai_ctx = Ai_canvas.getContext("2d");
    Ai_ctx.beginPath();
    Ai_ctx.font = "bold 16px gothic";
    Ai_ctx.fillStyle = '#ff9a00';
    Ai_ctx.fillText("Ai 65%", 70, 32);
};

var Ai_canvas = document.getElementById('Ai_graph');
if(Ai_canvas.getContext){
    var Ai_ctx = Ai_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {

        let angle = goal * Math.PI / 180;
        Ai_ctx.beginPath();
        Ai_ctx.arc(w,h,70,start,angle,false);
        Ai_ctx.lineTo(w,h);
        Ai_ctx.stroke();

        Ai_ctx.fillStyle = "white";
        Ai_ctx.fill();

        goal += 1;

        if(goal > 225) {
            clearInterval(intervalId);
        }
    }, 1);
};

var Ps_canvas = document.getElementById('Ps_text');
if(Ps_canvas.getContext){
    var Ps_ctx = Ps_canvas.getContext("2d");
    Ps_ctx.beginPath();
    Ps_ctx.font = "bold 16px gothic";
    Ps_ctx.fillStyle = '#30a6fd';
    Ps_ctx.fillText("Ps 50%", 70, 32);
};

var Ps_canvas = document.getElementById('Ps_graph');
if(Ps_canvas.getContext){
    var Ps_ctx = Ps_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {

        let angle = goal * Math.PI / 180;
        Ps_ctx.beginPath();
        Ps_ctx.arc(w,h,70,start,angle,false);
        Ps_ctx.lineTo(w,h);
        Ps_ctx.stroke();

        Ps_ctx.fillStyle = "white";
        Ps_ctx.fill();

        goal += 1;

        if(goal > 180) {
            clearInterval(intervalId);
        }
    }, 1);
};



var DW_canvas = document.getElementById('DW_text');
if(DW_canvas.getContext){
    var DW_ctx = DW_canvas.getContext("2d");
    DW_ctx.beginPath();
    DW_ctx.font = "bold 16px gothic";
    DW_ctx.fillStyle = '#f95eef';
    DW_ctx.fillText("DreamWeaver 75%", 20, 32);
};

var DW_canvas = document.getElementById('DW_graph');
if(DW_canvas.getContext){
    var DW_ctx = DW_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {

        let angle = goal * Math.PI / 180;
        DW_ctx.beginPath();
        DW_ctx.arc(w,h,70,start,angle,false);
        DW_ctx.lineTo(w,h);
        DW_ctx.stroke();

        DW_ctx.fillStyle = "white";
        DW_ctx.fill();

        goal += 1;

        if(goal > 270) {
            clearInterval(intervalId);
        }
    }, 1);
};


var XD_canvas = document.getElementById('XD_text');
if(XD_canvas.getContext){
    var XD_ctx = XD_canvas.getContext("2d");
    XD_ctx.beginPath();
    XD_ctx.font = "bold 16px gothic";
    XD_ctx.fillStyle = '#ff61f6';
    XD_ctx.fillText("XD 55%", 70, 32);
};

var XD_canvas = document.getElementById('XD_graph');
if(XD_canvas.getContext){
    var XD_ctx = XD_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {

        let angle = goal * Math.PI / 180;
        XD_ctx.beginPath();
        XD_ctx.arc(w,h,70,start,angle,false);
        XD_ctx.lineTo(w,h);
        XD_ctx.stroke();

        XD_ctx.fillStyle = "white";
        XD_ctx.fill();

        goal += 1;

        if(goal > 198) {
            clearInterval(intervalId);
        }
    }, 1);
};


var HTMLCSS_canvas = document.getElementById('HTMLCSS_text');
if(HTMLCSS_canvas.getContext){
    var HTML_ctx = HTMLCSS_canvas.getContext("2d");
    var B_ctx = HTMLCSS_canvas.getContext("2d");
    var CSS_ctx = HTMLCSS_canvas.getContext("2d");
    HTML_ctx.beginPath();
    HTML_ctx.font = "bold 16px gothic";
    HTML_ctx.fillStyle = '#f03310';
    HTML_ctx.fillText("HTML", 35, 32);

    B_ctx.beginPath();
    B_ctx.font = "bold 16px gothic";
    B_ctx.fillStyle = 'black';
    B_ctx.fillText("/", 84, 32);

    CSS_ctx.beginPath();
    CSS_ctx.font = "bold 16px gothic";
    CSS_ctx.fillStyle = '#254bdd';
    CSS_ctx.fillText("CSS 70%", 92, 32);

};

var HTMLCSS_canvas = document.getElementById('HTMLCSS_graph');
if(HTMLCSS_canvas.getContext){
    var HTMLCSS_ctx = HTMLCSS_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {

        let angle = goal * Math.PI / 180;
        HTMLCSS_ctx.beginPath();
        HTMLCSS_ctx.arc(w,h,70,start,angle,false);
        HTMLCSS_ctx.lineTo(w,h);
        HTMLCSS_ctx.stroke();

        HTMLCSS_ctx.fillStyle = "white";
        HTMLCSS_ctx.fill();

        goal += 1;

        if(goal > 252) {
            clearInterval(intervalId);
        }
    }, 1);
};

var JS_canvas = document.getElementById('JS_text');
if(JS_canvas.getContext){
    var JS_ctx = JS_canvas.getContext("2d");
    JS_ctx.beginPath();
    JS_ctx.font = "bold 16px gothic";
    JS_ctx.fillStyle = '#d6be00';
    JS_ctx.fillText("JavaScript 70%", 40, 32);
};

var JS_canvas =document.getElementById('JS_graph');
if(JS_canvas.getContext){
    var JS_ctx = JS_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {
        let angle = goal * Math.PI / 180;
        JS_ctx.beginPath();
        JS_ctx.arc(w,h,70,start,angle,false);
        JS_ctx.lineTo(w,h);
        JS_ctx.stroke();

        JS_ctx.fillStyle = "white";
        JS_ctx.fill();

        goal += 1;

        if(goal > 252) {
            clearInterval(intervalId);
        };
    }, 1);
};



var WP_canvas = document.getElementById('WP_text');
if(WP_canvas.getContext){
    var WP_ctx = WP_canvas.getContext("2d");
    WP_ctx.beginPath();
    WP_ctx.font = "bold 16px gothic";
    WP_ctx.fillStyle = '#0073aa';
    WP_ctx.fillText("WordPress 50%", 30, 32);
};

var WP_canvas =document.getElementById('WP_graph');
if(WP_canvas.getContext){
    var WP_ctx = WP_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {
        let angle = goal * Math.PI / 180;
        WP_ctx.beginPath();
        WP_ctx.arc(w,h,70,start,angle,false);
        WP_ctx.lineTo(w,h);
        WP_ctx.stroke();

        WP_ctx.fillStyle = "white";
        WP_ctx.fill();

        goal += 1;

        if(goal > 180) {
            clearInterval(intervalId);
        };
    }, 1);
};


var Excel_canvas = document.getElementById('Excel_text');
if(Excel_canvas.getContext){
    var Excel_ctx = Excel_canvas.getContext("2d");
    Excel_ctx.beginPath();
    Excel_ctx.font = "bold 16px gothic";
    Excel_ctx.fillStyle = '#0e763c';
    Excel_ctx.fillText("Excel 65%", 58, 32);
};

var Excel_canvas =document.getElementById('Excel_graph');
if(Excel_canvas.getContext){
    var Excel_ctx = Excel_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {
        let angle = goal * Math.PI / 180;
        Excel_ctx.beginPath();
        Excel_ctx.arc(w,h,70,start,angle,false);
        Excel_ctx.lineTo(w,h);
        Excel_ctx.stroke();

        Excel_ctx.fillStyle = "white";
        Excel_ctx.fill();

        goal += 1;

        if(goal > 207) {
            clearInterval(intervalId);
        };
    }, 1);
};



var Word_canvas = document.getElementById('Word_text');
if(Word_canvas.getContext){
    var Word_ctx = Word_canvas.getContext("2d");
    Word_ctx.beginPath();
    Word_ctx.font = "bold 16px gothic";
    Word_ctx.fillStyle = '#1451b6';
    Word_ctx.fillText("Word 65%", 62, 32);
};


var Word_canvas =document.getElementById('Word_graph');
if(Word_canvas.getContext){
    var Word_ctx = Word_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {
        let angle = goal * Math.PI / 180;
        Word_ctx.beginPath();
        Word_ctx.arc(w,h,70,start,angle,false);
        Word_ctx.lineTo(w,h);
        Word_ctx.stroke();

        Word_ctx.fillStyle = "white";
        Word_ctx.fill();

        goal += 1;

        if(goal > 207) {
            clearInterval(intervalId);
        };
    }, 1);
};


var PP_canvas = document.getElementById('PP_text');
if(PP_canvas.getContext){
    var PP_ctx = PP_canvas.getContext("2d");
    PP_ctx.beginPath();
    PP_ctx.font = "bold 16px gothic";
    PP_ctx.fillStyle = '#bc3517';
    PP_ctx.fillText("Power Point 70%", 30, 32);
};

var PP_canvas =document.getElementById('PP_graph');
if(PP_canvas.getContext){
    var PP_ctx = PP_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {
        let angle = goal * Math.PI / 180;
        PP_ctx.beginPath();
        PP_ctx.arc(w,h,70,start,angle,false);
        PP_ctx.lineTo(w,h);
        PP_ctx.stroke();

        PP_ctx.fillStyle = "white";
        PP_ctx.fill();

        goal += 1;

        if(goal > 252) {
            clearInterval(intervalId);
        };
    }, 1);
};



var SEO_canvas = document.getElementById('SEO_text');
if(SEO_canvas.getContext){
    var SEO_ctx = SEO_canvas.getContext("2d");
    SEO_ctx.beginPath();
    SEO_ctx.font = "bold 16px gothic";
    SEO_ctx.fillStyle = 'black';
    SEO_ctx.fillText("SEO 70%", 66, 32);
};


var SEO_canvas =document.getElementById('SEO_graph');
if(SEO_canvas.getContext){
    var SEO_ctx = SEO_canvas.getContext("2d");

    let start = 0;
    let goal = 0;

    const intervalId = setInterval(function() {
        let angle = goal * Math.PI / 180;
        SEO_ctx.beginPath();
        SEO_ctx.arc(w,h,70,start,angle,false);
        SEO_ctx.lineTo(w,h);
        SEO_ctx.stroke();

        SEO_ctx.fillStyle = "white";
        SEO_ctx.fill();

        goal += 1;

        if(goal > 252) {
            clearInterval(intervalId);
        };
    }, 1);
};

