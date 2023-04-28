let menuItems = [
  "Chicken Chili",
  "Jerk Tilapia",
  "Black Beans",
  "Sweet Potatos",
  "Homemade Brownie",
  "Soda",
];
let menuCodes = ["CC", "JT", "BB", "SP", "HB", "SO"];
let menuPrices = [7, 7, 4, 4, 2, 1];
let arrOrderTotal = [];

let lineItemPrice = 0;

let arrStateName = [
  "Alabama",
  "Florida",
  "Georgia",
  "North Carolina",
  "South Carolina",
  "Tennessee",
  "Texas",
  "California",
];

let arrStateAbbr = ["AL", "FL", "GA", "NC", "SC", "TN", "TX", "CA"];

let arrStateTax = [4, 6, 4, 4.75, 6, 7, 6.25, 8];

let submitBtn = document.querySelector("#submitBtn");
let addOrderBtn = document.querySelector("#addOrderBtn");
let clearOrderBtn = document.querySelector("#clearOrderBtn");

let stateName = document.querySelector("#statename");
let outputDiv = document.querySelector("#output");
let orderTotal = document.querySelector("#orderTotal");
let orderItem = document.querySelector("#orders");
let tipSelect = document.querySelector("#tipSelect");
let outputLine;
let gOrderTotal = 0;
let gTaxAmount = 0;
let gTipAmount = 0;
let totalBill = 0;
let itemCount = 1;

loadStates();
tipCalc();
taxCalc();
totalBillCalc();

//submitBtn.addEventListener('click', () => displayTaxCalcuation());

addOrderBtn.addEventListener("click", () => addToOrder());

clearOrderBtn.addEventListener("click", () => clearOrder());

tipSelect.addEventListener("click", () => tipCalc());

stateName.addEventListener("change", () => taxCalc());

let addToOrder = () => loadOrderItem();

let clearOrder = () => {
  console.log("In the ClearOrder function");
  let parentDiv = document.querySelector("#orders");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  itemCount = 1;
};

// loadStates displays <option value="AL">Alabama</option> in html
function loadStates() {
  for (counter = 0; counter < arrStateName.length; counter++) {
    let stateOption = document.createElement("option");
    stateOption.text = arrStateName[counter];
    stateOption.value = arrStateAbbr[counter];
    stateName.appendChild(stateOption);
  }
}

function loadOrderItem() {
  let itemDiv = document.createElement("div");
  let itemDivID = "itemDiv" + itemCount;
  itemDiv.setAttribute("id", itemDivID);

  let itemLabel = document.createElement("label");
  let itemLabelID = "itemNumber" + itemCount;
  itemLabel.setAttribute("id", itemLabelID);
  itemLabel.innerText = itemCount + ".";
  //Attach this "label" to the parent DIV
  itemDiv.append(itemLabel);

  let itemSelect = document.createElement("select");
  let itemSelectID = "itemDescription" + itemCount;
  itemSelect.setAttribute("id", itemSelectID);

  //<option value="" disabled selected hidden>Choose an item</option>

  let itemOption = document.createElement("option");
  itemOption.text = "Choose an Item";
  itemOption.value = "";
  itemOption.selected = true;
  itemOption.disabled = true;
  itemOption.hidden = true;

  itemSelect.appendChild(itemOption);

  for (counter = 0; counter < menuItems.length; counter++) {
    let itemOption = document.createElement("option");
    itemOption.text = menuItems[counter];
    itemOption.value = menuCodes[counter];
    itemSelect.appendChild(itemOption);
  }

  itemSelect.addEventListener("change", () =>
    computeLineItem(itemSelect.id, itemSelect.value)
  );
  itemDiv.append(itemSelect);

  //<label id="itemPrice0">$4.00</label>

  let itemPrice = document.createElement("label");
  let itemPriceID = "itemPrice" + itemCount;

  itemPrice.setAttribute("id", itemPriceID);
  itemPrice.innerText = "$0.00";
  itemDiv.append(itemPrice);

  let itemSelectQty = document.createElement("select");
  let itemSelectQtyID = "itemQuantity" + itemCount;
  itemSelectQty.setAttribute("id", itemSelectQtyID);

  for (counter = 1; counter <= 5; counter++) {
    let itemQtyOption = document.createElement("option");
    itemQtyOption.text = counter;
    itemQtyOption.value = counter;
    itemSelectQty.appendChild(itemQtyOption);
  }
  itemSelectQty.addEventListener("change", () =>
    computeLineItem(itemSelect.id, itemSelect.value)
  );
  itemDiv.append(itemSelectQty);

  let itemCostNumber = 0;

  let itemCost = document.createElement("label");
  let itemCostID = "itemCost" + itemCount;
  itemCost.setAttribute("id", itemCostID);
  itemCost.innerText = "$0.00";
  itemDiv.append(itemCost);

  orderItem.appendChild(itemDiv);

  arrOrderTotal[itemCount - 1] = 0;
  itemCount++;
}

