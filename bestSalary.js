
var employeeName = [], employeeSalary = []

async function salaryChart() {
  await getSalary()

  const ctx = document.getElementById('bestSalary').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: employeeName,
      datasets: [{
        label: 'Employee Salary',
        backgroundColor: 'pink',
        data: employeeSalary
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

salaryChart()

async function getSalary() {
  // const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"
  const apiData = "./apiData.json"

  const response = await fetch(apiData)
  const chartData = await response.json()

  const bestSalary = chartData.data
    .slice()
    .sort(function (a, b) { return b.employee_salary - a.employee_salary; })
    .slice(0, 3);
  console.log(bestSalary);

  const threeBest = bestSalary.map((y) => y.employee_salary)
  console.log(threeBest)

  const Names = bestSalary.map((x) => x.employee_name)
  console.log(Names)

  employeeSalary = threeBest
  employeeName = Names

}



