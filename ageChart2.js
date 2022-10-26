const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels,
            datasets: [{
                label: 'The youngest employees',
                backgroundColor: 'lightgreen',
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