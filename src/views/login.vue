<template>
  <div class="login">
    <el-card>
      <h1>Welcome</h1>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            :prefix-icon="UserFilled"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            :prefix-icon="GoodsFilled"
            autocomplete="off"
          />
        </el-form-item>
        <el-row justify="space-between" class="mb18">
          <el-checkbox>记住密码</el-checkbox>
          <el-link type="info" :underline="false">忘记密码？</el-link>
        </el-row>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="submitForm(loginFormRef)"
          >
            登 录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import { UserFilled, GoodsFilled } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";
export default defineComponent({
  setup() {
    const loginFormRef = ref();
    const data = reactive({
      loginForm: {
        username: "",
        password: "",
      },
      rules: <FormRules>{
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度应在6到12位之间",
            trigger: "blur",
          },
        ],
      },
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;

      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    return {
      UserFilled,
      GoodsFilled,
      loginFormRef,
      ...toRefs(data),
      submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  &-btn {
    width: 100%;
  }
}

.el-card {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  :deep &__body {
    padding: 30px 40px;
  }
}
</style>
