const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Employees salary',
                backgroundColor: 'blue',
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

