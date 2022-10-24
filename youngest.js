
var employeeName = [], employeeAge = []

async function ageChart() {
  await getAge()

  const ctx = document.getElementById('youngestEmployees').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: employeeName,
      datasets: [{
        label: 'The Youngest Employees',
        backgroundColor: 'lightblue',
        data: employeeAge
      },
      ]
    },
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}

ageChart()

async function getAge() {
  // const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"
  const apiData = "./apiData.json"

  const response = await fetch(apiData)
  const chartData = await response.json()

  const theYoungest = chartData.data
    .slice()
    .sort(function (a, b) { return a.employee_age - b.employee_age; })
    .slice(0, 3)
  console.log(theYoungest);

  const youngestThree = theYoungest.map((y) => y.employee_age)
  console.log(youngestThree);

  const Names = theYoungest.map((x) => x.employee_name)
  console.log(Names);

  employeeAge = youngestThree
  employeeName = Names

}





