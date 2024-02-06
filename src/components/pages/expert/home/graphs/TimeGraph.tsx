import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      height: number;
      type: "line";
      zoom: {
        enabled: boolean;
      };
      toolbar: {
        show: boolean;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      width: number;
      curve: "smooth"; // Set to a valid curve type, e.g., "smooth", "straight", etc.
      colors: string[];
    };
    grid: {
      show: boolean;
    };
    xaxis: {
      categories: string[];
      labels: {
        show: boolean;
      };
    };
    yaxis: {
      show: boolean;
    };
  };
}

interface ApexChartProps {
  // Define your props here if needed
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: "Messages",
          data: [10, 190, 40, 220],
        },
      ],
      options: {
        chart: {
          height: 100,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
          curve: "smooth", // Set to a valid curve type, e.g., "smooth", "straight", etc.
          colors: ["#8726B9"],
        },
        grid: {
          show: false,
        },
        xaxis: {
          categories: ["5am", "10am", "3pm", "8pm"],
          labels: {
            show: true,
          },
        },
        yaxis: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={100} />
      </div>
    );
  }
}

export function TimeChart() {
  return (
    <>
      <ApexChart />
    </>
  );
}
