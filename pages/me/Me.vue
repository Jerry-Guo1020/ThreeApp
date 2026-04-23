<template>
  <view class="me-container">
    <!-- 顶部导航栏 - 滚动到一定距离后显示 -->
    <MeHeader :visible="showHeader" />

    <!-- 用户信息区域 -->
    <UserProfile />

    <!-- 统计数据网格 -->
    <StatsGrid />

    <!-- 留言记录区域 -->
    <InquiryHistory />

    <!-- 企业信息区域 -->
    <CorporateInfo />

    <!-- 账号操作区域 -->
    <AccountActions />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';
import MeHeader from '@/components/me/MeHeader/MeHeader.vue';
import UserProfile from '@/components/me/UserProfile/UserProfile.vue';
import StatsGrid from '@/components/me/StatsGrid/StatsGrid.vue';
import InquiryHistory from '@/components/me/InquiryHistory/InquiryHistory.vue';
import CorporateInfo from '@/components/me/CorporateInfo/CorporateInfo.vue';
import AccountActions from '@/components/me/AccountActions/AccountActions.vue';

// 控制 Header 显示/隐藏
const showHeader = ref(false);
const headerShowThreshold = 100; // 滚动超过这个距离显示 Header（单位 px）

// 使用 uni-app 的 onPageScroll 生命周期
onPageScroll((e) => {
  const scrollTop = e.scrollTop;
  showHeader.value = scrollTop > headerShowThreshold;
});
</script>

<style scoped>
.me-container {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: 120rpx;
  box-sizing: border-box;
}
</style>
