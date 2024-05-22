// ---------- CHARTS ----------
async function loadJSON() {
  const response = await fetch("../bikes.json");
  const movies = await response.json();
  console.log(movies);
}

// loadJSON()

// BAR CHART
const barChartOptions = {
  series: [
    {
      name: 'Male',
      data: [81.197, 81.494, 46.275, 33.673, 35.086], 
    },
    {
      name: 'Female',
      data: [80.854, 73.816, 54.640, 33.643, 28.566], 
    }
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'right',
    fontSize: '14px',
    onItemClick: {
      toggleDataSeries: false
    },
    onItemHover: {
      highlightDataSeries: false
    }
  },
  xaxis: {
    categories: ['Water Bottle - 30 oz.', 'Patch Kit/8 Patches', 'Mountain Tire Tube', 'AWC Logo Cap', 'Sport-100 Helmet, Red'],
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// BAR CHART
const barChartOptions2 = {
  series: [
    {
      name: 'Order_Quantity',
      data: [51.450, 49.950, 49.741, 49.582, 46.650, 46.550, 43.572, 42.768, 42.718, 42.007 ],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#f3a3a7'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["31", "34", "33", "32", "35", "29", "37", "30", "40", "28"],
  },
};

const barChart2 = new ApexCharts(
  document.querySelector('#bar-chart2'),
  barChartOptions2
);
barChart2.render();

// BAR CHART
const barChartOptions3 = {
  series: [
    {
      name: 'Profit',
      data: [13820106, 10847833, 4824853, 4351687, 4283045, 3780531],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#f3a3a7'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["United states", "Australia", "United kingdom", "Germany", "France", "Canada"],
  },
};

const barChart3 = new ApexCharts(
  document.querySelector('#bar-chart3'),
  barChartOptions3
);
barChart3.render();