var className_space = document.querySelector(".className_space");
var className_tick = document.querySelector(".className_tick");
var className_shift_left = document.querySelector(".className_shift_left");
var className_shift_right = document.querySelector(".className_shift_right");
var className_tab = document.querySelector(".className_tab");
var className_caps = document.querySelector(".className_caps");
var className_left_arrow = document.querySelector(".className_left_arrow");
var className_minus = document.querySelector(".className_minus");
var className_third_brac_left = document.querySelector(".className_third_brac_left");
var className_third_brac_right = document.querySelector(".className_third_brac_right");
var className_angle_slash = document.querySelector(".className_angle_slash");
var className_fullstop = document.querySelector(".className_fullstop");
var className_comma = document.querySelector(".className_comma");
var className_comma_UP = document.querySelector(".className_comma_UP");
var className_enter = document.querySelector(".className_enter");
var className_forwardslash = document.querySelector(".className_forwardslash");
var className_ctrl_1 = document.querySelector(".className_ctrl_1");
var className_ctrl_2 = document.querySelector(".className_ctrl_2");
var className_window = document.querySelector(".className_window");
var className_alt_1 = document.querySelector(".className_alt_1");
var printer = document.querySelector(".printer");
var className_semicolon = document.querySelector(".className_semicolon");
var className_minus = document.querySelector(".className_minus");
var className_equal = document.querySelector(".className_equal");
var className_window_right = document.querySelector(".className_window_right");
var className_alt_2 = document.querySelector(".className_alt_2");

var className_1 = document.querySelector(".className_1");
var className_2 = document.querySelector(".className_2");
var className_3 = document.querySelector(".className_3");
var className_4 = document.querySelector(".className_4");
var className_5 = document.querySelector(".className_5");
var className_6 = document.querySelector(".className_6");
var className_7 = document.querySelector(".className_7");
var className_8 = document.querySelector(".className_8");
var className_9 = document.querySelector(".className_9");
var className_0 = document.querySelector(".className_0");


var className_A = document.querySelector(".className_A");
var className_B = document.querySelector(".className_B");
var className_C = document.querySelector(".className_C");
var className_D = document.querySelector(".className_D");
var className_E = document.querySelector(".className_E");
var className_F = document.querySelector(".className_F");
var className_G = document.querySelector(".className_G");
var className_H = document.querySelector(".className_H");
var className_I = document.querySelector(".className_I");
var className_J = document.querySelector(".className_J");
var className_K = document.querySelector(".className_K");
var className_L = document.querySelector(".className_L");
var className_M = document.querySelector(".className_M");
var className_N = document.querySelector(".className_N");
var className_O = document.querySelector(".className_O");
var className_P = document.querySelector(".className_P");
var className_Q = document.querySelector(".className_Q");
var className_R = document.querySelector(".className_R");
var className_S = document.querySelector(".className_S");
var className_T = document.querySelector(".className_T");
var className_U = document.querySelector(".className_U");
var className_V = document.querySelector(".className_V");
var className_W = document.querySelector(".className_W");
var className_X = document.querySelector(".className_X");
var className_Y = document.querySelector(".className_Y");
var className_Z = document.querySelector(".className_Z");





