var employeeAgeData = []

async function ageChart() {
  await getAgeData()

const ctx = document.getElementById('pieChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: employeeLabel,
        datasets: [{
          label: 'Employee Age',
          backgroundColor: 'pink',
          borderColor: 'white',
          data: employeeAgeData
      }]
    },
    options: {
      tooltips: {
        mode: 'index'
      }
    }
})}

ageChart()

async function getAgeData() {
  const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"

  const response = await fetch(apiUrl)
  const pieChartData = await response.json()

  const age = pieChartData.data.map((x) => x.employee_age)
  const name = pieChartData.data.map((x) => x.employee_name)

 employeeAgeData = age
 employeeLabel = name
}