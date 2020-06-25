var srno=1;
var row=1;
function ShowTable(){
    desc=document.getElementById("desc").value;
    amount=document.getElementById("amount").value;
    amount=parseInt(amount, 10);
    var today = new Date();
    if(today.getHours()>12){
        window.time;
        let hour=today.getHours()-12;
        if(hour<10){
            time = "0"+hour + ":" + minute(today) + ":" + second(today)+ " PM";   
        }
        else{
            time = hour + ":" + minute(today)+ ":" + second(today)+ " PM";   
        }
    }
    else{
        time = today.getHours() + ":" + minute(today) + ":" + second(today)+ " AM";   
    }

    if(!desc || !amount){
        alert("Please Fill All Details");
        return;
    }
    if(amount==0){
        alert("Please Enter a Valid Amount");
        return;
    }
    var display= document.getElementById("table1");
    var newrow= display.insertRow(row);
    console.log("Row Added")
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    row++;
    cell1.innerHTML=srno;
    cell2.innerHTML=desc ;
    cell3.innerHTML=amount;
    cell4.innerHTML=time;
    srno++;

}
function minute(dt){
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

function second(dt){
    return (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
}
