//This function updates the value pretaining to the object begin bought
function change(self){
  var toadd = document.getElementById("val" + String(self.id));
  toadd.innerHTML = String(self.value);
  makeDiscountAndTotal();
}

//This function updates the total and discount. It is because the costumer can
// that we have to find all the initial variables everytime.
function makeDiscountAndTotal() {

  //collecting all the quantities.
  var IVDVD = document.getElementById("IVDVD").value;
  var VDVD = document.getElementById("VDVD").value;
  var VIDVD = document.getElementById("VIDVD").value;
  var IVBR = document.getElementById("IVBR").value;
  var VBR = document.getElementById("VBR").value;
  var VIBR = document.getElementById("VIBR").value;

  var discount = 0;

  var sumDVD = parseInt(IVDVD) + parseInt(VDVD) + parseInt(VIDVD);
  //alert(sumDVD);
  //We can give a discount here because of the commutative property of numbers
  if ((IVDVD>0) && (VDVD>0) && (VIDVD>0)){
    //discountedSumDVD = sumDVD*0.9;
    discount += 20 * sumDVD*0.1;
  }

  sumBR = parseInt(IVBR) + parseInt(VBR) + parseInt(VIBR);
  //alert(sumBR);

  //We are doing the same thing
  if ((IVBR>0) && (VBR>0) && (VIBR>0)){
    //discountedSumBR = sumBR*0.85
    discount += 25 * sumBR*0.15;
  }
  var total = 20*sumDVD + 25*sumBR - discount;
  if ((sumBR + sumDVD) >= 100) {
    discount += total*0.05;
    total *= 0.95;
  }
  document.getElementById("Discount").innerHTML = "$" + String(discount);
  document.getElementById("Total").innerHTML = "$" + String(total);
}

//Send the mail to my friend or myself. To test make your email.
function sendorder(){
  var address = prompt("Please submit the address. Due to the illegal nature of this"
      + "business, we are cash only.")

  //Now we will send the request to my friends main backend system.
  //While I am simply sving this data in json, we can send this email if you want.
  var IVDVD = document.getElementById("IVDVD").value;
  var VDVD = document.getElementById("VDVD").value;
  var VIDVD = document.getElementById("VIDVD").value;
  var IVBR = document.getElementById("IVBR").value;
  var VBR = document.getElementById("VBR").value;
  var VIBR = document.getElementById("VIBR").value;



  var data = {
    "Address": address,
    "Products" : {
      "IV DVD": IVDVD,
      "V DVD": VDVD,
      "VI DVD": VIDVD,
      "IV BR": IVBR,
      "V BR": VBR,
      "VI BR": VIBR,
    }
  }

  //source somewhat from stack exchange.
   var file = new Blob([ JSON.stringify(data)], {type: "text/plain"});
   url = window.URL.createObjectURL(file);
   var temp = document.createElement("a")
   temp.style.display = "none";
   temp.href = url;
   temp.download = "result.json";
   temp.click();
   window.URL.revokeObjectURL(url);
}
