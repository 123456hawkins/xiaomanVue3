// reactive底层实现
import { track, trigger } from './effect.js'
const isObject = (target) => target != null && typeof target == 'object'
export const reactive = <T extends object>(target: T) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver) as object

      track(target, key)
      // 深层次劫持
      if (isObject(res)) {
        return reactive(res)
      }
      return res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)

      trigger(target, key)

      return res
    }
  })
}