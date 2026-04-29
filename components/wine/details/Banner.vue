<template>
  <view class="banner">
    <swiper
      class="swiper"
      :indicator-dots="true"
      :autoplay="true"
      :interval="4000"
      :duration="600"
      :circular="true"
      indicator-color="rgba(197, 160, 89, 0.3)"
      indicator-active-color="#C5A059"
    >
      <swiper-item v-for="(img, index) in images" :key="index">
        <image class="banner-image" :src="img" mode="aspectFill" />
      </swiper-item>
    </swiper>
    <view class="banner-overlay">
      <view class="product-badge">
        <text class="badge-text">经典传承</text>
      </view>
      <view class="product-name-wrap">
        <text class="product-name">西凤酒 · 十五年陈酿</text>
        <text class="product-subtitle">XIFENG LIQUOR 15-YEAR AGED</text>
      </view>
      <view class="price-row">
        <text class="price-symbol">&yen;</text>
        <text class="price-value">368</text>
        <text class="price-original">&yen;458</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  '/static/wine/西凤酒.jpg',
  '/static/wine/西凤酒.jpg',
  '/static/wine/西凤酒.jpg'
]);
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 700rpx;
  overflow: hidden;
}

.swiper {
  width: 100%;
  height: 700rpx;
}

.banner-image {
  width: 100%;
  height: 700rpx;
}

.banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30rpx 30rpx 40rpx;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
}

.product-badge {
  display: inline-block;
  margin-bottom: 16rpx;
  padding: 6rpx 20rpx;
  background: #C5A059;
  border-radius: 6rpx;
}

.badge-text {
  font-size: 22rpx;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 600;
}

.product-name-wrap {
  margin-bottom: 16rpx;
}

.product-name {
  display: block;
  font-size: 40rpx;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
  line-height: 1.3;
}

.product-subtitle {
  display: block;
  font-size: 20rpx;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 3px;
  margin-top: 6rpx;
}

.price-row {
  display: flex;
  align-items: baseline;
}

.price-symbol {
  font-size: 28rpx;
  color: #C5A059;
  font-weight: 700;
  margin-right: 4rpx;
}

.price-value {
  font-size: 52rpx;
  color: #C5A059;
  font-weight: 900;
  margin-right: 16rpx;
}

.price-original {
  font-size: 24rpx;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
}
</style>
