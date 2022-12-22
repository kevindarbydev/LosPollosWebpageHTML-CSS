// booking .js
// Script Date: September 2021





 function startup() {
    
    document.getElementById('txtDateNow').value = today();


} 
/**
 * returns the current date
 * @returns 
 */
function today() {
    // create an instance of the Date object
    let currentDate = new Date();
    // extract from the current date variable the date, month, and year
    let thisDate = currentDate.getDate();
    let thisMonth = currentDate.getMonth() + 1;
    let thisYear = currentDate.getFullYear();

    // return the current date in the format mm/dd/yyyy
    let todaysDate = thisMonth + '/' + thisDate + '/' + thisYear;
    return todaysDate;
} // end function today


//burgers
function calculatePrice() {
   
    let product = document.getElementById('prod');
    let pIndex = product.selectedIndex;
    let productPrice = product.options[pIndex].value;
    let quantity = document.getElementById('qty');
    let qIndex = quantity.selectedIndex;
    let quantityOrdered = quantity.options[qIndex].value;
    document.getElementById('txtPrice').value = (productPrice * quantityOrdered).toFixed(2);

    // call function calculateTotal
    calculateTotal();
} // end function calculatePrice
//Sides
function calculatePrice1() {
    let product1 = document.getElementById('prod1');
    let pIndex1 = product1.selectedIndex;
    let productPrice1 = product1.options[pIndex1].value;
    let quantity1 = document.getElementById('qty1');
    let qIndex1 = quantity1.selectedIndex;
    let quantityOrdered1 = quantity1.options[qIndex1].value;
    document.getElementById('txtPrice1').value = (productPrice1 * quantityOrdered1).toFixed(2);

    // call function calculateTotal
    calculateTotal();
} // end function calculatePric

//Drink
function calculatePrice2() {
   
    let product2 = document.getElementById('prod2');
    let pIndex2 = product2.selectedIndex;
    let productPrice2 = product2.options[pIndex2].value;
    let quantity2 = document.getElementById('qty2');
    let qIndex2 = quantity2.selectedIndex;
    let quantityOrdered2 = quantity2.options[qIndex2].value;
    document.getElementById('txtPrice2').value = (productPrice2 * quantityOrdered2).toFixed(2);

    // call function calculateTotal
    calculateTotal();
} // end function calculatePrice
//Drink
function calculatePrice3() {
   
    let product3 = document.getElementById('prod3');
    let pIndex3 = product3.selectedIndex;
    let productPrice3 = product3.options[pIndex3].value;
    let quantity3 = document.getElementById('qty3');
    let qIndex3 = quantity3.selectedIndex;
    let quantityOrdered3 = quantity3.options[qIndex3].value;
    document.getElementById('txtPrice3').value = (productPrice3 * quantityOrdered3).toFixed(2);

    // call function calculateTotal
    calculateTotal();
} // end function calculatePrice


/**
 * calculates the shipping value
 * @param {*} shipOption 
 */
function calculateShipping(shipOption) {
    document.getElementById('txtShipMethod').value = shipOption.value;


    // call function calculateTotal
    calculateTotal();
} // end function calculateShipping

/**
 * calculates the total of placed order
 */

function calculateTotal() {
    // declare variables 
    let priceValue = parseFloat(document.getElementById('txtPrice').value);
    let priceValue1 = parseFloat(document.getElementById('txtPrice1').value);
    let priceValue2 = parseFloat(document.getElementById('txtPrice2').value);
    let priceValue3 = parseFloat(document.getElementById('txtPrice3').value);
    let shipValue = parseFloat(document.getElementById('txtShipMethod').value);

    document.getElementById('txtSubtotal').value = (priceValue + priceValue1+ priceValue2 +priceValue3 +shipValue).toFixed(2);


    // declare the tax rate
    const TAX_RATE = 0.05;

    let taxValue = (priceValue + priceValue1+ priceValue2 +priceValue3 +shipValue) * TAX_RATE;

    // display the tax value in the txtTax field
    document.getElementById('txtTax').value = taxValue.toFixed(2);
    
    // display the grand total value of the order laced in the txtTotal field
    document.getElementById('txtTotal').value = (priceValue + priceValue1+ priceValue2 +priceValue3 +shipValue).toFixed(2);
} // end function calculateTota

