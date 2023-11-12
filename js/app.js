function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinFeild = document.getElementById('display-pin');
    displayPinFeild.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousNumber = typedNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digit = previousNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
    const newTypeNumber = previousNumber + number;
    typedNumberField.value = newTypeNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const typedNumber = document.getElementById('typed-number');
    const typedPin = typedNumber.value;


    const pinFailorMassage = document.getElementById('pin-failor');
    const pinMatchMassage = document.getElementById('pin-success');

    if(currentPin === typedPin){
       
       pinMatchMassage.style.display = 'block';
       pinFailorMassage.style.display ='none';
    }
    else{
       
        pinFailorMassage.style.display ='block';
        pinMatchMassage.style.display = 'none';
    }
})