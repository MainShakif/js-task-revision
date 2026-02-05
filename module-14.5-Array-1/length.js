const numbers = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50];
console.log(numbers);
console.log("negative index:", numbers[-1]); //

/*---------------------------------------------
                check length:
---------------------------------------*/
console.log(numbers.length);

/*-------------------------------------------------- 
            check index value:
-----------------------------------------------------*/
// console.log(numbers[8]); //index 8 means 9th value.

/*--------------------------------------------------------
 change index value and //?set in another variable:
 --------------------------------------------------------*/
// numbers[4] = 100;
// let fifth = numbers[4];
// console.log(fifth);

/*-----------------------------------------------
                1) Get value by index
// -------------------------------------------*/
//If you already know the index:
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers[2]); // 30

/*
----------------------------------------------------------
        2) Get index number by value (using indexOf())
---------------------------------------------------------
*/
//If you know the value and want its index:
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(30)); // 2
