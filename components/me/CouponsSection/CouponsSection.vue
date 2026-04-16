<template>
  <view class="coupons-section">
    <view class="coupons-header" @click="viewAllCoupons">
      <view class="coupons-left">
        <view class="coupons-icon-box">
          <text class="coupons-icon">🎀</text>
        </view>
        <text class="coupons-title">我的优惠券</text>
      </view>
      <view class="coupons-right">
        <text class="coupons-count">{{ couponCount }}张券可用</text>
        <text class="coupons-arrow">›</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const couponCount = ref(8);

const viewAllCoupons = () => {
  uni.navigateTo({
    url: '/pages/coupons/coupons'
  });
};
</script>

<style scoped>
.coupons-section {
  margin: 0 30rpx 24rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  padding: 28rpx 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
}

.coupons-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coupons-left {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.coupons-icon-box {
  width: 60rpx;
  height: 60rpx;
  background: linear-gradient(135deg, #FFF4E6 0%, #FFE8D0 100%);
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coupons-icon {
  font-size: 28rpx;
}

.coupons-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #5D4E37;
}

.coupons-right {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.coupons-count {
  font-size: 26rpx;
  color: #D4A5A5;
  font-weight: 500;
}

.coupons-arrow {
  font-size: 32rpx;
  color: #C4B096;
}
</style>
