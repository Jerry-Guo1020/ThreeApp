<template>
  <view class="nav-grid">
    <view class="nav-item" v-for="(item, index) in navList" :key="index" @click="handleClick(item)">
      <view class="nav-icon-box" :style="'background-color: ' + item.bgColor">
        <image class="nav-icon" :style="iconStyle" :src="item.iconUrl"></image>
      </view>
      <text class="nav-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const iconStyle = {
  width: '56rpx',
  height: '56rpx',
};

const navList = ref([
  {
    name: '冷库工程',
    iconUrl: '/static/home/NavGrid/冷库.png',
    bgColor: '#ffffff',
    linkUrl: '/pages/cold/cold'
  },
  {
    name: '酒水精选',
    iconUrl: '/static/home/NavGrid/酒水.png',
    bgColor: '#fdedec',
    linkUrl: '/pages/wine/wine'
  },
  {
    name: '岭南特产',
    iconUrl: '/static/home/NavGrid/特产.png',
    bgColor: '#fef4e8',
    linkUrl: '/pages/Specialty/Specialty'
  },
  
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
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 14rpx;
  padding: 20rpx 30rpx 40rpx;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-icon-box {
  width: 96rpx;
  height: 96rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12rpx;
  transition: transform 0.2s;
}

.nav-item:active .nav-icon-box {
  transform: scale(0.92);
}

.nav-icon {
  width: 56rpx;
  height: 56rpx;
  display: block;
  object-fit: contain;
}

.nav-text {
  font-size: 24rpx;
  color: #43474e;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
</style>
