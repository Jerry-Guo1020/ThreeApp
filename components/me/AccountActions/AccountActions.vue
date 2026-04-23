<template>
  <view class="account-actions">
    <view class="action-item" @click="goToSettings">
      <view class="action-left">
        <text class="action-icon">&#xe8b8;</text>
        <text class="action-text">账号设置</text>
      </view>
      <text class="arrow-icon">&#xe5cc;</text>
    </view>
  </view>
</template>

<script setup>
const goToSettings = () => {
  uni.navigateTo({
    url: '/pages/settings/settings'
  });
};
</script>

<style scoped>
.account-actions {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  margin-bottom: 40rpx;
  padding: 0 30rpx;
}

.action-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 24rpx;
  border-radius: 16rpx;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-item:active {
  background-color: #e7e8e9;
}

.action-left {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.action-icon {
  font-size: 36rpx;
  color: #43474e;
  font-family: 'Material Icons Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

.action-text {
  font-size: 28rpx;
  font-weight: 600;
  color: #191c1d;
}

.arrow-icon {
  font-size: 36rpx;
  color: rgba(67, 71, 78, 0.4);
  font-family: 'Material Icons Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v140/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}
</style>
