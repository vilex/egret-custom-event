# egret-custom-event
- ## 自定义派发事件
> 示例
```
const TEST : string = 'TEST';

events.register(TEST, (e:events.CustomEvent) => {
    console.log('在' +Date.now() +'时收到数据：'+ e.data.a);
},this);


setInterval(() => {
    events.dispatch(TEST,{a:"第二个参数是可选参数"})
} , 2000)
```


