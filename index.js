 
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
  id: "spotify:track:3H7sv3Krffn15BufUuXzf3"
}

var artist4 = {
  artist: "Bob Marley",
  id: "spotify:track:05VlGC380rZvDx5suJE9sH",
}

var artist5 = {
  artist: "Rihanna",
  id: "spotify:track:60RWYBk24Z6lHxMcWD0oh0",
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
  id: "spotify:track:6ml6iL8HUdQKgtMaehAZc8",
}

var artist9 = {
  artist: "Stevie Wonder",
  id: "spotify:track:0ky5BaGgJJnYATgz2KAc1q",
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
  id: "spotify:track:7ujx3NYtwO2LkmKGz59mXp",
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
  id: "spotify:track:0clhfW4plYSOdKH4Nl2y2u",
}

var artist16 = {
  artist: "Menelik",
  id: "spotify:track:5BZStvvOd4aqiolKql1BT7",
}

var artist17 = {
  artist: "Incubus",
  id: "spotify:track:7nnWIPM5hwE3DaUBkvOIpy",
}

var artist18 = {
  artist: "Charles Aznavour",
  id: "spotify:track:0OP2e78skckOm82RMRGt7l",
}

var artist19 = {
  artist: "Michael Jackson",
  id: "spotify:track:5lWFrW5T3JtxVCLDb7etPu",
}

var artist20 = {
  artist: "Jet",
  id: "spotify:track:305WCRhhS10XUcH6AEwZk6",
}

var artistsArray = [];

artistsArray.push(artist1, artist2, artist3, artist4, artist5, artist6, artist7, 
  artist8, artist9,artist10, artist11, artist12, artist13, artist14, artist14, artist15, artist16, 
  artist17, artist18, artist19, artist20);
  
  
  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken('BQAFlcB_itv3bVDQgSB3jdoEc56B3ga47XQbttTylINPROJjnPXLtIYQd2GcVu0lu7iqZydWXAotFZA07P6fcKc2oRcb4YjKRx63EyAK0QUpw1MLouho9IFysNumVmwE5BS8TiFnlZ7GDdIL2mwgL1Nz6zyK18oc866sUoOYvjOTC4-at2-_OlN8VjP5Hv5mDPjaHpAiz6HoBg93dnz6Ur7tUPzd8ZLGr1bvL2c17dkTlRfXoKYrR32HZcOH6HUSrMhUdwlK1tTlX1I0YaOgfA'); 
  
// $(".boutton").removeClass("answers");
$(function(){
  $(".pause").hide()
  $(".play").show()
  $(".play").click(function(){
    
    $(".play").toggle()
    $(".pause").toggle()
    
    spotifyApi.play({'uris':[artistsList[correctArtist].id]}, function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
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
    $(".answers").toggle();
  };

  function loadNextMusic() {
    correctArtist = Math.floor(Math.random()*(4));
    artistsList = randomSelector(artistsArray);
    $('.pause').click();
    playButton.onclick();
  }

  //
  $(".btn").click(function(){
    //comparer le inner html du bouton cliqué avec le bon artiste: artistsList[correctArtist].artist
    $(this).html();
    console.log("hello",$(this).html());


    if($(this).html()===artistsList[correctArtist].artist) {
      console.log("correctArtist")
      $(this).css("background-color", "green")
      //set time out 
      
      loadNextMusic();
    }
    else($(this).css("background-color", "red"))

    
  })


  
})


