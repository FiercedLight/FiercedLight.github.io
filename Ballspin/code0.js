gdjs.GameCode = {};
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDBasketObjects1= [];
gdjs.GameCode.GDBasketObjects2= [];
gdjs.GameCode.GDBasketTriggerObjects1= [];
gdjs.GameCode.GDBasketTriggerObjects2= [];
gdjs.GameCode.GDDebugTextObjects1= [];
gdjs.GameCode.GDDebugTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketTriggerObjects1Objects = Hashtable.newFrom({"BasketTrigger": gdjs.GameCode.GDBasketTriggerObjects1});gdjs.GameCode.eventsList0xb0cf8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDBasketObjects1.createFrom(runtimeScene.getObjects("Basket"));
gdjs.GameCode.GDBasketTriggerObjects1.createFrom(runtimeScene.getObjects("BasketTrigger"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs.GameCode.GDBasketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketObjects1[i].setPosition(gdjs.randomInRange(100,  200),gdjs.randomInRange(100,  500));
}
}{for(var i = 0, len = gdjs.GameCode.GDBasketTriggerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketTriggerObjects1[i].setPosition((( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointX("")),(( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointY("")));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDBasketObjects1.createFrom(runtimeScene.getObjects("Basket"));
gdjs.GameCode.GDBasketTriggerObjects1.createFrom(runtimeScene.getObjects("BasketTrigger"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDBasketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketObjects1[i].setPosition(gdjs.randomInRange(100,  200),gdjs.randomInRange(100,  500));
}
}{for(var i = 0, len = gdjs.GameCode.GDBasketTriggerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketTriggerObjects1[i].setPosition((( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointX("")),(( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointY("")));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2
;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setAngularVelocity((gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").getAngularVelocity())+50);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].setPosition(10,20);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


{
gdjs.GameCode.GDDebugTextObjects1.createFrom(runtimeScene.getObjects("DebugText"));
{for(var i = 0, len = gdjs.GameCode.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDebugTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


{
gdjs.GameCode.GDScoreTextObjects1.createFrom(runtimeScene.getObjects("ScoreText"));
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.GameCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
gdjs.GameCode.GDBasketTriggerObjects1.createFrom(runtimeScene.getObjects("BasketTrigger"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketTriggerObjects1Objects, false, runtimeScene, true);
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\Desktop\\Misc\\click.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


}; //End of gdjs.GameCode.eventsList0xb0cf8


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDBasketObjects1.length = 0;
gdjs.GameCode.GDBasketObjects2.length = 0;
gdjs.GameCode.GDBasketTriggerObjects1.length = 0;
gdjs.GameCode.GDBasketTriggerObjects2.length = 0;
gdjs.GameCode.GDDebugTextObjects1.length = 0;
gdjs.GameCode.GDDebugTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;

gdjs.GameCode.eventsList0xb0cf8(runtimeScene);
return;
}
gdjs['GameCode'] = gdjs.GameCode;
