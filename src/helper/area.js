export const FirstSeries = [
  {
    name: "series1",
    data: [9, 3, 5, 7, 12, 7, 8],
  },
];

export const FirstOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
  },

  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      style: {
        colors: "#4F6270",
        fontSize: "15px",

        fontWeight: 400,
      },
    },
    crosshairs: {
      show: true,
      position: "front",
      stroke: {
        color: "#b6b6b6",
        width: 1,
        dashArray: 0,
      },
    },
  },
  xaxis: {
    labels: {
      style: {
        colors: "#4F6270",
        fontSize: "12px",
        cssClass: "apexcharts-xaxis-label",
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      width: 1,
      position: "front",
      opacity: 0.5,
      stroke: {
        color: "#1dfbe4",
        width: 1,
        dashArray: 0,
      },
      fill: {
        type: "solid",
        color: "#1dfbe4",
      },
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: -17,
      bottom: 0,
      left: 20,
    },
  },
  legend: {
    show: false,
  },
  labels: [
    "Jun 19",
    "July 19",
    "Aug 19",
    "Sep 19",
    "Oct 19",
    "Nov 19",
    "Dec 19",
  ],

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      shade: "dark",
      colorStops: [
        {
          offset: 6,
          color: "#45D3B9",
          opacity: 1,
        },

        {
          offset: 100,
          color: "#141D34",
          opacity: 1,
        },
      ],
    },
  },
};
