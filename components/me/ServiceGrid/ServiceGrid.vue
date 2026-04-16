<template>
  <view class="service-grid">
    <view class="service-item" v-for="(item, index) in services" :key="index" @click="handleServiceClick(item)">
      <view class="service-icon-box" :style="{ background: item.bgColor }">
        <text class="service-icon">{{ item.icon }}</text>
      </view>
      <text class="service-text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    name: '选品指南',
    icon: '🔍',
    bgColor: 'linear-gradient(135deg, #FFE4E6 0%, #FFD6E0 100%)',
    url: '/pages/service/guide'
  },
  {
    name: '体验官',
    icon: '🎤',
    bgColor: 'linear-gradient(135deg, #FFF4E6 0%, #FFE8D0 100%)',
    url: '/pages/service/experience'
  },
  {
    name: '邀请有礼',
    icon: '🎁',
    bgColor: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
    url: '/pages/service/invite'
  },
  {
    name: '免费试用',
    icon: '🧴',
    bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
    url: '/pages/service/trial'
  },
  {
    name: '每日乐享',
    icon: '🎲',
    bgColor: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
    url: '/pages/service/daily'
  },
  {
    name: '正品严选',
    icon: '🛡️',
    bgColor: 'linear-gradient(135deg, #EDE7F6 0%, #D1C4E9 100%)',
    url: '/pages/service/authentic'
  },
  {
    name: '商务合作',
    icon: '🤝',
    bgColor: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
    url: '/pages/service/partner'
  },
  {
    name: '客服中心',
    icon: '💬',
    bgColor: 'linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)',
    url: '/pages/service/customer'
  }
]);

const handleServiceClick = (item) => {
  uni.navigateTo({
    url: item.url
  });
};
</script>

<style scoped>
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx 16rpx;
  padding: 24rpx 30rpx;
  background: #FFFFFF;
  margin: 0 30rpx 24rpx;
  border-radius: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.service-icon-box {
  width: 80rpx;
  height: 80rpx;
  border-radius: 22rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s;
}

.service-item:active .service-icon-box {
  transform: scale(0.92);
}

.service-icon-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 60%);
  border-radius: 50%;
}

.service-icon {
  font-size: 36rpx;
  position: relative;
  z-index: 1;
}

.service-text {
  font-size: 20rpx;
  color: #6B5B4F;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}
</style>
