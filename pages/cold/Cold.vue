<template>
  <view class="cold-page">
    <!-- 顶部导航栏 - 滚动到一定距离后显示 -->
    <PageHeader :visible="showHeader" title="冷库工程" @menu-click="handleMenu" @support-click="handleSupport" />

    <!-- 顶部标题 -->
    <ColdTitle
      :badge-text="pageConfig.titleConfig.badgeText"
      :title="pageConfig.titleConfig.title"
      :subtitle="pageConfig.titleConfig.subtitle"
      :description="pageConfig.titleConfig.description"
    />

    <!-- 项目概况 -->
    <ProjectIntro :config="pageConfig.projectIntroConfig" />

    <!-- 服务流程 -->
    <ProcessSteps :config="pageConfig.processStepsConfig" />

    <!-- 服务场景 -->
    <ServiceScenes
      :config="pageConfig.serviceScenesConfig"
      @scene-tap="handleSceneTap"
    />

    <!-- 社交媒体联系方式 -->
    <SocialCards />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';
import PageHeader from '@/components/common/PageHeader/PageHeader.vue';
import ColdTitle from '@/components/cold/ColdTitle/ColdTitle.vue'
import ProjectIntro from '@/components/cold/ProjectIntro/ProjectIntro.vue'
import ProcessSteps from '@/components/cold/ProcessSteps/ProcessSteps.vue'
import ServiceScenes from '@/components/cold/ServiceScenes/ServiceScenes.vue'
import SocialCards from '@/components/cold/SocialCards/SocialCards.vue'

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
    description: '我们提供专业的冷库工程建设服务，从需求咨询到施工安装一站式解决方案，为客户打造高效、节能、智能的现代化冷库。'
  },
  featureCardsConfig: {
    label: 'CORE ADVANTAGES',
    title: '核心优势',
    features: [
      { icon: '🌡️', name: '智能温控', description: '全天候自动监测，精准控温±0.5℃' },
      { icon: '📊', name: '数据可视', description: '实时数据大屏，运营状态一目了然' },
      { icon: '🔧', name: '专业施工', description: '资深工程师团队，标准化施工流程' },
      { icon: '🛡️', name: '品质保障', description: 'HACCP 认证体系，全程可追溯' },
      { icon: '💡', name: '节能环保', description: '一级能效设备，绿色制冷技术' },
      { icon: '🏗️', name: '快速交付', description: '高效施工，3-7 天完成安装调试' }
    ]
  },
  processStepsConfig: {
    label: 'SERVICE PROCESS',
    title: '服务流程',
    steps: [
      { name: '需求咨询', duration: '即时响应', description: '专业客服一对一沟通，了解您的冷库建设需求' },
      { name: '方案设计', duration: '1-2 工作日', description: '根据场地和存储需求，制定个性化冷库设计方案' },
      { name: '签约合作', duration: '快速办理', description: '明确项目细节，签订建设合同' },
      { name: '施工安装', duration: '3-7 工作日', description: '专业团队现场施工，安装制冷设备和温控系统' },
      { name: '调试验收', duration: '1-2 工作日', description: '系统联调测试，温度达标后交付验收' },
      { name: '售后运维', duration: '7×24 小时', description: '定期巡检维护，提供技术支持和故障维修服务' }
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

// 控制 Header 显示/隐藏
const showHeader = ref(false);
const headerShowThreshold = 100;

// 使用 uni-app 的 onPageScroll 生命周期
onPageScroll((e) => {
  const scrollTop = e.scrollTop;
  showHeader.value = scrollTop > headerShowThreshold;
});

const handleMenu = () => {
  uni.showToast({
    title: '菜单功能开发中',
    icon: 'none'
  });
};

const handleSupport = () => {
  uni.showToast({
    title: '客服功能开发中',
    icon: 'none'
  });
};

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
