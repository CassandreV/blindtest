// Artists
var artist1 = {
  artist: "Guns N' Roses",
  id: "spotify:track:7o2CTH4ctstm8TNelqjb51",
}

var artist2 = {
  artist: "John Mayer",
  id: "spotify:track:1c7UYTut2SBOPq64o2t0uN",
}

var artist3 = {
  artist: "The Beatles",
  id: "spotify:track:0aym2LBJBk9DAYuHHutrIl"
}

var artist4 = {
  artist: "Bob Marley",
  id: "spotify:track:7cRTzS9N5Mn25ZZkzmp6Uy",
}

var artist5 = {
  artist: "Rihanna",
  id: "spotify:track:6ELYUjIai7bjtyUocOLCRE",
}

var artist6 = {
  artist: "The Lumineers",
  id: "spotify:track:1jdNcAD8Ir58RlsdGjJJdx",
}

var artist7 = {
  artist: "Maroon 5",
  id: "spotify:track:494OU6M7NOf4ICYb4zWCf5",
}

var artist8 = {
  artist: "The Rolling Stones",
  id: "spotify:track:72WZtWs6V7uu3aMgMmEkYe",
}

var artist9 = {
  artist: "Stevie Wonder",
  id: "spotify:track:1SaWFbIdRPmS58NtgTVaj5",
}

var artist10 = {
  artist: "Dolly Parton",
  id: "spotify:track:2SpEHTbUuebeLkgs9QB7Ue",
}

var artist11 = {
  artist: "The Weekend",
  id: "spotify:track:6RsWqX8zABZLhZydXxEFOm",
}

var artist12 = {
  artist: "Kendrick Lamar",
  id: "spotify:track:7KXjTSCq5nL1LoYtL7XAwS",
}

var artist13 = {
  artist: "Sublime",
  id: "spotify:track:5nkYHBWXu7KCgcdwP6jcB1",
}

var artist14 = {
  artist: "Foo Fighters",
  id: "spotify:track:5FZxsHWIvUsmSK1IAvm2pp",
}

var artist15 = {
  artist: "Ramin Djawadi",
  id: "spotify:track:4cKmnSLAhwxaWKXQhfz5Ju",
} 

var artist16 = {
  artist: "Kanye West",
  id: "spotify:track:3qnoOm4fwZPBS116f5hpgF",
}

var artist17 = {
  artist: "Incubus",
  id: "spotify:track:73fzhVcs7n1wZz84eoE2vs",
}

var artist18 = {
  artist: "Charles Aznavour",
  id: "spotify:track:61Yh6AEwsba6RYsrWiNmI0",
}

var artist19 = {
  artist: "Blur",
  id: "spotify:track:5CeL9C3bsoe4yzYS1Qz8cw",
}

var artist20 = {
  artist: "Jet",
  id: "spotify:track:3tRMcxAVPS0YK00YcSc737",
}

var artistsArray = [];

artistsArray.push(artist1, artist2, artist3, artist4, artist5, artist6, artist7, 
  artist8, artist9,artist10, artist11, artist12, artist13, artist14, artist15, artist16, 
  artist17, artist18, artist19, artist20);

  
// Spotify token  
  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken('BQAX-ZdOA5xkDOzxrdBS1Xwlc4OfCxvY63313zIk7kmBS9A6J7862RujQV9RmjcgMvU1tje_pzi24Dzzfien6TEhsL4L4g2KxjyywUXRe60ow_CuxBvhLWxEh9lPLkDeg3dYR4DrozF-JfuHBi4oLcU1nBKYJ2S3iQ1_tnqtsfOHhAcKDsJewxk3RIB_rSzbuwBNPZ691ebK2JxClvsDFvrOCtTEg-uyN6ksN23pTV6SNxMu0ULOx7UwOOmIBXFKUWxf2GTXaeRRS95vTJWcGg'); 
  
// $(".boutton").removeClass("answers");
$(function(){
  $(".pause").hide()
  $(".play").show()
  $("#display_here").hide()
  $(".play").click(function(){
    
    $(".play").toggle()
    $(".pause").toggle()
    
    spotifyApi.play({'uris':[artistsList[correctArtist].id]}, function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data); 
      spotifyApi.seek(40000, function(err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);
      });
    });
  });
  
  $(".pause").click(function(){
    $(".play").toggle()
    $(".pause").toggle()
    spotifyApi.pause({'uris':[artistsList[correctArtist].id]}, function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    });
  });
  
  
  // Random selector 
  function randomSelector (array) {
    return _.shuffle(array);
  }
  console.log(randomSelector(artistsArray));

  // Correct artist
  var correctArtist = Math.floor(Math.random()*(4));
  var playButton = document.getElementById("play");
  var buttonList = document.getElementsByClassName("btn");
  var artistsList = randomSelector(artistsArray);
  var rightAnswer = null;
  
  playButton.onclick = function(e){ 
    for (var i = 0; i < buttonList.length; i++) {
      buttonList[i].innerHTML = artistsList[i].artist;
    }
    $(".answers").show();
  };

  function loadNextMusic() {
    artistsList = randomSelector(artistsList);
    correctArtist =  Math.floor(Math.random()*(4))  ;
    $('.pause').click();
    playButton.onclick();
    $(".btn").css("background-color", "white")
  }
  

  // Pick the good artist
  $(".btn").click(function(){
    $(this).html();
    console.log("hello",$(this).html());
    
    
    if($(this).html()===artistsList[correctArtist].artist) {
      console.log("correctArtist")
      artistsList.splice(correctArtist,1) //je donne une position et lui dit d'en retirer qu'1 seul
      $(this).css("background-color", "green")
      $(".stars").append('<img class="star" src="http://gifimage.net/wp-content/uploads/2017/01/Carlton-Dance-GIF-Image-Download-2.gif"></img>')
      setTimeout(loadNextMusic, 1200);
      if(artistsList.length < 4) {
        $("#display_here").show()
      }
    }
    else($(this).css("background-color", "red"))
  })

})


//how to put the music already started and not at the beginning of the song 
