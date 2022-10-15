var employeeLabel = [], employeeSalaryData = []

async function salaryChart() {
  await getSalaryData()

const ctx = document.getElementById('barChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'blue',
            data: employeeSalaryData
        },
      ]
    },
    options: {
      tooltips: {
        mode: 'index'
      }
    }
})}

salaryChart() 

async function getSalaryData() {
  const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"

  const response = await fetch(apiUrl)
  const barChartData = await response.json()
  
  const salary = barChartData.data.map((x) => x.employee_salary)
//   console.log(salary)
  const name = barChartData.data.map((x) => x.employee_name)

 employeeSalaryData = salary
 employeeLabel = name
}




