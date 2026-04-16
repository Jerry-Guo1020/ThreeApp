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
    bgColor: 'linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%)'
  },
  {
    name: '待收货',
    icon: '📦',
    bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #B8D4C0 100%)'
  },
  {
    name: '待评价',
    icon: '⭐',
    bgColor: 'linear-gradient(135deg, #FFF8E1 0%, #E8D4B0 100%)'
  },
  {
    name: '售后/退款',
    icon: '🔄',
    bgColor: 'linear-gradient(135deg, #FCE4EC 0%, #E8C0D0 100%)'
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
  margin: 0 30rpx 20rpx;
  background: #FFFFFF;
  border-radius: 20rpx;
  padding: 28rpx 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(30, 58, 95, 0.06);
}

.orders-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #E8F0F5;
}

.orders-title {
  font-size: 28rpx;
  font-weight: 600;
  color: #1E3A5F;
}

.orders-more {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.orders-more-text {
  font-size: 24rpx;
  color: #6B8A9E;
}

.orders-more-arrow {
  font-size: 28rpx;
  color: #9AB5C6;
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
  width: 84rpx;
  height: 84rpx;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 12rpx rgba(30, 58, 95, 0.08);
}

.order-icon {
  font-size: 36rpx;
}

.order-text {
  font-size: 22rpx;
  color: #3D5A7A;
  font-weight: 500;
}
</style>
