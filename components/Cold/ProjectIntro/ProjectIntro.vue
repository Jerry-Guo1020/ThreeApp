<template>
  <view class="project-intro" :style="containerStyle">
    <view class="intro-card">
      <!-- 左侧项目图片 -->
      <view class="intro-image-wrapper">
        <image class="intro-image" :src="config.image" mode="aspectFill"></image>
        <view class="image-overlay"></view>
      </view>

      <!-- 右侧项目信息 -->
      <view class="intro-content">
        <view class="intro-header">
          <text class="intro-label">{{ config.label }}</text>
          <text class="intro-title">{{ config.title }}</text>
        </view>

        <view class="intro-stats">
          <view class="stat-item" v-for="(stat, index) in config.stats" :key="index">
            <text class="stat-value">{{ stat.value }}</text>
            <text class="stat-unit">{{ stat.unit }}</text>
          </view>
        </view>

        <view class="intro-divider"></view>

        <text class="intro-description">{{ config.description }}</text>
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
      image: '/static/cold/cold-main.jpg',
      label: 'PROJECT OVERVIEW',
      title: '项目概况',
      stats: [
        { value: '10000', unit: '㎡ 占地面积' },
        { value: '-25', unit: '℃ 最低温度' },
        { value: '5000', unit: '吨 日吞吐量' }
      ],
      description: '本项目采用先进的冷链物流技术，配备智能化温控系统，为生鲜食品、医药产品提供专业的仓储和配送服务。'
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
.project-intro {
  width: 100%;
  padding: 0 30rpx 60rpx;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(230, 240, 250, 0.5), rgba(255, 255, 255, 0.8));
}

.intro-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 32rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 32rpx rgba(0, 82, 147, 0.12);
}

.intro-image-wrapper {
  position: relative;
  width: 100%;
  height: 400rpx;
  overflow: hidden;
}

.intro-image {
  width: 100%;
  height: 100%;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 82, 147, 0.3) 100%);
}

.intro-content {
  padding: 40rpx;
}

.intro-header {
  margin-bottom: 32rpx;
}

.intro-label {
  display: block;
  font-size: 22rpx;
  color: #0078cc;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12rpx;
}

.intro-title {
  display: block;
  font-size: 48rpx;
  font-weight: 900;
  color: #005293;
  letter-spacing: 8px;
}

.intro-stats {
  display: flex;
  justify-content: space-around;
  padding: 24rpx 0;
  background: linear-gradient(135deg, rgba(230, 240, 250, 0.8), rgba(255, 255, 255, 0.5));
  border-radius: 20rpx;
  margin-bottom: 24rpx;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 40rpx;
  font-weight: 700;
  color: #005293;
  line-height: 1;
}

.stat-unit {
  font-size: 22rpx;
  color: #666666;
  margin-top: 8rpx;
}

.intro-divider {
  width: 100%;
  height: 1rpx;
  background: linear-gradient(90deg, transparent, rgba(0, 82, 147, 0.2), transparent);
  margin-bottom: 24rpx;
}

.intro-description {
  font-size: 28rpx;
  color: #333333;
  line-height: 1.8;
  text-align: justify;
}
</style>
