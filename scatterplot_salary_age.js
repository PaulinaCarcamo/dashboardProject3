const render = async (selector, labels, data) => {
    const ctx = document.querySelector(selector).getContext('2d');

    new Chart(ctx, {
        type: 'scatter',
        data: {
            labels,
            datasets: [{
                label: '(Age, Salary)',
                backgroundColor: 'tomato',
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

