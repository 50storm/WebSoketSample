class InputUtility {
    private elements: NodeListOf<Element>;

    constructor(className:string) {
        console.log('InputUlility起動!');
        this.setElements(className);
        this.setEventHandlers(this.elements);
    }

    public setElements = (className) => {
        this.elements = document.getElementsByClassName(className);
    }

    //イベントハンドラを登録
    private setEventHandlers = (elems: NodeListOf<Element>) => {
        for (let i = 0; i < elems.length; i++) {
            console.log(elems);
            elems[i].addEventListener("click", this.addSentence , false);
        }
    }

    //チャットテキスト欄の後ろに追加
    private addSentence = (e)=> {
        console.log(e);
        //HTMLElementに、valueプロパティがないためHTMLInputElementに変換
        let chatText = <HTMLInputElement>document.getElementById('chat-text');
        console.log('chatText.value=>' + chatText.value);
        //ラジオボタンで挿入を前後切り替える
        let radioAfter = <HTMLInputElement>document.getElementById('after');
        console.log('radioAfter.checked=>' + radioAfter.checked);
        let wkText:string;
        if (radioAfter.checked) {
            if (chatText.value.replace(/^\s+|^　+/g, '') == '') {
                //半角、全角スペースがある場合のみテキスト欄にのこている場合はスペースをカット
           	    wkText = e.currentTarget.innerText;
            } else {
                wkText = chatText.value + " " + e.currentTarget.innerText;
           }

       } else {
            wkText = e.currentTarget.innerText + " " + chatText.value;
       }
        
       chatText.value =　wkText;
        console.log("chatText.innerText=>"+chatText.innerText);
   }
}