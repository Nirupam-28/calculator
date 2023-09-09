let exp='';

function appendNumber(num){
    exp+=num;
    document.getElementById('output').value=exp;
}

function appendOperator(op){
    exp+=op;
    document.getElementById('output').value=exp;
}

function clearOUT(){
    exp='';
    document.getElementById('output').value='';
}

function calculate(){
    try{
        const output=eval(exp);
        document.getElementById('output').value=output;
        exp='';
    }catch(error){
        document.getElementById('output').value='Error';
    }
}