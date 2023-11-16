import  { defineComponent,ref,reactive } from "vue"

// 第一种返回一个渲染函数
// export default function(){
//   return (<div>hawkins</div>)
// }

// 第二种defineComponent+optionAPI
// export default defineComponent({
//   data(){
//     return {
//       age:23
//     }
//   },
//   render(){
//     return (<div>hawkins-{age}</div>)
//   }
// })

// 第三种setup

// 插槽
const A=(_,{slots})=>(<>
<div>{slots.default ? slots.default():'默认值'}</div>
</>)

// props的接口类型
interface Props{
  name?:string
}
export default defineComponent({
  // props数据
  props:{
    name:String
  },
  emits:['on-click'],
  setup(props:Props,{emit}){
    const flag=ref(false)
    const dataList=reactive([
      {name:'hawkins',age:222},
      {name:'hawkins3',age:2223},
      {name:'hawkins4',age:2224},
      {name:'hawkins5',age:2225},
    ])
    const fn=(item)=>{
      console.log('触发了');
      emit('on-click',item.name)
    }
    const slot={
      default:()=>(<div>hawkins slot case</div>)
    }
    const vm=ref<string>('v-model-test')
    // ref template自动解包,但是tsx不会，要加value
    return ()=>(
                <div>
                  <input v-model={vm.value}></input>
                  <hr/>
                  {/* 插槽 */}
                  <A v-slots={slot}></A>
                  <hr/>
                  <div>props:{props.name}</div>
                  <div v-show={!flag.value}>hawkinsSetup</div>
                    {dataList.map(v=>{
                      return <div onClick={()=>fn(v)}>{v.name}</div>
                    })}</div>)
  }
})