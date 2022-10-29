//Se importan gráficos desde sus respectivos módulos

import { getEmployees } from '/employees.js'
import { render as ageChart1 } from '/ageChart1.js'
import { render as ageChart2 } from '/ageChart2.js'
import { render as salaryChart1 } from '/salaryChart1.js'
import { render as salaryChart2 } from '/salaryChart2.js'
import { render as salaryAge } from '/salaryAgeChart.js'

const name = (await getEmployees()).map(e => e.employee_name);
const age = (await getEmployees()).map(e => e.employee_age);
const salary = (await getEmployees()).map(e => e.employee_salary);

const youngestAge =
    (await getEmployees()).sort(function (a, b) { return a.employee_age - b.employee_age }).slice(0, 3).map(e => e.employee_age);

const youngestEmpl =
    (await getEmployees()).sort(function (a, b) { return a.employee_age - b.employee_age }).slice(0, 3).map(e => e.employee_name);

const highestSalary =
    (await getEmployees()).sort(function (a, b) { return b.employee_salary - a.employee_salary }).slice(0, 5).map(e => e.employee_salary);

const highestEmpl =
    (await getEmployees()).sort(function (a, b) { return b.employee_salary - a.employee_salary }).slice(0, 5).map(e => e.employee_name);

salaryChart1('#chart1', name, salary);
ageChart1('#chart2', name, age);
ageChart2('#chart3', youngestEmpl, youngestAge);
salaryChart2('#chart4', highestEmpl, highestSalary);
salaryAge('#chart5', age, salary);

