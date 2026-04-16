<template>
  <view class="home-container">
    <!-- 标题区域 -->
    <HomeTitle />

    <!-- 顶部横幅 -->
    <HomeBanner />

    <!-- 导航网格 -->
    <NavGrid />

    <!-- 冷库精选板块 -->
    <SelectionSection1 />
    
    <!-- 酒水特产精选板块 -->
  	<SelectionSection2 />

    <!-- 软件开发板块介绍 -->
  	<SelectionSection3 />
  </view>
</template>

<script setup>
import HomeTitle from '@/components/home/HomeTitle/HomeTitle.vue';
import HomeBanner from '@/components/home/HomeBanner/HomeBanner.vue';
import NavGrid from '@/components/home/NavGrid/NavGrid.vue';
import SelectionSection1 from '@/components/home/SelectionSection/SelectionSection1/SelectionSection1.vue';
import SelectionSection2 from '@/components/home/SelectionSection/SelectionSection2/SelectionSection2.vue';
import SelectionSection3 from '@/components/home/SelectionSection/SelectionSection3/SelectionSection3.vue';
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #FDF6F0 0%, #FFF8F3 40%, #FFFFFF 100%);
  width: 100%;
}
</style>
