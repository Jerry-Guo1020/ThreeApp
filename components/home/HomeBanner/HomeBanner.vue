<template>
  <view class="home-header">
    <!-- 顶部横幅广告 - 轮播图 -->
    <view class="banner-container">
      <swiper class="banner-swiper" circular :indicator-dots="true" :autoplay="true" :interval="4000" :duration="500"
        :indicator-color="'rgba(255, 255, 255, 0.5)'" :indicator-active-color="'#ffffff'">
        <swiper-item v-for="(item, index) in bannerList" :key="index">
          <view class="banner-item">
            <image class="banner-image" :src="item.imageUrl" mode="aspectFill"></image>
            <view class="banner-overlay"></view>
            <view class="banner-content">
              <text class="banner-subtitle">{{ item.subtitle }}</text>
              <text class="banner-title">{{ item.title }}</text>
              <text class="banner-desc" v-if="item.description">{{ item.description }}</text>
              <view class="banner-btn">查看工程</view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const bannerList = ref([
  {
    id: 1,
    imageUrl: '/static/home/Banner/banner1.png',
    subtitle: 'ARCHITECTURE OF COLD',
    title: '精准制冷\n定义工业美学',
    description: '智能温控技术，重新定义冷藏标准'
  },
  {
    id: 2,
    imageUrl: '/static/home/Banner/banner1.png',
    subtitle: 'PREMIUM WINE',
    title: '全球甄选\n美酒佳酿',
    description: '源自世界各地产区的正宗风味'
  },
  {
    id: 3,
    imageUrl: '/static/home/Banner/banner1.png',
    subtitle: 'LINGNAN SPECIALTY',
    title: '岭南风味\n地道特产',
    description: '传承千年的岭南文化精髓'
  },
  {
    id: 4,
    imageUrl: '/static/home/Banner/banner1.png',
    subtitle: 'CUSTOM DESIGN',
    title: '量身定制\n专属设计',
    description: '一对一专业服务，打造独特空间'
  }
]);
</script>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style scoped>
.home-header {
  width: 100%;
  height: 100%;
  margin-bottom: 20rpx;
}

.banner-container {
  position: relative;
  width: 90%;
  height: 380rpx;
  margin: 0 30rpx;
  border-radius: 32rpx;
  overflow: hidden;
}

.banner-swiper {
  width: 100%;
  height: 100%;
}

.banner-item {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 32, 70, 0.85) 0%, rgba(0, 32, 70, 0.6) 50%, rgba(0, 32, 70, 0.2) 100%);
}

.banner-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 36rpx 32rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
}

.banner-subtitle {
  font-size: 18rpx;
  color: #ffdf9c;
  letter-spacing: 3px;
  font-weight: 700;
  margin-bottom: 12rpx;
  text-transform: uppercase;
}

.banner-title {
  font-size: 36rpx;
  color: #ffffff;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 16rpx;
  white-space: pre-line;
}

.banner-desc {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20rpx;
  line-height: 1.5;
}

.banner-btn {
  background: linear-gradient(135deg, #002046 0%, #1b365d 100%);
  color: #ffffff;
  font-size: 22rpx;
  font-weight: 600;
  padding: 14rpx 36rpx;
  border-radius: 20rpx;
  text-align: center;
  width: fit-content;
  box-shadow: 0 6rpx 18rpx rgba(0, 32, 70, 0.4);
}
</style>
