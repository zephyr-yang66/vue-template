import { Model } from './base'
export class Test extends Model {
  static async testRequest(options: any) {
    let result = await super.post({...options})
    return result
  }
}
