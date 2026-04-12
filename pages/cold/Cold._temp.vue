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
import { ColdTitle, ProjectIntro, FeatureCards, ProcessSteps, ServiceScenes, pageConfig, handlers } from '@/components/Cold/cold.config.js'

const { handleSceneTap } = handlers
</script>

<style lang="scss" scoped>
.cold-page {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(230, 240, 250, 0.5), rgba(248, 249, 250, 1));
}
</style>
