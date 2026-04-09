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
  padding: 0 30rpx 40rpx;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
  padding-top: 20rpx;
}

.section-title {
  font-size: 48rpx;
  font-weight: 800;
  color: #002046;
}

.section-line {
  flex: 1;
  height: 2rpx;
  background-color: #e1e3e4;
  margin: 0 24rpx;
}

.section-subtitle {
  font-size: 22rpx;
  color: #775a0a;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.case-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.case-card {
  background-color: #ffffff;
  border-radius: 32rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.06);
}

.case-card-large {
  width: 100%;
}

.case-image-wrapper {
  position: relative;
  width: 100%;
  height: 400rpx;
  overflow: hidden;
}

.case-image {
  width: 100%;
  height: 100%;
}

.case-tag {
  position: absolute;
  top: 24rpx;
  left: 24rpx;
  background-color: #002046;
  padding: 8rpx 24rpx;
  border-radius: 20rpx;
}

.case-tag-text {
  font-size: 20rpx;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
}

.case-content {
  padding: 32rpx;
}

.case-title {
  display: block;
  font-size: 34rpx;
  font-weight: 700;
  color: #002046;
  margin-bottom: 16rpx;
  line-height: 1.3;
}

.case-desc {
  display: block;
  font-size: 26rpx;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 28rpx;
}

.case-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24rpx;
  border-top: 1rpx solid #e1e3e4;
}

.case-award {
  background-color: #e8c26b;
  padding: 8rpx 20rpx;
  border-radius: 12rpx;
}

.case-award-text {
  font-size: 20rpx;
  color: #ffffff;
  font-weight: 600;
}

.case-more {
  display: flex;
  align-items: center;
}

.case-more-text {
  font-size: 26rpx;
  color: #002046;
  font-weight: 600;
}

.case-more-icon {
  font-size: 32rpx;
  color: #002046;
  margin-left: 8rpx;
}
</style>
