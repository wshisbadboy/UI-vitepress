<template>
  <div>
    <DemoBlock title="基础用法" desc="使用 type 属性定义不同类型的提示。默认显示图标和关闭按钮。">
      <div class="demo-stack">
        <MyAlert type="info" title="提示" description="这是一条普通信息提示" />
        <MyAlert type="success" title="成功" description="操作已成功完成" />
        <MyAlert type="warning" title="警告" description="请注意，此操作不可逆" />
        <MyAlert type="error" title="错误" description="操作失败，请重试" />
      </div>
      <template #code>
        <pre><code>&lt;MyAlert type="info" title="提示" description="这是一条普通信息提示" /&gt;
&lt;MyAlert type="success" title="成功" description="操作已成功完成" /&gt;
&lt;MyAlert type="warning" title="警告" description="请注意，此操作不可逆" /&gt;
&lt;MyAlert type="error" title="错误" description="操作失败，请重试" /&gt;</code></pre>
      </template>
    </DemoBlock>

    <DemoBlock title="隐藏图标" desc="设置 showIcon 为 false 可以隐藏图标。">
      <div class="demo-stack">
        <MyAlert type="info" :show-icon="false" description="没有图标的提示信息" />
      </div>
      <template #code>
        <pre><code>&lt;MyAlert type="info" :show-icon="false" description="没有图标的提示信息" /&gt;</code></pre>
      </template>
    </DemoBlock>

    <DemoBlock title="不可关闭" desc="设置 closable 为 false 可隐藏关闭按钮，提示将常驻展示。">
      <div class="demo-stack">
        <MyAlert type="warning" :closable="false" title="无法关闭" description="此提示不可关闭" />
      </div>
      <template #code>
        <pre><code>&lt;MyAlert type="warning" :closable="false" title="无法关闭" description="此提示不可关闭" /&gt;</code></pre>
      </template>
    </DemoBlock>

    <DemoBlock title="仅标题" desc="不传 description 时只展示标题。">
      <div class="demo-stack">
        <MyAlert type="success" title="操作成功" />
      </div>
      <template #code>
        <pre><code>&lt;MyAlert type="success" title="操作成功" /&gt;</code></pre>
      </template>
    </DemoBlock>

    <DemoBlock title="自定义内容" desc="通过插槽自定义标题和描述区域。">
      <div class="demo-stack">
        <MyAlert type="info">
          <template #title>
            <span style="color: #8b5cf6;">自定义标题样式</span>
          </template>
          <p>这里可以放置 <strong>任意 HTML 内容</strong>，包括链接等。</p>
        </MyAlert>
      </div>
      <template #code>
        <pre><code>&lt;MyAlert type="info"&gt;
  &lt;template #title&gt;
    &lt;span style="color: #8b5cf6;"&gt;自定义标题样式&lt;/span&gt;
  &lt;/template&gt;
  &lt;p&gt;这里可以放置 &lt;strong&gt;任意 HTML 内容&lt;/strong&gt;&lt;/p&gt;
&lt;/MyAlert&gt;</code></pre>
      </template>
    </DemoBlock>
  </div>
</template>

<script setup>
import MyAlert from '../../../src/components/Alert/Alert.vue'
</script>

<style scoped>
.demo-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
</style>
