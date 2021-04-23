"use strict"

var bg = document.getElementById('bg');
var bg_ctx = bg.getContext("2d");

var radius = 25;
var ball = 50;

//ボール1個目
var x = [];
var y = [];
var dx = [];
var dy = [];
var x0 = bg.width / 2;
var y0 = bg.height / 2;

var dx0 = 1 / 2;
var dy0 = -1;


//ボール2個目
var x1 = bg.width / 3 - 50;
var y1 = bg.height / 4 - 50;
var dx1 = 1;
var dy1 = -1 / 2;

//ボール3個目
var x2 = bg.width / 2 + 50;
var y2 = bg.height / 3 + 50;
var dx2 = -1;
var dy2 = -1;

var obj_box = [];
for (var c = 0; c < ball; c++) {
    obj_box[c] = {
        //x: 0,
        //y: 0,
        status: (Math.floor(Math.random() * 10) % 10) + 1
    };
}
console.log(obj_box[0],obj_box[1], obj_box[2]);
//ランダム
var p =[];
    for (let i = 0; i < 3; i++) {
        p.push(Math.floor(Math.random() * (255 + 1)));
    }

var q1 = Math.floor(Math.random() * (255 + 1));
var q2 = Math.floor(Math.random() * (255 + 1));
var q3 = Math.floor(Math.random() * (255 + 1));



for (var c = 0; c < ball; c++) {
    x[c] = (bg.width - radius) / (Math.floor(Math.random() * 5) + 1) ;
    y[c] = (bg.height - radius) / (Math.floor(Math.random() * 5)+ 1) ;
}

console.log(x[0], y[0]);
//ボールの設定
function ballDraw() {
    for (var c = 0; c < ball; c++) {
        if (obj_box[c].status != 0) {
            if (obj_box[c].status == 1 ||obj_box[c].status == 4 ||obj_box[c].status == 7) {
                bg_ctx.beginPath();
                bg_ctx.arc(x[c], y[c], radius, 0, Math.PI * 2);
                bg_ctx.fillStyle = "red";
                bg_ctx.fill();
                bg_ctx.closePath();
                //console.log(q1, q2, q3);

            } else if (obj_box[c].status == 2 ||obj_box[c].status == 5 ||obj_box[c].status == 8) {
                bg_ctx.beginPath();
                bg_ctx.arc(x[c], y[c], radius, 0, Math.PI * 2);
                bg_ctx.fillStyle = "blue";
                bg_ctx.fill();
                bg_ctx.closePath();
                //console.log(x[c]);
                //
            } else if (obj_box[c].status == 3 ||obj_box[c].status == 6 ||obj_box[c].status == 9) {
                bg_ctx.beginPath();
                bg_ctx.arc(x[c], y[c], radius, 0, Math.PI * 2);
                bg_ctx.fillStyle = "black";
                bg_ctx.fill();
                bg_ctx.closePath();

            } else if (obj_box[c].status == 10) {
                bg_ctx.beginPath();
                bg_ctx.arc(x[c], y[c], radius, 0, Math.PI * 2);
                bg_ctx.fillStyle = "rgb(" + Math.floor(Math.random() * (255 + 1)) + 
                    "," + Math.floor(Math.random() * (255 + 1)) + ","
                    + Math.floor(Math.random() * (255 + 1)) +")";
                bg_ctx.fill();
                bg_ctx.closePath();

//            } else if (obj_box[c].status == 5) {
//                bg_ctx.beginPath();
//                bg_ctx.arc(x2, y2+50, radius, 0, Math.PI * 2);
//                bg_ctx.fillStyle = "rgb(210, 240,50)";
//                bg_ctx.fill();
//                bg_ctx.closePath();
            }
        }
    }
}

//function attack() {
//    for (var c = 0; c < ball; c++) {
//        if (status != 0) {
//            if (dx + x > bg.width - radius || dx + x < radius) {
//                obj_box[c].status--;
//            }
//
//            if (y + dy < radius || y + dy > bg.height - radius) {
//                obj_box[c].status--;
//            }
//
//        }
//    }



for (var c = 0; c < ball; c++) {
        dx[c] = 1;
        dy[c] = -1;
    }
//console.log(dx[0],x[0],bg.width,radius);

function draw() {
    bg_ctx.clearRect(0, 0, bg.width, bg.height);
    ballDraw();
    //attack();

    for (var c = 0; c < ball; c++) {
        //console.log("dx[c]");
        x[c] = x[c] + dx[c];
        y[c] = y[c] + dy[c];
        //console.log(x[c]);
        if (dx[c] + x[c] > bg.width - radius || dx[c] + x[c] < radius) {
            

            dx[c] = -dx[c];
            //console.log(x[c]);
        }
//        if (dx1 + x1 > bg.width - radius || dx1 + x1 < radius) {
//            dx1 = -dx1;
//        }
//        if (dx2 + x2 > bg.width - radius || dx2 + x2 < radius) {
//            dx2 = -dx2;
//        }

        if (dy[c] + y[c] < radius || dy[c] + y[c] > bg.height - radius) {
            dy[c] = -dy[c];
        }
//        if (y1 + dy1 < radius || y1 + dy1 > bg.height - radius) {
//            dy1 = -dy1;
//        }
//        if (y2 + dy2 < radius || y2 + dy2 > bg.height - radius) {
//            dy2 = -dy2;
//        }
//        x[c] = x[c] + dx[c];
//        y[c] = y[c] + dy[c];
        //console.log(x[0]);
        //break;
    }
    
    
//    for (var c = 0; c < ball; c++) {
//        x[c] += dx[c];
//        y[c] += dy[c];
//    }

    
    x0 += dx0;
    y0 += dy0;
    x1 += dx1;
    y1 += dy1;
    x2 += dx2;
    y2 += dy2;

}


setInterval(draw, 10);
