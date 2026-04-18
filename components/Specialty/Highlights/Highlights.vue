<template>
  <view class="highlights-section" >
    <view class="highlights-container">
      <view class="highlight-item" v-for="(item, index) in highlights" :key="index">
        <image
          class="highlight-icon"
          :src="item.iconUrl"
          mode="aspectFit"
          @error="handleImageError"
          lazy-load
        ></image>
        <view class="highlight-text">
          <text class="highlight-value">{{ item.value }}</text>
          <text class="highlight-desc">{{ item.description }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  highlights: {
    type: Array,
    required: false,
    default: () => [
      { iconUrl: '/static/Specialty/Highlights/原产地.png', value: '原产地直供', description: '正宗产地' },
      { iconUrl: '/static/Specialty/Highlights/手工制作.png', value: '手工制作', description: '传统工艺' },
      { iconUrl: '/static/Specialty/Highlights/安全品质.png', value: '品质保证', description: '严格筛选' }
    ]
  }
});

const handleImageError = (e) => {
  console.error('图片加载失败:', e.detail.errMsg);
};

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--bg-cream': '#fff9eb',
  '--navy-blue': '#002046'
}));
</script>

<style lang="scss" scoped>
.highlights-section {
  width: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;
  margin-top: -10rpx;
  margin-bottom: 30rpx;
}

.highlights-container {
  display: flex;
  gap: 20rpx;
  padding: 28rpx 20rpx;
  background: rgba(212, 175, 55, 0.08);
  border-radius: 20rpx;
  border: 1rpx solid rgba(212, 175, 55, 0.12);
}

.highlight-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.highlight-icon {
  width: 64rpx;
  height: 64rpx;
  margin-bottom: 12rpx;
  display: block;
  object-fit: contain;
}

.highlight-text {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.highlight-value {
  font-size: 24rpx;
  font-weight: 700;
  color: #002046;
  white-space: nowrap;
}

.highlight-desc {
  font-size: 18rpx;
  color: #999999;
  white-space: nowrap;
}
</style>
