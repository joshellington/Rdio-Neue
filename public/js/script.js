var duration = 1,
    current,
    t,
    playPosition;

$(function() {
  var api = $('#api');

  if ($('.login-button').length) {
    new_releases = shuffle(new_releases);
    
    for (var i=0; i<=new_releases.length; i++) {
      if (new_releases[i].icon) {
        $('.background').append('<img src="'+new_releases[i].icon+'">');
      }
    }
  } else {

    api.bind('ready.rdio', function() {
      api.rdio().startFrequencyAnalyzer({
        frequencies: '31-band',
        period: 100
      });

      playrand();
      setup();
    });

    api.bind('playingTrackChanged.rdio', function(e, playingTrack, sourcePosition) {
      if (playingTrack) {
        // log(playingTrack.duration);
        duration = playingTrack.duration;
        $('#cover').attr('src', playingTrack.icon);
        $('#song').text(playingTrack.name);
        $('#album').text(playingTrack.album);
        $('#artist').text(playingTrack.artist);

        $.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+playingTrack.artist+'&api_key=bd5217f8dfd32dd746cdc01a703aafd2&format=json', function(d) {
          // console.log(d.artist.image[4]["#text"]);
          $('.background').css('background-image', 'url('+d.artist.image[4]["#text"]+')');
        });
      }
    });

    api.bind('updateFrequencyData.rdio', function(e, freq) {
      // log(freq);

      // var arr = freq.split(','),
      //     all = 0;

      // for(var i=0; i<=arr.length; i++) {
      //   var n = parseInt(parseFloat(arr[i])*1500);
      //   // log(n);

      //   $('.cover').css({
      //     'box-shadow': '0 0 '+n+'px'+' #333'
      //   });
      // }

    });

    api.bind('positionChanged.rdio', function(e, position) {
      playPosition = Math.round(position);
      $('#position').css('width', Math.floor(100*position/duration)+'%');
    });

    api.bind('playStateChanged.rdio', function(e, playState) {
      if (playState == 0) { // paused
        $('body').addClass('paused');
        // log(playState);
      } else {
        $('body').removeClass('paused');
        // log(playState);
      }
    });
    // this is a valid playback token for localhost.
    // but you should go get your own for your own domain.
    api.rdio(playback_token);

    key('right, left', function() {
      playrand();
    });

    key('up', function() {
      api.rdio().previous();
    });

    key('down', function() {
      api.rdio().next();
    });

    key('space', function() {
      if ( $('body').hasClass('paused') ) {
        api.rdio().play();
      } else {
        api.rdio().pause();
      }
    });

    key('s', function() {
      scrub('forward');
    });

    key('b', function() {
      scrub('backward');
    });

    key('a', function() {
      var key = current.trackKeys.toString();
      log(key);
      $.post('/add/', {keys: key}, function(d) {
        log(d);

        if ( d.status == 'ok' ) {
          msg('Album added to your favorites.');
        }
      });
    });

    $('.play').click(function() {
      var key = $(this).parent().find('.play_key').val();
      api.rdio().play(key);
    });
    $('.pause').click(function() {
      api.rdio().pause();
    });
    $('.next').click(function() {
      api.rdio().next();
    });
    $('.previous').click(function() {
      api.rdio().previous();
    });
  }

  // Random functions

  function play(key) {
    api.rdio().play(key);
  }

  function setup() {
    for(var i=0; i<=new_releases.length; i++) {
      new_releases[i]['next'] = i + 1;
      // log(new_releases[i]['next']);
    }
  }

  function playrand() {
    var obj = new_releases[Math.floor(Math.random()*new_releases.length)];
    current = obj;
    api.rdio().play(obj.key);
  }

  function playfirst() {
    var obj = new_releases[0];
    current = obj;
    api.rdio().play(obj.key); 
  }

  function playnext() {
    var ind = current['next'];
    // log(ind);
    current = new_releases[ind];
    play(new_releases[ind].key);
  }

  function playtrack() {
    var track = current.trackKeys[Math.floor(Math.random()*current.trackKeys.length)];
    play(track);
  }

  function scrub(direction) {
    log(playPosition);
    if ( direction == 'forward' ) {
      api.rdio().seek(playPosition + 15);
    } else {
      api.rdio().seek(playPosition - 15);
    }
  }

  function msg(msg) {
    $('#msg p').text(msg);
    $('#msg').fadeIn(500, function() {
      setTimeout(function() {
        $('#msg').fadeOut(300);
      }, 3000);
    });
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});