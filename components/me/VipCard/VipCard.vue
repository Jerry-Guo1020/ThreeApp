<template>
  <view class="vip-card">
    <view class="vip-content">
      <view class="vip-left">
        <view class="vip-badge">
          <text class="vip-crown">👑</text>
        </view>
        <text class="vip-title">VIP 妈妈会员</text>
        <text class="vip-subtitle">每月尊享爱意 & 特权</text>
      </view>
      <view class="vip-right">
        <view class="vip-btn" @click="openVip">
          <text class="vip-btn-text">立即开卡</text>
        </view>
      </view>
    </view>
    <view class="vip-decoration"></view>
  </view>
</template>

<script setup>
const openVip = () => {
  uni.navigateTo({
    url: '/pages/vip/vip'
  });
};
</script>

<style scoped>
.vip-card {
  margin: 20rpx 30rpx;
  border-radius: 32rpx;
  overflow: hidden;
  background: linear-gradient(135deg, #D4A5A5 0%, #C9A88A 50%, #D4B89A 100%);
  position: relative;
  box-shadow: 0 8rpx 32rpx rgba(212, 165, 165, 0.4);
}

.vip-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32rpx 28rpx;
  position: relative;
  z-index: 2;
}

.vip-left {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.vip-badge {
  width: 64rpx;
  height: 64rpx;
  background: linear-gradient(135deg, #FFE4B5 0%, #FFD7A0 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rpx;
}

.vip-crown {
  font-size: 32rpx;
}

.vip-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #5D4037;
  letter-spacing: 1px;
}

.vip-subtitle {
  font-size: 22rpx;
  color: #8D6E63;
  font-weight: 400;
}

.vip-right {
  display: flex;
  align-items: center;
}

.vip-btn {
  background: linear-gradient(135deg, #FFD54F 0%, #FFC107 100%);
  padding: 16rpx 36rpx;
  border-radius: 28rpx;
  box-shadow: 0 4rpx 16rpx rgba(255, 193, 7, 0.4);
}

.vip-btn-text {
  font-size: 26rpx;
  font-weight: 600;
  color: #5D4037;
}

.vip-decoration {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 200rpx;
  height: 200rpx;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}
</style>
