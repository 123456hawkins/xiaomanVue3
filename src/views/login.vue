<template>
  <div class="login">
    <el-card class="box-card">
      <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm" class="demo-form-inline">
        <el-form-item prop="account" label="账号">
          <el-input v-model="ruleForm.account" placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="ruleForm.password" placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
const router = useRouter()
import axios from 'axios'

interface RuleForm {
  account: string,
  password: string
}
const ruleForm = reactive<RuleForm>({
  account: '',
  password: '',
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  account: [
    {
      required: true,
      message: 'Please input account',
      trigger: 'change',
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'change',
    }
  ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      localStorage.setItem('token', 'awegadfwafaef')
      router.push('/index')
      initRouter()
    } else {
      console.log('error submit!', fields)
    }
  })
}
const initRouter = async () => {
  const res = await axios.get('http://localhost:8681/login', { params: ruleForm })
  console.log(res);


  res.data.route.forEach((v: any) => {
    router.addRoute('index', {
      path: v.path,
      name: v.name,
      component: () => import(`../views/${v.component}`)
    })
  });
  console.log(router.getRoutes());

}
</script>
<style scoped lang='scss'>
.login {
  width: 100;
  height: 100%;
}
</style>