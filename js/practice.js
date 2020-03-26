
let numbersTransform = function() {
    alert( 'Це функція яка приймає 2 числа і повертає -1, якщо перше менше, чим друге; 1 – якщо перше більше, чим друге; и 0 – якщо числа рівні.') ;
    let userNumber1 = prompt ( 'Введіть перше число' );
    let userNumber2 = prompt ('Введіть друге число');
    if ( userNumber1 < userNumber2 ) {
        alert ('-1');
    } else if ( userNumber1 == userNumber2 ) {
        alert ('0');
    } else if ( userNumber1 > userNumber2 ) {
        alert ( '1' );
    }
}
numbersTransform();


function factorial(n){
    if ( n==1 ) return 1;
    else return n * factorial (n-1) ;		
    }
let userNum =+ prompt ('Введіть число для визначення факторіала');
alert ( factorial ( userNum ));


let numbersMerging = function ( num1, num2, num3 ) {
    alert ( num1 + num2 + num3 );
}
let number1 = prompt ( "Введи 3 цифри, а я з'єднаю їх в число. Почнемо з першої:" );
let number2 = prompt ( "Друга цифра:" );
let number3 = prompt ( "Третя цифра:" );
numbersMerging ( number1,number2,number3 );


let squareAreaCalculator = function (side1, side2) {
    if(side1 == 0){
        alert ( side2 * side2 );
    }else if(side2 == 0){
        alert ( side1 * side1 );
    }else{
    alert ( side1 * side2 );
    }
}

let squareSide1 = prompt( 'Введіть першу сторону прямокутника або квадрата' );
let squareSide2 = prompt( 'Введіть другу сторону прямокутника або квадрата' );
squareAreaCalculator (squareSide1, squareSide2);


function perfectNumberChecker(number) {
let temp = 0;
   for( let i = 1; i <= number / 2; i++ )
     {
         if ( number % i === 0 ) {
            temp += i;
          }
     }
   
     if ( temp === number && temp !== 0 ) {
       console.log( `Число ${temp} є досконалим числом.` );
        }
 } 

let numberRange = function () {
        let minVal = prompt( "Введіть перше число початку діапазону." );
        let maxVal = prompt( "Введіть друге число кінця діапазону." );
        for( let i = minVal; i <= maxVal; i++ ) {
            perfectNumberChecker(i);
        }
    }    
numberRange();


let timeConstructor = function (hours, minutes, seconds) {
        var hours;
        if ( hours == 0 ) {
            hours = 00;
        }else if ( hours >= 24 ) {
            hours = 23;
        }else if ( hours < 10 ) {
            hours = 0 + hours;
        }
        var minutes;
        if ( minutes == 0 ) {
            minutes = 00;
        }else if ( minutes >= 60) {
            minutes = 59;
        }else if ( minutes < 10 ) {
            minutes = 0 + minutes;
        }
        var seconds;
        if (seconds == 0 ) {
            seconds = 00;
        }
        else if ( seconds >= 60 ) {
            seconds = 59;
        }else if ( seconds < 10 ) {
            seconds = 0 + seconds;
        }

        return(`${hours}:${minutes}:${seconds}`);
}


let timeTransformToSeconds = function( hours, minutes, seconds ) {
        var hours;
        if ( hours == 0 ) {
            hours = 00;
        }else if ( hours >= 24 ) {
            hours = 24;
        }
        var minutes;
        if ( minutes == 0 ) {
            minutes = 00;
        }else if ( minutes >= 60) {
            minutes = 60;
        }
        var seconds;
        if ( seconds >= 60 ) {
            seconds = 60;
        }
        let hToS = ( hours * 60 ) * 60 ;
        let mToS = minutes * 60 ;
        let sToS = seconds * 60 / 60 ;
        result = hToS+ mToS + sToS ;
        return ( result ) ;
}



let secondsTransformToTime = function ( seconds ) {
        let hours = Math.floor ( seconds / 3600 ) ;
        let minutes = Math.floor ( ( seconds - ( hours * 3600 ) ) / 60 );
        var seconds = seconds - ( hours * 3600 ) - (minutes * 60 );
        seconds = Math.round ( seconds * 100 ) / 100;
       
        let result = ( hours < 10 ? "0" + hours : hours );
        result += ":" + ( minutes < 10 ? "0" + minutes : minutes );
        result += ":" + ( seconds < 10 ? "0" + seconds : seconds );
        return result;
    }


let timeComparsion = function () {
    alert('Це порівняння двох дат. Введи данні першої дати');
    let hours1 = prompt ( 'Введіть години' );
    let minutes1 = prompt ( 'Введіть хвилини' );
    let seconds1 = prompt ( 'Введіть секунди' );
    let time1 = timeTransformToSeconds ( hours1, minutes1, seconds1 );
    alert("Введи данні другої дати")
    let hours2 = prompt ( 'Введіть години' );
    let minutes2 = prompt ( 'Введіть хвилини' );
    let seconds2 = prompt ( 'Введіть секунди' );
    let time2 = timeTransformToSeconds ( hours2, minutes2, seconds2 );
    compSeconds = time1 - time2;
    let result = secondsTransformToTime ( compSeconds );
    alert(`Різниця між першою і другою датою складає ${result}`);
}

timeComparsion();