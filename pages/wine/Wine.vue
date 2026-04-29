<template>
  <view class="wine-page">
    <!-- 顶部导航栏 - 滚动到一定距离后显示 -->
    <PageHeader
      :visible="showHeader"
      title="酒水精选"
      :menu-icon-url="headerMenuIconUrl"
    />

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
import { ref } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';
import PageHeader from '@/components/common/PageHeader/PageHeader.vue';
import WineTitle from '@/components/wine/WineTitle/WineTitle.vue';
import WineBanner from '@/components/wine/WineBanner/WineBanner.vue';
import WineTiles from '@/components/wine/WineTiles/WineTiles.vue';
import WineTopSellers from '@/components/wine/WineTopSellers/WineTopSellers.vue';
import WineUseCases from '@/components/wine/WineUseCases/WineUseCases.vue';
import WineContact from '@/components/wine/WineContact/WineContact.vue';

// 控制 Header 显示/隐藏
const showHeader = ref(false);
const headerShowThreshold = 100;
const headerMenuIconUrl = '/static/home/NavGrid/酒水.png';

// 使用 uni-app 的 onPageScroll 生命周期
onPageScroll((e) => {
  const scrollTop = e.scrollTop;
  showHeader.value = scrollTop > headerShowThreshold;
});
</script>

<style lang="scss" scoped>
.wine-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff9f0 0%, #fef5e8 50%, #f5e6d3 100%);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
