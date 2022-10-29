//Gráfico comparativo de sueldos y edades

const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'scatter',
        data: {
            labels,
            datasets: [{
                label: 'Edad y Sueldo',
                backgroundColor: 'rgba(54, 162, 235)',
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

