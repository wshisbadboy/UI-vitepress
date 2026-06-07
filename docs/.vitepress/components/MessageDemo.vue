<template>
  <div>
    <DemoBlock title="基础用法" desc="通过命令式 API 调用，消息会从顶部弹出并自动消失。">
      <div class="demo-row">
        <MyButton variant="primary" @click="showInfo">信息提示</MyButton>
        <MyButton style="background: #22c55e; border-color: #22c55e; color: #fff" @click="showSuccess">成功提示</MyButton>
        <MyButton style="background: #f59e0b; border-color: #f59e0b; color: #fff" @click="showWarning">警告提示</MyButton>
        <MyButton style="background: #ef4444; border-color: #ef4444; color: #fff" @click="showError">错误提示</MyButton>
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
        <MyButton variant="secondary" @click="showLong">显示 5 秒</MyButton>
        <MyButton variant="secondary" @click="showNoClose">不自动关闭</MyButton>
      </div>
      <template #code>
        <pre><code>Message.info('这条消息会显示 5 秒', 5000)
Message.warning('这条消息不会自动消失', 0)</code></pre>
      </template>
    </DemoBlock>

    <DemoBlock title="VNode 渲染" desc="message 参数支持传入返回 VNode 的渲染函数，用于富文本展示。">
      <div class="demo-row">
        <MyButton variant="secondary" @click="showVNode">VNode 消息</MyButton>
        <MyButton variant="secondary" @click="showVNodeLink">带链接的消息</MyButton>
      </div>
      <template #code>
        <pre><code>import { h } from 'vue'

// 富文本 VNode
Message.info(() => h('span', [
  '已删除 ',
  h('strong', { style: { color: '#ef4444' } }, '3'),
  ' 个文件'
]), 3000)

// 带链接的 VNode
Message.success(() => h('span', [
  '操作成功，',
  h('a', { href: '#', style: { color: '#3b82f6' } }, '查看详情')
]))</code></pre>
      </template>
    </DemoBlock>
  </div>
</template>

<script setup>
import { h } from 'vue'
import MyButton from 'ui-lib/components/Button/Button.vue'
import MyMessage from 'ui-lib/components/Message'

function showInfo() { MyMessage.info('这是一条信息提示') }
function showSuccess() { MyMessage.success('操作成功') }
function showWarning() { MyMessage.warning('请注意，此操作不可逆') }
function showError() { MyMessage.error('操作失败，请重试') }
function showLong() { MyMessage.info('这条消息会显示 5 秒', 5000) }
function showNoClose() { MyMessage.warning('这条消息不会自动消失，关闭它!', 0) }

function showVNode() {
  MyMessage.info(() => h('span', [
    '已删除 ',
    h('strong', { style: { color: '#ef4444' } }, '3'),
    ' 个文件'
  ]), 3000)
}

function showVNodeLink() {
  MyMessage.success(() => h('span', [
    '操作成功，',
    h('a', { href: '#', style: { color: '#3b82f6' } }, '查看详情')
  ]))
}
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