document.onkeydown = function(e) {


    if ((e.keyCode === 18)) {
        console.log("ALT");
        className_alt_1.style.backgroundColor = className_alt_1.style.backgroundColor === "white" ? "#ddd" : "white";
        className_alt_2.style.backgroundColor = className_alt_2.style.backgroundColor === "white" ? "#ddd" : "white";
    }
    if ((e.keyCode === 40)) {
        console.log("ARROW DOWN");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }


    if ((e.keyCode === 36)) {
        console.log("HOME");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }

    if ((e.keyCode === 37)) {
        console.log("ARROW LEFT");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 39)) {
        console.log("ARROW RIGHT");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 38)) {
        console.log("ARROW UP");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 8)) {
        console.log("BACKSPACE");
        className_left_arrow.style.backgroundColor = className_left_arrow.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 20)) {
        console.log("CAPS LOCK");
        className_caps.style.backgroundColor = className_caps.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 17)) {
        console.log("CTRL");
        className_ctrl_1.style.backgroundColor = className_ctrl_1.style.backgroundColor === "white" ? "#ddd" : "white";
        className_ctrl_2.style.backgroundColor = className_ctrl_2.style.backgroundColor === "white" ? "#ddd" : "white";
    }
    if ((e.keyCode === 406)) {
        console.log("CTRL RIGHT");
        className_ctrl_2.style.backgroundColor = className_ctrl_2.style.backgroundColor === "white" ? "#ddd" : "white";
    }
    if ((e.keyCode === 46)) {
        console.log("DELETE");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 35)) {
        console.log("END");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 13)) {
        console.log("ENTER");
        className_enter.style.backgroundColor = className_enter.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 27)) {
        console.log("ESC");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 112)) {
        console.log("F1");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 113)) {
        console.log("F2");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 114)) {
        console.log("F3");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 115)) {
        console.log("F4");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 116)) {
        console.log("F5");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 117)) {
        console.log("F6");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 118)) {
        console.log("F7");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 119)) {
        console.log("F8");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 120)) {
        console.log("F9");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 121)) {
        console.log("F10");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 122)) {
        console.log("F11");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 123)) {
        console.log("F12");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }



    if ((e.keyCode === 144)) {
        console.log("NUM LOCK");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 97)) {
        console.log("NUMPAD 1");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 98)) {
        console.log("NUMPAD 2");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 99)) {
        console.log("NUMPAD 3");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 100)) {
        console.log("NUMPAD 4");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 101)) {
        console.log("NUMPAD 5");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 102)) {
        console.log("NUMPAD 6");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 103)) {
        console.log("NUMPAD 7");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 104)) {
        console.log("NUMPAD 8");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 105)) {
        console.log("NUMPAD 9");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 109)) {
        console.log("NUMPAD -");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 106)) {
        console.log("NUMPAD *");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 110)) {
        console.log("NUMPAD .");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 111)) {
        console.log("NUMPAD /");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 107)) {
        console.log("NUMPAD +");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }



    if ((e.keyCode === 34)) {
        console.log("PAGE DOWN");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 33)) {
        console.log("PAGE UP");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 19)) {
        console.log("PAUSE");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 44)) {
        console.log("PRNT SCRN");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 145)) {
        console.log("SCROLL LOCK");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    // if ((e.keyCode === 16)) {
    //     console.log("SHIFT LEFT");
    //     className_shift_left.style.backgroundColor = className_shift_left.style.backgroundColor === "white" ? "red" : "white";
    //     className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
    // }
    if ((e.keyCode === 14)) {
        console.log("SHIFT right");
        className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 9)) {
        console.log("TAB");
        className_tab.style.backgroundColor = className_tab.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 32)) {
        console.log("SPACEBAR");
        className_space.style.backgroundColor = className_space.style.backgroundColor === "white" ? "#8f86f6" : "white";
    }


    if ((e.keyCode === 33)) {
        console.log("!");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 34)) {
        console.log("\"");
        className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 35)) {
        console.log("#");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 36)) {
        console.log("$");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 37)) {
        console.log("%");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 38)) {
        console.log("&");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 39)) {
        console.log("bau ulta slash'");
        className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 40)) {
        console.log("(");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 41)) {
        console.log(")");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 42)) {
        console.log("*");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 43)) {
        console.log("+");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 44)) {
        console.log(",");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 45)) {
        console.log("INSERT");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 46)) {
        console.log(".");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 47)) {
        console.log("forward slash");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }

    if ((e.keyCode === 48)) {
        console.log("0");
        className_0.style.backgroundColor = className_0.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 49)) {
        console.log("1 ");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 50)) {
        console.log("2 ");
        className_2.style.backgroundColor = className_2.style.backgroundColor === "white" ? "yellow" : "white";
    }
    if ((e.keyCode === 51)) {
        console.log("3 ");
        className_3.style.backgroundColor = className_3.style.backgroundColor === "white" ? "#11fa00" : "white";
    }
    if ((e.keyCode === 52)) {
        console.log("4 ");
        className_4.style.backgroundColor = className_4.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 53)) {
        console.log("5 ");
        className_5.style.backgroundColor = className_5.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 54)) {
        console.log("6 ");
        className_6.style.backgroundColor = className_6.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 55)) {
        console.log("7 ");
        className_7.style.backgroundColor = className_7.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 56)) {
        console.log("8 ");
        className_8.style.backgroundColor = className_8.style.backgroundColor === "white" ? "#03ddff" : "white";
    }
    if ((e.keyCode === 57)) {
        console.log("9 ");
        className_9.style.backgroundColor = className_9.style.backgroundColor === "white" ? "#faa700" : "white";
    }





    if ((e.keyCode === 65)) {
        console.log("A");
        className_A.style.backgroundColor = className_A.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 66)) {
        console.log("B");
        className_B.style.backgroundColor = className_B.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 67)) {
        console.log("C");
        className_C.style.backgroundColor = className_C.style.backgroundColor === "white" ? "#11fa00" : "white";
    }
    if ((e.keyCode === 68)) {
        console.log("D");
        className_D.style.backgroundColor = className_D.style.backgroundColor === "white" ? "#11fa00" : "white";
    }
    if ((e.keyCode === 69)) {
        console.log("E");
        className_E.style.backgroundColor = className_E.style.backgroundColor === "white" ? "#11fa00" : "white";
    }
    if ((e.keyCode === 70)) {
        console.log("F");
        className_F.style.backgroundColor = className_F.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 71)) {
        console.log("G");
        className_G.style.backgroundColor = className_G.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 72)) {
        console.log("H");
        className_H.style.backgroundColor = className_H.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 73)) {
        console.log("I");
        className_I.style.backgroundColor = className_I.style.backgroundColor === "white" ? "#03ddff" : "white";
    }
    if ((e.keyCode === 74)) {
        console.log("J");
        className_J.style.backgroundColor = className_J.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 75)) {
        console.log("K");
        className_K.style.backgroundColor = className_K.style.backgroundColor === "white" ? "#03ddff" : "white";
    }
    if ((e.keyCode === 76)) {
        console.log("L");
        className_L.style.backgroundColor = className_L.style.backgroundColor === "white" ? "#faa700" : "white";
    }
    if ((e.keyCode === 77)) {
        console.log("M");
        className_M.style.backgroundColor = className_M.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 78)) {
        console.log("N");
        className_N.style.backgroundColor = className_N.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 79)) {
        console.log("O");
        className_O.style.backgroundColor = className_O.style.backgroundColor === "white" ? "#faa700" : "white";
    }
    if ((e.keyCode === 80)) {
        console.log("P");
        className_P.style.backgroundColor = className_P.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 81)) {
        console.log("Q");
        className_Q.style.backgroundColor = className_Q.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 82)) {
        console.log("R");
        className_R.style.backgroundColor = className_R.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 83)) {
        console.log("S");
        className_S.style.backgroundColor = className_S.style.backgroundColor === "white" ? "yellow" : "white";
    }
    if ((e.keyCode === 84)) {
        console.log("T");
        className_T.style.backgroundColor = className_T.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 85)) {
        console.log("U");
        className_U.style.backgroundColor = className_U.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 86)) {
        console.log("V");
        className_V.style.backgroundColor = className_V.style.backgroundColor === "white" ? "#039eff" : "white";
    }
    if ((e.keyCode === 87)) {
        console.log("W");
        className_W.style.backgroundColor = className_W.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 88)) {
        console.log("X");
        className_X.style.backgroundColor = className_X.style.backgroundColor === "white" ? "yellow" : "white";
    }
    if ((e.keyCode === 89)) {
        console.log("Y");
        className_Y.style.backgroundColor = className_Y.style.backgroundColor === "white" ? "#006afd" : "white";
    }
    if ((e.keyCode === 90)) {
        console.log("Z");
        className_Z.style.backgroundColor = className_Z.style.backgroundColor === "white" ? "red" : "white";
    }



    if ((e.keyCode === 91)) {
        console.log("window left");
        className_window.style.backgroundColor = className_window.style.backgroundColor === "white" ? "#ddd" : "white";
    }


    if ((e.keyCode === 92)) {
        console.log("windows right");
        className_window_right.style.backgroundColor = className_window_right.style.backgroundColor === "white" ? "#ddd" : "white";
    }
    if ((e.keyCode === 93)) {
        console.log("PRINTER");
        printer.style.backgroundColor = printer.style.backgroundColor === "white" ? "#ddd" : "white";
    }
    if ((e.keyCode === 94)) {
        console.log("^");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 95)) {
        console.log("-");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }
    if ((e.keyCode === 96)) {
        console.log("numpad 0");
        className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
    }




    if ((e.keyCode === 59)) {
        console.log(";");
        className_semicolon.style.backgroundColor = className_semicolon.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 186)) {
        console.log(";");
        className_semicolon.style.backgroundColor = className_semicolon.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 61)) {
        console.log("=");
        className_equal.style.backgroundColor = className_equal.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 187)) {
        console.log("=");
        className_equal.style.backgroundColor = className_equal.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 188)) {
        console.log(",");
        className_comma.style.backgroundColor = className_comma.style.backgroundColor === "white" ? "#03ddff" : "white";
    }
    if ((e.keyCode === 173)) {
        console.log("-");
        className_minus.style.backgroundColor = className_minus.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 189)) {
        console.log("-");
        className_minus.style.backgroundColor = className_minus.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 190)) {
        console.log(".");
        className_fullstop.style.backgroundColor = className_fullstop.style.backgroundColor === "white" ? "#faa700" : "white";
    }
    if ((e.keyCode === 191)) {
        console.log("slash slash slash");
        className_forwardslash.style.backgroundColor = className_forwardslash.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 192)) {
        console.log("`");
        className_tick.style.backgroundColor = className_tick.style.backgroundColor === "white" ? "#ddd" : "white";
    }


    if ((e.keyCode === 219)) {
        console.log("third start bracket");
        className_third_brac_left.style.backgroundColor = className_third_brac_left.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 220)) {
        console.log("slash");
        className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 221)) {
        console.log("]");
        className_third_brac_right.style.backgroundColor = className_third_brac_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }
    if ((e.keyCode === 222)) {
        console.log("up comma ");
        className_comma_UP.style.backgroundColor = className_comma_UP.style.backgroundColor === "white" ? "#ff00dd" : "white";
    }



};



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

