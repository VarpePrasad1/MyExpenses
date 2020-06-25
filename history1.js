// button 
function myfunction(i) {
    var d = new Date();
    var date = d.getDate() - i;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear();
    var dateStr = date + "/" + month + "/" + year;
    //Selecting  Button For Editing Date.
    if (i == 0) {
      document.getElementById("btn0").innerHTML = dateStr;
    }
    else if (i == 1) {
      document.getElementById("btn1").innerHTML = dateStr;
    }
    else if (i == 2) {
      document.getElementById("btn2").innerHTML = dateStr;
    }
    else if (i == 3) {
      document.getElementById("btn3").innerHTML = dateStr;
    }
    else if (i == 4) {
      document.getElementById("btn4").innerHTML = dateStr;
    }
    else if (i == 5) {
      document.getElementById("btn5").innerHTML = dateStr;
    }
    else if (i == 6) {
      document.getElementById("btn6").innerHTML = dateStr;
    }
  }
//   function table1(){
//     $(document).ready( function () {
//   $('#myTable1').DataTable();
//     } );
//   }
  
//   function table2(){
//     $(document).ready( function () {
//   $('#myTable2').DataTable();
//     } );
//   }

function table1(){
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
  var year = d.getFullYear();
  var dateStr = date + "/" + month + "/" + year;
  document.getElementById("date1").innerHTML=dateStr;

  var x=document.getElementById("table1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  $(document).ready( function () {
  $('#myTable1').DataTable();
  } );
}

function table2(){
    var d = new Date();
    var date = d.getDate()-1;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear(); 
    var dateStr = date + "/" + month + "/" + year;
    document.getElementById("date2").innerHTML=dateStr;

    var x=document.getElementById("table2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    $(document).ready( function () {
  $('#myTable2').DataTable();
    } );
  }

function table3(){
    var d = new Date();
    var date = d.getDate()-2;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear(); 
    var dateStr = date + "/" + month + "/" + year;
    document.getElementById("date3").innerHTML=dateStr;

    var x=document.getElementById("table3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    $(document).ready( function () {
  $('#myTable3').DataTable();
    } );
  }

function table4(){
    var d = new Date();
    var date = d.getDate()-3;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear(); 
    var dateStr = date + "/" + month + "/" + year;
    document.getElementById("date4").innerHTML=dateStr;

    var x=document.getElementById("table4");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    $(document).ready( function () {
  $('#myTable4').DataTable();
    } );
  }

function table5(){
    var d = new Date();
    var date = d.getDate()-4;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear(); 
    var dateStr = date + "/" + month + "/" + year;
    document.getElementById("date5").innerHTML=dateStr;

    var x=document.getElementById("table5");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    $(document).ready( function () {
  $('#myTable5').DataTable();
    } );
  }

function table6(){
    var d = new Date();
    var date = d.getDate()-5;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear(); 
    var dateStr = date + "/" + month + "/" + year;
    document.getElementById("date6").innerHTML=dateStr;

    var x=document.getElementById("table6");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    $(document).ready( function () {
  $('#myTable6').DataTable();
    } );
  }

function table7(){
    var d = new Date();
    var date = d.getDate()-6;
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    var year = d.getFullYear(); 
    var dateStr = date + "/" + month + "/" + year;
    document.getElementById("date7").innerHTML=dateStr;

    var x=document.getElementById("table7");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    $(document).ready( function () {
  $('#myTable7').DataTable();
    } );
  }

  
  