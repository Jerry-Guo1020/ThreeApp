<template>
  <view class="cold-page">
    <!-- 顶部标题 -->
    <ColdTitle
      :badge-text="pageConfig.titleConfig.badgeText"
      :title="pageConfig.titleConfig.title"
      :subtitle="pageConfig.titleConfig.subtitle"
      :description="pageConfig.titleConfig.description"
    />

    <!-- 项目概况 -->
    <ProjectIntro :config="pageConfig.projectIntroConfig" />

    <!-- 核心优势 -->
    <FeatureCards :config="pageConfig.featureCardsConfig" />

    <!-- 服务流程 -->
    <ProcessSteps :config="pageConfig.processStepsConfig" />

    <!-- 服务场景 -->
    <ServiceScenes
      :config="pageConfig.serviceScenesConfig"
      @scene-tap="handleSceneTap"
    />
  </view>
</template>

<script setup>
import ColdTitle from '@/components/Cold/ColdTitle/ColdTitle.vue'
import ProjectIntro from '@/components/Cold/ProjectIntro/ProjectIntro.vue'
import FeatureCards from '@/components/Cold/FeatureCards/FeatureCards.vue'
import ProcessSteps from '@/components/Cold/ProcessSteps/ProcessSteps.vue'
import ServiceScenes from '@/components/Cold/ServiceScenes/ServiceScenes.vue'

// ===== 页面配置数据 =====
const pageConfig = {
  titleConfig: {
    badgeText: '冷链物流项目',
    title: '智能冷库',
    subtitle: 'INTELLIGENT COLD STORAGE',
    description: '现代化冷链解决方案 · 恒温保鲜 · 智能监控'
  },
  projectIntroConfig: {
    image: '/static/cold/cold-main.jpg',
    label: 'PROJECT OVERVIEW',
    title: '项目概况',
    stats: [
      { value: '10000', unit: '㎡ 占地面积' },
      { value: '-25', unit: '℃ 最低温度' },
      { value: '5000', unit: '吨 日吞吐量' }
    ],
    description: '本项目采用先进的冷链物流技术，配备智能化温控系统，为生鲜食品、医药产品提供专业的仓储和配送服务。'
  },
  featureCardsConfig: {
    label: 'CORE ADVANTAGES',
    title: '核心优势',
    features: [
      { icon: '🌡️', name: '智能温控', description: '全天候自动监测，精准控温±0.5℃' },
      { icon: '📊', name: '数据可视', description: '实时数据大屏，运营状态一目了然' },
      { icon: '🚚', name: '高效配送', description: '冷链车队覆盖全省，24 小时直达' },
      { icon: '🛡️', name: '品质保障', description: 'HACCP 认证体系，全程可追溯' },
      { icon: '💡', name: '节能环保', description: '一级能效设备，绿色制冷技术' },
      { icon: '🔧', name: '专业运维', description: '7×24 小时技术支持，快速响应' }
    ]
  },
  processStepsConfig: {
    label: 'SERVICE PROCESS',
    title: '服务流程',
    steps: [
      { name: '需求咨询', duration: '即时响应', description: '专业客服一对一沟通，了解您的冷链需求' },
      { name: '方案定制', duration: '1-2 工作日', description: '根据货物特性制定个性化仓储方案' },
      { name: '签约入驻', duration: '快速办理', description: '简化流程，高效完成入库手续' },
      { name: '货物入库', duration: '预约优先', description: '专业装卸团队，确保货物安全入库' },
      { name: '仓储管理', duration: '7×24 小时', description: '智能监控，定期巡检，实时汇报' },
      { name: '出库配送', duration: '准时达', description: '冷链专车配送，全程温控记录' }
    ]
  },
  serviceScenesConfig: {
    label: 'SERVICE SCENARIOS',
    title: '服务场景',
    scenes: [
      { name: '生鲜食品', description: '果蔬、肉类、海鲜等生鲜产品恒温保鲜', image: '/static/cold/scene-fresh.jpg', tags: ['0-4℃冷藏', '湿度控制'] },
      { name: '冷冻食品', description: '速冻食品、冰淇淋等深度冷冻存储', image: '/static/cold/scene-frozen.jpg', tags: ['-18℃冷冻', '快速降温'] },
      { name: '医药产品', description: '疫苗、生物制品等专业医药冷链', image: '/static/cold/scene-pharma.jpg', tags: ['GSP 认证', '全程追溯'] },
      { name: '餐饮连锁', description: '中央厨房食材统一仓储配送', image: '/static/cold/scene-restaurant.jpg', tags: ['批量存储', '定时配送'] }
    ]
  }
}

// ===== 事件处理函数 =====
const handleSceneTap = (scene) => {
  uni.showToast({
    title: `查看：${scene.name}`,
    icon: 'none'
  })
}
</script>

<style lang="scss" scoped>
.cold-page {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(230, 240, 250, 0.5), rgba(248, 249, 250, 1));
}
</style>
