<template>
  <view class="brand-story" :style="containerStyle">
    <view class="story-card">
      <!-- 左侧装饰图案 -->
      <view class="story-decoration">
        <view class="decoration-icon">🏮</view>
        <view class="decoration-pattern"></view>
      </view>

      <!-- 右侧内容区域 -->
      <view class="story-content">
        <view class="story-header">
          <text class="story-label">{{ config.label }}</text>
          <text class="story-title">{{ config.title }}</text>
        </view>

        <view class="story-divider"></view>

        <text class="story-description">{{ config.description }}</text>

        <view class="story-footer">
          <text class="footer-slogan">{{ config.slogan }}</text>
        </view>
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
      label: 'ABOUT SPECIALTY',
      title: '关于特产',
      description: '广东特产源远流长，承载着岭南大地千年的饮食文化。从清远走地鸡的鲜嫩多汁，到英德红茶的醇厚香甜，每一款特产都是大自然与匠人智慧的完美结合。',
      highlights: [
        { icon: '🌿', value: '原产地直供', description: '正宗产地' },
        { icon: '✋', value: '手工制作', description: '传统工艺' },
        { icon: '✅', value: '品质保证', description: '严格筛选' }
      ],
      slogan: '岭南风味 · 传承经典'
    })
  }
});

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--bg-cream': '#fff9eb',
  '--navy-blue': '#002046'
}));
</script>

<style lang="scss" scoped>
.brand-story {
  width: 100%;
  padding: 0 30rpx 50rpx;
  box-sizing: border-box;
}

.story-card {
  display: flex;
  background: linear-gradient(135deg, rgba(255, 249, 235, 0.9), rgba(255, 255, 255, 0.95));
  border-radius: 32rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 32rpx rgba(0, 32, 70, 0.1);
  border: 1rpx solid rgba(212, 175, 55, 0.15);
}

.story-decoration {
  width: 180rpx;
  background: linear-gradient(180deg, #d4af37, #b8860b);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.decoration-icon {
  font-size: 80rpx;
  z-index: 1;
}

.decoration-pattern {
  position: absolute;
  bottom: -50rpx;
  left: -50rpx;
  width: 200rpx;
  height: 200rpx;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.story-content {
  flex: 1;
  padding: 40rpx 36rpx;
  display: flex;
  flex-direction: column;
}

.story-header {
  margin-bottom: 20rpx;
}

.story-label {
  display: block;
  font-size: 20rpx;
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10rpx;
}

.story-title {
  display: block;
  font-size: 40rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 4px;
}

.story-divider {
  width: 80rpx;
  height: 3rpx;
  background: linear-gradient(90deg, #d4af37, transparent);
  margin-bottom: 24rpx;
  border-radius: 2rpx;
}

.story-description {
  font-size: 26rpx;
  color: #333333;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 28rpx;
}

.story-footer {
  text-align: center;
  padding-top: 20rpx;
  border-top: 1rpx solid rgba(212, 175, 55, 0.2);
}

.footer-slogan {
  font-size: 28rpx;
  color: #b8860b;
  font-weight: 600;
  letter-spacing: 4px;
}
</style>
