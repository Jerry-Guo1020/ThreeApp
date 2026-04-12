<template>
  <view class="feature-cards" :style="containerStyle">
    <view class="cards-header">
      <text class="header-label">{{ config.label }}</text>
      <text class="header-title">{{ config.title }}</text>
    </view>

    <view class="cards-grid">
      <view
        class="feature-card"
        v-for="(feature, index) in config.features"
        :key="index"
        :style="{ animationDelay: index * 0.1 + 's' }">
        <view class="feature-icon-wrapper">
          <text class="feature-icon">{{ feature.icon }}</text>
        </view>
        <text class="feature-name">{{ feature.name }}</text>
        <text class="feature-description">{{ feature.description }}</text>
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
      label: 'CORE ADVANTAGES',
      title: '核心优势',
      features: [
        {
          icon: '🌡️',
          name: '智能温控',
          description: '全天候自动监测，精准控温±0.5℃'
        },
        {
          icon: '📊',
          name: '数据可视',
          description: '实时数据大屏，运营状态一目了然'
        },
        {
          icon: '🚚',
          name: '高效配送',
          description: '冷链车队覆盖全省，24 小时直达'
        },
        {
          icon: '🛡️',
          name: '品质保障',
          description: 'HACCP 认证体系，全程可追溯'
        },
        {
          icon: '💡',
          name: '节能环保',
          description: '一级能效设备，绿色制冷技术'
        },
        {
          icon: '🔧',
          name: '专业运维',
          description: '7×24 小时技术支持，快速响应'
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
.feature-cards {
  width: 100%;
  padding: 0 30rpx 60rpx;
  box-sizing: border-box;
  background: #ffffff;
}

.cards-header {
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

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  box-sizing: border-box;
}

.feature-card {
  min-width: 0;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(230, 240, 250, 0.6), rgba(255, 255, 255, 0.9));
  border-radius: 24rpx;
  padding: 28rpx 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4rpx 20rpx rgba(0, 82, 147, 0.08);
  border: 1rpx solid rgba(0, 82, 147, 0.08);
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2rpx 12rpx rgba(0, 82, 147, 0.06);
  }
}

.feature-icon-wrapper {
  width: 100rpx;
  height: 100rpx;
  background: linear-gradient(135deg, #e6f0fa, #f0f7ff);
  border-radius: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 82, 147, 0.12);
  border: 1rpx solid rgba(0, 82, 147, 0.1);
}

.feature-icon {
  font-size: 52rpx;
}

.feature-name {
  font-size: 30rpx;
  font-weight: 700;
  color: #005293;
  margin-bottom: 12rpx;
  letter-spacing: 2px;
}

.feature-description {
  font-size: 24rpx;
  color: #666666;
  line-height: 1.5;
}
</style>
