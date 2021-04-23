"use strict";

//https://developer.mozilla.org/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

var block = document.getElementById('block');
if (block.getContext) {
    var block_ctx = block.getContext("2d");

    //各種定義

    //canvasサイズ（500*500）を基準にbarの位置・幅・x座標(今回はcanvas領域の中心)を定義
    var x = block.width / 2;
    var y = block.height - 30;
    var bar_width = 70;
    var bar_right = 10;
    var bar_left = 10;
    var bar_x = (block.width - bar_width) / 2;

    //ボールの直径と半径を定義
    var diameter = 10;
    var radius = diameter / 2;

    //ボールの速さを定義
    var xd = 2;
    var yd = -1;

    //キーを押さないときの初期値を定義
    var right = false;
    var left = false;

    //ブロックと隙間を定義
    //縦7個、横10個、幅40、高さ20、余白5
    var obj_r = 7;
    var obj_c = 10;
    var obj_w = 40;
    var obj_h = 20;
    var obj_p = 5;

    //ブロックがcanvasから見切れないようにするためにマージンを設定
    var obj_offsetTop = 30;
    var obj_offsetLeft = 30;

    //スコアを記録する
    var score = 0;

    //ライフ
    var life = 3;

    //ブロックをオブジェクトで収納。statusで描写をするかを判定する（0以外なら描写）
    var obj_box = [];
    for (var c = 0; c < obj_c; c++) {
        obj_box[c] = [];
        for (var r = 0; r < obj_r; r++) {
            //0が生成されたときの保険でランダムに生成した数字に１を足す。よって1～3の数字をランダムで生成。
            obj_box[c][r] = {
                x: 0,
                y: 0,
                status: (Math.floor(Math.random() * 10) % 3) + 1
            };
        }
    }

    //キーを押したときと離した時の処理を記述。今回は「→」と「←」を押したときの処理
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    //バーをマウスの動きに合わせる
    document.addEventListener("mousemove", mouseMoveHandler, false);

    //キーが押されたら「true」。後述する処理の開始の合図となる
    function keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            right = true;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
            left = true;
        }
    }

    //キーを離したら「false」。後述する処理をストップする。
    function keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            right = false;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
            left = false;
        }
    }

    //バーをマウスの動きに合わせる + 画面から見切れないようにする。今回はバーの中心を基準にマウスと同じ動きにする
    function mouseMoveHandler(e) {

        //e.clientX…「e」のイベントが発生したときのx座標を取得
        //block.offsetLeft…「block」（今回はcanvasの領域）の左端からbarの距離を取得
        var relativeL = e.clientX - block.offsetLeft;
        //バーの左端が0以上かつ、canvas領域の右端からバーの長さの半分を引いた（つまり、バーがcanvasの右端についた）とき
        if (relativeL > 0 && relativeL < block.width - bar_width / 2) {
            //バーをcanvas領域の右端の外に出さない
            bar_x = relativeL - bar_width / 2;
        }
        //バーの左端がバーの長さの半分以下の（つまり、バーの左端がcanvasの左端についた）とき
        if (relativeL < bar_width / 2) {
            //バーをcanvas領域の左端の外に出さない
            bar_x = 0;
        }
    }


    //ブロックに当たったら跳ね返る、ブロックを消滅させる、スコアのカウント
    function attack() {
        for (var c = 0; c < obj_c; c++) {
            for (var r = 0; r < obj_r; r++) {
                var b = obj_box[c][r];
                //statusが0以外ならブロックに当たった時、ボールは跳ね返る
                if (b.status != 0) {
                    if (x > b.x && x < b.x + obj_w && y > b.y && y < b.y + obj_h) {
                        yd = -yd;
                        b.status--;

                        //statusが0になったらscoreを加算
                        if (b.status == 0) {
                            score++;
                        }
                    }
                }
            }
        }
    }

    //ボールの設定
    function ball() {
        block_ctx.beginPath();
        block_ctx.arc(x, y, diameter, 0, Math.PI * 2, true);
        block_ctx.fillStyle = "#000";
        block_ctx.fill();
        block_ctx.closePath();
    }

    //バーの設定
    function bar() {
        //基本のバー
        block_ctx.beginPath();
        block_ctx.rect(bar_x, block.height - 10, bar_width, 10);
        block_ctx.fillStyle = "#000";
        block_ctx.fill();
        block_ctx.closePath();


        //両端を赤くする
        block_ctx.beginPath();
        block_ctx.rect(bar_x, block.height - 10, bar_left, 10);
        block_ctx.rect(bar_x + bar_width - bar_right, block.height - 10, bar_right, 10);
        block_ctx.fillStyle = "red";
        block_ctx.fill();
        block_ctx.closePath();
    }


    //ブロックを描写
    function obj() {
        for (var c = 0; c < obj_c; c++) {
            for (var r = 0; r < obj_r; r++) {

                //obj_box[c][r]のブロックのstatusが0以外なら描写する。0なら描写しない
                if (obj_box[c][r].status != 0) {

                    //ブロックの情報をオブジェクトで収納。
                    //x軸に配列するブロックの情報。
                    //列番号*（幅+余白）+左マージンで描写開始位置の座標を出している
                    var obj_x = (c * (obj_w + obj_p)) + obj_offsetLeft;

                    //y軸に配列するブロックの情報。
                    //行番号*（幅+余白）+上マージンで描写開始位置の座標を出している
                    var obj_y = (r * (obj_h + obj_p)) + obj_offsetTop;
                    obj_box[c][r].x = obj_x;
                    obj_box[c][r].y = obj_y;

                    if (obj_box[c][r].status == 1) {
                        block_ctx.beginPath();
                        block_ctx.rect(obj_x, obj_y, obj_w, obj_h);
                        block_ctx.fillStyle = "red";
                        block_ctx.fill();
                        block_ctx.closePath();

                    } else if (obj_box[c][r].status == 2) {
                        block_ctx.beginPath();
                        block_ctx.rect(obj_x, obj_y, obj_w, obj_h);
                        block_ctx.fillStyle = "blue";
                        block_ctx.fill();
                        block_ctx.closePath();

                    } else if (obj_box[c][r].status == 3) {
                        block_ctx.beginPath();
                        block_ctx.rect(obj_x, obj_y, obj_w, obj_h);
                        block_ctx.fillStyle = "black";
                        block_ctx.fill();
                        block_ctx.closePath();

                    }
                }
            }
        }
    }

    function drawscore() {
        block_ctx.font = "16px Arial";
        block_ctx.fillStyle = "#3366ff";
        block_ctx.fillText("Score: " + score, 8, 20);
    }

    function drawLives() {
        block_ctx.font = "16px Arial";
        block_ctx.fillStyle = "#0095DD";
        block_ctx.fillText("Life: " + life, block.width - 65, 20);
    }


    //ボール、バー、ブロックの描写、動きを実行する
    function draw() {
        //このループに入る前のボール、ブロックの位置を削除
        block_ctx.clearRect(0, 0, block.width, block.height);

        //ブロックの描写、ブロックの消滅
        obj();

        //ボールの描写
        ball();

        //スコアの表示
        drawscore();

        //バーの描写
        bar();

        //ブロックに当たった時、跳ね返る処理
        attack();

        drawLives();

        //ボールが左右の壁に当たったら跳ね返る
        if (xd + x > block.width - diameter || xd + x < diameter) {
            xd = -xd;
        }

        //ボールが天井に当たったら跳ね返る
        if (y + yd < diameter) {
            yd = -yd;

            //ボールの下面が何かに当たったら
        } else if (y + yd > block.height - diameter) {

            //バーに当たったら跳ね返る
            if (x > bar_x && x < bar_x + bar_width) {
                yd = -yd;
                //xd = xd + 1;

                //canvasの底面なら
            } else {
                life--;
                if (life == 0) {
                    document.location.reload();
                } else {
                    x = block.width / 2;
                    y = block.height - 30;
                    xd = 2;
                    yd = -1;
                    bar_x = (block.width - bar_width) / 2;
                }

                //ボールが画面の底に当たったらゲームオーバー
                //clearInterval();
            }
        }

        //バーが右端にいない状態で「→」が押されたらバーが右に移動
        if (right && bar_x < block.width - bar_width) {
            bar_x += 7;

            //バーが左端にいない状態で「←」が押されたらバーが左に移動
        } else if (left && bar_x > 0) {
            bar_x -= 7;
        }


        //ボールの座標を移動（ボールを動かす）
        x += xd;
        y += yd;

    }
    setInterval(draw, 5);

}
