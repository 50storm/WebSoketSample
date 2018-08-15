class Notice {
    private fs = require('fs');
    private interval:number;

    constructor() { 
        console.log('お知らせ機能を起動');
        this.interval =  this.fs.readFileSync('message_interval.txt', 'utf-8');
        console.log(this.interval);
        
        
    }
    
    private createMessage = (year:number,month:number,date:number,hour:number,min:number,sec:number, message:string)=>{
       
        return year.toString()+'年'+month.toString()+'月'+date.toString()+'日'+
               hour.toString() +'時'+ min.toString()+'分'+sec.toString()+'秒'+ '<br>' + message;
    }
    //実行したい時間と、実行する間隔と、実行する関数を受け取る。
    public sendMessage   = (func: Function) => {
        let timerToken = setInterval(()=>{
                let dt = new Date();
                let year = dt.getFullYear();//年
                let month= dt.getMonth() + 1;//月
                let date = dt.getDate();  //日
                let hour = dt.getHours();//時 0~23
                let min  = dt.getMinutes();//分 0 から 59
            	let sec  = dt.getSeconds();//秒
                let message = this.fs.readFileSync('admin_message.txt', 'utf-8');
                if(message == ""){
                	console.log("お知らせなし。");
                }else{
                	func('notice_from_server', this.createMessage(year,month,date,hour,min,sec,message) );
                }
                //if(hour >= this.time){
                    //let message = this.fs.readFileSync('warning_message.txt', 'utf-8');
                    //func('notice_from_server', this.createMessage(year,month,date,hour,min,sec,message) );
                    //func('notice_from_server', this.message );
                    //console.log('notice_from_server:' + this.message);
                //}
            }
            ,
            this.interval
        );
       return timerToken; 
    }
}