<template>
  <div>
    <!-- 基础用法 -->
    <DemoBlock title="基础用法" desc="同时展开多个面板，每个面板之间互不影响。">
      <MyCollapse v-model="active1">
        <MyCollapseItem title="一致 Consistency" name="1">
          <p class="collapse-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。</p>
        </MyCollapseItem>
        <MyCollapseItem title="反馈 Feedback" name="2">
          <p class="collapse-text">通过界面样式和交互动效让用户清晰感知自己的操作。</p>
        </MyCollapseItem>
        <MyCollapseItem title="效率 Efficiency" name="3">
          <p class="collapse-text">界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
        </MyCollapseItem>
      </MyCollapse>
      <template #code>
        <pre><code>&lt;MyCollapse v-model="activeNames"&gt;
  &lt;MyCollapseItem title="一致 Consistency" name="1"&gt;
    与现实生活一致...
  &lt;/MyCollapseItem&gt;
  &lt;MyCollapseItem title="反馈 Feedback" name="2"&gt;
    通过界面样式和交互动效...
  &lt;/MyCollapseItem&gt;
  &lt;MyCollapseItem title="效率 Efficiency" name="3"&gt;
    界面简单直白...
  &lt;/MyCollapseItem&gt;
&lt;/MyCollapse&gt;</code></pre>
      </template>
    </DemoBlock>

    <!-- 手风琴模式 -->
    <DemoBlock title="手风琴模式" desc="设置 accordion 属性后，同时只能展开一个面板。">
      <MyCollapse v-model="active2" accordion>
        <MyCollapseItem title="第一项" name="a">
          <p class="collapse-text">手风琴模式下，同一时间只能展开一个面板。</p>
        </MyCollapseItem>
        <MyCollapseItem title="第二项" name="b">
          <p class="collapse-text">展开当前项会自动收起之前打开的面板。</p>
        </MyCollapseItem>
        <MyCollapseItem title="第三项" name="c">
          <p class="collapse-text">适用场景：FAQ、步骤说明等需要逐步展开的内容。</p>
        </MyCollapseItem>
      </MyCollapse>
      <template #code>
        <pre><code>&lt;MyCollapse v-model="activeName" accordion&gt;
  &lt;MyCollapseItem title="第一项" name="a"&gt;
    手风琴模式下...
  &lt;/MyCollapseItem&gt;
  ...
&lt;/MyCollapse&gt;</code></pre>
      </template>
    </DemoBlock>

    <!-- 禁用项 -->
    <DemoBlock title="禁用状态" desc="设置 disabled 属性使某个面板不可展开。">
      <MyCollapse v-model="active3">
        <MyCollapseItem title="可展开" name="x">
          <p class="collapse-text">正常展开的内容。</p>
        </MyCollapseItem>
        <MyCollapseItem title="禁用项" name="y" disabled>
          <p class="collapse-text">此项不可见，因为该项被禁用了。</p>
        </MyCollapseItem>
        <MyCollapseItem title="也可展开" name="z">
          <p class="collapse-text">另一段可展开的内容。</p>
        </MyCollapseItem>
      </MyCollapse>
      <template #code>
        <pre><code>&lt;MyCollapse v-model="activeNames"&gt;
  &lt;MyCollapseItem title="可展开" name="x"&gt;...&lt;/MyCollapseItem&gt;
  &lt;MyCollapseItem title="禁用项" name="y" disabled&gt;...&lt;/MyCollapseItem&gt;
  &lt;MyCollapseItem title="也可展开" name="z"&gt;...&lt;/MyCollapseItem&gt;
&lt;/MyCollapse&gt;</code></pre>
      </template>
    </DemoBlock>

    <!-- 自定义标题 -->
    <DemoBlock title="自定义标题" desc="通过 title 插槽自定义面板标题样式。">
      <MyCollapse v-model="active4">
        <MyCollapseItem name="custom">
          <template #title>
            <span style="color: #3b82f6; font-weight: 600">自定义标题样式</span>
          </template>
          <p class="collapse-text">通过 title 插槽可以完全自定义标题区域的内容。</p>
        </MyCollapseItem>
      </MyCollapse>
      <template #code>
        <pre><code>&lt;MyCollapse v-model="activeNames"&gt;
  &lt;MyCollapseItem name="custom"&gt;
    &lt;template #title&gt;
      &lt;span style="color: #3b82f6; font-weight: 600"&gt;
        自定义标题样式
      &lt;/span&gt;
    &lt;/template&gt;
    &lt;p&gt;通过 title 插槽可自定义标题&lt;/p&gt;
  &lt;/MyCollapseItem&gt;
&lt;/MyCollapse&gt;</code></pre>
      </template>
    </DemoBlock>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyCollapse from 'ui-lib/components/Collapse/Collapse.vue'
import MyCollapseItem from 'ui-lib/components/Collapse/CollapseItem.vue'

const active1 = ref([])
const active2 = ref([])
const active3 = ref([])
const active4 = ref([])
</script>

<style scoped>
.collapse-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>
