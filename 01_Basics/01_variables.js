const accountId =2210001
let accountEmail = "mahimachaudhary2424@gmail.com"
var accountPassword = "1234"
accountCity="Ghaziabad"; // this is okay, but should not be used.
let accoundState;  // will return undefined

//accountId = 2 // not allowed as accountId was declared as constant


accountEmail ="abc@d.com"
accountPassword = "12121"
accountCity = "Noida"

/*
Prefer not to use 'var' , because of issue in block scope and functional scope
*/

console.table ([accountEmail, accountId, accountPassword, accountCity, accoundState]);

/* Output 

┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │ 'abc@d.com' │
│    1    │   2210001   │
│    2    │   '12121'   │
│    3    │   'Noida'   │
│    4    │  undefined  │
└─────────┴─────────────┘
*/