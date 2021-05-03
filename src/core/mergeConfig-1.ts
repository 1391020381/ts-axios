import { AxiosRequestConfig } from '../types'
import { isPlainObject, deepMerge } from '../helpers/util'
const strats = Object.create(null)

function defaultStart(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1
}
function fromVal2Start(val1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2
  }
}
function deepMergeStrat(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    console.log(val1, val2)
    return deepMerge(val1, val2)
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    console.log(val1)
    return deepMerge(val1)
  } else if (typeof val1 !== 'undefined') {
    return val1
  }
}

const startKeyFromVal2 = ['url', 'params', 'data']
startKeyFromVal2.forEach(key => {
  strats[key] = fromVal2Start
})
const startKeysDeepMerge = ['headers', 'auth']

startKeysDeepMerge.forEach(key => {
  strats[key] = deepMergeStrat
})

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }
  // 创建空对象 作为最终的合并结果
  // 1. 常规属性  如果 用户配置了就用用户配置的,如果用户没有配置  则用默认配置的
  // 2. 只接受用户配置,不管默认配置对象里面有没有 只取用户配置的
  // 3. 复杂对象深度合并
  const config = Object.create(null)
  for (let key in config2) {
    mergeField(key)
  }
  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const start = strats[key] || defaultStart
    config[key] = start(config1[key], config2![key])
  }
  return config
}
