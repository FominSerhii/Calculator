$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');
    var calcOperation = calc.find('.calculator__operation');
    
    var operationButtonUsed = false;
    var userIsInTheMiddleOfTyping = false;

    
    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
        userIsInTheMiddleOfTyping = true;
        operationButtonUsed = false;
    });

    
    // OPERATION BUTTONS
    calcOperation.on('click', function () {
        if (userIsInTheMiddleOfTyping && !operationButtonUsed) {
            calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
            operationButtonUsed = true;
        }
    });
    
    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
        userIsInTheMiddleOfTyping = true;
        operationButtonUsed = false;
    });
    
    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () { 
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});