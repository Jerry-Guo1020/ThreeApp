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
    name: '专属特惠',
    icon: '🏷️',
    bgColor: 'linear-gradient(135deg, #FFE4E6 0%, #FFD6E0 100%)'
  },
  {
    name: '节日礼品',
    icon: '🎁',
    bgColor: 'linear-gradient(135deg, #FFF4E6 0%, #FFE8D0 100%)'
  },
  {
    name: '优先关怀',
    icon: '🛡️',
    bgColor: 'linear-gradient(135deg, #E6F4E8 0%, #D8E8DC 100%)'
  }
]);
</script>

<style scoped>
.member-benefits {
  display: flex;
  justify-content: space-around;
  padding: 20rpx 30rpx 40rpx;
  background: linear-gradient(180deg, #FDF6F0 0%, #FFF8F3 100%);
}

.benefit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.benefit-icon-box {
  width: 100rpx;
  height: 100rpx;
  border-radius: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.benefit-icon-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 60%);
  border-radius: 50%;
}

.benefit-icon {
  font-size: 44rpx;
  position: relative;
  z-index: 1;
}

.benefit-text {
  font-size: 22rpx;
  color: #6B5B4F;
  font-weight: 500;
  text-align: center;
}
</style>
