/* 所有的业务逻辑都在service里处理 */
import {Test} from '../model'
export default class {
  async getTest(options: any) {
    let result = await Test.testRequest(options)
    return result
  }
}