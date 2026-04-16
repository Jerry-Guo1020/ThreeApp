<template>
  <view class="tab-bar">
    <view class="tab-item" v-for="(item, index) in tabs" :key="index" @click="handleTabClick(item)">
      <view class="tab-icon-wrapper" :class="{ 'is-active': isActive(item.path) }">
        <view class="tab-icon-box" :class="{ 'center-glow': item.isCenter }">
          <text class="tab-icon">{{ isActive(item.path) ? item.activeIcon : item.icon }}</text>
        </view>
        <view v-if="item.isCenter && isActive(item.path)" class="center-glow-effect"></view>
      </view>
      <text class="tab-text" :class="{ 'is-active': isActive(item.path) }">{{ item.text }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { getCurrentPages } from '@dcloudio/uni-app';

const tabs = ref([
  {
    text: '首页',
    icon: '🏠',
    activeIcon: '🏠',
    path: '/pages/home/Home'
  },
  {
    text: '关怀',
    icon: '💝',
    activeIcon: '💝',
    path: '/pages/care/Care'
  },
  {
    text: '会员特权',
    icon: '👑',
    activeIcon: '👑',
    path: '/pages/privilege/Privilege',
    isCenter: true
  },
  {
    text: '爱心车',
    icon: '🛒',
    activeIcon: '🛒',
    path: '/pages/cart/Cart'
  },
  {
    text: '我的',
    icon: '👤',
    activeIcon: '👤',
    path: '/pages/me/Me'
  }
]);

const isActive = (path) => {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  return '/' + currentPage.route === path;
};

const handleTabClick = (item) => {
  if (isActive(item.path)) return;
  
  uni.switchTab({
    url: item.path
  });
};
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background: #FFFFFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -2rpx 12rpx rgba(0, 0, 0, 0.06);
  z-index: 100;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rpx;
  flex: 1;
}

.tab-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-icon-box {
  width: 56rpx;
  height: 56rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.tab-icon-box.center-glow {
  background: linear-gradient(135deg, #FFF9E6 0%, #FFF4D6 100%);
}

.is-active .tab-icon-box {
  transform: scale(1.1);
}

.center-glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80rpx;
  height: 80rpx;
  background: radial-gradient(circle, rgba(255, 213, 79, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: glow-pulse 2s infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.tab-icon {
  font-size: 40rpx;
}

.tab-text {
  font-size: 20rpx;
  color: #999999;
  font-weight: 500;
}

.tab-text.is-active {
  color: #D4A5A5;
  font-weight: 600;
}
</style>
