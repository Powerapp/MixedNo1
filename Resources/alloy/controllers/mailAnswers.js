function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mailAnswers";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.emailDialog = Ti.UI.createEmailDialog({
        id: "emailDialog",
        subject: "Quiz Wiz svar",
        messageBody: "Quizza lugnt!"
    });
    $.__views.emailDialog && $.addTopLevelView($.__views.emailDialog);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.emailDialog.toRecipients = [ "" ];
    var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "Answers_sv.pdf");
    $.emailDialog.addAttachment(f);
    $.emailDialog.isSupported() ? $.emailDialog.open() : alert("Konfigurera din e-post");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;