export default [
  // 面积分段销量占比
  {
    url: `${import.meta.env.VITE_API_PREFIX}/saleVolumeAreaSegment`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: {
          segQuantity1: "80",
          segQuantity2: "65",
          segQuantity3: "84",
          segQuantity4: "12",
          segQuantity5: "63"
        },
      }
    },
  },
  // 当前销量及库存
  {
    url: `${import.meta.env.VITE_API_PREFIX}/salesAndStock`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: {
          cycle: 50.23,
          salesCurrentMonth: 20,
          stockCurrentMonth: 40
        },
      }
    },
  },
  // 地图均价
  {
    url: `${import.meta.env.VITE_API_PREFIX}/regionPrice`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: [{
          regionName: "region1",
          regionPrice: 20886.56
        }, {
          regionName: "region1",
          regionPrice: 28086.56
        }, {
          regionName: "region1",
          regionPrice: 20886.56
        }, {
          regionName: "region1",
          regionPrice: 23886.56
        }, {
          regionName: "region1",
          regionPrice: 23686.56
        }, {
          regionName: "region1",
          regionPrice: 23986.56
        }, {
          regionName: "region1",
          regionPrice: 20286.56
        }, {
          regionName: "region1",
          regionPrice: 32086.56
        }, {
          regionName: "region1",
          regionPrice: 23086.56
        },],
      }
    },
  },
  // 价格分段销售占比
  {
    url: `${import.meta.env.VITE_API_PREFIX}/salesVolumeProportion`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: {
          proQuantity1: "1",
          proQuantity2: "2",
          proQuantity3: "3",
          proQuantity4: "54",
          proQuantity5: "6",
          proQuantity6: "7"
        },
      }
    },
  },
  // 全年趋势
  {
    url: `${import.meta.env.VITE_API_PREFIX}/monthlyPrice`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: [{
          monthlyPrice: 22022,
          newSaleAbleQuantity: 365,
          pmonth: "1",
          salesVolumes: 236
        }, {
          monthlyPrice: 32022,
          newSaleAbleQuantity: 565,
          pmonth: "1",
          salesVolumes: 336
        }, {
          monthlyPrice: 34222,
          newSaleAbleQuantity: 365,
          pmonth: "1",
          salesVolumes: 436
        }, {
          monthlyPrice: 22722,
          newSaleAbleQuantity: 265,
          pmonth: "1",
          salesVolumes: 336
        }, {
          monthlyPrice: 42222,
          newSaleAbleQuantity: 365,
          pmonth: "1",
          salesVolumes: 136
        }, {
          monthlyPrice: 34222,
          newSaleAbleQuantity: 165,
          pmonth: "1",
          salesVolumes: 436
        }, {
          monthlyPrice: 34522,
          newSaleAbleQuantity: 665,
          pmonth: "1",
          salesVolumes: 536
        }, {
          monthlyPrice: 45322,
          newSaleAbleQuantity: 265,
          pmonth: "1",
          salesVolumes: 636
        }, {
          monthlyPrice: 45122,
          newSaleAbleQuantity: 765,
          pmonth: "1",
          salesVolumes: 736
        }, {
          monthlyPrice: 18322,
          newSaleAbleQuantity: 565,
          pmonth: "1",
          salesVolumes: 236
        }, {
          monthlyPrice: 26322,
          newSaleAbleQuantity: 465,
          pmonth: "1",
          salesVolumes: 336
        }, {
          monthlyPrice: 23522,
          newSaleAbleQuantity: 365,
          pmonth: "1",
          salesVolumes: 436
        },],
      }
    },
  },
  // 各区销量统计
  {
    url: `${import.meta.env.VITE_API_PREFIX}/regionSales`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: [{
          regionName: "regionName",
          regionSales: 256
        }, {
          regionName: "regionName",
          regionSales: 356
        }, {
          regionName: "regionName",
          regionSales: 456
        }, {
          regionName: "regionName",
          regionSales: 256
        }, {
          regionName: "regionName",
          regionSales: 356
        }, {
          regionName: "regionName",
          regionSales: 456
        }, {
          regionName: "regionName",
          regionSales: 756
        }, {
          regionName: "regionName",
          regionSales: 656
        }, {
          regionName: "regionName",
          regionSales: 256
        }, {
          regionName: "regionName",
          regionSales: 556
        }, {
          regionName: "regionName",
          regionSales: 356
        }, {
          regionName: "regionName",
          regionSales: 456
        },],
      }
    },
  },
  // 上月销售统计
  {
    url: `${import.meta.env.VITE_API_PREFIX}/lastMonthStatistics`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 10000,
        message: "system.finished",
        result: {
          lastMonthSales: 86,
          lastMonthSalesArea: 562,
          lastMonthSalesMonthOnMonth: 65.32,
          lastMonthSalesPrice: 898,
          lastMonthSalesYerrOnYear: 78.12,
          priceMonthOnMonth: 22.23,
          priceYerrOnYear: 11.23,
          salesMonthOnMonth: 24.32,
          salesYerrOnYear: 21.56
        },
      }
    },
  },
]