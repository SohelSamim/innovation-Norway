export const DogNutSeries = [20, 12];

export const DogNutOptions = {
  chart: {
    type: "donut",
  },

  labels: ["Inviduals", "Companies"],

  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        labels: {
          show: true,

          total: {
            show: true,

            fontSize: 0,
          },
          value: {
            show: true,
            color: "#C1D7E8",
            showAlways: true,
            fontSize: 40,
            fontWeight: 600,
          },
        },
      },
    },
  },
  colors: ["#FF56EE", "#1DFBE4"],
};
