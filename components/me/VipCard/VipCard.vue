<template>
  <view class="vip-card">
    <view class="vip-content">
      <view class="vip-left">
        <view class="vip-badge">
          <text class="vip-crown">👑</text>
        </view>
        <text class="vip-title">商务会员</text>
        <text class="vip-subtitle">尊享企业采购特权 & 专属服务</text>
      </view>
      <view class="vip-right">
        <view class="vip-btn" @click="openVip">
          <text class="vip-btn-text">立即开通</text>
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
  border-radius: 24rpx;
  overflow: hidden;
  background: linear-gradient(135deg, #1E3A5F 0%, #3D5A7A 100%);
  position: relative;
  box-shadow: 0 8rpx 32rpx rgba(30, 58, 95, 0.3);
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
  width: 56rpx;
  height: 56rpx;
  background: linear-gradient(135deg, #C9A86A 0%, #D4BC8A 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rpx;
}

.vip-crown {
  font-size: 28rpx;
}

.vip-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: 1px;
}

.vip-subtitle {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.vip-right {
  display: flex;
  align-items: center;
}

.vip-btn {
  background: linear-gradient(135deg, #C9A86A 0%, #D4BC8A 100%);
  padding: 16rpx 32rpx;
  border-radius: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(201, 168, 106, 0.4);
}

.vip-btn-text {
  font-size: 24rpx;
  font-weight: 600;
  color: #1E3A5F;
}

.vip-decoration {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 200rpx;
  height: 200rpx;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}
</style>
