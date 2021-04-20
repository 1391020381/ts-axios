import axios from '../../src/index'
import { AxiosTransformer } from '../../src/types'

axios.defaults.headers.common['test2'] = 123

axios({
    url: '/config/post',
    method: 'post',
    data: JSON.stringify({
        a: 1
    }),
    headers: {
        test: '321'
    }
}).then((res) => {
    console.log(res.data)
})


axios({
    transformRequest: [(function (data) {
        return JSON.stringify(data)
    }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
    transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
        if (typeof data === 'object') {
            data.b = 2
        }
        return data
    }],
    url: '/config/post',
    method: 'post',
    data: {
        a: 1
    }
}).then((res) => {
    console.log(res.data)
})