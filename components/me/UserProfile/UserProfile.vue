<template>
  <view class="user-profile">
    <view class="avatar-container">
      <image class="avatar" :src="avatarUrl" mode="aspectFill"></image>
      <view class="avatar-border"></view>
    </view>
    <view class="user-info">
      <text class="user-id">{{ userId }}</text>
      <text class="user-welcome">亲爱的妈妈，欢迎来到您的专属空间</text>
    </view>
    <view class="settings-icon" @click="goToSettings">
      <text class="settings-arrow">›</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const avatarUrl = ref('/static/me/avatar-mom.png');
const userId = ref('OdP961365973');

const goToSettings = () => {
  uni.navigateTo({
    url: '/pages/settings/settings'
  });
};
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  padding: 30rpx 30rpx;
  background: linear-gradient(180deg, #FDF6F0 0%, #FFF8F3 100%);
}

.avatar-container {
  position: relative;
  margin-right: 24rpx;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #F5E6D3 0%, #FFE4D6 100%);
  position: relative;
  z-index: 2;
}

.avatar-border {
  position: absolute;
  top: -4rpx;
  left: -4rpx;
  right: -4rpx;
  bottom: -4rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #E8C4A8 0%, #FFD5C0 100%);
  z-index: 1;
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.user-id {
  font-size: 32rpx;
  font-weight: 600;
  color: #5D4E37;
}

.user-welcome {
  font-size: 24rpx;
  color: #A89078;
  font-weight: 400;
}

.settings-icon {
  padding: 20rpx;
}

.settings-arrow {
  font-size: 40rpx;
  color: #C4B096;
}
</style>
