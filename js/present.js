var gift = {
    popup:function() {
        $("div.mask").css({"display": "block"});
        $("div.present_dialog").css({"opacity":"1"});
        $("body").bind("touchmove",function(e){e.preventDefault();});
    },
    close:function() {
        $("div.present_dialog").css({"opacity":"0"});
        setTimeout(function(){
            $("div.mask").css({"display": "none"});
        }, 300);

        $("body").unbind("touchmove");
    }
};