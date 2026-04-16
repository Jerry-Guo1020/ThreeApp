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
    title: '冷库工程',
    description: '专业冷链解决方案',
    emoji: '❄️',
    bgColor: 'linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%)',
    url: '/pages/cold/Cold'
  },
  {
    title: '高端酒水',
    description: '全球产区直供',
    emoji: '🍷',
    bgColor: 'linear-gradient(135deg, #FCE4EC 0%, #E8C0D0 100%)',
    url: '/pages/wine/Wine'
  },
  {
    title: '岭南特产',
    description: '地道地方风味',
    emoji: '🎁',
    bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #B8D4C0 100%)',
    url: '/pages/Specialty/Specialty'
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
  gap: 16rpx;
  padding: 0 30rpx 20rpx;
}

.banner-item {
  flex: 1;
  border-radius: 16rpx;
  overflow: hidden;
}

.banner-content {
  height: 160rpx;
  border-radius: 16rpx;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(30, 58, 95, 0.08);
}

.banner-text-content {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  z-index: 1;
}

.banner-title {
  font-size: 26rpx;
  font-weight: 600;
  color: #1E3A5F;
}

.banner-desc {
  font-size: 20rpx;
  color: #6B8A9E;
}

.banner-emoji {
  font-size: 44rpx;
  text-align: right;
  z-index: 1;
}
</style>
