do {
    operationChoose = prompt('Please, choose one of this operations (+ - * /)');
} while (operationChoose !== '+' && operationChoose !== '-' && operationChoose !== '*' && operationChoose !== '/');

do {
    howMuchOperands = parseInt(prompt('How much numbers?'))
} while (howMuchOperands > 7 || howMuchOperands < 2 || isNaN(howMuchOperands));

value = 0;
result = 0;
do {
    value++;

    do {
        number = parseInt(prompt('Write number?', '10'));
    } while (isNaN(number));
     
    switch (operationChoose){
        case '+':
            result += number;
            break;
        case '-':  
            result = value === 1 ? number : result - number;  
            break;
        case '*': 
        if (value === 1) result = 1;
             result *= number;
            break;  
            case '/':
             result = value === 1 ? number : result / number;
            break;  
    }
} while (value < howMuchOperands);

alert(result);