function computeLineItem(itemID, menuCode) {
  let itemNumber = itemID.substring(15);

  console.log(
    "In computeLineItem() >>" + itemID + ">>" + menuCode + ">>" + itemNumber
  );
  lineItemPrice = getPrice(menuCode);
  //let itemDiv = document.querySelector("#"+itemID);
  let itemPriceID = "itemPrice" + itemNumber;
  let itemPrice = document.querySelector("#" + itemPriceID);
  itemPrice.innerText = "$" + lineItemPrice.toFixed(2);

  let itemSelectQty = document.querySelector("#itemQuantity" + itemNumber);
  let lineItemCost = lineItemPrice * itemSelectQty.value;

  let itemCostID = "itemCost" + itemNumber;
  let itemCost = document.querySelector("#" + itemCostID);
  itemCost.innerText = "$" + lineItemCost.toFixed(2);

  arrOrderTotal[itemNumber - 1] = lineItemCost;

  let orderTotal = document.querySelector("#orderTotal");
  gOrderTotal = computeOrderTotal();
  orderTotal.value = gOrderTotal.toFixed(2);

  tipCalc();
  taxCalc();
}

function getPrice(menuCode) {
  for (counter = 0; counter < menuCodes.length; counter++) {
    if (menuCode == menuCodes[counter]) {
      return menuPrices[counter];
    }
  }
}

function computeOrderTotal() {
  let orderTotal = 0;

  for (counter = 0; counter < arrOrderTotal.length; counter++) {
    orderTotal = orderTotal + arrOrderTotal[counter];
  }
  //return the sum
  return orderTotal;
}

function tipCalc() {
  let tip25 = document.getElementById("tipSelect25");
  let tip20 = document.getElementById("tipSelect20");
  let tip15 = document.getElementById("tipSelect15");
  let tipTotal = document.getElementById("tipTotal");
  let totalBill = gOrderTotal;

  let tipAmount = 0;

  if (tip25.checked) {
    tipAmount = totalBill * 0.25;
  } else if (tip20.checked) {
    tipAmount = totalBill * 0.2;
  } else if (tip15.checked) {
    tipAmount = totalBill * 0.15;
  }
  tipTotal.value = tipAmount.toFixed(2);
  gTipAmount = tipAmount;
  totalBillCalc();
}

function taxCalc() {
  let stateTaxRate;
  let taxAmount;
  let taxTotal = document.getElementById("taxTotal");
  let stateTaxLabel = document.getElementById("labelStateTax");

  stateTaxLabel.innerText = "State tax for (" + stateName.value + ") :";
  stateTaxRate = getStateTaxRate(stateName.value);

  taxAmount = gOrderTotal * (stateTaxRate / 100);

  taxTotal.value = taxAmount.toFixed(2);
  gTaxAmount = taxAmount;
  totalBillCalc();
}

function getStateTaxRate(stateAbbr) {
  for (counter = 0; counter < arrStateAbbr.length; counter++) {
    if (stateAbbr == arrStateAbbr[counter]) {
      return arrStateTax[counter];
    }
  }
}

function totalBillCalc() {
  let billTotal = document.getElementById("billTotal");
  let bAmount = gOrderTotal + gTipAmount + gTaxAmount;
  billTotal.value = bAmount.toFixed(2);
}

/*function junk() {
  if (!document.getElementById("outputMessage")) {
    outputLine = document.createElement("p");
    outputLine.setAttribute("id", "outputMessage");
  }

  outputLine.textContent =
    "Thank you for choosing EATS in " +
    stateName.value +
    "." +
    "Your bill is " +
    totalBill;

  outputDiv.appendChild(outputLine);
}*/
