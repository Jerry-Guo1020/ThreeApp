<template>
  <view class="detail-page">
    <!-- 自定义导航栏 -->
    <view class="custom-nav" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="nav-content">
        <view class="nav-back" @tap="handleBack">
          <text class="nav-back-icon">‹</text>
        </view>
        
      </view>
    </view>

    <Banner />
    <Info />
    <Comment />

    <view class="bottom-safe"></view>

    <view class="bottom-bar">
      <view class="bar-left">
        <view class="bar-btn" @tap="handleShare">
          <text class="bar-icon">↗</text>
          <text class="bar-label">分享</text>
        </view>
        <view class="bar-btn" @tap="handleFavorite">
          <text class="bar-icon">{{ isFavorite ? '♥' : '♡' }}</text>
          <text class="bar-label">{{ isFavorite ? '已收藏' : '收藏' }}</text>
        </view>
      </view>
      <view class="bar-right">
        <view class="buy-btn" @tap="handleBuy">
          <text class="buy-text">立即购买</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Banner from '@/components/wine/details/Banner.vue';
import Info from '@/components/wine/details/Info.vue';
import Comment from '@/components/wine/details/Comment.vue';

const isFavorite = ref(false);
const statusBarHeight = ref(0);

onMounted(() => {
  const systemInfo = uni.getSystemInfoSync();
  statusBarHeight.value = systemInfo.statusBarHeight || 0;
});

const handleBack = () => {
  uni.navigateBack();
};

const handleShare = () => {
  uni.showToast({ title: '请点击右上角分享', icon: 'none' });
};

const handleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  uni.showToast({
    title: isFavorite.value ? '已收藏' : '已取消收藏',
    icon: 'none'
  });
};

const handleBuy = () => {
  uni.showToast({ title: '下单功能开发中', icon: 'none' });
};
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  padding-bottom: 120rpx;
}

.custom-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90rpx;
  padding: 0 20rpx;
}

.nav-back {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-back-icon {
  font-size: 48rpx;
  color: #1A1A1A;
  line-height: 1;
}

.nav-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #1A1A1A;
  letter-spacing: 2px;
}

.nav-share {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-share-icon {
  font-size: 36rpx;
  color: #1A1A1A;
}

.bottom-safe {
  height: 20rpx;
}

.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100rpx;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.06);
  z-index: 999;
}

.bar-left {
  display: flex;
  flex: 1;
}

.bar-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100rpx;
  margin-right: 20rpx;
}

.bar-icon {
  font-size: 36rpx;
  color: #8B6914;
  line-height: 1;
}

.bar-label {
  font-size: 20rpx;
  color: #999999;
  margin-top: 6rpx;
}

.bar-right {
  display: flex;
}

.buy-btn {
  height: 72rpx;
  padding: 0 50rpx;
  background: linear-gradient(135deg, #C5A059, #E8D48B);
  border-radius: 36rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buy-btn:active {
  opacity: 0.85;
}

.buy-text {
  font-size: 30rpx;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 2px;
}
</style>
