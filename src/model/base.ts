import $http from '../utils/http'
export class Model {
  static async get(options: any) {
    let result = await $http.get(Object.assign({ method: 'GET' }, options))
    return result
  }
  static async post(options: any) {
    let result = await $http.post(Object.assign({ method: 'POST' }, options))
    return result
  }
}