var val = document.getElementById("mySelect").value;

//this is here restoring the default color by preset speed... 
document.onkeyup = function(e) {

    setTimeout(
        function() {


            if ((e.keyCode === 18)) {
                console.log("ALT");
                className_alt_1.style.backgroundColor = className_alt_1.style.backgroundColor === "white" ? "#ddd" : "white";
                className_alt_2.style.backgroundColor = className_alt_2.style.backgroundColor === "white" ? "#ddd" : "white";
            }
            if ((e.keyCode === 40)) {
                console.log("ARROW DOWN");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }


            if ((e.keyCode === 36)) {
                console.log("HOME");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }

            if ((e.keyCode === 37)) {
                console.log("ARROW LEFT");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 39)) {
                console.log("ARROW RIGHT");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 38)) {
                console.log("ARROW UP");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 8)) {
                console.log("BACKSPACE");
                className_left_arrow.style.backgroundColor = className_left_arrow.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 20)) {
                console.log("CAPS LOCK");
                className_caps.style.backgroundColor = className_caps.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 17)) {
                console.log("CTRL");
                className_ctrl_1.style.backgroundColor = className_ctrl_1.style.backgroundColor === "white" ? "#ddd" : "white";
                className_ctrl_2.style.backgroundColor = className_ctrl_2.style.backgroundColor === "white" ? "#ddd" : "white";
            }
            if ((e.keyCode === 406)) {
                console.log("CTRL RIGHT");
                className_ctrl_2.style.backgroundColor = className_ctrl_2.style.backgroundColor === "white" ? "#ddd" : "white";
            }
            if ((e.keyCode === 46)) {
                console.log("DELETE");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 35)) {
                console.log("END");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 13)) {
                console.log("ENTER");
                className_enter.style.backgroundColor = className_enter.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 27)) {
                console.log("ESC");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 112)) {
                console.log("F1");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 113)) {
                console.log("F2");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 114)) {
                console.log("F3");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 115)) {
                console.log("F4");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 116)) {
                console.log("F5");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 117)) {
                console.log("F6");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 118)) {
                console.log("F7");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 119)) {
                console.log("F8");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 120)) {
                console.log("F9");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 121)) {
                console.log("F10");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 122)) {
                console.log("F11");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 123)) {
                console.log("F12");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }



            if ((e.keyCode === 144)) {
                console.log("NUM LOCK");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 97)) {
                console.log("NUMPAD 1");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 98)) {
                console.log("NUMPAD 2");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 99)) {
                console.log("NUMPAD 3");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 100)) {
                console.log("NUMPAD 4");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 101)) {
                console.log("NUMPAD 5");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 102)) {
                console.log("NUMPAD 6");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 103)) {
                console.log("NUMPAD 7");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 104)) {
                console.log("NUMPAD 8");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 105)) {
                console.log("NUMPAD 9");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 109)) {
                console.log("NUMPAD -");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 106)) {
                console.log("NUMPAD *");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 110)) {
                console.log("NUMPAD .");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 111)) {
                console.log("NUMPAD /");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 107)) {
                console.log("NUMPAD +");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }



            if ((e.keyCode === 34)) {
                console.log("PAGE DOWN");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 33)) {
                console.log("PAGE UP");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 19)) {
                console.log("PAUSE");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 44)) {
                console.log("PRNT SCRN");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 145)) {
                console.log("SCROLL LOCK");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            // if ((e.keyCode === 16)) {
            //     console.log("SHIFT LEFT");
            //     className_shift_left.style.backgroundColor = className_shift_left.style.backgroundColor === "white" ? "red" : "white";
            //     className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
            // }
            if ((e.keyCode === 14)) {
                console.log("SHIFT right");
                className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 9)) {
                console.log("TAB");
                className_tab.style.backgroundColor = className_tab.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 32)) {
                console.log("SPACEBAR");
                className_space.style.backgroundColor = className_space.style.backgroundColor === "white" ? "#8f86f6" : "white";
            }


            if ((e.keyCode === 33)) {
                console.log("!");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 34)) {
                console.log("\"");
                className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 35)) {
                console.log("#");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 36)) {
                console.log("$");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 37)) {
                console.log("%");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 38)) {
                console.log("&");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 39)) {
                console.log("bau ulta slash'");
                className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 40)) {
                console.log("(");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 41)) {
                console.log(")");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 42)) {
                console.log("*");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 43)) {
                console.log("+");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 44)) {
                console.log(",");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 45)) {
                console.log("INSERT");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 46)) {
                console.log(".");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 47)) {
                console.log("forward slash");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }

            if ((e.keyCode === 48)) {
                console.log("0");
                className_0.style.backgroundColor = className_0.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 49)) {
                console.log("1 ");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 50)) {
                console.log("2 ");
                className_2.style.backgroundColor = className_2.style.backgroundColor === "white" ? "yellow" : "white";
            }
            if ((e.keyCode === 51)) {
                console.log("3 ");
                className_3.style.backgroundColor = className_3.style.backgroundColor === "white" ? "#11fa00" : "white";
            }
            if ((e.keyCode === 52)) {
                console.log("4 ");
                className_4.style.backgroundColor = className_4.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 53)) {
                console.log("5 ");
                className_5.style.backgroundColor = className_5.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 54)) {
                console.log("6 ");
                className_6.style.backgroundColor = className_6.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 55)) {
                console.log("7 ");
                className_7.style.backgroundColor = className_7.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 56)) {
                console.log("8 ");
                className_8.style.backgroundColor = className_8.style.backgroundColor === "white" ? "#03ddff" : "white";
            }
            if ((e.keyCode === 57)) {
                console.log("9 ");
                className_9.style.backgroundColor = className_9.style.backgroundColor === "white" ? "#faa700" : "white";
            }





            if ((e.keyCode === 65)) {
                console.log("A");
                className_A.style.backgroundColor = className_A.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 66)) {
                console.log("B");
                className_B.style.backgroundColor = className_B.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 67)) {
                console.log("C");
                className_C.style.backgroundColor = className_C.style.backgroundColor === "white" ? "#11fa00" : "white";
            }
            if ((e.keyCode === 68)) {
                console.log("D");
                className_D.style.backgroundColor = className_D.style.backgroundColor === "white" ? "#11fa00" : "white";
            }
            if ((e.keyCode === 69)) {
                console.log("E");
                className_E.style.backgroundColor = className_E.style.backgroundColor === "white" ? "#11fa00" : "white";
            }
            if ((e.keyCode === 70)) {
                console.log("F");
                className_F.style.backgroundColor = className_F.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 71)) {
                console.log("G");
                className_G.style.backgroundColor = className_G.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 72)) {
                console.log("H");
                className_H.style.backgroundColor = className_H.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 73)) {
                console.log("I");
                className_I.style.backgroundColor = className_I.style.backgroundColor === "white" ? "#03ddff" : "white";
            }
            if ((e.keyCode === 74)) {
                console.log("J");
                className_J.style.backgroundColor = className_J.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 75)) {
                console.log("K");
                className_K.style.backgroundColor = className_K.style.backgroundColor === "white" ? "#03ddff" : "white";
            }
            if ((e.keyCode === 76)) {
                console.log("L");
                className_L.style.backgroundColor = className_L.style.backgroundColor === "white" ? "#faa700" : "white";
            }
            if ((e.keyCode === 77)) {
                console.log("M");
                className_M.style.backgroundColor = className_M.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 78)) {
                console.log("N");
                className_N.style.backgroundColor = className_N.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 79)) {
                console.log("O");
                className_O.style.backgroundColor = className_O.style.backgroundColor === "white" ? "#faa700" : "white";
            }
            if ((e.keyCode === 80)) {
                console.log("P");
                className_P.style.backgroundColor = className_P.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 81)) {
                console.log("Q");
                className_Q.style.backgroundColor = className_Q.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 82)) {
                console.log("R");
                className_R.style.backgroundColor = className_R.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 83)) {
                console.log("S");
                className_S.style.backgroundColor = className_S.style.backgroundColor === "white" ? "yellow" : "white";
            }
            if ((e.keyCode === 84)) {
                console.log("T");
                className_T.style.backgroundColor = className_T.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 85)) {
                console.log("U");
                className_U.style.backgroundColor = className_U.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 86)) {
                console.log("V");
                className_V.style.backgroundColor = className_V.style.backgroundColor === "white" ? "#039eff" : "white";
            }
            if ((e.keyCode === 87)) {
                console.log("W");
                className_W.style.backgroundColor = className_W.style.backgroundColor === "white" ? "yellow" : "white";
            }
            if ((e.keyCode === 88)) {
                console.log("X");
                className_X.style.backgroundColor = className_X.style.backgroundColor === "white" ? "yellow" : "white";
            }
            if ((e.keyCode === 89)) {
                console.log("Y");
                className_Y.style.backgroundColor = className_Y.style.backgroundColor === "white" ? "#006afd" : "white";
            }
            if ((e.keyCode === 90)) {
                console.log("Z");
                className_Z.style.backgroundColor = className_Z.style.backgroundColor === "white" ? "red" : "white";
            }



            if ((e.keyCode === 91)) {
                console.log("window left");
                className_window.style.backgroundColor = className_window.style.backgroundColor === "white" ? "#ddd" : "white";
            }


            if ((e.keyCode === 92)) {
                console.log("windows right");
                className_window_right.style.backgroundColor = className_window_right.style.backgroundColor === "white" ? "#ddd" : "white";
            }
            if ((e.keyCode === 93)) {
                console.log("PRINTER");
                printer.style.backgroundColor = printer.style.backgroundColor === "white" ? "#ddd" : "white";
            }
            if ((e.keyCode === 94)) {
                console.log("^");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 95)) {
                console.log("-");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }
            if ((e.keyCode === 96)) {
                console.log("numpad 0");
                className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
            }




            if ((e.keyCode === 59)) {
                console.log(";");
                className_semicolon.style.backgroundColor = className_semicolon.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 186)) {
                console.log(";");
                className_semicolon.style.backgroundColor = className_semicolon.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 61)) {
                console.log("=");
                className_equal.style.backgroundColor = className_equal.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 187)) {
                console.log("=");
                className_equal.style.backgroundColor = className_equal.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 188)) {
                console.log(",");
                className_comma.style.backgroundColor = className_comma.style.backgroundColor === "white" ? "#03ddff" : "white";
            }
            if ((e.keyCode === 173)) {
                console.log("-");
                className_minus.style.backgroundColor = className_minus.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 189)) {
                console.log("-");
                className_minus.style.backgroundColor = className_minus.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 190)) {
                console.log(".");
                className_fullstop.style.backgroundColor = className_fullstop.style.backgroundColor === "white" ? "#faa700" : "white";
            }
            if ((e.keyCode === 191)) {
                console.log("slash slash slash");
                className_forwardslash.style.backgroundColor = className_forwardslash.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 192)) {
                console.log("`");
                className_tick.style.backgroundColor = className_tick.style.backgroundColor === "white" ? "#ddd" : "white";
            }


            if ((e.keyCode === 219)) {
                console.log("third start bracket");
                className_third_brac_left.style.backgroundColor = className_third_brac_left.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 220)) {
                console.log("slash");
                className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 221)) {
                console.log("]");
                className_third_brac_right.style.backgroundColor = className_third_brac_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }
            if ((e.keyCode === 222)) {
                console.log("up comma ");
                className_comma_UP.style.backgroundColor = className_comma_UP.style.backgroundColor === "white" ? "#ff00dd" : "white";
            }


        }, val);



};


