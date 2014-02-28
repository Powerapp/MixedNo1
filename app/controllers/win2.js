    var click=true;
    var OS_is_Android = Ti.Platform.osname == 'android';
    
    
        function closeMe(e){
        $.quizWin.close();
       
        Ti.App.fireEvent("closeWindow");
    }

     if(OS_is_Android){
       $.closeBtn.visible = false; 
        
    }

	function showAnswers(e){
        if(click==true){
           $.answersBtnLabel.text ="Göm svaren";
           Ti.App.fireEvent("showAnswerLabels");  
           click=false; 
        }else{
           $.answersBtnLabel.text ="Visa svaren";
           Ti.App.fireEvent("hideAnswerLabels");  
           click=true;

        }
     }
     
     function keepPhoneAwake(e) {
         if($.quizViews.currentPage==11){
             
             Ti.App.idleTimerDisabled=true;
         }else{
             
         }
       
     }


	var data = [
	   	{"Question": "Fyra låtar, fyra olika artister. En artist för varje låt. Vad heter artisten?", "Id": "1", "Alternatives":["/soundfiles/q1a.mp3","/soundfiles/q1b.mp3", "/soundfiles/q1c.mp3", "/soundfiles/q1d.mp3"], "Titles":["a", "b", "c", "d"],"Answers":["Bette Midler (Låten heter Beast of Burden)","Kelly Clarkson (Låten heter Stronger)","Bruno Mars (Låten heter Locked Out Of Heaven)", "Midnight Oil (Låten heter Beds Are Burning)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Fem låtar, fem olika TV-serier. Vad heter TV-serien?", "Id": "2","Alternatives": ["/soundfiles/q2a.mp3","/soundfiles/q2b.mp3", "/soundfiles/q2c.mp3", "/soundfiles/q2d.mp3", "/soundfiles/q2e.mp3"], "Titles":["a", "b", "c", "d", "e"], "Answers":["The Big Bang Theory","Bones","Vänner/Friends","MacGyver","Cityakuten/ER"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]}, 
	    {"Question": "Duetter. Namnge båda artisterna. Ett poäng per namn.", "Id": "3", "Alternatives":["/soundfiles/q3a.mp3","/soundfiles/q3b.mp3", "/soundfiles/q3c.mp3", "/soundfiles/q3d.mp3"], "Titles":["a", "b", "c", "d"], "Answers":["Pink & Nate Ruess  (Låten heter Just Give Me a Reason)","Frank & Nancy Sinatra (Låten heter Something Stupid)","Elton John & George Michael (Låten heter Don´t Let the Sun Go Down on Me)", "Justin Timberlake & Beyoncé (Låten heter Until the End of Time)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Låten först, frågorna sen.\n\n\nA: Vem sjunger? Namnge båda artisterna.\n\n\nB: Vad hette den kända arkitekten bakom byggnadsverket La Sagrada Familia?\n\n\nC: Vilket år var denna stad värd för sommar-OS?", "Id": "4", "Alternatives":["/soundfiles/q4.mp3"], "Titles":[], "Answers":["Freddie Mercury & Montserrat Caballé","Gaudí (Antoni Gaudí i Cornet)","1992"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Följande fem låtar kan på något sätt associeras med djur. Vilka är djuren?", "Id": "5", "Alternatives":["/soundfiles/q5a.mp3","/soundfiles/q5b.mp3", "/soundfiles/q5c.mp3", "/soundfiles/q5d.mp3",  "/soundfiles/q5e.mp3"], "Titles":["a", "b", "c", "d", "e"], "Answers":["Duva (Prince, låten heter When Doves Cry)","Tiger (Survivor, låten heter Eye of the Tiger)","Kråka (Black Crowes, låten heter Hard to Handle)", "Apa (The Monkees, låten heter I´m a Believer)", "Lejon (Elton John, låten heter Circle of Life)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Fyra låtar, fyra filmer. Vad heter filmerna?", "Id": "6", "Alternatives":["/soundfiles/q6a.mp3","/soundfiles/q6b.mp3", "/soundfiles/q6c.mp3", "/soundfiles/q6d.mp3"], "Titles":["a", "b", "c", "d"], "Answers":["Gudfadern/The Godfather (Låten heter The Godfather Waltz)","Casablanca (Låten heter As Time Goes By)","8 mile (Låten heter Lose Yourself)", "Spiderman (Låten heter Hero)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
		{"Question": "Fyra stora artister. Vilket år dog han/hon?", "Id": "7", "Alternatives":["/soundfiles/q7a.mp3","/soundfiles/q7b.mp3", "/soundfiles/q7c.mp3", "/soundfiles/q7d.mp3"], "Titles":["a", "b", "c", "d"], "Answers":["1977 (Elvis, låten heter Burning Love)","1994 (Kurt Cobain/Nirvana, låten heter Smells Like Teen Spirit)","2011 (Amy Winehouse, låten heter Rehab)", "2009 (Michael Jackson, låten heter Billie Jean)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
		{"Question": "Kända barn till kända sångare. Vad heter barnet?", "Id": "8", "Alternatives":["/soundfiles/q8a.mp3","/soundfiles/q8b.mp3", "/soundfiles/q8c.mp3"], "Titles":["a", "b", "c"], "Answers":["Stella McCartney (Dotter till Paul McCartney. Denna låten är från hans tid med gruppen Wings)","Liv Tyler (Dotter till Aerosmiths sångare Steven Tyler)","Lisa Marie Presley (Dotter till Elvis Presley)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Fyra one hit wonders. Vad heter artisten/bandet OCH vad heter hiten? Låten ger ett poäng, artisten/bandet ger ett poäng.", "Id": "9","Alternatives":["/soundfiles/q9a.mp3","/soundfiles/q9b.mp3","/soundfiles/q9c.mp3", "/soundfiles/q9d.mp3"], "Titles":["a", "b", "c", "d"], "Answers":["Hanson - MMMBop","Richard Marx - Right Here Waiting","Men Without Hats - The Safety Dance", "Bobby McFerrin - Don´t Worry, Be Happy"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Vad heter bandet bakom artisten?", "Id": "10", "Alternatives":["/soundfiles/q10a.mp3","/soundfiles/q10b.mp3", "/soundfiles/q10c.mp3"], "Titles":["a", "b", "c"], "Answers":["The Heartbreakers (Tom Petty, låten heter I Won´t Back Down)","E street band (Bruce Springsteen, låten heter Born in the USA)","The Wailers (Bob Marley, låten heter Could You Be Loved)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Låten först, frågorna sen.\n\n\nA: Vad heter artisten?\n\n\nB: Vilket stort, internationellt idrottsevenemang hade detta som sin officiella låt 2010?\n\n\nC: I vilket land är artisten född?", "Id": "11","Alternatives":["/soundfiles/q11.mp3"], "Titles":[], "Answers":["Shakira (Låten heter Waka Waka (This Time for Africa)","Fotbolls-VM (Sydafrika)","Colombia"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]},
	    {"Question": "Fyra låtar. Musiken tystnar för att dölja ETT ord. Fyll i ordet som saknas. Här gäller det att spetsa öronen och vara uppmärksam!", "Id": "12", "Alternatives":["/soundfiles/q12a.mp3","/soundfiles/q12b.mp3", "/soundfiles/q12c.mp3", "/soundfiles/q12d.mp3"], "Titles":["a", "b", "c", "d"],"Answers":["Falling (Madonna, låten heter Like a Prayer)","Something (Rihanna, låten heter Stay)","Bones (Coldplay, låten heter Fix You)", "Tambourine (Abba, låten heter Dancing Queen)"], "Top":["70dp", "140dp", "210dp", "280dp","350dp"]}
		];

    var soundPlayer;
	

    function playAudio(e){
            e.source.backgroundImage='/images/stop.png';
            soundPlayer = Ti.Media.createSound({
                allowBackground:true,
                url : "/"+e.source.url,
                currentPlayingButton:e.source,
                 
            });

    soundPlayer.play();

    soundPlayer.addEventListener("complete", function(e){
    soundPlayer.currentPlayingButton.backgroundImage="/images/play.png";
    soundPlayer.stop();
   });
   
   Ti.App.addEventListener("closeWindow", function(e){
       soundPlayer.stop();
       soundPlayer.currentPlayingButton.backgroundImage="/images/play.png";
   });

    }
    function handleClickOnButton(e) {
        //alert("clicked scrollable");
            if(e.source.url){
                if(soundPlayer && soundPlayer.isPlaying()){
            e.source.backgroundImage="/images/play.png";
            soundPlayer.currentPlayingButton.backgroundImage = "/images/play.png";
            soundPlayer.stop();
                
               /* if(OS_is_Android){
                    soundPlayer.release();
                }*/
            
            if(e.source != soundPlayer.currentPlayingButton)
                playAudio(e);
        }
    
        else
            playAudio(e);
           
        }
     }


   

        
	var rows = []; 
	for (var i = 0; i < data.length; i++) {
	    var row = Alloy.createController('row', data[i]).getView(); 
	    rows.push(row);
	}
	
	$.quizViews.setViews(rows);
