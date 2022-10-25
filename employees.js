let employeeName = [], employeeSalary = [], employeeAge = []

async function employeesChart() {
  await getEmployees()

  const ctx = document.getElementById('employees').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: employeeName,
      datasets: [{
        label: 'Employee Salary',
        backgroundColor: 'red',
        // borderColor: 'rgb(255, 99, 132)',
        data: employeeSalary
      },
      {
        label: 'Employee Age',
        backgroundColor: 'blue',
        //   borderColor: 'rgb(255, 99, 132)',
        data: employeeAge
      }
      ]
    },

    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}

employeesChart()

async function getEmployees() {
  //   const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"
  const apiData = "./apiData.json"

  const response = await fetch(apiData)
  const chartData = await response.json()

  const salary = chartData.data.map((x) => x.employee_salary)
  console.log(salary)

  const age = chartData.data.map((x) => x.employee_age)
  console.log(age)

  const name = chartData.data.map((x) => x.employee_name)
  console.log(name)

  employeeSalary = salary
  employeeAge = age
  employeeName = name
  
}

