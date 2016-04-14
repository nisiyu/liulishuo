var gift = {
    popup:function() {
        $("div.mask").css({"display": "block"});
        $("div.present_dialog").css({"display": "block"});
    },
    close:function() {
        $("div.mask").css({"display": "none"});
        $("div.present_dialog").css({"display": "none"});
    }
};