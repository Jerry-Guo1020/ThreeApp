<template>
  <view class="me-container">
    <!-- 顶部 Header -->
    <MeHeader />
    
    <!-- 用户信息区域 -->
    <UserProfile />
    
    <!-- 会员卡 -->
    <VipCard />
    
    <!-- 会员权益 -->
    <MemberBenefits />
    
    <!-- 优惠券区域 -->
    <CouponsSection />
    
    <!-- 订单区域 -->
    <OrdersSection />
    
    <!-- 推广横幅 -->
    <PromotionBanners />
    
    <!-- 服务网格 -->
    <ServiceGrid />
    
    <!-- 底部占位，防止内容被 TabBar 遮挡 -->
    <view class="bottom-spacer"></view>
    
    <!-- 自定义 TabBar（可选，如使用原生 tabBar 可移除） -->
    <!-- <TabBar /> -->
  </view>
</template>

<script setup>
import MeHeader from '@/components/me/MeHeader/MeHeader.vue';
import UserProfile from '@/components/me/UserProfile/UserProfile.vue';
import VipCard from '@/components/me/VipCard/VipCard.vue';
import MemberBenefits from '@/components/me/MemberBenefits/MemberBenefits.vue';
import CouponsSection from '@/components/me/CouponsSection/CouponsSection.vue';
import OrdersSection from '@/components/me/OrdersSection/OrdersSection.vue';
import PromotionBanners from '@/components/me/PromotionBanners/PromotionBanners.vue';
import ServiceGrid from '@/components/me/ServiceGrid/ServiceGrid.vue';
// import TabBar from '@/components/me/TabBar/TabBar.vue';
</script>

<style scoped>
.me-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 50%, #FFFFFF 100%);
  width: 100%;
  padding-bottom: 40rpx;
  box-sizing: border-box;
}

.bottom-spacer {
  height: 140rpx;
}
</style>
