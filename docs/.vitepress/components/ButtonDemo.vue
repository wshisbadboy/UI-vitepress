<template>
  <div>
    <!-- 基础用法 -->
    <DemoBlock title="基础用法" desc="使用 variant 属性定义按钮样式类型。">
      <div class="demo-row">
        <MyButton variant="primary">主要按钮</MyButton>
        <MyButton variant="secondary">次要按钮</MyButton>
        <MyButton variant="outline">线框按钮</MyButton>
        <MyButton variant="text">文字按钮</MyButton>
      </div>
      <template #code>
        <pre><code>&lt;MyButton variant="primary"&gt;主要按钮&lt;/MyButton&gt;
&lt;MyButton variant="secondary"&gt;次要按钮&lt;/MyButton&gt;
&lt;MyButton variant="outline"&gt;线框按钮&lt;/MyButton&gt;
&lt;MyButton variant="text"&gt;文字按钮&lt;/MyButton&gt;</code></pre>
      </template>
    </DemoBlock>

    <!-- 不同尺寸 -->
    <DemoBlock title="不同尺寸" desc="size 属性提供 small / medium / large 三种尺寸。">
      <div class="demo-row">
        <MyButton size="small">小</MyButton>
        <MyButton size="medium">中</MyButton>
        <MyButton size="large">大</MyButton>
      </div>
      <template #code>
        <pre><code>&lt;MyButton size="small"&gt;小&lt;/MyButton&gt;
&lt;MyButton size="medium"&gt;中&lt;/MyButton&gt;
&lt;MyButton size="large"&gt;大&lt;/MyButton&gt;</code></pre>
      </template>
    </DemoBlock>

    <!-- 禁用 / 加载状态 -->
    <DemoBlock title="禁用与加载" desc="disabled 禁用按钮；loading 显示加载动画并自动禁用点击。">
      <div class="demo-row">
        <MyButton disabled>禁用按钮</MyButton>
        <MyButton :loading="true">加载中</MyButton>
      </div>
      <template #code>
        <pre><code>&lt;MyButton disabled&gt;禁用按钮&lt;/MyButton&gt;
&lt;MyButton :loading="true"&gt;加载中&lt;/MyButton&gt;</code></pre>
      </template>
    </DemoBlock>

    <!-- 带图标 -->
    <DemoBlock title="带图标" desc="通过 icon 属性或 #icon 插槽放置图标。">
      <div class="demo-row">
        <MyButton icon="🔍" variant="primary">搜索</MyButton>
        <MyButton icon="➕" variant="outline">添加</MyButton>
        <MyButton icon="❌" variant="text">删除</MyButton>
      </div>
      <template #code>
        <pre><code>&lt;MyButton icon="🔍" variant="primary"&gt;搜索&lt;/MyButton&gt;
&lt;MyButton icon="➕" variant="outline"&gt;添加&lt;/MyButton&gt;
&lt;MyButton icon="❌" variant="text"&gt;删除&lt;/MyButton&gt;</code></pre>
      </template>
    </DemoBlock>
  </div>
</template>

<script setup>
import MyButton from 'ui-lib/components/Button/Button.vue'
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
