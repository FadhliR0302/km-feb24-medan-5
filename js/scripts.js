const display = document.querySelector("#bar-chart3");
const input = document.querySelector("#country-select");

async function bikes() {
  try {
    const data = await fetch("../BikesData2.json")
    const response = await data.json()
    return response
  } catch (err) {
    console.log(err, 'error')
  }
}


function filtering(countryData) {
  return countryData.COUNTRY == "United States"
}
//&& (countryData.DATE >= new Date("01-01-2022") && countryData.DATE <= "02-02-2022")

async function displayData() {
  const loadData = await bikes()
  let filtered = loadData.filter(filtering)
  let groupedBy = Object.groupBy(filtered, d => d.COUNTRY)
 
  
  let country1 =  groupedBy['United States']
  let count = 0
  for(i = 0; i < country1.length; i++){
    count += country1[i].PROFIT

  }

  let dataAppear = loadData.map((obj) =>{
    return obj.PRODUCT
  })

}
displayData()


// Function untuk create chart nya
function createChart(chartType, ctx, data, options) {
  return new Chart(ctx, {
    type: chartType,
    data: data,
    options: options
  });
}

// Bar Chart 1
const barChart1Data = {
  labels: ['Water Bottle - 30 oz.', 'Patch Kit/8 Patches', 'Mountain Tire Tube', 'AWC Logo Cap', 'Sport-100 Helmet, Red'],
  datasets: [
    {
      label: 'Male',
      data: [81.197, 81.494, 46.275, 33.673, 35.086],
      backgroundColor: '#246dec'
    },
    {
      label: 'Female',
      data: [80.854, 73.816, 54.640, 33.643, 28.566],
      backgroundColor: '#cc3c43'
    }
  ]
};

const barChart1Options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'PRODUK PALING BANYAK YANG DI BELI TIAP GENDER'
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};

const barChart1Ctx = document.getElementById('bar-chart').getContext('2d');
createChart('bar', barChart1Ctx, barChart1Data, barChart1Options);

// Bar Chart 2
const barChart2Data = {
  labels: ["31", "34", "33", "32", "35", "29", "37", "30", "40", "28"],
  datasets: [
    {
      label: 'Order_Quantity',
      data: [51.450, 49.950, 49.741, 49.582, 46.650, 46.550, 43.572, 42.768, 42.718, 42.007],
      backgroundColor: '#f3a3a7'
    }
  ]
};

const barChart2Options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'USIA PEMBELI DENGAN JUMLAH PESANAN TERBANYAK'
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};

const barChart2Ctx = document.getElementById('bar-chart2').getContext('2d');
createChart('bar', barChart2Ctx, barChart2Data, barChart2Options);

// Bar Chart 3
const barChart3Data = {
  labels: ["United States", "Australia", "United Kingdom", "Germany", "France", "Canada"],
  datasets: [
    {
      label: 'Profit',
      data: [13820106, 10847833, 4824853, 4351687, 4283045, 3780531],
      backgroundColor: '#f3a3a7'
    }
  ]
};

const barChart3Options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'PROFIT DI BERBAGAI NEGARA'
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};

const barChart3Ctx = document.getElementById('bar-chart3').getContext('2d');
createChart('bar', barChart3Ctx, barChart3Data, barChart3Options);

// Another Bar Chart (formerly bar-chart3)
const barChart4Data = {
  labels: ['Label1', 'Label2', 'Label3'],
  datasets: [
    {
      label: 'Dataset 4',
      data: [7, 11, 5],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
    }
  ]
};

const barChart4Options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart 4'
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};

const barChart4Ctx = document.getElementById('bar-chart4').getContext('2d');
createChart('bar', barChart4Ctx, barChart4Data, barChart4Options);

