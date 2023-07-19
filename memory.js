var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];
//alert (cards[4])
//console.log(cards);

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

c0.addEventListener('click', function () { Rewialcard(0); });
c1.addEventListener('click', function () { Rewialcard(1) });
c2.addEventListener('click', function () { Rewialcard(2) });
c3.addEventListener('click', function () { Rewialcard(3); });

c4.addEventListener('click', function () { Rewialcard(4); });
c5.addEventListener('click', function () { Rewialcard(5); });
c6.addEventListener('click', function () { Rewialcard(6); });
c7.addEventListener('click', function () { Rewialcard(7); });

c8.addEventListener('click', function () { Rewialcard(8); });
c9.addEventListener('click', function () { Rewialcard(9); });
c10.addEventListener('click', function () { Rewialcard(10); });
c11.addEventListener('click', function () { Rewialcard(11); });

var oneVizible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function Rewialcard(nr) {

    var opacityValue = $('#c' + nr).css('opacity');
    //alert('Opacity: '+opacityValue);
    if (opacityValue != 0 && lock == false) {
        lock = true;
        //alert(nr);
        console.log('Numer ktory dostaje funkcja', nr)


        var obraz = "url(" + cards[nr] + ")";
        $('#c' + nr).css('background-image', obraz);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');

        if (oneVizible == false) {
            //first card
            oneVizible = true;
            visible_nr = nr;
            lock=false;
        }
        else {
            //second card

            if (cards[visible_nr] == cards[nr]) {
                //alert('para');
                setTimeout(function () { hide2cards(nr, visible_nr) }, 750);


            }
            else {
                // alert('pudlo');
                setTimeout(function () { restore2cards(nr, visible_nr) }, 1000);
            }

            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVizible = false;
        }

    }



}

function myFunktion(){

window.location.reload();

}
function hide2cards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');

pairsLeft--;
if(pairsLeft == 0){
    $('.board').html('<div><h1>You win! <br>Done in'+ ' '+ turnCounter + ' '+'turns</h1> </br></br> <button onclick = "myFunktion()">Zygraj jeszcse raz </button></div>' );
  
    }
    lock=false;

}
function restore2cards(nr1, nr2){

    $('#c' + nr1).css('background-image', 'url(karta.png)');
    $('#c' + nr1).addClass('card');  
    $('#c' + nr1).removeClass('cardA');

    $('#c' + nr2).css('background-image', 'url(karta.png)');
    $('#c' + nr2).addClass('card');  
    $('#c' + nr2).removeClass('cardA');

    lock=false;
}

