# 拦截器设计与实现
```
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前可以做一些事情
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  return response;
}, function (error) {
  // 处理响应错误
  return Promise.reject(error);
});

```

* interceptors 
    - request use(resolve,reject)
    - response use(resolve,reject)

* 可以添加多个拦截器 拦截器的执行顺序是链式依次执行方式。 
* request 后添加 先执行
* response  先添加后执行