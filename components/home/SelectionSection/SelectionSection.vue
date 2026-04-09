<template>
  <view class="selection-section">
    <view class="section-header">
      <text class="section-title">鉴赏</text>
      <view class="section-line"></view>
      <text class="section-subtitle">SELECTIONS</text>
    </view>

    <view class="case-list">
      <!-- 大卡片 - 工程案例 -->
      <view class="case-card case-card-large" v-for="(item, index) in caseList" :key="index">
        <view class="case-image-wrapper">
          <image class="case-image" :src="item.imageUrl" mode="aspectFill"></image>
          <view class="case-tag" v-if="item.tag">
            <text class="case-tag-text">{{ item.tag }}</text>
          </view>
        </view>
        <view class="case-content">
          <text class="case-title">{{ item.title }}</text>
          <text class="case-desc">{{ item.description }}</text>
          <view class="case-footer">
            <view class="case-award" v-if="item.award">
              <text class="case-award-text">{{ item.award }}</text>
            </view>
            <view class="case-more">
              <text class="case-more-text">探索细节</text>
              <text class="case-more-icon">›</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const caseList = ref([
  {
    id: 1,
    imageUrl: '/static/home/Banner/banner1.png',
    tag: 'CASE STUDY',
    title: '深港恒温酒窖整体建设工程',
    description: '融合智能温控与美学支架，为 5000 支珍稀年份红酒提供极致避光与恒湿环境。',
    award: '2024 年度卓越工程'
  },
  {
    id: 2,
    imageUrl: '/static/home/Banner/banner1.png',
    tag: '',
    title: '岭南酒文化展示中心',
    description: '集酒文化展示、品鉴体验、文化交流于一体的综合性展示空间。',
    award: '2024 年度设计大奖'
  }
]);
</script>

<style scoped>
.selection-section {
  padding: 0 40rpx 60rpx;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50rpx;
  padding-top: 40rpx;
  position: relative;
}

.section-title {
  font-size: 64rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 8px;
  padding: 0 32rpx;
}

.section-line {
  flex: 1;
  height: 3rpx;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  margin: 0 20rpx;
  max-width: 200rpx;
}

.section-subtitle {
  font-size: 28rpx;
  color: #d4af37;
  font-weight: 700;
  letter-spacing: 6px;
  text-transform: uppercase;
  padding-left: 20rpx;
}

.case-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.case-card {
  background-color: #ffffff;
  border-radius: 40rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 32rpx rgba(0, 32, 70, 0.12);
  transition: all 0.3s ease;
}

.case-card-large {
  width: 100%;
  margin-bottom: 12rpx;
}

.case-image-wrapper {
  position: relative;
  width: 100%;
  height: 520rpx;
  overflow: hidden;
}

.case-image {
  width: 100%;
  height: 100%;
}

.case-tag {
  position: absolute;
  top: 32rpx;
  left: 32rpx;
  background: linear-gradient(135deg, #002046, #003366);
  padding: 12rpx 32rpx;
  border-radius: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 32, 70, 0.3);
}

.case-tag-text {
  font-size: 22rpx;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 2px;
}

.case-content {
  padding: 40rpx;
}

.case-title {
  display: block;
  font-size: 40rpx;
  font-weight: 800;
  color: #002046;
  margin-bottom: 20rpx;
  line-height: 1.4;
  letter-spacing: 1px;
}

.case-desc {
  display: block;
  font-size: 28rpx;
  color: #555555;
  line-height: 1.7;
  margin-bottom: 32rpx;
}

.case-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32rpx;
  border-top: 2rpx solid #e8e8e8;
}

.case-award {
  background: linear-gradient(135deg, #d4af37, #b8941f);
  padding: 12rpx 28rpx;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(212, 175, 55, 0.3);
}

.case-award-text {
  font-size: 22rpx;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
}

.case-more {
  display: flex;
  align-items: center;
}

.case-more-text {
  font-size: 28rpx;
  color: #002046;
  font-weight: 700;
  letter-spacing: 1px;
}

.case-more-icon {
  font-size: 40rpx;
  color: #002046;
  margin-left: 12rpx;
  transition: transform 0.3s ease;
}

.case-card:active .case-more-icon {
  transform: translateX(8rpx);
}
</style>
