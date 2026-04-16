<template>
  <view class="wine-top-sellers" :style="containerStyle">
    <view class="sellers-header">
      <text class="sellers-title">【粤叁荟热销榜】</text>
      <view class="sellers-divider"></view>
    </view>

    <view class="sellers-list">
      <view
        class="seller-item"
        v-for="(item, index) in sellers"
        :key="index"
        @click="handleSellerTap(item)"
      >
        <view class="seller-rank" :class="'rank-' + (index + 1)">
          <text class="rank-number">{{ index + 1 }}</text>
        </view>
        <image class="seller-image" :src="item.imageUrl" mode="aspectFit"></image>
        <view class="seller-info">
          <text class="seller-name">{{ item.name }}</text>
          <text class="seller-desc">{{ item.description }}</text>
        </view>
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

const sellers = ref([
  {
    name: '波本蓝君邑 XO',
    description: '高端威士忌 · 醇厚绵柔',
    imageUrl: '/static/wine/波本蓝君邑 xo 产品.jpg'
  },
  {
    name: '福莱好日子',
    description: '喜庆专用酒 · 佳节必备',
    imageUrl: '/static/wine/福莱好日子.jpg'
  },
  {
    name: '西凤酒',
    description: '千年传承 · 凤香经典',
    imageUrl: '/static/wine/西凤酒.jpg'
  }
]);

const handleSellerTap = (item) => {
  uni.showToast({
    title: `查看：${item.name}`,
    icon: 'none',
    duration: 1500
  });
};
</script>

<style lang="scss" scoped>
.wine-top-sellers {
  width: 100%;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, #fef5e8 0%, #fff9f0 100%);
}

.sellers-header {
  margin-bottom: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sellers-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #8b4513;
  letter-spacing: 2px;
}

.sellers-divider {
  width: 60rpx;
  height: 3rpx;
  background: linear-gradient(90deg, #d4af37, transparent);
  margin-top: 12rpx;
  border-radius: 2rpx;
}

.sellers-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.seller-item {
  display: flex;
  align-items: center;
  padding: 20rpx 24rpx;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16rpx;
  border: 1rpx solid rgba(212, 175, 55, 0.15);
  box-shadow: 0 4rpx 16rpx rgba(184, 134, 11, 0.08);
  transition: transform 0.2s;
}

.seller-item:active {
  transform: scale(0.98);
}

.seller-rank {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
  flex-shrink: 0;
}

.rank-1 {
  background: linear-gradient(135deg, #ffd700, #ffec8b);
  border: 2rpx solid #d4af37;
}

.rank-2 {
  background: linear-gradient(135deg, #c0c0c0, #e8e8e8);
  border: 2rpx solid #a0a0a0;
}

.rank-3 {
  background: linear-gradient(135deg, #cd7f32, #e4a96d);
  border: 2rpx solid #b8860b;
}

.rank-number {
  font-size: 24rpx;
  font-weight: 900;
  color: #8b4513;
}

.seller-image {
  width: 80rpx;
  height: 80rpx;
  margin-right: 20rpx;
  object-fit: contain;
  flex-shrink: 0;
}

.seller-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.seller-name {
  font-size: 28rpx;
  font-weight: 700;
  color: #8b4513;
  margin-bottom: 6rpx;
}

.seller-desc {
  font-size: 22rpx;
  color: #999999;
}
</style>
