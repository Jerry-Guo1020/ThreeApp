<template>
  <view class="orders-section">
    <view class="orders-header">
      <text class="orders-title">我的订单</text>
      <view class="orders-more" @click="viewAllOrders">
        <text class="orders-more-text">全部订单</text>
        <text class="orders-more-arrow">›</text>
      </view>
    </view>
    <view class="orders-grid">
      <view class="order-item" v-for="(item, index) in orderTypes" :key="index" @click="handleOrderClick(item)">
        <view class="order-icon-box" :style="{ background: item.bgColor }">
          <text class="order-icon">{{ item.icon }}</text>
        </view>
        <text class="order-text">{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const orderTypes = ref([
  {
    name: '待付款',
    icon: '💳',
    bgColor: 'linear-gradient(135deg, #FFE4E6 0%, #FFD6E0 100%)'
  },
  {
    name: '待收货',
    icon: '📦',
    bgColor: 'linear-gradient(135deg, #E6F4E8 0%, #D8E8DC 100%)'
  },
  {
    name: '待评价',
    icon: '⭐',
    bgColor: 'linear-gradient(135deg, #FFF4E6 0%, #FFE8D0 100%)'
  },
  {
    name: '售后/退款',
    icon: '🔄',
    bgColor: 'linear-gradient(135deg, #E8F0F4 0%, #D8E0E8 100%)'
  }
]);

const viewAllOrders = () => {
  uni.navigateTo({
    url: '/pages/orders/orders'
  });
};

const handleOrderClick = (item) => {
  uni.navigateTo({
    url: `/pages/orders/orders?type=${item.name}`
  });
};
</script>

<style scoped>
.orders-section {
  margin: 0 30rpx 24rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  padding: 28rpx 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
}

.orders-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #F5F0EB;
}

.orders-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #5D4E37;
}

.orders-more {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.orders-more-text {
  font-size: 24rpx;
  color: #A89078;
}

.orders-more-arrow {
  font-size: 28rpx;
  color: #C4B096;
}

.orders-grid {
  display: flex;
  justify-content: space-around;
}

.order-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.order-icon-box {
  width: 88rpx;
  height: 88rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.order-icon-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 60%);
  border-radius: 50%;
}

.order-icon {
  font-size: 36rpx;
  position: relative;
  z-index: 1;
}

.order-text {
  font-size: 22rpx;
  color: #6B5B4F;
  font-weight: 500;
}
</style>
