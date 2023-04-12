
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 100000, years: 3, rate: 10})).toBe("3226.72")
});


it("should return a result with 2 decimal places", function() {
  const monthly = calculateMonthlyPayment({amount: 100000, years: 3, rate: 10})
  expect(typeof monthly).toBe("string");
  expect(monthly.split(".")[1].length).toBe(2);
});

it("should throw an error with values", function(){
  expect(function()
  {
    calculateMonthlyPayment({amount: "notanumber", years: 3, rate: 10});
  }).
  toThrowError(Error,"Invalid inputs: Principle: notanumber, Rate: 0.008333333333333333, Years: 36")
  expect(function()
  {
    calculateMonthlyPayment({amount: "notanumber", years: "notanumber", rate: "10"});
  }).
  toThrowError(Error,"Invalid inputs: Principle: notanumber, Rate: 0.008333333333333333, Years: NaN")

  expect(function()
  {
    calculateMonthlyPayment({amount: undefined, years: undefined, rate: undefined});
  })
  .toThrowError(Error,"Invalid inputs: Principle: undefined, Rate: NaN, Years: NaN")
});

