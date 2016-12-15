$(document).ready(function() {
  //  reset all if user clicks on reset-button
  $('.reset').on('click', function() {
    if ($('td').hasClass('aktiv')) {
      $('td').removeClass('aktiv').addClass('inaktiv');
      $('#poengmeter').removeClass('aktiv').addClass('inaktiv').text('0');
      $('#onesum').text('0');
      $('#twosum').text('0');
      $('#threesum').text('0');
      $('#numberToGet').val('0');
    }
  }); // end of reset

  // update Total sum when user clicks on points
  var calculate = function() {
    var aktives = $('.aktiv');
    var total = 0;
    $.each(aktives, function() {
      var count = $(this).text();
      total = total + parseInt(count);
    });
    $('#onesum').text(total);
    $('#twosum').text(total);
    $('#threesum').text(total);
    console.log(aktives);
  };

  // Special row 34 calculation
  $('#calc').click(function(e) {
    e.preventDefault();
    var pointsUpside;
    var inputMeter = $("#numberToGet").val(); //grabs input from user
    var inputMeterAsNumber = Number(inputMeter);
    if (inputMeterAsNumber < 3) {
      pointsUpside = 0;
    } else {
      pointsUpside = Math.floor(1 + (inputMeterAsNumber - 3) / 2);
      $('#poengmeter').removeClass('inaktiv').addClass('aktiv');
      console.log(pointsUpside);
    };
    $('#poengmeter').text(pointsUpside.toString());
    calculate();
  }); //end of new 34-calculation
  

  
  // LEFT LESS
  $('.left.less').on('click', function() {
    if ($(this).hasClass('inaktiv')) {
          $(this).removeClass('inaktiv').addClass('aktiv');                   
          $(this).parent().find('.left.more').removeClass('aktiv').addClass('inaktiv');
    } else if ($(this).hasClass('aktiv')) {
          $(this).removeClass('aktiv').addClass('inaktiv');
    }
    calculate();
  });
  
  // LEFT MORE
  $('.left.more').on('click', function() {
    if ($(this).hasClass('inaktiv')) {
          $(this).removeClass('inaktiv').addClass('aktiv');                   
          $(this).parent().find('.left.less').removeClass('aktiv').addClass('inaktiv');
    } else if ($(this).hasClass('aktiv')) {
          $(this).removeClass('aktiv').addClass('inaktiv');
    }
    calculate();
  });
  
  // RIGHT LESS
  $('.right.less').on('click', function() {
    if ($(this).hasClass('inaktiv')) {
          $(this).removeClass('inaktiv').addClass('aktiv');                   
          $(this).parent().find('.right.more').removeClass('aktiv').addClass('inaktiv');
    } else if ($(this).hasClass('aktiv')) {
          $(this).removeClass('aktiv').addClass('inaktiv');
    }
    calculate();
  });
  
  // RIGHT MORE
  $('.right.more').on('click', function() {
    if ($(this).hasClass('inaktiv')) {
          $(this).removeClass('inaktiv').addClass('aktiv');                   
          $(this).parent().find('.right.less').removeClass('aktiv').addClass('inaktiv');
    } else if ($(this).hasClass('aktiv')) {
          $(this).removeClass('aktiv').addClass('inaktiv');
    }
    calculate();
  });

}); //end of ready



