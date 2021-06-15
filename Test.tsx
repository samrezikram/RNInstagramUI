const companies = [
  {name: 'samrez inc', category: 'software', start: 2029, end: 2060},
  {name: 'ikram inc', category: 'software', start: 2029, end: 2061}
]

const args = [33, 12, 20, 16, 5, 54, 21, 44, 61,13, 15, 25, 64, 32];
// console.log(companies);

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

companies.forEach( (company, index, companies) => {
  console.log(company)
})

companies.forEach(function(company, index, companies) {
  console.log(company);
})
const canDrink = args.filter( (age) => {
  if (age > 21) {
    return true;
  }
})