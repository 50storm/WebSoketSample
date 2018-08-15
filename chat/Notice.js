var Notice = /** @class */ (function () {
    function Notice() {
        var _this = this;
        this.fs = require('fs');
        //実行したい時間と、実行する間隔と、実行する関数を受け取る。
        this.sendMessage = function (func) {
            var timerToken = setInterval(function () {
                var message;
                var dt = new Date();
                var year = dt.getFullYear(); //年
                var month = dt.getMonth() + 1; //月
                var date = dt.getDate(); //日
                var hour = dt.getHours(); //時 0~23
                var min = dt.getMinutes(); //分 0 から 59
                var sec = dt.getSeconds(); //秒
                //ある時刻になったらメッセージを自動送信 
                if (hour == 8 && min == 0) {
                    message = _this.fs.readFileSync('morning_message.txt', 'utf-8');
                    func('notice_ from_server', year.toString() + '年' + month.toString() + '月' + date.toString() + '日' + hour.toString() + '時' + min.toString() + '分' + sec.toString() + '秒' + '<br>' + message);
                    console.log('notice_from_server:' + message);
                }
                else if (hour == 12 && min == 0) {
                    message = _this.fs.readFileSync('noon_message.txt', 'utf-8');
                    func('notice_ from_server', year.toString() + '年' + month.toString() + '月' + date.toString() + '日' + hour.toString() + '時' + min.toString() + '分' + sec.toString() + '秒' + '<br>' + message);
                    console.log('notice_from_server:' + message);
                }
                else if (hour == 18 && min == 0) {
                    message = _this.fs.readFileSync('evening_message.txt', 'utf-8');
                    func('notice_ from_server', year.toString() + '年' + month.toString() + '月' + date.toString() + '日' + hour.toString() + '時' + min.toString() + '分' + sec.toString() + '秒' + '<br>' + message);
                    console.log('notice_from_server:' + message);
                }
                else if (hour >= 21) {
                    message = _this.fs.readFileSync('warning_message.txt', 'utf-8');
                    func('notice_ from_server', year.toString() + '年' + month.toString() + '月' + date.toString() + '日' + hour.toString() + '時' + min.toString() + '分' + sec.toString() + '秒' + '<br>' + message);
                    console.log('notice_from_server:' + message);
                }
                /*
                if(hour >= this.time){
                    func('notice_ from_server', year.toString()+'年'+month.toString()+'月'+date.toString()+'日'+hour.toString() +'時'+ min.toString()+'分'+sec.toString()+'秒'+ '<br>' + this.message );
                    console.log('notice_from_server:' + this.message);
                }
                */
            }, _this.interval);
            return timerToken;
        };
        //  let test = this.fs.readFileSync('message_interval.txt', 'utf-8');
        // console.log(test);
        this.interval = this.fs.readFileSync('message_interval.txt', 'utf-8');
        console.log(this.interval);
        console.log('お知らせ機能を起動！');
    }
    return Notice;
}());
