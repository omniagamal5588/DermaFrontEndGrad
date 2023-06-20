var list = document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));


//MenuToggle
var toggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');
var main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');

}
/////////////////////////////////////////////////////////

var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
    width:520,
    type: 'polarArea',
   
  },
  
  labels: ['pharmacy1', 'pharmacy2', 'pharmacy3', 'pharmacy4', 'pharmacy5'],
  
  
  fill: {
    opacity:1,
    colors:[
        
               'rgb(248, 237, 227)',
                ' rgb(223, 211, 195)',
                'rgb(208, 184, 168)',
                ' rgb(216, 204, 163)',
                ' rgb(135, 128, 94,.7)'
      ],
  },
  stroke: {
    width:1,
   colors:'#ffffff'
    
  },
 
  yaxis: {
    show: false,
    
   
  },
  
  legend: {
    position:'bottom',
    
    show:true,

  },
  
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth:0
      },
      style:{
        colors:
            [
               
                'rgb(248, 237, 227)',
                ' rgb(223, 211, 195)',
                'rgb(208, 184, 168)',
                ' rgb(216, 204, 163)',
                ' rgb(135, 128, 94)'


              ],
        
      },
    }
  },
  colors:
            [ 
               
                'rgba(248, 237, 227)',
                ' rgb(223, 211, 195)',
                'rgb(208, 184, 168)',
                ' rgb(216, 204, 163)',
                ' rgb(135, 128, 94)'
              ],
  
  theme: {
    
    monochrome: {
      enabled: false,
      shadeTo: 'light',
      shadeIntensity: 0.6

    },

   
  }
  
  };
  

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();










// Bar Chart
var barChartOptions = {
    series:[{
        data:[10 ,8,6,4,2],
        name:"sales percentage",

    }],
    chart:{
        type:"bar",
        background:"transparent",
        height:350,
        toolbar:{
            show:false,
        },
    },
    colors:[
                'rgba(209, 185, 175, 0.974)',
                'rgba(196, 161, 150, 0.976)',
                'rgba(166, 159, 141, 0.972)',
                'rgba(202, 175, 160, 0.994)',
                'rgba(204, 179, 153, 0.917)'
    ],
    plotOptions:{
        bar: {
            distributed: true,
            borderRadius:4,
            horizontal:false,
            columnWidth:"30%",

        }
    },
    dataLabels:{
        enabled:false,
    },
    fill: {
        opacity:1,
    },
    grid:{
        borderColor:"#55596e",
        yaxis:{
            lines:{
                show:true,
            },
        },
   xaxis:{
    lines:{
        show:true,
    },
   },
},
    legend:{
        labels:{
            colors:"gray",
        },
        show:true,
        position:"top",
    },
    stroke:{
        colors:["transparent"],
        show:true,
        width:2
    },
    tooltip:{
        shared:true,
        intersect:false,
        theme:"dark",
    },
    xaxis:{
        categories:['pharmacy1', 'pharmacy2', 'pharmacy3', 'pharmacy4', 'pharmacy5'],
        title:{
            style:{
                color:"gray",
            },
        },
        axisBorder:{
            show:true,
            color:"gray"
        },
        axisTicks:{
            show:true,
            color:"gray",
        },
        labels:{
            style:{
                colors:"gray",
            },

        },
    },
    yaxis:{
        title:{
            text:"Count",
            style:{
                color:"gray",
            },
        },
        axisBorder:{
            color:"gray",
            show:true,
        },
        axisTicks:{
            color:"gray",
            show:true,
        },
        labels:{
            style:{
                colors:"gray",
            },
        },
    }
};
var barChart= new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();  


//////////////////////////////////////////////////////////
//payment chart




//////////////////////////////////////////////////////////

// supsertion Types
var options = {
  series: [ 67, 61, 90],
  chart: {
  height: 390,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 20,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: [ '#cba98e', '#bbb78c', '#d8cca3'],
labels: [ 'Biggner', 'Intermediate', 'Advanced'],
legend: {
  show: true,
  floating: true,
  fontSize: '16px',
  position: 'center',
  offsetX: 160,
  offsetY: 15,
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName, opts) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#grap"), options);
chart.render();
//slider

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
