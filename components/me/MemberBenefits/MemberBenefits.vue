<template>
  <view class="member-benefits">
    <view class="benefit-item" v-for="(item, index) in benefits" :key="index">
      <view class="benefit-icon-box" :style="{ background: item.bgColor }">
        <text class="benefit-icon">{{ item.icon }}</text>
      </view>
      <text class="benefit-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const benefits = ref([
  {
    name: '采购特惠',
    icon: '💼',
    bgColor: 'linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%)'
  },
  {
    name: '专属客服',
    icon: '🎧',
    bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #B8D4C0 100%)'
  },
  {
    name: '优先配送',
    icon: '🚚',
    bgColor: 'linear-gradient(135deg, #FFF8E1 0%, #E8D4B0 100%)'
  }
]);
</script>

<style scoped>
.member-benefits {
  display: flex;
  justify-content: space-around;
  padding: 20rpx 30rpx 32rpx;
  background: linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%);
}

.benefit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.benefit-icon-box {
  width: 96rpx;
  height: 96rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(30, 58, 95, 0.1);
}

.benefit-icon {
  font-size: 40rpx;
  position: relative;
  z-index: 1;
}

.benefit-text {
  font-size: 22rpx;
  color: #3D5A7A;
  font-weight: 500;
  text-align: center;
}
</style>
