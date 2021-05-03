import axios from '../../src/index'

axios({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: "hi"
    }
})

axios.request({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: "hello"
    }
})
axios.get('/extend/get')
axios.options('/extend/options')
axios.delete('/extend/delete')
axios.head('/extend/head')

axios.post('/extend/post', { msg: 'post' })

axios.put('/extend/put', { msg: 'put' })

axios.patch('/extend/patch', { msg: 'patch' })


axios({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: 'hi 重载'
    }
})

axios('/extend/post', {
    method: 'post',
    data: {
        msg: 'hello 重载'
    }
})

interface ResponseData<T = any> {
    code: number
    result: T
    message: string
}
interface User {
    name: string
    age: string
}
function getUser<T>() {
    // 向 axios.get 传入  泛型 <ResponseData<T>> axios 也会返回这个 <AxiosResponse<T>>   其中 泛型 AxiosResponse<T> 中 T 是 result 类型
    return axios.get<ResponseData<T>>('/extend/user')
        .then(res => res.data)
        .catch(err => console.error(err))
}
async function test() {
    const user = await getUser<User>()
    if (user) {
        console.log(user.message)
        console.log(user.result.name)
    }
}

test()