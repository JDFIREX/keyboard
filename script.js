
var Shift = document.querySelectorAll('.Shift');
var Alt = document.querySelectorAll('.Alt');
var Line_1 = document.querySelector('.line-1');
var Line_2 = document.querySelector('.line-2');
var Line_3 = document.querySelector('.line-3');
var Line_4 = document.querySelector('.line-4');
var Line_5 = document.querySelector('.line-5');
var key = document.querySelectorAll('.key');
var p = document.querySelector('.word_area');

var BackSpace = document.querySelector('#Backspace')
var Tab = document.querySelector('#Tab')
var CapsLk = document.querySelector('#CapsLk')
var Enter = document.querySelector('#Enter')
var ShiftKey = document.querySelector('#ShiftKey')
var AltKey = document.querySelector('#Alt')
var Space = document.querySelector('#Spacja')

var CapsLkIsDown = false;
var ShiftIsDown = 0;
var AltIsDown = false;


key.forEach( k => {

        k.addEventListener('click', (e) => {

            click = 1;
            var myKey = e.path[0].innerHTML;
            p.innerHTML += myKey;

        })

})
Space.addEventListener("click", (e) => {    

    p.innerHTML += e.path[0].value;

})
Enter.addEventListener("click", (e) => {    

    p.innerHTML += "\n"

})
CapsLk.addEventListener("click" , (e) => {

    ShiftIsDown = 0;
    key.forEach( k => {

        k.innerHTML = k.innerHTML.toUpperCase();

    })
    if(CapsLkIsDown == true){

        return key.forEach( k => {

            CapsLkIsDown = false;
            k.innerHTML = k.innerHTML.toLowerCase();

        })

    }
    CapsLkIsDown = true;

})
ShiftKey.addEventListener('click', (e)=> {

    var click;
    var ShiftCount = 0;
    CapsLkIsDown = false;
    if(ShiftIsDown == 0){

        Shift.forEach( S => {

            switch(ShiftCount){
                case 0: S.innerHTML = "~"; break;
                case 1: S.innerHTML = "!"; break;
                case 2: S.innerHTML = "@"; break;
                case 3: S.innerHTML = "#"; break;
                case 4: S.innerHTML = "$"; break;
                case 5: S.innerHTML = "%"; break;
                case 6: S.innerHTML = "^"; break;
                case 7: S.innerHTML = "&"; break;
                case 8: S.innerHTML = "*"; break;
                case 9: S.innerHTML = "("; break;
                case 10: S.innerHTML = ")"; break;
                case 11: S.innerHTML = "_"; break;
                case 12: S.innerHTML = "+"; break;
                case 13: S.innerHTML = "{"; break;
                case 14: S.innerHTML = "}"; break;
                case 15: S.innerHTML = "|"; break;
                case 16: S.innerHTML = ":"; break;
                case 17: S.innerHTML = '"'; break;
                case 18: S.innerHTML = "<"; break;
                case 19: S.innerHTML = ">"; break;
                case 20: S.innerHTML = "?"; break;
            }
            ShiftCount++;
        })

        key.forEach( k => {

            ShiftIsDown = 1;
            k.innerHTML = k.innerHTML.toUpperCase();
            k.addEventListener('click', (e) => {
                ShiftCount = 0;
                click = e.type
                if(click === "click" && ShiftIsDown == 1){

                    Shift.forEach( S => {

                        switch(ShiftCount){
                            case 0: S.innerHTML = "`"; break;
                            case 1: S.innerHTML = "1"; break;
                            case 2: S.innerHTML = "2"; break;
                            case 3: S.innerHTML = "3"; break;
                            case 4: S.innerHTML = "4"; break;
                            case 5: S.innerHTML = "5"; break;
                            case 6: S.innerHTML = "6"; break;
                            case 7: S.innerHTML = "7"; break;
                            case 8: S.innerHTML = "8"; break;
                            case 9: S.innerHTML = "9"; break;
                            case 10: S.innerHTML = "0"; break;
                            case 11: S.innerHTML = "-"; break;
                            case 12: S.innerHTML = "="; break;
                            case 13: S.innerHTML = "["; break;
                            case 14: S.innerHTML = "]"; break;
                            case 15: S.innerHTML = '\\'; break;
                            case 16: S.innerHTML = ";"; break;
                            case 17: S.innerHTML = "'"; break;
                            case 18: S.innerHTML = ","; break;
                            case 19: S.innerHTML = "."; break;
                            case 20: S.innerHTML = "/"; break;
                        }
                        ShiftCount++;
                    })

                    return key.forEach( k => {
                        ShiftIsDown = 0;
                        k.innerHTML = k.innerHTML.toLowerCase();
                    })

                }

            })

        })

    }else if(ShiftIsDown == 1){

        Shift.forEach( S => {

            switch(ShiftCount){
                case 0: S.innerHTML = "`"; break;
                case 1: S.innerHTML = "1"; break;
                case 2: S.innerHTML = "2"; break;
                case 3: S.innerHTML = "3"; break;
                case 4: S.innerHTML = "4"; break;
                case 5: S.innerHTML = "5"; break;
                case 6: S.innerHTML = "6"; break;
                case 7: S.innerHTML = "7"; break;
                case 8: S.innerHTML = "8"; break;
                case 9: S.innerHTML = "9"; break;
                case 10: S.innerHTML = "0"; break;
                case 11: S.innerHTML = "-"; break;
                case 12: S.innerHTML = "="; break;
                case 13: S.innerHTML = "["; break;
                case 14: S.innerHTML = "]"; break;
                case 15: S.innerHTML = '\\'; break;
                case 16: S.innerHTML = ";"; break;
                case 17: S.innerHTML = "'"; break;
                case 18: S.innerHTML = ","; break;
                case 19: S.innerHTML = "."; break;
                case 20: S.innerHTML = "/"; break;
            }
            ShiftCount++;
        })

        return key.forEach( k => {
            ShiftIsDown = 0;
            k.innerHTML = k.innerHTML.toLowerCase();
        })

    }
    
})
Tab.addEventListener('click', (e) => {

    var tab = "    ";
    p.innerHTML += tab;

})
BackSpace.addEventListener("click", () => {

    var length = p.innerHTML.length;
    length - 1;
    var newp = p.innerHTML.split("");
    newp.pop()
    newp = newp.join("");
    p.innerHTML = newp

})
AltKey.addEventListener("click", (e) => {

    var AltCount = 0;
    var AltClick = false;
    if(AltIsDown == false){

        AltIsDown = true;
        AltCount = 0;
        Alt.forEach( A => {

            switch(AltCount){

                case 0: A.innerHTML = "ę"; break;
                case 1: A.innerHTML = "€"; break;
                case 2: A.innerHTML = "ó"; break;
                case 3: A.innerHTML = "ą"; break;
                case 4: A.innerHTML = "ś"; break;
                case 5: A.innerHTML = "ł"; break;
                case 6: A.innerHTML = "ż"; break;
                case 7: A.innerHTML = "ź"; break;
                case 8: A.innerHTML = "ć"; break;
                case 9: A.innerHTML = "ń"; break;

            }
            AltCount++;
            if(ShiftIsDown || CapsLkIsDown){

                key.forEach( k => {
                    k.innerHTML = k.innerHTML.toUpperCase();
                })

            }

        })
        key.forEach( k => {

            k.addEventListener('click', () => {

                AltClick = true;
                if(AltClick && AltIsDown){
                    AltIsDown = false;
                    AltClick = false;
                    AltCount = 0;
                    Alt.forEach( A => {

                        switch(AltCount){

                            case 0: A.innerHTML = "e"; break;
                            case 1: A.innerHTML = "u"; break;
                            case 2: A.innerHTML = "o"; break;
                            case 3: A.innerHTML = "a"; break;
                            case 4: A.innerHTML = "s"; break;
                            case 5: A.innerHTML = "l"; break;
                            case 6: A.innerHTML = "z"; break;
                            case 7: A.innerHTML = "x"; break;
                            case 8: A.innerHTML = "c"; break;
                            case 9: A.innerHTML = "n"; break;

                        }
                        AltCount++;
                        if(ShiftIsDown || CapsLkIsDown){

                            key.forEach( k => {
                                k.innerHTML = k.innerHTML.toUpperCase();
                            })

                        }

                    })  
                }

            })

        })

    }else if(AltIsDown){

        AltIsDown = false;
        AltClick = false;
        AltCount = 0;
        Alt.forEach( A => {

            switch(AltCount){

                case 0: A.innerHTML = "e"; break;
                case 1: A.innerHTML = "u"; break;
                case 2: A.innerHTML = "o"; break;
                case 3: A.innerHTML = "a"; break;
                case 4: A.innerHTML = "s"; break;
                case 5: A.innerHTML = "l"; break;
                case 6: A.innerHTML = "z"; break;
                case 7: A.innerHTML = "x"; break;
                case 8: A.innerHTML = "c"; break;
                case 9: A.innerHTML = "n"; break;

            }
            AltCount++;
            if(ShiftIsDown || CapsLkIsDown){

                key.forEach( k => {
                    k.innerHTML = k.innerHTML.toUpperCase();
                })

            }

        })

    }

})
