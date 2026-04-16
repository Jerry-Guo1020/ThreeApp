<template>
  <view class="promotion-banners">
    <view class="banner-item" v-for="(item, index) in banners" :key="index" @click="handleBannerClick(item)">
      <view class="banner-content" :style="{ background: item.bgColor }">
        <view class="banner-text-content">
          <text class="banner-title">{{ item.title }}</text>
          <text class="banner-desc">{{ item.description }}</text>
        </view>
        <text class="banner-emoji">{{ item.emoji }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const banners = ref([
  {
    title: '健康礼包',
    description: '为您和家人的健康护航',
    emoji: '🌿',
    bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
    url: '/pages/promotion/health'
  },
  {
    title: '感恩节活动',
    description: '暖心好礼感恩回馈',
    emoji: '🦃',
    bgColor: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
    url: '/pages/promotion/thanksgiving'
  },
  {
    title: '社群福利中心',
    description: '专属妈妈社群特权',
    emoji: '🌸',
    bgColor: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
    url: '/pages/promotion/community'
  }
]);

const handleBannerClick = (item) => {
  uni.navigateTo({
    url: item.url
  });
};
</script>

<style scoped>
.promotion-banners {
  display: flex;
  gap: 20rpx;
  padding: 0 30rpx 24rpx;
}

.banner-item {
  flex: 1;
  border-radius: 20rpx;
  overflow: hidden;
}

.banner-content {
  height: 180rpx;
  border-radius: 20rpx;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.banner-content::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -30%;
  width: 100rpx;
  height: 100rpx;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
}

.banner-text-content {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  z-index: 1;
}

.banner-title {
  font-size: 26rpx;
  font-weight: 700;
  color: #5D4037;
}

.banner-desc {
  font-size: 20rpx;
  color: #8D6E63;
}

.banner-emoji {
  font-size: 48rpx;
  text-align: right;
  z-index: 1;
}
</style>
