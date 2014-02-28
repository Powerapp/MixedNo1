    //1. Denna översta raden är lite magisk. Det är så det funkar i Alloy för att skicka med data mellan komponeneterna. Variabeln arguments finns där automatiskt. I detta fallet blir arrayen med allt innehåll som vi skapade i index controllern arguments[0].
    var args = arguments[0] || {};
    var OS_is_Android = Ti.Platform.osname == 'android';
    
    //2. Sätter frågan som value för label med id question
    $.question.text = args["Question"];
    $.viewNumber.text = args["Id"];
    $.answerA.text = args["Answers"][0];
    $.answerB.text = args["Answers"][1];
    $.answerC.text = args["Answers"][2];
    $.answerD.text = args["Answers"][3];
    $.answerE.text = args["Answers"][4];
    
    
    
    if (args["Id"] == 4) {
        $.answerA.text = "A: " + args["Answers"][0];
        $.answerB.text = "B: " + args["Answers"][1];
        $.answerC.text = "C: " + args["Answers"][2];
        $.answerA.left = '30dp';
        $.answerB.left = '30dp';
        $.answerC.left = '30dp';
        $.answerA.top = '320dp';
        $.answerB.top = '350dp';
        $.answerC.top = '380dp';
    
    } else if (args["Id"] == 11) {
        $.answerA.text = "A: " + args["Answers"][0];
        $.answerB.text = "B: " + args["Answers"][1];
        $.answerC.text = "C: " + args["Answers"][2];
        $.answerA.left = '30dp';
        $.answerB.left = '30dp';
        $.answerC.left = '30dp';
        $.answerA.top = '320dp';
        $.answerB.top = '350dp';
        $.answerC.top = '380dp';
    }
    
    //3.Skapar en knapp för varje ljudfil i alternatives
    for (var i = 0; i < args["Alternatives"].length; i++) {
    
        var buttonAlternative = Ti.UI.createButton({
            title : i + 1,
            backgroundImage : "/images/play.png",
            color : '#fff',
            height : '44dp',
            width : '44dp',
            top : (i + 1) * 70 + "dp",
            url : args["Alternatives"][i],
            title : args["Titles"][i],
            left : "30dp",
    
        });
    
        if (args["Id"] == 4 || args["Id"] == 11) {
            buttonAlternative.top = '20dp';
            $.question.top = '100dp';
        }
        $.row.add(buttonAlternative);
    
    };
    Ti.App.addEventListener('showAnswerLabels', function(e) {
        $.answerA.visible = true;
        $.answerB.visible = true;
        $.answerC.visible = true;
        $.answerD.visible = true;
        $.answerE.visible = true;
    });
    
    Ti.App.addEventListener('hideAnswerLabels', function(e) {
        $.answerA.visible = false;
        $.answerB.visible = false;
        $.answerC.visible = false;
        $.answerD.visible = false;
        $.answerE.visible = false;
    
    });
    
