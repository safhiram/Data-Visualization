// Variabel
let labels1 =['YES','BIASA','NO'];
let data1= [69,20,11];
let colors1 = ['#49A9EA','red','#36CAAB'];


let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options:{
        title: {
            text:"Apakah kamu suka membeli buah mangga?",
            display: true
        }
    }
})