<template>
  <view class="wine-page">
    <!-- 顶部标题 -->
    <WineTitle />

    <!-- 品牌横幅 -->
    <WineBanner />

    <!-- 核心卡片布局 -->
    <WineTiles />

    <!-- 热销榜 -->
    <WineTopSellers />

    <!-- 用途分类 -->
    <WineUseCases />

    <!-- 底部联系信息 -->
    <WineContact />

    <!-- 底部留白，避免被导航栏遮挡 -->
    <view style="height: 120rpx;"></view>

  </view>
</template>

<script setup>
import WineTitle from '@/components/wine/WineTitle/WineTitle.vue';
import WineBanner from '@/components/wine/WineBanner/WineBanner.vue';
import WineTiles from '@/components/wine/WineTiles/WineTiles.vue';
import WineTopSellers from '@/components/wine/WineTopSellers/WineTopSellers.vue';
import WineUseCases from '@/components/wine/WineUseCases/WineUseCases.vue';
import WineContact from '@/components/wine/WineContact/WineContact.vue';
</script>

<style lang="scss" scoped>
.wine-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff9f0 0%, #fef5e8 50%, #f5e6d3 100%);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
