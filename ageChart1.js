//Gráfico de edades por cada trabajador

const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                label: 'Edad',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data
            },
            ]
        },
        options: {
            tooltips: {
                mode: 'index'
            }
        }
    });
}

export { render };