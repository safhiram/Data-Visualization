// Variabel
let labels2 =['YES','BIASA','NO'];
let data2= [69,20,11];
let colors2 = ['#49A9EA','red','#36CAAB'];


let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'line',
    data:{
        labels: labels2,
        datasets: [{
            data: data2,
            label: ['IYA'],
            backgroundColor: ['pink'],
            borderColor:['red'],
            borderDash: [1,2,3],
            pointBackgroundColor: ['blue','blue','blue'],
            pointHoverBackgroundColor:['red','red','red']
        }]        

    },
    options:{
        scales:{
            yAxes:[{
                stacked:true
            }]
        },

        title: {
            text:"Apakah kamu suka membeli buah mangga?",
            display: true
        }
    }
});