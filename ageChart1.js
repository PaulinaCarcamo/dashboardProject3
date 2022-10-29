const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                label: 'Employees age',
                backgroundColor: 'lightblue',
                hoverBackgroundColor: 'blue',
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