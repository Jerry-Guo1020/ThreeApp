<template>
  <view class="home-title-section" :style="containerStyle">
    <view class="title-content" :style="{ paddingTop: safeAreaTop + 'px' }">
      <text class="title-subtitle">{{ subtitle }}</text>
      <text class="title-main">{{ title }}</text>
      <text class="title-desc">{{ description }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

defineProps({
  title: {
    type: String,
    default: '粤叁荟'
  },
  subtitle: {
    type: String,
    default: 'LINGNAN SELECTION'
  },
  description: {
    type: String,
    default: '岭南甄选 · 品质保证'
  }
});

const statusBarHeight = ref(0);
const navBarHeight = ref(44);
const safeAreaTop = ref(0);

onMounted(() => {
  // 获取系统信息
  const systemInfo = uni.getSystemInfoSync();
  statusBarHeight.value = systemInfo.statusBarHeight || 20;

  // 计算导航栏高度（胶囊按钮高度通常为 44px，不同机型可能不同）
  // 微信小程序可以通过 getMenuButtonBoundingClientRect 获取胶囊信息
  // #ifdef MP-WEIXIN
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  navBarHeight.value = menuButtonInfo.top + menuButtonInfo.height + 6;
  safeAreaTop.value = statusBarHeight.value;
  // #endif

  // H5 和 App 端
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

<style scoped>
.home-title-section {
  width: 100%;
  padding-left: 30rpx;
  padding-right: 30rpx;
  padding-top: var(--safe-area-top);
  padding-bottom: 30rpx;
  box-sizing: border-box;
}

.title-content {
  display: flex;
  flex-direction: column;
}

.title-subtitle {
  font-size: 20rpx;
  color: #d4af37;
  letter-spacing: 3px;
  font-weight: 600;
  margin-bottom: 12rpx;
}

.title-main {
  font-size: 48rpx;
  color: #002046;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.1;
  margin-bottom: 16rpx;
}

.title-desc {
  font-size: 24rpx;
  color: #666666;
  font-weight: 400;
  letter-spacing: 1px;
}
</style>