/**
 * validates user data entry
 */

function validateForm() {
    // decalre variables
  //   let choice = false;
   let selectedProduct = document.getElementById('prod');
    let selectedQuantity = document.getElementById('qty');
    let selectedProduct1 = document.getElementById('prod1');
    let selectedQuantity1 = document.getElementById('qty1');
    let selectedProduct2 = document.getElementById('prod2');
    let selectedQuantity2 = document.getElementById('qty2');
    let selectedProduct3 = document.getElementById('prod3');
    let selectedQuantity3 = document.getElementById('qty3');
    let selectedShippping = document.getElementById('txtShipMethod');
   
    if (selectedProduct.selectedIndex === 0 && selectedProduct1.selectedIndex === 0 && selectedProduct2.selectedIndex === 0 && selectedProduct3.selectedIndex === 0 ){
        window.alert('You must select a product ');
        selectedProduct.focus();
        return false;
    }
    if (selectedProduct.selectedIndex !== 0 && selectedQuantity.selectedIndex === 0) {
        window.alert('You must select a quantity corresponding the product ');
        selectedQuantity.focus();
        return false;
    }
    if (selectedProduct1.selectedIndex !== 0 && selectedQuantity1.selectedIndex === 0) {
        window.alert('You must select a quantity corresponding the product ');
        selectedQuantity1.focus();
        return false;
    }
    if (selectedProduct2.selectedIndex !== 0 && selectedQuantity2.selectedIndex === 0) {
        window.alert('You must select a quantity corresponding the product ');
        selectedQuantity2.focus();
        return false;
    }
    if (selectedProduct3.selectedIndex !== 0 && selectedQuantity3.selectedIndex === 0) {
        window.alert('You must select a quantity corresponding the product ');
        selectedQuantity3.focus();
        return false;
    }
    if (selectedQuantity.selectedIndex !== 0 && selectedProduct.selectedIndex === 0 ) {
        window.alert('You must select a product corresponding the quantity chosen ');
        selectedProduct.focus();
        return false;
    }
    if (selectedQuantity1.selectedIndex !== 0 && selectedProduct1.selectedIndex === 0 ) {
        window.alert('You must select a product corresponding the quantity chosen ');
        selectedProduct1.focus();
        return false;
    }
    if (selectedQuantity2.selectedIndex !== 0 && selectedProduct2.selectedIndex === 0 ) {
        window.alert('You must select a product corresponding the quantity chosen ');
        selectedProduct2.focus();
        return false;
    }
    if (selectedQuantity3.selectedIndex !== 0 && selectedProduct3.selectedIndex === 0 ) {
        window.alert('You must select a product corresponding the quantity chosen ');
        selectedProduct3.focus();
        return false;
    }
    if(selectedShippping.value === 'none') {
        window.alert('You must select a shipping option');
        selectedShippping.focus();
        return false
    } 
    
else {
    return true;
}

}
/************image function**************/
    
    var img1 = document.getElementById("img1");
    var imgArr =["images/img5.jpg","images/b2.PNG","images/b1.PNG","images/img8.jpg","images/img12.PNG"];
    var index =0;
    setInterval(function(){
     index++;
     index= index % imgArr.length;
     img1.src = imgArr[index];
    },2000);

    var img2 = document.getElementById("img2");
    var imgArr2 =["images/img10.jpg","images/img7.jpg","images/img9.jpg","images/menu-snack-img.jpg","images/s1.PNG"];
    var index =0;
    setInterval(function(){
     index++;
     index= index % imgArr.length;
     img2.src = imgArr2[index];
    },1300)
    var img3 = document.getElementById("img3");
    var imgArr3 =["images/dri1.jpg","images/dri2.jpg","images/dri3.jpg","images/dri4.jpg","images/dri3.jpg"];
    var index =0;
    setInterval(function(){
     index++;
     index= index % imgArr.length;
     img3.src = imgArr3[index];
    },1300)
    var img4 = document.getElementById("img4");
    var imgArr4 =["images/pro3.PNG","images/pro4.PNG","images/pro5.PNG","images/pro1.PNG","images/pro6.PNG"];
    var index =0;
    setInterval(function(){
     index++;
     index= index % imgArr.length;
     img4.src = imgArr4[index];
    },1300)


    function myFunction(x) {
        x.style.background = "lightyellow";
}
