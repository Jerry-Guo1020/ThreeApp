<template>
  <view class="wine-title-section" :style="containerStyle">
    <view class="title-content" :style="{ paddingTop: safeAreaTop + 'px' }">
      <view class="title-header">
        <view class="title-badge">
          <text class="badge-icon">🍶</text>
          <text class="badge-text">{{ badgeText }}</text>
        </view>
      </view>
      <text class="title-main">{{ title }}</text>
      <text class="title-subtitle">{{ subtitle }}</text>
      <view class="title-divider"></view>
      <text class="title-desc">{{ description }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  badgeText: {
    type: String,
    default: '粤叁荟官方小程序'
  },
  title: {
    type: String,
    default: '臻选佳酿'
  },
  subtitle: {
    type: String,
    default: 'PREMIUM CANTONESE SPIRITS'
  },
  description: {
    type: String,
    default: '岭南文化 · 匠心酿造 · 传承经典'
  }
});

const statusBarHeight = ref(0);
const navBarHeight = ref(44);
const safeAreaTop = ref(0);

onMounted(() => {
  const systemInfo = uni.getSystemInfoSync();
  statusBarHeight.value = systemInfo.statusBarHeight || 20;

  // #ifdef MP-WEIXIN
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  navBarHeight.value = menuButtonInfo.top + menuButtonInfo.height + 6;
  safeAreaTop.value = statusBarHeight.value;
  // #endif

  // #ifndef MP-WEIXIN
  navBarHeight.value = 44;
  safeAreaTop.value = statusBarHeight.value;
  // #endif
});

const containerStyle = computed(() => ({
  '--status-bar-height': statusBarHeight.value + 'rpx',
  '--nav-bar-height': navBarHeight.value + 'rpx',
  '--safe-area-top': safeAreaTop.value + 'rpx'
}));
</script>

<style lang="scss" scoped>
.wine-title-section {
  width: 100%;
  padding: 40rpx 40rpx 40rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(255, 248, 240, 0.9) 0%, rgba(255, 250, 245, 1) 100%);
}

.title-content {
  display: flex;
  flex-direction: column;
}

.title-header {
  margin-bottom: 20rpx;
}

.title-badge {
  display: inline-flex;
  align-items: center;
  padding: 10rpx 24rpx;
  background: linear-gradient(135deg, rgba(184, 134, 11, 0.12), rgba(212, 175, 55, 0.06));
  border-radius: 20rpx;
  border: 1rpx solid rgba(184, 134, 11, 0.15);
}

.badge-icon {
  font-size: 28rpx;
  margin-right: 12rpx;
}

.badge-text {
  font-size: 24rpx;
  color: #b8860b;
  font-weight: 600;
  letter-spacing: 2px;
}

.title-main {
  font-size: 72rpx;
  font-weight: 900;
  color: #8b4513;
  letter-spacing: 16px;
  line-height: 1.1;
  margin-bottom: 16rpx;
  text-shadow: 2rpx 2rpx 4rpx rgba(139, 69, 19, 0.15);
}

.title-subtitle {
  font-size: 26rpx;
  color: #999999;
  font-weight: 500;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 32rpx;
}

.title-divider {
  width: 100%;
  height: 2rpx;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  margin-bottom: 32rpx;
  max-width: 300rpx;
}

.title-desc {
  font-size: 26rpx;
  color: #666666;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.5;
}
</style>
