/* 工具函数 */
export function getQueryString(key: string, paramString: string) {
  const paramStr = paramString || window.location.search
  const regExp = new RegExp(`(^|\\?|&)${key}=([^&]*)(\\s|&|$)`)
  return regExp.test(paramStr) ? RegExp.$2 : ''
}
export function filterParams(params: any) {
  for (const key in params) {
    switch (Object.prototype.toString.call(params[key])) {
      case '[object Null]':
      case '[object Undefined]':
        delete params[key]
        break
      case '[object String]':
        params[key] = params[key].trim()
        break
      case '[object Array]':
      case '[object Object]':
      default:
        params[key] = filterParams(params[key])
        break
    }
  }
  return params
}
