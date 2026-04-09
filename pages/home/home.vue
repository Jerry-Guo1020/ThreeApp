<template>
  <view class="home-container">
    <!-- 标题区域 -->
    <HomeTitle />

    <!-- 顶部横幅 -->
    <HomeBanner />

    <!-- 导航网格 -->
    <NavGrid />

    <!-- 鉴赏板块 -->
    <SelectionSection />
  </view>
</template>

<script setup>
import HomeTitle from '@/components/home/HomeTitle/HomeTitle.vue';
import HomeBanner from '@/components/home/HomeBanner/HomeBanner.vue';
import NavGrid from '@/components/home/NavGrid/NavGrid.vue';
import SelectionSection from '@/components/home/SelectionSection/SelectionSection.vue';
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #e8f0ff 0%, #f5f7fa 40%, #ffffff 100%);
  width: 100%;
}
</style>
