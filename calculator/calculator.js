window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountEl = document.getElementById("loan-amount");
  const yearsEl = document.getElementById("loan-years");
  const rateEl = document.getElementById("loan-rate");
  amountEl.value = 100000;
  yearsEl.value = 3;
  rateEl.value = 10;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const rate = values.rate / 1200;
  const years = values.years * 12;
  
  if(typeof principle !== "number" || typeof rate !== "number" || typeof years != "number")
    throw new Error(`Invalid inputs: Principle: ${principle}, Rate: ${rate}, Years: ${years}`)
  return ((principle * rate)/(1-(1+rate) ** (-years))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyEl = document.getElementById("monthly-payment");
  monthlyEl.innerText = monthly;
}
