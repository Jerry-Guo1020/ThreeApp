<template>
  <view class="me-header" :style="{ paddingTop: safeAreaTop + 'px' }">
    <view class="header-content">
      <text class="header-title">我的</text>
      <view class="header-icons">
        <text class="header-icon" @click="handleMenu">⋮</text>
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

const handleMenu = () => {
  uni.showActionSheet({
    itemList: ['设置', '帮助与反馈', '关于我们'],
    success: (res) => {
      console.log('选中了第' + res.tapIndex + '个选项');
    }
  });
};
</script>

<style scoped>
.me-header {
  width: 100%;
  background: linear-gradient(180deg, #FDF6F0 0%, #FFF8F3 100%);
  padding-bottom: 20rpx;
  box-sizing: border-box;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
}

.header-title {
  font-size: 40rpx;
  font-weight: 700;
  color: #8B7355;
  letter-spacing: 2px;
}

.header-icons {
  display: flex;
  gap: 20rpx;
}

.header-icon {
  font-size: 40rpx;
  color: #8B7355;
  padding: 10rpx;
}
</style>
