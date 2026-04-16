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
    name: '产品中心',
    icon: '🏢',
    bgColor: 'linear-gradient(135deg, #E0F2FE 0%, #B8D4E8 100%)',
    url: '/pages/products/products'
  },
  {
    name: '解决方案',
    icon: '💡',
    bgColor: 'linear-gradient(135deg, #E8F5E9 0%, #B8D4C0 100%)',
    url: '/pages/solutions/solutions'
  },
  {
    name: '商务合作',
    icon: '🤝',
    bgColor: 'linear-gradient(135deg, #FFF8E1 0%, #E8D4B0 100%)',
    url: '/pages/partner/partner'
  },
  {
    name: '样品申请',
    icon: '📋',
    bgColor: 'linear-gradient(135deg, #FCE4EC 0%, #E8C0D0 100%)',
    url: '/pages/sample/sample'
  },
  {
    name: '资讯中心',
    icon: '📰',
    bgColor: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
    url: '/pages/news/news'
  },
  {
    name: '关于我们',
    icon: 'ℹ️',
    bgColor: 'linear-gradient(135deg, #EDE7F6 0%, #D1C4E9 100%)',
    url: '/pages/about/about'
  },
  {
    name: '联系客服',
    icon: '💬',
    bgColor: 'linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)',
    url: '/pages/contact/contact'
  },
  {
    name: '帮助中心',
    icon: '❓',
    bgColor: 'linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 100%)',
    url: '/pages/help/help'
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
  gap: 20rpx 16rpx;
  padding: 24rpx 30rpx;
  background: #FFFFFF;
  margin: 0 30rpx 20rpx;
  border-radius: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(30, 58, 95, 0.06);
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.service-icon-box {
  width: 76rpx;
  height: 76rpx;
  border-radius: 18rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 4rpx 12rpx rgba(30, 58, 95, 0.08);
}

.service-item:active .service-icon-box {
  transform: scale(0.92);
}

.service-icon {
  font-size: 32rpx;
  position: relative;
  z-index: 1;
}

.service-text {
  font-size: 20rpx;
  color: #3D5A7A;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}
</style>
