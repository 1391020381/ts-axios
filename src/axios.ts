import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context) // instance本身是函数
  extend(instance, context)
  return instance as AxiosInstance
}
const axios = createInstance()

export default axios