//this is here restoring the default color by newly set speed... 
function myFunction() {
    var val = document.getElementById("mySelect").value;
    val = +val;




    document.onkeyup = function(e) {

        setTimeout(
            function() {


                if ((e.keyCode === 18)) {
                    console.log("ALT");
                    className_alt_1.style.backgroundColor = className_alt_1.style.backgroundColor === "white" ? "#ddd" : "white";
                    className_alt_2.style.backgroundColor = className_alt_2.style.backgroundColor === "white" ? "#ddd" : "white";
                }
                if ((e.keyCode === 40)) {
                    console.log("ARROW DOWN");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }


                if ((e.keyCode === 36)) {
                    console.log("HOME");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }

                if ((e.keyCode === 37)) {
                    console.log("ARROW LEFT");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 39)) {
                    console.log("ARROW RIGHT");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 38)) {
                    console.log("ARROW UP");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 8)) {
                    console.log("BACKSPACE");
                    className_left_arrow.style.backgroundColor = className_left_arrow.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 20)) {
                    console.log("CAPS LOCK");
                    className_caps.style.backgroundColor = className_caps.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 17)) {
                    console.log("CTRL");
                    className_ctrl_1.style.backgroundColor = className_ctrl_1.style.backgroundColor === "white" ? "#ddd" : "white";
                    className_ctrl_2.style.backgroundColor = className_ctrl_2.style.backgroundColor === "white" ? "#ddd" : "white";
                }
                if ((e.keyCode === 406)) {
                    console.log("CTRL RIGHT");
                    className_ctrl_2.style.backgroundColor = className_ctrl_2.style.backgroundColor === "white" ? "#ddd" : "white";
                }
                if ((e.keyCode === 46)) {
                    console.log("DELETE");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 35)) {
                    console.log("END");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 13)) {
                    console.log("ENTER");
                    className_enter.style.backgroundColor = className_enter.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 27)) {
                    console.log("ESC");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 112)) {
                    console.log("F1");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 113)) {
                    console.log("F2");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 114)) {
                    console.log("F3");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 115)) {
                    console.log("F4");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 116)) {
                    console.log("F5");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 117)) {
                    console.log("F6");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 118)) {
                    console.log("F7");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 119)) {
                    console.log("F8");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 120)) {
                    console.log("F9");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 121)) {
                    console.log("F10");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 122)) {
                    console.log("F11");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 123)) {
                    console.log("F12");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }



                if ((e.keyCode === 144)) {
                    console.log("NUM LOCK");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 97)) {
                    console.log("NUMPAD 1");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 98)) {
                    console.log("NUMPAD 2");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 99)) {
                    console.log("NUMPAD 3");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 100)) {
                    console.log("NUMPAD 4");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 101)) {
                    console.log("NUMPAD 5");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 102)) {
                    console.log("NUMPAD 6");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 103)) {
                    console.log("NUMPAD 7");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 104)) {
                    console.log("NUMPAD 8");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 105)) {
                    console.log("NUMPAD 9");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 109)) {
                    console.log("NUMPAD -");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 106)) {
                    console.log("NUMPAD *");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 110)) {
                    console.log("NUMPAD .");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 111)) {
                    console.log("NUMPAD /");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 107)) {
                    console.log("NUMPAD +");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }



                if ((e.keyCode === 34)) {
                    console.log("PAGE DOWN");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 33)) {
                    console.log("PAGE UP");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 19)) {
                    console.log("PAUSE");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 44)) {
                    console.log("PRNT SCRN");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 145)) {
                    console.log("SCROLL LOCK");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                // if ((e.keyCode === 16)) {
                //     console.log("SHIFT LEFT");
                //     className_shift_left.style.backgroundColor = className_shift_left.style.backgroundColor === "white" ? "red" : "white";
                //     className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
                // }
                if ((e.keyCode === 14)) {
                    console.log("SHIFT right");
                    className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 9)) {
                    console.log("TAB");
                    className_tab.style.backgroundColor = className_tab.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 32)) {
                    console.log("SPACEBAR");
                    className_space.style.backgroundColor = className_space.style.backgroundColor === "white" ? "#8f86f6" : "white";
                }


                if ((e.keyCode === 33)) {
                    console.log("!");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 34)) {
                    console.log("\"");
                    className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 35)) {
                    console.log("#");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 36)) {
                    console.log("$");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 37)) {
                    console.log("%");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 38)) {
                    console.log("&");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 39)) {
                    console.log("bau ulta slash'");
                    className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 40)) {
                    console.log("(");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 41)) {
                    console.log(")");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 42)) {
                    console.log("*");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 43)) {
                    console.log("+");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 44)) {
                    console.log(",");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 45)) {
                    console.log("INSERT");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 46)) {
                    console.log(".");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 47)) {
                    console.log("forward slash");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }

                if ((e.keyCode === 48)) {
                    console.log("0");
                    className_0.style.backgroundColor = className_0.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 49)) {
                    console.log("1 ");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 50)) {
                    console.log("2 ");
                    className_2.style.backgroundColor = className_2.style.backgroundColor === "white" ? "yellow" : "white";
                }
                if ((e.keyCode === 51)) {
                    console.log("3 ");
                    className_3.style.backgroundColor = className_3.style.backgroundColor === "white" ? "#11fa00" : "white";
                }
                if ((e.keyCode === 52)) {
                    console.log("4 ");
                    className_4.style.backgroundColor = className_4.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 53)) {
                    console.log("5 ");
                    className_5.style.backgroundColor = className_5.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 54)) {
                    console.log("6 ");
                    className_6.style.backgroundColor = className_6.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 55)) {
                    console.log("7 ");
                    className_7.style.backgroundColor = className_7.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 56)) {
                    console.log("8 ");
                    className_8.style.backgroundColor = className_8.style.backgroundColor === "white" ? "#03ddff" : "white";
                }
                if ((e.keyCode === 57)) {
                    console.log("9 ");
                    className_9.style.backgroundColor = className_9.style.backgroundColor === "white" ? "#faa700" : "white";
                }





                if ((e.keyCode === 65)) {
                    console.log("A");
                    className_A.style.backgroundColor = className_A.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 66)) {
                    console.log("B");
                    className_B.style.backgroundColor = className_B.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 67)) {
                    console.log("C");
                    className_C.style.backgroundColor = className_C.style.backgroundColor === "white" ? "#11fa00" : "white";
                }
                if ((e.keyCode === 68)) {
                    console.log("D");
                    className_D.style.backgroundColor = className_D.style.backgroundColor === "white" ? "#11fa00" : "white";
                }
                if ((e.keyCode === 69)) {
                    console.log("E");
                    className_E.style.backgroundColor = className_E.style.backgroundColor === "white" ? "#11fa00" : "white";
                }
                if ((e.keyCode === 70)) {
                    console.log("F");
                    className_F.style.backgroundColor = className_F.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 71)) {
                    console.log("G");
                    className_G.style.backgroundColor = className_G.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 72)) {
                    console.log("H");
                    className_H.style.backgroundColor = className_H.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 73)) {
                    console.log("I");
                    className_I.style.backgroundColor = className_I.style.backgroundColor === "white" ? "#03ddff" : "white";
                }
                if ((e.keyCode === 74)) {
                    console.log("J");
                    className_J.style.backgroundColor = className_J.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 75)) {
                    console.log("K");
                    className_K.style.backgroundColor = className_K.style.backgroundColor === "white" ? "#03ddff" : "white";
                }
                if ((e.keyCode === 76)) {
                    console.log("L");
                    className_L.style.backgroundColor = className_L.style.backgroundColor === "white" ? "#faa700" : "white";
                }
                if ((e.keyCode === 77)) {
                    console.log("M");
                    className_M.style.backgroundColor = className_M.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 78)) {
                    console.log("N");
                    className_N.style.backgroundColor = className_N.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 79)) {
                    console.log("O");
                    className_O.style.backgroundColor = className_O.style.backgroundColor === "white" ? "#faa700" : "white";
                }
                if ((e.keyCode === 80)) {
                    console.log("P");
                    className_P.style.backgroundColor = className_P.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 81)) {
                    console.log("Q");
                    className_Q.style.backgroundColor = className_Q.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 82)) {
                    console.log("R");
                    className_R.style.backgroundColor = className_R.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 83)) {
                    console.log("S");
                    className_S.style.backgroundColor = className_S.style.backgroundColor === "white" ? "yellow" : "white";
                }
                if ((e.keyCode === 84)) {
                    console.log("T");
                    className_T.style.backgroundColor = className_T.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 85)) {
                    console.log("U");
                    className_U.style.backgroundColor = className_U.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 86)) {
                    console.log("V");
                    className_V.style.backgroundColor = className_V.style.backgroundColor === "white" ? "#039eff" : "white";
                }
                if ((e.keyCode === 87)) {
                    console.log("W");
                    className_W.style.backgroundColor = className_W.style.backgroundColor === "white" ? "yellow" : "white";
                }
                if ((e.keyCode === 88)) {
                    console.log("X");
                    className_X.style.backgroundColor = className_X.style.backgroundColor === "white" ? "yellow" : "white";
                }
                if ((e.keyCode === 89)) {
                    console.log("Y");
                    className_Y.style.backgroundColor = className_Y.style.backgroundColor === "white" ? "#006afd" : "white";
                }
                if ((e.keyCode === 90)) {
                    console.log("Z");
                    className_Z.style.backgroundColor = className_Z.style.backgroundColor === "white" ? "red" : "white";
                }



                if ((e.keyCode === 91)) {
                    console.log("window left");
                    className_window.style.backgroundColor = className_window.style.backgroundColor === "white" ? "#ddd" : "white";
                }


                if ((e.keyCode === 92)) {
                    console.log("windows right");
                    className_window_right.style.backgroundColor = className_window_right.style.backgroundColor === "white" ? "#ddd" : "white";
                }
                if ((e.keyCode === 93)) {
                    console.log("PRINTER");
                    printer.style.backgroundColor = printer.style.backgroundColor === "white" ? "#ddd" : "white";
                }
                if ((e.keyCode === 94)) {
                    console.log("^");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 95)) {
                    console.log("-");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }
                if ((e.keyCode === 96)) {
                    console.log("numpad 0");
                    className_1.style.backgroundColor = className_1.style.backgroundColor === "white" ? "red" : "white";
                }




                if ((e.keyCode === 59)) {
                    console.log(";");
                    className_semicolon.style.backgroundColor = className_semicolon.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 186)) {
                    console.log(";");
                    className_semicolon.style.backgroundColor = className_semicolon.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 61)) {
                    console.log("=");
                    className_equal.style.backgroundColor = className_equal.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 187)) {
                    console.log("=");
                    className_equal.style.backgroundColor = className_equal.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 188)) {
                    console.log(",");
                    className_comma.style.backgroundColor = className_comma.style.backgroundColor === "white" ? "#03ddff" : "white";
                }
                if ((e.keyCode === 173)) {
                    console.log("-");
                    className_minus.style.backgroundColor = className_minus.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 189)) {
                    console.log("-");
                    className_minus.style.backgroundColor = className_minus.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 190)) {
                    console.log(".");
                    className_fullstop.style.backgroundColor = className_fullstop.style.backgroundColor === "white" ? "#faa700" : "white";
                }
                if ((e.keyCode === 191)) {
                    console.log("slash slash slash");
                    className_forwardslash.style.backgroundColor = className_forwardslash.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 192)) {
                    console.log("`");
                    className_tick.style.backgroundColor = className_tick.style.backgroundColor === "white" ? "#ddd" : "white";
                }


                if ((e.keyCode === 219)) {
                    console.log("third start bracket");
                    className_third_brac_left.style.backgroundColor = className_third_brac_left.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 220)) {
                    console.log("slash");
                    className_angle_slash.style.backgroundColor = className_angle_slash.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 221)) {
                    console.log("]");
                    className_third_brac_right.style.backgroundColor = className_third_brac_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }
                if ((e.keyCode === 222)) {
                    console.log("up comma ");
                    className_comma_UP.style.backgroundColor = className_comma_UP.style.backgroundColor === "white" ? "#ff00dd" : "white";
                }


            }, val);



    };










}



// $("html").keydown(function(e) {

//     if (e.shiftKey) {
//         if (event.location == 1) {
//             console.log('left shift');
//             className_shift_left.style.backgroundColor = className_shift_left.style.backgroundColor === "white" ? "red" : "white";
//         }
//         if (event.location == 2) {
//             console.log('right shift');
//             className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
//         }
//     }

// });


// $("html").keydown(function(e) {

//     if (e.shiftKey) {
//         if (event.location == 1) {
//             console.log('left shift');
//             className_shift_left.style.backgroundColor = className_shift_left.style.backgroundColor === "white" ? "red" : "white";
//         }
//         if (event.location == 2) {
//             console.log('right shift');
//             className_shift_right.style.backgroundColor = className_shift_right.style.backgroundColor === "white" ? "#ff00dd" : "white";
//         }
//     }

// });