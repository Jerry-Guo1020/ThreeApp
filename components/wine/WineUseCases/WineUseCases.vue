<template>
  <view class="wine-use-cases" :style="containerStyle">
    <view class="cases-header">
      <text class="cases-title">【粤叁荟酒水用途精选】</text>
      <view class="cases-divider"></view>
    </view>

    <view class="cases-grid">
      <view
        class="case-item"
        v-for="(item, index) in useCases"
        :key="index"
        @click="handleCaseTap(item)"
      >
        <view class="case-icon-box">
          <image class="case-icon" :src="item.iconUrl" mode="aspectFit"></image>
        </view>
        <text class="case-title-text">{{ item.title }}</text>
        <text class="case-subtitle">{{ item.subtitle }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--cream-bg': '#fff9f0',
  '--warm-brown': '#8b4513'
}));

const useCases = ref([
  {
    title: '结婚宴席',
    subtitle: '百年好合',
    iconUrl: '/static/wine/福莱好日子.jpg'
  },
  {
    title: '聚会吃饭',
    subtitle: '欢聚一堂',
    iconUrl: '/static/wine/波本蓝君邑 xo 产品.jpg'
  },
  {
    title: '商务馈赠',
    subtitle: '礼尚往来',
    iconUrl: '/static/wine/西凤酒.jpg'
  },
  {
    title: '日常独饮',
    subtitle: '时光静好',
    iconUrl: '/static/wine/波本蓝君邑 xo 酒水.png'
  }
]);

const handleCaseTap = (item) => {
  uni.showToast({
    title: `${item.title} · ${item.subtitle}`,
    icon: 'none',
    duration: 1500
  });
};
</script>

<style lang="scss" scoped>
.wine-use-cases {
  width: 100%;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, #fff9f0 0%, #fef5e8 100%);
}

.cases-header {
  margin-bottom: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cases-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #8b4513;
  letter-spacing: 2px;
}

.cases-divider {
  width: 60rpx;
  height: 3rpx;
  background: linear-gradient(90deg, #d4af37, transparent);
  margin-top: 12rpx;
  border-radius: 2rpx;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.case-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32rpx 20rpx;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20rpx;
  border: 1rpx solid rgba(212, 175, 55, 0.15);
  box-shadow: 0 4rpx 16rpx rgba(184, 134, 11, 0.08);
  transition: transform 0.2s;
}

.case-item:active {
  transform: scale(0.96);
}

.case-icon-box {
  width: 100rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16rpx;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(184, 134, 11, 0.05));
  border-radius: 50%;
  border: 2rpx solid rgba(212, 175, 55, 0.2);
}

.case-icon {
  width: 64rpx;
  height: 64rpx;
  object-fit: contain;
}

.case-title-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #8b4513;
  margin-bottom: 8rpx;
}

.case-subtitle {
  font-size: 22rpx;
  color: #b8860b;
  font-weight: 500;
}
</style>
