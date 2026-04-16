<template>
  <view class="me-header" :style="{ paddingTop: safeAreaTop + 'px' }">
    <view class="header-content">
      <text class="header-title">个人中心</text>
      <view class="header-icons">
        <text class="header-icon" @click="handleSettings">⚙️</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const safeAreaTop = ref(0);

onMounted(() => {
  const systemInfo = uni.getSystemInfoSync();
  safeAreaTop.value = systemInfo.statusBarHeight || 20;
});

const handleSettings = () => {
  uni.navigateTo({
    url: '/pages/settings/settings'
  });
};
</script>

<style scoped>
.me-header {
  width: 100%;
  background: linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%);
  padding-bottom: 16rpx;
  box-sizing: border-box;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
}

.header-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #1E3A5F;
  letter-spacing: 1px;
}

.header-icons {
  display: flex;
  gap: 20rpx;
}

.header-icon {
  font-size: 36rpx;
  padding: 10rpx;
}
</style>
