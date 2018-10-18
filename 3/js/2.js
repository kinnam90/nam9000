$(function() {
			  var bingo = {
			    selectedNumbers: [],
			   	generateRandom: function() {
				      var min = 1;
				      var max = 90;
				      var random = Math.floor(Math.random() * (max - min + 1)) + min;
				      return random;
			    },
			    generateNextRandom: function() {
				      if (bingo.selectedNumbers.length > 89) {
				        alert("Game over!");
				        return 0;
			      }
				      var random = bingo.generateRandom();
				      while ($.inArray(random, bingo.selectedNumbers) > -1) {
				        random = bingo.generateRandom();
			      }
				      bingo.selectedNumbers.push(random);
				      return random;
			    }
			  };

			 	$('td').each(function() {
				    var concatClass = this.cellIndex + "" + this.parentNode.rowIndex;
				    var number = parseInt(concatClass, 10) + 1;
				    $(this).addClass("cell" + number).text(number);
			  });

			  	$('#btn1').click(function() {
			    	var random = bingo.generateNextRandom().toString();
			    $('.About span').text(random);
			    $('td.cell' + random).addClass('selected');
			  });

  window.onbeforeunload = function(a) {
    a = a || window.event;
    var returnString = 'Are you sure?';
    if (a) {
      a.returnValue = returnString;
    }
    return returnString;
  };
});