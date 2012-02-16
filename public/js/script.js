var duration = 1,
    current,
    t;

$(function() {
  var api = $('#api');

  api.bind('ready.rdio', function() {
    playrand();
  });

  api.bind('playingTrackChanged.rdio', function(e, playingTrack, sourcePosition) {
    if (playingTrack) {
      log(playingTrack.duration);
      duration = playingTrack.duration;
      $('#cover').attr('src', playingTrack.icon);
      $('#song').text(playingTrack.name);
      $('#album').text(playingTrack.album);
      $('#artist').text(playingTrack.artist);
    }
  });

  api.bind('positionChanged.rdio', function(e, position) {
    $('#position').css('width', Math.floor(100*position/duration)+'%');
  });

  api.bind('playStateChanged.rdio', function(e, playState) {
    if (playState == 0) { // paused
      $('body').addClass('paused');
      log(playState);
    } else {
      $('body').removeClass('paused');
      log(playState);
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

  key('a', function() {
    var key = current.trackKeys.toString();
    log(key);
    $.post('/add/', {keys: key}, function(d) {
      log(d);

      if ( d.status == 'ok' ) {
        msg('Album added to your collection!');
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

  // Random functions

  function play(key) {
    api.rdio().play(key);
  }

  function playrand() {
    var obj = new_releases[Math.floor(Math.random()*new_releases.length)];
    current = obj;
    api.rdio().play(obj.key);
  }

  function playtrack() {
    var track = current.trackKeys[Math.floor(Math.random()*current.trackKeys.length)];
    play(track);
  }

  function msg(msg) {
    $('#msg p').text(msg);
    $('#msg').fadeIn(500, function() {
      setTimeout(function() {
        $('#msg').fadeOut(300);
      }, 3000);
    });
  }
});