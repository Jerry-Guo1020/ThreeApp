<template>
  <view class="process-steps" :style="containerStyle">
    <view class="steps-header">
      <text class="header-label">{{ config.label }}</text>
      <text class="header-title">{{ config.title }}</text>
    </view>

    <view class="steps-timeline">
      <view
        class="step-item"
        v-for="(step, index) in config.steps"
        :key="index"
        :class="{ 'last-step': index === config.steps.length - 1 }">
        <view class="step-marker">
          <text class="step-number">{{ index + 1 }}</text>
        </view>
        <view class="step-content">
          <view class="step-header">
            <text class="step-name">{{ step.name }}</text>
            <text class="step-duration">{{ step.duration }}</text>
          </view>
          <text class="step-description">{{ step.description }}</text>
        </view>
        <view class="step-connector" v-if="index < config.steps.length - 1"></view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  config: {
    type: Object,
    required: true,
    default: () => ({
      label: 'SERVICE PROCESS',
      title: '服务流程',
      steps: [
        {
          name: '需求咨询',
          duration: '即时响应',
          description: '专业客服一对一沟通，了解您的冷链需求'
        },
        {
          name: '方案定制',
          duration: '1-2 工作日',
          description: '根据货物特性制定个性化仓储方案'
        },
        {
          name: '签约入驻',
          duration: '快速办理',
          description: '简化流程，高效完成入库手续'
        },
        {
          name: '货物入库',
          duration: '预约优先',
          description: '专业装卸团队，确保货物安全入库'
        },
        {
          name: '仓储管理',
          duration: '7×24 小时',
          description: '智能监控，定期巡检，实时汇报'
        },
        {
          name: '出库配送',
          duration: '准时达',
          description: '冷链专车配送，全程温控记录'
        }
      ]
    })
  }
});

const containerStyle = computed(() => ({
  '--primary-blue': '#005293',
  '--light-blue': '#0078cc',
  '--bg-light': '#e6f0fa'
}));
</script>

<style lang="scss" scoped>
.process-steps {
  width: 100%;
  padding: 0 30rpx 60rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(230, 240, 250, 0.5), rgba(255, 255, 255, 0.8));
}

.steps-header {
  text-align: center;
  margin-bottom: 48rpx;
}

.header-label {
  display: block;
  font-size: 22rpx;
  color: #0078cc;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12rpx;
}

.header-title {
  display: block;
  font-size: 44rpx;
  font-weight: 900;
  color: #005293;
  letter-spacing: 8px;
}

.steps-timeline {
  position: relative;
  padding: 20rpx 0;
  width: 100%;
  box-sizing: border-box;
}

.step-item {
  display: flex;
  position: relative;
  padding-bottom: 40rpx;
  width: 100%;
  box-sizing: border-box;

  &.last-step {
    padding-bottom: 0;
  }
}

.step-marker {
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
  margin-left: 24rpx;
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 20rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 82, 147, 0.08);
  border: 1rpx solid rgba(0, 82, 147, 0.06);
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12rpx;
}

.step-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #005293;
}

.step-duration {
  font-size: 22rpx;
  color: #0078cc;
  background: rgba(0, 120, 204, 0.1);
  padding: 6rpx 16rpx;
  border-radius: 12rpx;
  font-weight: 500;
}

.step-description {
  font-size: 26rpx;
  color: #666666;
  line-height: 1.6;
  display: block;
}

.step-connector {
  position: absolute;
  left: 40rpx;
  top: 80rpx;
  width: 2rpx;
  height: 40rpx;
  background: linear-gradient(180deg, #0078cc, rgba(0, 120, 204, 0.3));
  z-index: 0;
}
</style>
