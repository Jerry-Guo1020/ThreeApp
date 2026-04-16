<template>
  <view class="coupons-section">
    <view class="coupons-header" @click="viewAllCoupons">
      <view class="coupons-left">
        <view class="coupons-icon-box">
          <text class="coupons-icon">🎫</text>
        </view>
        <text class="coupons-title">我的优惠券</text>
      </view>
      <view class="coupons-right">
        <text class="coupons-count">{{ couponCount }}张可用</text>
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
  margin: 0 30rpx 20rpx;
  background: #FFFFFF;
  border-radius: 20rpx;
  padding: 28rpx 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(30, 58, 95, 0.06);
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
  width: 56rpx;
  height: 56rpx;
  background: linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%);
  border-radius: 14rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coupons-icon {
  font-size: 26rpx;
}

.coupons-title {
  font-size: 28rpx;
  font-weight: 600;
  color: #1E3A5F;
}

.coupons-right {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.coupons-count {
  font-size: 24rpx;
  color: #5B8BA8;
  font-weight: 500;
}

.coupons-arrow {
  font-size: 32rpx;
  color: #9AB5C6;
}
</style>
