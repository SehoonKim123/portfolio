// myChart1
const data1 = {
    labels: ['포토공정', '패키징', '증착공정'],
    datasets: [{
        backgroundColor: ['#ff547a', '#ffcb51', '#4ca8f0'],
        data: [10,10,80],
    }],
    
};

const config1 = {
    type: 'doughnut',
    data: data1,
    options: {
        responsive: true,
        legend: {
            display: false
        }
    }
};

// myChart2
const data2 = {
    labels: ['MPCVD 장비', 'MOCVD 장비', 'Sputter 장비'],
    datasets: [{
        backgroundColor: ['#ff547a', '#ffcb51', '#4ca8f0'],
        data: [10,45,45],
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        responsive: true,
        plugins: {
            legend: {
              position: 'top',
            }
        }
    }
};

const myChart1 = new Chart(document.getElementById('myChart1'), config1);
const myChart2 = new Chart(document.getElementById('myChart2'), config2);
