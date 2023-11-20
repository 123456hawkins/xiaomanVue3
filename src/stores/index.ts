import { defineStore } from "pinia";
import { Names } from './store-name'
type User = {
  name: string,
  age: number
}
const result: User = {
  name: 'hawkins',
  age: 999
}
const Login = () => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ name: 'wafawe', age: 23232 })
    }, 2000);
  })
}
export const useStore=defineStore(Names.BASE,{
  state:()=>{
    return {
      basecurrent:1,
      basename:'awefaghawe'
    }
  }
})
export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: 'hawkins',
      user: <User>{},
    }
  },
  // computed
  getters: {
    temName():string{
      return `$$-${this.name}-$$`
    }
  },
  // 同步异步操作
  actions: {
    setCurrent(num: number) {
      this.current = num
      this.name = 'awegawg'
    },
    // 同步写法
    setUser() {
      this.user = result
    },
    // 异步操作
    async setUser2() {
      const result2 = await Login()
      this.user = result2
      setTimeout(() => {
        this.setName('CAONIMA')
      }, 500);

    },
    setName(name: string) {
      this.user.name = name
    }
  }
})