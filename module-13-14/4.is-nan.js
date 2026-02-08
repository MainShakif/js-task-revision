/*
*Explanation About isNaN : isNaN Convert a string to an integer and give output to "true" or "false".

* isNaN() শুধু তখন true দেয় যখন ভ্যালু NaN হয়.

উদাহরণ:

isNaN("hello")   // true
isNaN(10)        // false
!isNaN("10")      // false  (string হলেও number এ convert হয়)
isNaN(0/0)       // true   (NaN)
 */

/*------------------------------------------------------------------
                            //?Task-4
                What will be the result of the following codes:

                var a = isNaN(‘11’);

                var a = isNaN(2-10);

                Explain your answers.
 ----------------------------------------------------------------*/
/*--------------------------------------------------------------
                            //TODO 1:
 --------------------------------------------------------------
 */

/*
*Explanation About isNaN : isNaN Convert a string to an       integer and give output to "true" or "false".

*JavaScript can successfully turn a numeric string into a     number.
*/

/*--------------------------------------------------------------
var a = isNaN("11");
console.log(a);
The ans is "false" BCZ this is Not a Number.
--------------------------------------------------------------*/

/*--------------------------------------------------------------
 var a = isNaN(2 - 10);
 console.log(a);
The ans is "false" BCZ this is Not a Number.
--------------------------------------------------------------*/
