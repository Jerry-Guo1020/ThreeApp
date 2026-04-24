<template>
  <view
    class="page-header"
    :class="{ 'header-visible': visible }"
    :style="headerStyle"
  >
    <view class="header-content">
      <view class="header-left">
        <text class="header-icon" @click="handleMenu">&#xe5d2;</text>
        <text class="header-title">{{ title }}</text>
      </view>
      <view class="header-right">
        <text class="header-icon" @click="handleSupport">&#xe947;</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '粤叁荟'
  }
});

const emit = defineEmits(['menu-click', 'support-click']);

const statusBarHeight = ref(0);
const navBarHeight = ref(44);
const safeAreaTop = ref(0);
const menuButtonWidth = ref(0);

onMounted(() => {
  const systemInfo = uni.getSystemInfoSync();
  statusBarHeight.value = systemInfo.statusBarHeight || 20;

  // #ifdef MP-WEIXIN
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  navBarHeight.value = menuButtonInfo.top + menuButtonInfo.height + 6;
  safeAreaTop.value = statusBarHeight.value;
  menuButtonWidth.value = menuButtonInfo.width + 20;
  // #endif

  // #ifndef MP-WEIXIN
  navBarHeight.value = 44;
  safeAreaTop.value = statusBarHeight.value;
  // #endif
});

const headerStyle = computed(() => ({
  paddingTop: safeAreaTop.value + 'px',
  height: navBarHeight.value + 'px',
  paddingRight: menuButtonWidth.value + 'px'
}));

const handleMenu = () => {
  emit('menu-click');
};

const handleSupport = () => {
  emit('support-click');
};
</script>

<style scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-header.header-visible {
  opacity: 1;
  transform: translateY(0);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
  width: 100%;
  box-sizing: border-box;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10rpx;
}

.header-icon {
  font-size: 40rpx;
  color: #002046;
  cursor: pointer;
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

.header-icon:active {
  opacity: 0.7;
}

.header-title {
  font-size: 32rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 2px;
  font-family: 'Manrope', sans-serif;
}

.header-right {
  display: flex;
  align-items: center;
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v140/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}
</style>
