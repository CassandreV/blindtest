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
  id: "spotify:track:6HH86EFT19q8j9ds0qnF4V",
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
  artist: "The Temptations",
  id: "spotify:track:6jWkZvd1URGktyTTwcpPpB",
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
  artist: "Michael Jackson",
  id: "spotify:track:5lWFrW5T3JtxVCLDb7etPu",
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
  spotifyApi.setAccessToken('BQByHJ-6uC_rXTj3-VXEle4TADRe64_mozOS0w2NdlGkmobLJBILhmqhSwsXk0qGo0InvXXGwLYSg0a8BkUsI3nKMw8tM0lDVxxiKsHTwS4LeEbk6ukapDQX-3NA9LXu72nEUQwOJBs5moebDS9hEyq9zmRcQw8OZeVF_gbtHDoaqeFDVixczjz-iTy5NXPSldzcD0vOfYKLTEljgr4S23FTew4bAX0-XfHOlE_9WJn1a6ROPUiv3WuUAGdKptIhx7Sc2VMw8EIH0QQb7cDlaw'); 
  
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
