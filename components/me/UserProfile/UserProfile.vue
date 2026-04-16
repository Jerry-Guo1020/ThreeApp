<template>
  <view class="user-profile">
    <view class="avatar-container">
      <image class="avatar" :src="avatarUrl" mode="aspectFill"></image>
    </view>
    <view class="user-info">
      <text class="user-name">{{ userName }}</text>
      <text class="user-id">ID: {{ userId }}</text>
    </view>
    <view class="settings-icon" @click="goToSettings">
      <text class="settings-arrow">›</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const avatarUrl = ref('/static/me/avatar-default.png');
const userName = ref('粤叁荟会员');
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
  padding: 24rpx 30rpx;
  background: linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%);
}

.avatar-container {
  margin-right: 24rpx;
}

.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%);
  border: 3rpx solid rgba(255, 255, 255, 0.8);
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.user-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #1E3A5F;
}

.user-id {
  font-size: 22rpx;
  color: #6B8A9E;
}

.settings-icon {
  padding: 20rpx;
}

.settings-arrow {
  font-size: 40rpx;
  color: #9AB5C6;
}
</style>
