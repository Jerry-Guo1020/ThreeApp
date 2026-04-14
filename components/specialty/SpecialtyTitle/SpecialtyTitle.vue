<template>
  <view class="specialty-title-section" :style="containerStyle">
    <view class="title-content" :style="{ paddingTop: safeAreaTop + 'px' }">
      <view class="title-badge">
        <text class="badge-icon">🍊</text>
        <text class="badge-text">{{ badgeText }}</text>
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

defineProps({
  badgeText: {
    type: String,
    default: '岭南甄选'
  },
  title: {
    type: String,
    default: '广东特产'
  },
  subtitle: {
    type: String,
    default: 'GUANGDONG SPECIALTY'
  },
  description: {
    type: String,
    default: '地道风味 · 匠心传承 · 品质保证'
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
.specialty-title-section {
  width: 100%;
  padding: 40rpx 40rpx 30rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(255, 249, 235, 0.8) 0%, rgba(255, 255, 255, 1) 100%);
}

.title-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-badge {
  display: inline-flex;
  align-items: center;
  padding: 10rpx 28rpx;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(255, 183, 77, 0.08));
  border-radius: 24rpx;
  border: 1rpx solid rgba(212, 175, 55, 0.2);
  margin-bottom: 20rpx;
}

.badge-icon {
  font-size: 30rpx;
  margin-right: 12rpx;
}

.badge-text {
  font-size: 24rpx;
  color: #b8860b;
  font-weight: 600;
  letter-spacing: 2px;
}

.title-main {
  font-size: 68rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 14px;
  line-height: 1.1;
  margin-bottom: 16rpx;
  text-shadow: 2rpx 2rpx 4rpx rgba(0, 32, 70, 0.1);
}

.title-subtitle {
  font-size: 24rpx;
  color: #999999;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 28rpx;
}

.title-divider {
  width: 120rpx;
  height: 4rpx;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  margin-bottom: 28rpx;
  border-radius: 2rpx;
}

.title-desc {
  font-size: 26rpx;
  color: #666666;
  font-weight: 400;
  letter-spacing: 3px;
  line-height: 1.5;
}
</style>
