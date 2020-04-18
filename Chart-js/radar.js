// Variabel
let labels3 =['Eating','Running','Drinking','Cycling','Sleeping','Coding','Designing'];
let data3= [12,0,90,10,22,11,100];
let data4= [100,0,0,90,24,22,0];
let colors3 = ['#49A9EA','red','#36CAAB'];


let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data:{
        labels: labels3,
        datasets: [{
            data: data3,
            label: ['DATA1'],
            backgroundColor:"rgba(255, 99, 132, 0.2)",
            borderColor:['red'],
            borderDash: [1,3,3],
            pointBackgroundColor: "rgba(255, 99, 132)",
            pointHoverBackgroundColor:['red','red','red']
        },
        {
            data: data4,
            label: ['DATA2'],
            backgroundColor:"rgba(54, 162, 235, 0.2)",
            borderColor:['pink'],
            borderDash: [1,3,3],
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointHoverBackgroundColor:['red','red','red']
        }
    ],     

    },
    options:{

        title: {
            text:"Apakah kamu suka membeli buah mangga?",
            display: true
        }
    }
});