function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createView({
        showPagingControl: "true",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.question = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        top: "5dp",
        left: "30dp",
        right: "10dp",
        font: {
            fontSize: "14sp"
        },
        color: "#000",
        id: "question"
    });
    $.__views.row.add($.__views.question);
    $.__views.viewNumber = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        bottom: "10dp",
        right: "0dp",
        font: {
            fontSize: "150sp"
        },
        color: "#475c6c",
        opacity: .3,
        id: "viewNumber"
    });
    $.__views.row.add($.__views.viewNumber);
    $.__views.answerA = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        left: "80dp",
        right: "5dp",
        top: "70dp",
        font: {
            fontSize: "12sp"
        },
        color: "#000",
        visible: false,
        id: "answerA"
    });
    $.__views.row.add($.__views.answerA);
    $.__views.answerB = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        left: "80dp",
        right: "5dp",
        top: "140dp",
        font: {
            fontSize: "12sp"
        },
        color: "#000",
        visible: false,
        id: "answerB"
    });
    $.__views.row.add($.__views.answerB);
    $.__views.answerC = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        left: "80dp",
        right: "5dp",
        top: "210dp",
        font: {
            fontSize: "12sp"
        },
        color: "#000",
        visible: false,
        id: "answerC"
    });
    $.__views.row.add($.__views.answerC);
    $.__views.answerD = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        left: "80dp",
        right: "5dp",
        top: "280dp",
        font: {
            fontSize: "12sp"
        },
        color: "#000",
        visible: false,
        id: "answerD"
    });
    $.__views.row.add($.__views.answerD);
    $.__views.answerE = Ti.UI.createLabel({
        width: "auto",
        height: "auto",
        left: "80dp",
        right: "5dp",
        top: "350dp",
        font: {
            fontSize: "12sp"
        },
        color: "#000",
        visible: false,
        id: "answerE"
    });
    $.__views.row.add($.__views.answerE);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    "android" == Ti.Platform.osname;
    $.question.text = args["Question"];
    $.viewNumber.text = args["Id"];
    $.answerA.text = args["Answers"][0];
    $.answerB.text = args["Answers"][1];
    $.answerC.text = args["Answers"][2];
    $.answerD.text = args["Answers"][3];
    $.answerE.text = args["Answers"][4];
    if (4 == args["Id"]) {
        $.answerA.text = "A: " + args["Answers"][0];
        $.answerB.text = "B: " + args["Answers"][1];
        $.answerC.text = "C: " + args["Answers"][2];
        $.answerA.left = "30dp";
        $.answerB.left = "30dp";
        $.answerC.left = "30dp";
        $.answerA.top = "320dp";
        $.answerB.top = "350dp";
        $.answerC.top = "380dp";
    } else if (11 == args["Id"]) {
        $.answerA.text = "A: " + args["Answers"][0];
        $.answerB.text = "B: " + args["Answers"][1];
        $.answerC.text = "C: " + args["Answers"][2];
        $.answerA.left = "30dp";
        $.answerB.left = "30dp";
        $.answerC.left = "30dp";
        $.answerA.top = "320dp";
        $.answerB.top = "350dp";
        $.answerC.top = "380dp";
    }
    for (var i = 0; args["Alternatives"].length > i; i++) {
        var buttonAlternative = Ti.UI.createButton({
            title: i + 1,
            backgroundImage: "/images/play.png",
            color: "#fff",
            height: "44dp",
            width: "44dp",
            top: 70 * (i + 1) + "dp",
            url: args["Alternatives"][i],
            title: args["Titles"][i],
            left: "30dp"
        });
        if (4 == args["Id"] || 11 == args["Id"]) {
            buttonAlternative.top = "20dp";
            $.question.top = "100dp";
        }
        $.row.add(buttonAlternative);
    }
    Ti.App.addEventListener("showAnswerLabels", function() {
        $.answerA.visible = true;
        $.answerB.visible = true;
        $.answerC.visible = true;
        $.answerD.visible = true;
        $.answerE.visible = true;
    });
    Ti.App.addEventListener("hideAnswerLabels", function() {
        $.answerA.visible = false;
        $.answerB.visible = false;
        $.answerC.visible = false;
        $.answerD.visible = false;
        $.answerE.visible = false;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;