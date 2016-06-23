var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(sales, taxRates) {

  var companies = {};

  for (var i = 0; i < sales.length; i++) {

      var company = sales[i];

      if(!companies[company.name]){
        companies[company.name] = { totalTax  : 0,
                                    totalSales: 0 };
      }
      companies[company.name]["totalTax"] += taxRates[company.province] * sum(company.sales);
      companies[company.name]["totalSales"] += sum(company.sales);
  }

  return companies;
}


function calculateSalesTax(sales, taxRates) {

  var companies = {};

  sales.forEach(function(company) {
    if(!companies[company.name]){
      companies[company.name] = { totalTax  : 0,
                                  totalSales: 0 };
    }
    companies[company.name]["totalTax"] += taxRates[company.province] * sum(company.sales);
    companies[company.name]["totalSales"] += sum(company.sales);
    console.log(taxRates[company.province]);

  });

  return companies;
}


/*
function calculateSalesTax(sales, taxRates) {

  var companies = {};

  for (var i = 0; i < sales.length; i++) {

      var company = sales[i];

      if(!companies[company.name]){
        companies[company.name] = { totalTax  : taxRates[province] * sum(sales),
                                    totalSales: sum(company.sales) };
      } else {
        companies[company.name]["totalTax"] += taxRates[province] * sum(sales);
        companies[company.name]["totalSales"] += sum(company.sales);
      }
  }

  return companies;
}
*/
function sum(arr){
  var total = 0;

  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }

  return total;
}

var results = calculateSalesTax(companySalesData, taxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
