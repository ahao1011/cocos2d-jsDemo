var  StartLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        var  size = cc.winSize;
        var  helloLabel = new  cc.LabelTTF("hello word--",138);
        helloLabel.x = size.width /2;
        helloLabel.y = size.height/2;
        this.addChild(helloLabel);

        // 添加精灵
        this.bgSprite1 = new cc.Sprite(res.BackBg);
        this.bgSprite1.attr({
            x:size.width/2,
            y:size.height/2
        });
        this.addChild(this.bgSprite1,0);
        // 添加开始菜单
        var startItem = new  cc.MenuItemImage(
            res.StartBtn_N,
            res.StartBtn_S,
            function () {
                cc.log("点击了开始按钮");
            },this);
        startItem.attr({
           x:size.width/2,
           y:size.height/2,
           anchorX:0.5,
           anchorY:0.5
        });
        var  menu = new  cc.Menu(startItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);
        return true;
    }
});

var  StartScene = cc.Scene.extend({

    onEnter:function (){

        this._super();
        var  layer = new StartLayer();
        this.addChild(layer);
    }

})