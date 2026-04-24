<template>
  <view class="home-container">
    <!-- 顶部导航栏 - 滚动到一定距离后显示 -->
    <PageHeader :visible="showHeader" title="粤叁荟" @menu-click="handleMenu" @support-click="handleSupport" />

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
import { ref } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';
import PageHeader from '@/components/common/PageHeader/PageHeader.vue';
import HomeTitle from '@/components/home/HomeTitle/HomeTitle.vue';
import HomeBanner from '@/components/home/HomeBanner/HomeBanner.vue';
import NavGrid from '@/components/home/NavGrid/NavGrid.vue';
import SelectionSection1 from '@/components/home/SelectionSection/SelectionSection1/SelectionSection1.vue';
import SelectionSection2 from '@/components/home/SelectionSection/SelectionSection2/SelectionSection2.vue';
import SelectionSection3 from '@/components/home/SelectionSection/SelectionSection3/SelectionSection3.vue';

// 控制 Header 显示/隐藏
const showHeader = ref(false);
const headerShowThreshold = 100;

// 使用 uni-app 的 onPageScroll 生命周期
onPageScroll((e) => {
  const scrollTop = e.scrollTop;
  showHeader.value = scrollTop > headerShowThreshold;
});

const handleMenu = () => {
  uni.showToast({
    title: '菜单功能开发中',
    icon: 'none'
  });
};

const handleSupport = () => {
  uni.showToast({
    title: '客服功能开发中',
    icon: 'none'
  });
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 50%, #FFFFFF 100%);
  width: 100%;
}
</style>
