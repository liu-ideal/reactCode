var Mock = require("mockjs")
// var list = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'child|4': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'value|2-3':'你好',
//         'child|4':[{
//
//         }]
//     }]
// })
 function createData(num){
  let dataObj={
    'list|4':[{

    }]
  };
  let obj=null;
  for(let i=0;i<num;i++){
    if(i===0){obj=dataObj['list|4'][0]}
    obj['value|1']=/[您好这是]{2}[测试数据]{2}[a-z]/;
    obj['child|4']=[{}];
    obj=obj['child|4'][0];

  }
  Mock.mock('/mylist',dataObj)
}
module.exports=createData;
