<template>
  <view class="wine-banner" :style="bannerStyle">
    <!-- 背景装饰 -->
    <view class="banner-bg-decoration">
      <view class="bg-pattern-lingnan"></view>
      <view class="bg-pattern-skyline"></view>
    </view>

    <!-- 主体内容 -->
    <view class="banner-content">
      <view class="banner-left">
        <text class="banner-brand">粤叁荟</text>
        <text class="banner-slogan">臻选佳酿 汇聚湾区</text>
      </view>
      <view class="banner-right">
        <image class="banner-bottle" :src="bottleImage" mode="aspectFit"></image>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  brandText: {
    type: String,
    default: '粤叁荟'
  },
  sloganText: {
    type: String,
    default: '臻选佳酿 汇聚湾区'
  },
  bottleImageUrl: {
    type: String,
    default: '/static/wine/波本蓝君邑 xo 产品.jpg'
  }
});

const bannerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--cream-bg': '#fff9f0',
  '--coral-red': '#c9a959'
}));
</script>

<style lang="scss" scoped>
.wine-banner {
  width: 100%;
  height: 420rpx;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg,
    #fff9f0 0%,
    #fff5e6 30%,
    #fef9e7 60%,
    #fff9f0 100%);
}

.banner-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.bg-pattern-lingnan {
  position: absolute;
  top: 20rpx;
  left: 20rpx;
  right: 0;
  height: 150rpx;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 40rpx,
      rgba(184, 134, 11, 0.3) 40rpx,
      rgba(184, 134, 11, 0.3) 42rpx
    );
}

.bg-pattern-skyline {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background:
    linear-gradient(
      to top,
      rgba(212, 175, 55, 0.2),
      transparent
    );
}

.banner-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40rpx 50rpx;
}

.banner-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-brand {
  font-size: 64rpx;
  font-weight: 900;
  color: #8b4513;
  letter-spacing: 8px;
  text-shadow: 2rpx 2rpx 4rpx rgba(139, 69, 19, 0.2);
  margin-bottom: 16rpx;
}

.banner-slogan {
  font-size: 32rpx;
  color: #b8860b;
  font-weight: 500;
  letter-spacing: 4px;
}

.banner-right {
  width: 320rpx;
  height: 320rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-bottle {
  width: 280rpx;
  height: 280rpx;
  object-fit: contain;
}
</style>
