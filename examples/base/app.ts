import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })
//  /base/get?foo[]=bar&foo[]=baz'


// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })
// /base/get?foo=%7B%22bar%22:%22baz%22%7D

const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// /base/get?date=2019-04-01T05:55:39.030Z

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })
// /base/get?foo=@:$+

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })
// /base/get?foo=bar

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })
// /base/get?foo=bar&bar=baz


// axios({
//   method:'post',
//   url:'/base/post',
//   data:{
//     a:1,
//     b:2
//   }
// })
// const arr = new Int32Array([21,31])

// axios({
//   method:'post',
//   url:"/base/buffer",
//   data:arr
// })


// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json;'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 11,
    b: 22
  }
}).then((res) => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})
