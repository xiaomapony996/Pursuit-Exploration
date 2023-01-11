var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: 'nodeA',
          value: 10,
        },
        {
          name: 'nodeB',
          value: 10,

        },
        {
            name:'nodeC',
            value:10,
        },
        {
            name:'nodeD',
            value:10
        },
        {
            name:'nodeE',
            value:10
        },
        {
            name:'nodeF',
            value:10
        },
        {
            name:'nodeG',
            value:10
        }
      ],
      itemStyle:{
    
        borderWidth:1
      }
    },
  ],
  //color:['大阳线，3个点以上，深红','中阳线，1-3个点，较红','小阳线，小于1个点，普红','大阴线，3个点以上，深绿','中阴线，1-3个点，较绿','小阴线，1个点以下，浅绿']
    color:['#E33045','#A32331','#63151E','#46F070','#30A84F','1D632E','#D5D9E3']

};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);