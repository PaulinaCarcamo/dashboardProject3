//Gráfico de edades que muestra a los tres trabajadores más jóvenes

const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels,
            datasets: [{
                label: 'Edad',
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
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