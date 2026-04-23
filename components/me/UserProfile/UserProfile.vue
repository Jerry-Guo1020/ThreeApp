<template>
  <view class="user-profile" :style="containerStyle">
    <view class="avatar-wrapper">
      <image class="avatar" :src="userAvatar" mode="aspectFill" />
      <view class="verified-badge">
        <text class="verified-icon">&#xe947;</text>
      </view>
    </view>
    <view class="user-info">
      <text class="username">{{ userName }}</text>
      <view class="user-tags">
        <text class="premium-tag">Premium Member</text>
        <text class="join-date">加入时间：{{ joinDate }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const userAvatar = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuAy8bOXdnt5KixxPcmn7nFDm8NOTxkL3TPc39RzNvdWm8ZHmL4wi6SVqutfjNgiaRM3qFjxEsSHHGBPDXzPsWDi0A0oJoO7C47Xi07BtC3P9Kkie4-4sOJLwudr4wvb3hfcZfWS9HaYG-lpHgxZ7-iIlAnyM56nhdOrlBPv0xUK29N_lXdMuvO1IEiVW0ax4Qetknw3Kb4OrWoKRepeI8iWpnEApKw_wK_QFhZIpmvpkUc-2KZIjwAhH1cOsSzywHfvbMzsmJSC-cw');
const userName = ref('窖藏会员_5829');
const joinDate = ref('2023.10.15');

const statusBarHeight = ref(0);
const safeAreaTop = ref(0);

onMounted(() => {
  const systemInfo = uni.getSystemInfoSync();
  statusBarHeight.value = systemInfo.statusBarHeight || 20;

  // #ifdef MP-WEIXIN
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  safeAreaTop.value = statusBarHeight.value;
  // #endif

  // #ifndef MP-WEIXIN
  safeAreaTop.value = statusBarHeight.value;
  // #endif
});

const containerStyle = computed(() => ({
  '--safe-area-top': safeAreaTop.value + 'rpx'
}));
</script>

<style scoped>
.user-profile {
  width: 100%;
  padding-left: 30rpx;
  padding-right: 30rpx;
  padding-top: var(--safe-area-top);
  padding-bottom: 20rpx;
  margin-top: 150rpx;
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
  gap: 30rpx;
  box-sizing: border-box;
}

.avatar-wrapper {
  position: relative;
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  overflow: hidden;
  border: 4rpx solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
}

.verified-badge {
  position: absolute;
  bottom: 4rpx;
  right: 4rpx;
  background-color: #fdd57d;
  padding: 6rpx;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.verified-icon {
  font-size: 24rpx;
  color: #ffffff;
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

.user-info {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  flex: 1;
}

.username {
  font-size: 36rpx;
  font-weight: 700;
  color: #002046;
  letter-spacing: 1px;
  font-family: 'Manrope', sans-serif;
}

.user-tags {
  display: flex;
  align-items: center;
  gap: 10rpx;
  margin-top: 6rpx;
  flex-wrap: wrap;
}

.premium-tag {
  background-color: #ffdf9c;
  color: #251a00;
  font-size: 20rpx;
  font-weight: 700;
  padding: 4rpx 16rpx;
  border-radius: 20rpx;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.join-date {
  font-size: 26rpx;
  color: #43474e;
  font-weight: 500;
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v140/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}
</style>
