<template>
  <div ref="chartElment" class="chart">
  </div>
</template>

<script>
import { createChart } from "lightweight-charts"
import { data } from "./chartData"
export default {
  name: "LightChart",
  props:['title'],
  data: function () {
    return {
      titles: this.title
    }
  },
  computed(){
    console.log(this.titles)

  },
  mounted() {
    const container = this.$refs.chartElment
    let width = 600
    var height = 300
    var chart = (window.tvchart = createChart(container, {
      height: height,
      layout: {
        textColor: '#d1d4dc',
        backgroundColor: '#25292f',
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.35,
          bottom: 0.2,
        },
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      grid: {
        horzLines: {
          color: "#eee",
          visible: false,
        },
        vertLines: {
          color: "rgba(0,0,0,.4)",
        },
      },
      crosshair: {
        horzLine: {
          // visible: false,
          style: 0,
          // labelVisible: false,
        },
        vertLine: {
          visible: true,
          style: 0,
          width: 0,
          labelVisible: false,
        },
      },
    }))
    var series = chart.addAreaSeries({
      topColor: "rgba(47, 128, 237, 0.6)",
      bottomColor: "rgba(47, 128, 237, 0)",
      lineColor: "#2F80ED",
      lineWidth: 1,
    })
    series.setData(data)
    // function businessDayToString(businessDay) {
    //   return new Date(
    //     Date.UTC(
    //       businessDay.year,
    //       businessDay.month - 1,
    //       businessDay.day,
    //       0,
    //       0,
    //       0
    //     )
    //   ).toLocaleDateString();
    // }
    // var toolTipMargin = 10
    // var priceScaleWidth = 50
    var toolTip = document.createElement("div")
    toolTip.className = "three-line-legend"
    container.appendChild(toolTip)
    toolTip.style.display = "block"
    toolTip.style.left = 3 + "px"
    toolTip.style.top = 3 + "px"

    function setLastBarText() {
      let dateStr = `${data[data.length - 1].time.year}-${
        data[data.length - 1].time.month
      }-${data[data.length - 1].time.day}`;
      toolTip.innerHTML = `<div style="font-size:16px; margin: 4px 0px">Liquidity</div><div style="font-size: 14px; margin: 4px 0px;">${data[data.length - 1].value}</div><div>${dateStr}</div>`;
    }

    setLastBarText()

    chart.subscribeCrosshairMove( (param) => {
      if (
        param === undefined ||
        param.time === undefined ||
        param.point.x < 0 ||
        param.point.x > width ||
        param.point.y < 0 ||
        param.point.y > height
      ) {
        setLastBarText()
      } else {
        let dateStr = `${param.time.year}-${param.time.month}-${param.time.day}`
        let price = param.seriesPrices.get(series)
        toolTip.innerHTML = `<div style="font-size:16px; margin: 4px 0px;">Liquidity</div><div style="font-size: 14px; margin: 4px 0px;">${(
          Math.round(price * 100) / 100
        ).toFixed(2)}</div><div>${dateStr}</div>`
      }
    })
    chart.timeScale().fitContent()
  },
};
</script>

<style lang="less">
  .chart {
    width: 100%;
  }
  .three-line-legend {
    width: 100px;
    height: 80px;
    position: absolute;
    padding: 8px;
    font-size: 12px;
    text-align: left;
    z-index: 1000;
    pointer-events: none;
    &>div{
      color: #fff;
    }
  }
</style>
