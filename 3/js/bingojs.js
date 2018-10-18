var maxLength;
$("#btn-submit").on('click', function () {
    var userMax = parseInt($('#max-row').val());
    maxLength = parseInt($('#max-number').val());
    if (userMax === 0 || maxLength === 0 || maxLength < 30) {
        alert('Ban can nhap so va lon hon 30 truoc khi choi');
    } else {
        $('.content').empty();
        for (var ii = 1; ii <= userMax; ii++) {
            $('.content').append('    <div class="box box' + ii + '">\n' +
                '    </div>');
            random(maxLength, ii);
        }
    }
});
    
function random(max, boxitem) {
    var number = [];
    var getRandomNumberArray = [];
    for (var i = 1; i <= max; i++) {
        number.push(i);
    }

    for (k = 1; k <= 30; k++) {
        let random = Math.floor(Math.random() * max);
        max--;
        getRandomNumberArray.push(number[random]);
        number.splice(random, 1);

    }
    ;

    $.each(getRandomNumberArray, function (index, value) {
        let tagInsert = '.box' + boxitem;
        console.log(index);
        if (index === 12) {
            $(tagInsert).append(' <div class="item" style="background-color: #572fb9; border: none">Fre</div>');
        } else {
            $(tagInsert).append(' <div class="item">' + value + '</div>');
        }


        if (index === 0) {
            localStorage.setItem("storageArray", getRandomNumberArray);
        }
    });
}