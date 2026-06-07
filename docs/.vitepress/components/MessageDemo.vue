<template>
  <div>
    <DemoBlock title="基础用法" desc="通过命令式 API 调用，消息会从顶部弹出并自动消失。">
      <div class="demo-row">
        <MyButton @click="showInfo">信息提示</MyButton>
        <MyButton variant="success-like" @click="showSuccess">成功提示</MyButton>
        <MyButton variant="warning-like" @click="showWarning">警告提示</MyButton>
        <MyButton variant="error-like" @click="showError">错误提示</MyButton>
      </div>
      <template #code>
        <pre><code>import { Message } from 'my-ui-lib'

Message.info('这是一条信息提示')
Message.success('操作成功')
Message.warning('请注意')
Message.error('操作失败')</code></pre>
      </template>
    </DemoBlock>

    <DemoBlock title="自定义时长" desc="通过第二个参数设置消息显示时长（毫秒），设为 0 则不会自动关闭。">
      <div class="demo-row">
        <MyButton @click="showLong">显示 5 秒</MyButton>
        <MyButton @click="showNoClose">不自动关闭</MyButton>
      </div>
      <template #code>
        <pre><code>Message.info('这条消息会显示 5 秒', 5000)
Message.warning('这条消息不会自动消失', 0)</code></pre>
      </template>
    </DemoBlock>
  </div>
</template>

<script setup>
import MyButton from 'ui-lib/components/Button/Button.vue'
import MyMessage from 'ui-lib/components/Message'

function showInfo() {
  MyMessage.info('这是一条信息提示')
}

function showSuccess() {
  MyMessage.success('操作成功')
}

function showWarning() {
  MyMessage.warning('请注意，此操作不可逆')
}

function showError() {
  MyMessage.error('操作失败，请重试')
}

function showLong() {
  MyMessage.info('这条消息会显示 5 秒', 5000)
}

function showNoClose() {
  MyMessage.warning('这条消息不会自动消失，关闭它!', 0)
}
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.my-btn--success-like {
  background-color: #22c55e;
  color: #fff;
  border-color: #22c55e;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 500;
}
.my-btn--success-like:hover {
  background-color: #16a34a;
}

.my-btn--warning-like {
  background-color: #f59e0b;
  color: #fff;
  border-color: #f59e0b;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 500;
}
.my-btn--warning-like:hover {
  background-color: #d97706;
}

.my-btn--error-like {
  background-color: #ef4444;
  color: #fff;
  border-color: #ef4444;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 500;
}
.my-btn--error-like:hover {
  background-color: #dc2626;
}
</style>
