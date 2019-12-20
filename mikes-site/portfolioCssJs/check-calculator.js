$(document).ready(function () {
    var maxFields = 20;
    var addButton = $('#plusOne');
    var deleteButton = $('#minusOne');
    var wrapper = $('#userNumbers');
    var fieldInput = '<div><input type="number" class="persons" value="0" name="person" /><div class="numberChange"><p class="difference dollarSpacing">$</p></div></div>';
    var x = 1;

    $(addButton).click(function () {
        if (x < maxFields) {
            x++;
            $(wrapper).append(fieldInput);
        }

    });

    //    add/delete class if number <0 or >0 make it different colors

    $(deleteButton).click(function (e) {
        e.preventDefault();
        var myNode = document.getElementById("userNumbers");
        i = myNode.childNodes.length - 1;
        if (i >= 0) {
            myNode.removeChild(myNode.childNodes[i]);
            x--;
        }

    });

});

//    var personsCheck = parseFloat(document.getElementsByClassName('persons')[0].value);

function peoplePaid() {
    var checkTotal = parseFloat(document.getElementById('check').value);
    var personsCheck = document.getElementsByClassName('persons');
    var paidTotal = document.getElementById('paidTotal');
    var serviceQuality = document.getElementById('serviceQuality').value;
    var difference = document.getElementsByClassName('difference');
    var numberChange = document.getElementsByClassName('numberChange');
    var pCheck = 0;


    //    average of the check total minus each contribution

    for (var i = 0; i < personsCheck.length; i += 1) {

        var checkValue = personsCheck[i].value;
        pCheck += parseFloat(checkValue);
        var payDifference = ((checkTotal / personsCheck.length) * serviceQuality) - checkValue;
        difference[i].innerHTML = "$" + payDifference.toFixed(2);
        var floatedDifference = parseFloat(payDifference);
        

        if (floatedDifference >= 0) {
            numberChange[i].classList.add('aboveZero');
        } else{
            numberChange[i].classList.add('belowZero');
        }
    }


    var paidTotalFixed = (checkTotal * serviceQuality) - pCheck;
    var remainAmount = paidTotalFixed.toFixed(2);


    if(remainAmount < 0){
        paidTotal.innerHTML = "You are " +  paidTotalFixed.toFixed(2) + " over.";
        paidTotal.classList.add('aboveZero');
    } else if ( remainAmount > 0){
        paidTotal.innerHTML = "You are " + paidTotalFixed.toFixed(2)  + " under.";
        paidTotal.classList.add('belowZero');
    } else { 
        paidTotal.innerHTML = "Right on the money!";
        paidTotal.classList.add('aboveZero');
    }

}




var clicks = 1;

function plusOne() {

    if (clicks < 20) {
        clicks += 1;
        document.getElementById('numberOfPeople').innerHTML = clicks;
    }

}

function minusOne() {

    if (clicks >= 1) {
        clicks -= +1
        document.getElementById('numberOfPeople').innerHTML = clicks;
    }
}