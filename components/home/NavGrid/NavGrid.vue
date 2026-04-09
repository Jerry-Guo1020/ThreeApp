<template>
  <view class="nav-grid">
    <view class="nav-item" v-for="(item, index) in navList" :key="index" @click="handleClick(item)">
      <view class="nav-icon-box" :style="'background-color: ' + item.bgColor">
        <text class="nav-icon" :style="iconStyle">{{ item.icon }}</text>
      </view>
      <text class="nav-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const iconStyle = {
  fontSize: '56rpx',
  lineHeight: '56rpx',
  
};

const navList = ref([
  {
    name: '冷库工程',
    icon: '❄️',
    bgColor: '#e8f4fd',
    linkUrl: '/pages/cold/cold'
  },
  {
    name: '酒水精选',
    icon: '🍷',
    bgColor: '#fdedec',
    linkUrl: '/pages/wine/wine'
  },
  {
    name: '岭南特产',
    icon: '🍊',
    bgColor: '#fef4e8',
    linkUrl: '/pages/Specialty/Specialty'
  },
  {
    name: '设计定制',
    icon: '🎨',
    bgColor: '#f4e8fd',
    linkUrl: ''
  }
]);

const handleClick = (item) => {
  if (item.linkUrl) {
    uni.navigateTo({
      url: item.linkUrl
    });
  }
};
</script>

<style scoped>
.nav-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 24rpx;
  padding: 20rpx 30rpx 40rpx;
}

.nav-item {
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-icon-box {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16rpx;
  transition: transform 0.2s;
}

.nav-item:active .nav-icon-box {
  transform: scale(0.92);
}

.nav-icon {
  width: 56rpx;
  height: 56rpx;
}

.nav-text {
  font-size: 24rpx;
  color: #43474e;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
}
</style>
