
var currentOperationON;
var secondOps;
var switcchi = false;
var tempStorage;
var vegeta = document.getElementById("display");
var ssj = document.getElementById("output");
var switcchitwo = false;
var lastWasEquals = false;


function FEquals () {
    if (currentOperationON == "add"){
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) + parseInt(x);

        //Clear();
        vegeta.value= valuezz;
        //tempStorage = undefined;
        //currentOperationON = undefined;

    }
    else if (currentOperationON === "sub"){
        //ssj.append("subz");
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) - parseInt(x);
        //tempStorage = undefined;
        //currentOperationON = undefined;
        vegeta.value= valuezz;
        //ssj.append(valuezz);

    }
    else if (currentOperationON === "div"){
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) / parseInt(x);
        //tempStorage = undefined;
        //currentOperationON = undefined;
        vegeta.value= valuezz;
        //ssj.append(valuezz);

    }
    else if (currentOperationON === "mul"){
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) * parseInt(x);
        //tempStorage = undefined;
        //currentOperationON = undefined;
        vegeta.value= valuezz;
        //ssj.append(valuezz);

    }


}

function SorceryMagicFunctionz() {
    if (secondOps== "add"){
        DoOperation();
        currentOperationON = "add";

    }
    else if (secondOps == "sub"){
        DoOperation();
        currentOperationON = "sub";

    }

    else if(secondOps== "mul"){
        DoOperation();
        currentOperationON = "mul";
    }
    else if (secondOps=="div"){
        DoOperation();
        currentOperationON = "div";
    }
}

function mOne() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"1");
    switcchitwo = false;
}
function mTwo() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"2");
    switcchitwo = false;
}
function mThree() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"3");
    switcchitwo= false;
}
function mFour() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"4");
    switcchitwo = false;
}
function mFive() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"5");
    switcchitwo = false;
}
function mSix() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"6");
    switcchitwo=false;
}
function mSeven() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"7");
    switcchitwo = false;

}
function mEight() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"8");
    switcchitwo = false;

}
function mNine() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"9");
    switcchitwo = false;

}
function mZero() {
    CheckSwitch();
    vegeta.value = parseInt(vegeta.value +"0");
    switcchitwo = false;

}

function mAdd() {
    if (currentOperationON =="add"){
        FEquals();
    }
    else if (currentOperationON =="sub"){
        secondOps = "sub";
    }
    else if (currentOperationON =="div"){
        secondOps = "div";
    }
    else if (currentOperationON == "mul"){
        secondOps = "mul";
    }
    switcchi = true;
    SorceryMagicFunctionz();
    currentOperationON = "add";
    switcchitwo= true;



}
function mSubtract() {
    if (currentOperationON =="sub"){
        FEquals();
    }
    else if (currentOperationON =="add"){
        secondOps = "add";
    }
    else if (currentOperationON =="div"){
        secondOps = "div";
    }
    else if (currentOperationON == "mul"){
        secondOps = "mul";
    }
    switcchi = true;
    SorceryMagicFunctionz();
    currentOperationON = "sub";
    switcchitwo = true;

}
function mMultiply() {
    if (currentOperationON =="mul"){
        FEquals();
    }
    else if (currentOperationON =="sub"){
        secondOps = "sub";
    }
    else if (currentOperationON =="div"){
        secondOps = "div";
    }
    else if (currentOperationON == "add"){
        secondOps = "add";
    }
    switcchi = true;
    SorceryMagicFunctionz();
    currentOperationON = "mul";
    switcchitwo = true;

}

function mDivide() {
    if (currentOperationON =="div"){
        FEquals();
    }
    else if (currentOperationON =="sub"){
        secondOps = "sub";
    }
    else if (currentOperationON =="add"){
        secondOps = "add";
    }
    else if (currentOperationON == "mul"){
        secondOps = "mul";
    }
    switcchi = true;
    SorceryMagicFunctionz();
    currentOperationON= "div";
    switcchitwo = true;

}

function mEquals() {
    Equals();
}

function mClear() {
    Clear();
}

var one =document.getElementById("button1");
one.addEventListener("click", mOne);

var two =document.getElementById("button2");
two.addEventListener("click", mTwo);

var three =document.getElementById("button3");
three.addEventListener("click", mThree);

var four =document.getElementById("button4");
four.addEventListener("click", mFour);

var five =document.getElementById("button5");
five.addEventListener("click", mFive);

var six =document.getElementById("button6");
six.addEventListener("click", mSix);

var seven =document.getElementById("button7");
seven.addEventListener("click", mSeven);

var eight =document.getElementById("button8");
eight.addEventListener("click", mEight);

var nine =document.getElementById("button9");
nine.addEventListener("click", mNine);

var zero =document.getElementById("button0");
zero.addEventListener("click", mZero);

var add =document.getElementById("addButton");
add.addEventListener("click", mAdd);

var subtract =document.getElementById("subtractButton");
subtract.addEventListener("click", mSubtract);

var multiply =document.getElementById("multiplyButton");
multiply.addEventListener("click", mMultiply);

var divide =document.getElementById("divideButton");
divide.addEventListener("click", mDivide);

var equals =document.getElementById("equalsButton");
equals.addEventListener("click", mEquals);

var clear =document.getElementById("clearButton");
clear.addEventListener("click", mClear);

function CheckSwitch() {
    if (switcchi===true){
        tempStorage = vegeta.value;
        vegeta.value = "";
        switcchi = false;
    }

}

function DoOperation () {
    if (currentOperationON == "add"){
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) + parseInt(x);

        Clear();
        vegeta.value= valuezz;
        //tempStorage = undefined;
        //currentOperationON = undefined;

    }
    else if (currentOperationON === "sub"){
        //ssj.append("subz");
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) - parseInt(x);
        tempStorage = undefined;
        currentOperationON = undefined;
        vegeta.value= valuezz;
        //ssj.append(valuezz);

    }
    else if (currentOperationON === "div"){
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) / parseInt(x);
        tempStorage = undefined;
        currentOperationON = undefined;
        vegeta.value= valuezz;
        //ssj.append(valuezz);

    }
    else if (currentOperationON === "mul"){
        var x = vegeta.value;
        var valuezz= parseInt(tempStorage) * parseInt(x);
        tempStorage = undefined;
        currentOperationON = undefined;
        vegeta.value= valuezz;
        //ssj.append(valuezz);

    }


}

function Clear () {
    tempStorage = undefined;
    vegeta.value = "";
    switcchi = false;
}

function Equals() {
    if (!vegeta.value) {
        UltraClear();
        return;
    }
    if (switcchitwo==true){
        ssj.innerHTML= "Yoo!";
        return;
        //return;
    }
    DoOperation();
    //test
    var temmp = vegeta.value;
    UltraClear();
    vegeta.value = temmp;

}

function UltraClear() {
    Clear();
    secondOps= undefined;
    currentOperationON= undefined;
    tempStorage = undefined;
    switcchitwo = undefined;

}