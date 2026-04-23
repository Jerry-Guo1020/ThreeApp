<template>
  <view class="stats-grid">
    <view class="stat-card">
      <text class="stat-label">已完成咨询</text>
      <text class="stat-value">12</text>
    </view>
    <view class="stat-card">
      <text class="stat-label">收藏项目</text>
      <text class="stat-value">08</text>
    </view>
  </view>
</template>

<script setup>
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  margin-bottom: 40rpx;
  padding: 0 30rpx;
}

.stat-card {
  background-color: #ffffff;
  padding: 30rpx;
  border-radius: 16rpx;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  border-bottom: 2rpx solid rgba(0, 32, 70, 0.1);
}

.stat-card:last-child {
  border-bottom-color: rgba(119, 90, 10, 0.1);
}

.stat-label {
  font-size: 20rpx;
  font-weight: 700;
  color: #775a0a;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8rpx;
}

.stat-value {
  font-size: 48rpx;
  font-weight: 900;
  color: #002046;
  font-family: 'Manrope', sans-serif;
}
</style>
