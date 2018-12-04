var  PlayLayer  = cc.Layer.extend({

       bgSprite:null,
       ctor:function () {
           this._super();
            var size = cc.winSize;
            // addbg
           this.bgSprite = new cc.Sprite(res.background);
           this.bgSprite.attr({
               x:size.width/2,
               y:size.height/2,
               rotation:180
           })
           this.addChild(this.bgSprite);
           return true;
       }
});
var PlayScene =  cc.Scene.extend({

    onEnter:function () {
        this._super();
        var  Layer = new  PlayLayer();
        this.addChild(Layer);
    }
});