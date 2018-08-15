var InputUtility = /** @class */ (function () {
    function InputUtility(className) {
        var _this = this;
        this.setElements = function (className) {
            _this.elements = document.getElementsByClassName(className);
        };
        //イベントハンドラを登録
        this.setEventHandlers = function (elems) {
            for (var i = 0; i < elems.length; i++) {
                console.log(elems);
                elems[i].addEventListener("click", _this.addSentence, false);
            }
        };
        //チャットテキスト欄の後ろに追加
        this.addSentence = function (e) {
            //HTMLElementに、valueプロパティがないためHTMLInputElementに変換
            var chatText = document.getElementById('chat-text');
            //ラジオボタンで挿入を前後切り替える
            var radioAfter = document.getElementById('after');
            if (radioAfter.checked) {
                if (chatText.value.replace(/^\s+|^　+/g, '') == '') {
                    //半角、全角スペースがある場合のみテキスト欄にのこている場合はスペースをカット
                    document.getElementById('chat-text').innerText = e.currentTarget.innerText;
                }
                else {
                    document.getElementById('chat-text').innerText = chatText.value + " " + e.currentTarget.innerText;
                }
            }
            else {
                document.getElementById('chat-text').innerText = e.currentTarget.innerText + " " + chatText.value;
            }
        };
        this.setElements(className);
        this.setEventHandlers(this.elements);
    }
    return InputUtility;
}());
window.onload = function () {
    var inputUtility = new InputUtility("click-input");
};
