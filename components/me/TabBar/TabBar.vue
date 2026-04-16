<template>
  <view class="tab-bar">
    <view class="tab-item" v-for="(item, index) in tabs" :key="index" @click="handleTabClick(item)">
      <view class="tab-icon-wrapper" :class="{ 'is-active': isActive(item.path) }">
        <view class="tab-icon-box">
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
    text: '冷库',
    icon: '❄️',
    activeIcon: '❄️',
    path: '/pages/cold/Cold'
  },
  {
    text: '酒水',
    icon: '🍷',
    activeIcon: '🍷',
    path: '/pages/wine/Wine',
    isCenter: true
  },
  {
    text: '特产',
    icon: '🎁',
    activeIcon: '🎁',
    path: '/pages/Specialty/Specialty'
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
  box-shadow: 0 -2rpx 12rpx rgba(30, 58, 95, 0.08);
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
  width: 52rpx;
  height: 52rpx;
  border-radius: 14rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.is-active .tab-icon-box {
  transform: scale(1.1);
  background: linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%);
}

.tab-icon-box.center-glow {
  background: linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%);
}

.center-glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 76rpx;
  height: 76rpx;
  background: radial-gradient(circle, rgba(30, 58, 95, 0.15) 0%, transparent 70%);
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
  font-size: 38rpx;
}

.tab-text {
  font-size: 20rpx;
  color: #9AB5C6;
  font-weight: 500;
}

.tab-text.is-active {
  color: #1E3A5F;
  font-weight: 600;
}
</style>
