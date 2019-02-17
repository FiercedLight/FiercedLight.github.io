gdjs.GameCode = {};
gdjs.GameCode.GDBallObjects1_1final = [];

gdjs.GameCode.GDBasketObjects1_1final = [];

gdjs.GameCode.GDBasketRObjects1_1final = [];

gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDBasketRObjects1= [];
gdjs.GameCode.GDBasketRObjects2= [];
gdjs.GameCode.GDBasketRObjects3= [];
gdjs.GameCode.GDBasketObjects1= [];
gdjs.GameCode.GDBasketObjects2= [];
gdjs.GameCode.GDBasketObjects3= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDBasketTriggerObjects1= [];
gdjs.GameCode.GDBasketTriggerObjects2= [];
gdjs.GameCode.GDBasketTriggerObjects3= [];
gdjs.GameCode.GDBasketNetObjects1= [];
gdjs.GameCode.GDBasketNetObjects2= [];
gdjs.GameCode.GDBasketNetObjects3= [];
gdjs.GameCode.GDDebugButtonObjects1= [];
gdjs.GameCode.GDDebugButtonObjects2= [];
gdjs.GameCode.GDDebugButtonObjects3= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDHighScoresTextObjects1= [];
gdjs.GameCode.GDHighScoresTextObjects2= [];
gdjs.GameCode.GDHighScoresTextObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.userFunc0x67c408 = function(runtimeScene) {

function getJsonFromUrl(url) {
	if (!url) url = location.href;
	var question = url.indexOf("?");
	var hash = url.indexOf("#");
	if (hash == -1 && question == -1) return {};
	if (hash == -1) hash = url.length;
	var query = question == -1 || hash == question + 1 ? url.substring(hash) :
		url.substring(question + 1, hash);
	var result = {};
	query.split("&").forEach(function (part) {
		if (!part) return;
		part = part.split("+").join(" "); // replace every + with space, regexp-free version
		var eq = part.indexOf("=");
		var key = eq > -1 ? part.substr(0, eq) : part;
		var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
		var from = key.indexOf("[");
		if (from == -1) result[decodeURIComponent(key)] = val;
		else {
			var to = key.indexOf("]", from);
			var index = decodeURIComponent(key.substring(from + 1, to));
			key = decodeURIComponent(key.substring(0, from));
			if (!result[key]) result[key] = [];
			if (!index) result[key].push(val);
			else result[key][index] = val;
		}
	});
	return result;
}

console.log(window.location.href)
// urlData = getJsonFromUrl("https://fiercedlight.github.io/Ballspin/index?imid=BAAAAOcfAABnMdq9Mw0JDrg6W4E&uid=278653063#tgShareScoreUrl=tg%3A%2F%2Fshare_game_score%3Fhash%3DLh-ki5S_JODxwalSnsGUgZQAWiWZ2Ka7uBhJnV67l30")
urlData = getJsonFromUrl(window.location.href)

var imid =runtimeScene.getVariables().get("imid")
var uid =runtimeScene.getVariables().get("uid")

imid.setString(urlData.imid)
uid.setString(urlData.uid)

const getScoreHttp = new XMLHttpRequest();
const url2 = "https://api.telegram.org/bot709214656:AAGEOTZGdqU1_tsweWY6a23SuOtMcFC0E-I/getGameHighScores";
var data2 = JSON.stringify({
	"user_id": runtimeScene.getVariables().get("uid")._str,
	"inline_message_id":runtimeScene.getVariables().get("imid")._str
});
var scores;
getScoreHttp.open("POST", url2);
getScoreHttp.setRequestHeader("Content-Type", "application/json");
getScoreHttp.send(data2);
getScoreHttp.onreadystatechange = (e) => {
	scores = JSON.parse(getScoreHttp.responseText)
	console.log(scores.result[0])
	var highStr = ""
	var i
	
	for (i = 0; i < scores.result.length; i++) {
		console.log(i)
		console.log(scores.result[i].user.first_name)
		highStr += scores.result[i].position + " " +scores.result[i].user.first_name +" ".repeat(15-scores.result[i].user.first_name.length)+ scores.result[i].score+"\n";
	}
	var hscores =runtimeScene.getVariables().get("hscores")
	console.log(highStr)
	hscores.setString(highStr)
}



};
gdjs.GameCode.eventsList0x6950a0 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x67c408(runtimeScene);

}


}; //End of gdjs.GameCode.eventsList0x6950a0
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketObjects2Objects = Hashtable.newFrom({"Basket": gdjs.GameCode.GDBasketObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketRObjects2Objects = Hashtable.newFrom({"BasketR": gdjs.GameCode.GDBasketRObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketTriggerObjects1Objects = Hashtable.newFrom({"BasketTrigger": gdjs.GameCode.GDBasketTriggerObjects1});gdjs.GameCode.userFunc0x67ea28 = function(runtimeScene) {

// https://api.telegram.org/bot709214656:AAGEOTZGdqU1_tsweWY6a23SuOtMcFC0E-I/getGameHighScores

const scoreHttp = new XMLHttpRequest();
const url = "https://api.telegram.org/bot709214656:AAGEOTZGdqU1_tsweWY6a23SuOtMcFC0E-I/setGameScore";
var data = JSON.stringify({
	"user_id": runtimeScene.getVariables().get("uid")._str,
	"score": runtimeScene.getVariables().get("score")._value,
	"inline_message_id":runtimeScene.getVariables().get("imid")._str
});
scoreHttp.open("POST", url);
scoreHttp.setRequestHeader("Content-Type", "application/json");
scoreHttp.send(data);
scoreHttp.onreadystatechange = (e) => {
	console.log(scoreHttp.responseText)
}

const getScoreHttp = new XMLHttpRequest();
const url2 = "https://api.telegram.org/bot709214656:AAGEOTZGdqU1_tsweWY6a23SuOtMcFC0E-I/getGameHighScores";
var data2 = JSON.stringify({
	"user_id": runtimeScene.getVariables().get("uid")._str,
	"inline_message_id":runtimeScene.getVariables().get("imid")._str
});
var scores;
getScoreHttp.open("POST", url2);
getScoreHttp.setRequestHeader("Content-Type", "application/json");
getScoreHttp.send(data2);
getScoreHttp.onreadystatechange = (e) => {
	scores = JSON.parse(getScoreHttp.responseText)
	console.log(scores.result[0])
	var highStr = ""
	var i
	
	for (i = 0; i < scores.result.length; i++) {
		console.log(i)
		console.log(scores.result[i].user.first_name)
		highStr += scores.result[i].position + " " +scores.result[i].user.first_name +" ".repeat(15-scores.result[i].user.first_name.length)+ scores.result[i].score+"\n";
	}
	var hscores =runtimeScene.getVariables().get("hscores")
	console.log(highStr)
	hscores.setString(highStr)
}






};
gdjs.GameCode.eventsList0x6d0820 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(2);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.GameCode.userFunc0x67ea28(runtimeScene);

}


}; //End of gdjs.GameCode.eventsList0x6d0820
gdjs.GameCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x6950a0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].setPosition(10,10);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setAngularVelocity(gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").getAngularVelocity() + (1000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
gdjs.GameCode.GDBasketObjects1.createFrom(runtimeScene.getObjects("Basket"));
gdjs.GameCode.GDBasketNetObjects1.createFrom(runtimeScene.getObjects("BasketNet"));
gdjs.GameCode.GDBasketRObjects1.createFrom(runtimeScene.getObjects("BasketR"));
gdjs.GameCode.GDBasketTriggerObjects1.createFrom(runtimeScene.getObjects("BasketTrigger"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs.GameCode.GDBasketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketObjects1[i].setPosition(gdjs.randomInRange(100, 260),gdjs.randomInRange(100, 500));
}
}{for(var i = 0, len = gdjs.GameCode.GDBasketRObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketRObjects1[i].setPosition((( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointX("")) + 16 + 32 + (80 / (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 3)),(( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDBasketNetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketNetObjects1[i].setPosition((( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointX("")) + (40 / (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 3)),(( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointY("")) - 5);
}
}{for(var i = 0, len = gdjs.GameCode.GDBasketTriggerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketTriggerObjects1[i].setPosition((( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointX("")) + 16 + (40 / (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 3)),(( gdjs.GameCode.GDBasketObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBasketObjects1[0].getPointY("")) + 14);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}}

}


{

gdjs.GameCode.GDBallObjects1.length = 0;

gdjs.GameCode.GDBasketObjects1.length = 0;

gdjs.GameCode.GDBasketRObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.GDBallObjects1_1final.length = 0;gdjs.GameCode.GDBasketObjects1_1final.length = 0;gdjs.GameCode.GDBasketRObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.GDBallObjects2.createFrom(runtimeScene.getObjects("Ball"));
gdjs.GameCode.GDBasketObjects2.createFrom(runtimeScene.getObjects("Basket"));
gdjs.GameCode.condition0IsTrue_1.val = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects2Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketObjects2Objects, false);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBallObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBallObjects1_1final.indexOf(gdjs.GameCode.GDBallObjects2[j]) === -1 )
            gdjs.GameCode.GDBallObjects1_1final.push(gdjs.GameCode.GDBallObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDBasketObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBasketObjects1_1final.indexOf(gdjs.GameCode.GDBasketObjects2[j]) === -1 )
            gdjs.GameCode.GDBasketObjects1_1final.push(gdjs.GameCode.GDBasketObjects2[j]);
    }
}
}
{
gdjs.GameCode.GDBallObjects2.createFrom(runtimeScene.getObjects("Ball"));
gdjs.GameCode.GDBasketRObjects2.createFrom(runtimeScene.getObjects("BasketR"));
gdjs.GameCode.condition1IsTrue_1.val = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects2Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketRObjects2Objects, false);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBallObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBallObjects1_1final.indexOf(gdjs.GameCode.GDBallObjects2[j]) === -1 )
            gdjs.GameCode.GDBallObjects1_1final.push(gdjs.GameCode.GDBallObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDBasketRObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBasketRObjects1_1final.indexOf(gdjs.GameCode.GDBasketRObjects2[j]) === -1 )
            gdjs.GameCode.GDBasketRObjects1_1final.push(gdjs.GameCode.GDBasketRObjects2[j]);
    }
}
}
{
gdjs.GameCode.GDBallObjects1.createFrom(gdjs.GameCode.GDBallObjects1_1final);
gdjs.GameCode.GDBasketObjects1.createFrom(gdjs.GameCode.GDBasketObjects1_1final);
gdjs.GameCode.GDBasketRObjects1.createFrom(gdjs.GameCode.GDBasketRObjects1_1final);
}
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(6);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


{
gdjs.GameCode.GDHighScoresTextObjects1.createFrom(runtimeScene.getObjects("HighScoresText"));
{for(var i = 0, len = gdjs.GameCode.GDHighScoresTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoresTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}}

}


{


{
gdjs.GameCode.GDScoreTextObjects1.createFrom(runtimeScene.getObjects("ScoreText"));
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
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
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBasketTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDBasketNetObjects1.createFrom(runtimeScene.getObjects("BasketNet"));
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\Desktop\\Misc\\click.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDBasketNetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBasketNetObjects1[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.GameCode.eventsList0x6d0820(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0xb2158


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDBasketRObjects1.length = 0;
gdjs.GameCode.GDBasketRObjects2.length = 0;
gdjs.GameCode.GDBasketRObjects3.length = 0;
gdjs.GameCode.GDBasketObjects1.length = 0;
gdjs.GameCode.GDBasketObjects2.length = 0;
gdjs.GameCode.GDBasketObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDBasketTriggerObjects1.length = 0;
gdjs.GameCode.GDBasketTriggerObjects2.length = 0;
gdjs.GameCode.GDBasketTriggerObjects3.length = 0;
gdjs.GameCode.GDBasketNetObjects1.length = 0;
gdjs.GameCode.GDBasketNetObjects2.length = 0;
gdjs.GameCode.GDBasketNetObjects3.length = 0;
gdjs.GameCode.GDDebugButtonObjects1.length = 0;
gdjs.GameCode.GDDebugButtonObjects2.length = 0;
gdjs.GameCode.GDDebugButtonObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDHighScoresTextObjects1.length = 0;
gdjs.GameCode.GDHighScoresTextObjects2.length = 0;
gdjs.GameCode.GDHighScoresTextObjects3.length = 0;

gdjs.GameCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['GameCode'] = gdjs.GameCode;
