(function() {
  var colors = {'blue-digital': '#00b0ed',
                'heavy-raindrop': '#004e76',
                'raindrop': '#0372b0',
                'backdrop': '#939598',
                'heavy-dewdrop':  '#5acaed',
                'dewdrop': '#c3e7ef',
                'airdrop': '#dcddde',
                'heavy-gumdrop': '#dc6134',
                'gumdrop': '#f38546',
                'lemondrop': '#ffef94'
              };

  for(var color in colors) {
    var $tr = $('<tr></tr>');
    var tds = [$('<td><div class="color-block"></div></td>'), 
               $('<td class="color-value"></td>'),
               $('<td class="color-name"></td>')
              ];

    for(var i=0;tds[i];i++) {
      $tr.append(tds[i]);
    }

    $tr.find('.color-block').css({
      'background-color': colors[color]
    });
    $tr.find('.color-value').html(colors[color]);
    $tr.find('.color-name').html(color);

    $('table.table-colors tbody').append($tr)
  }

}());