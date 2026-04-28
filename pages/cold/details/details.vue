<template>
  <view class="detail-page">
    <!-- 顶部Banner -->
    <view class="detail-banner">
      <image class="banner-image" :src="detailData.coverImage" mode="aspectFill"></image>
      <view class="banner-overlay"></view>
      <view class="banner-content">
        <view class="banner-tag">{{ detailData.tag }}</view>
        <text class="banner-title">{{ detailData.title }}</text>
        <text class="banner-subtitle">{{ detailData.subtitle }}</text>
      </view>
      <view class="banner-back" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
    </view>

    <!-- 基本信息 -->
    <view class="info-card">
      <view class="info-row">
        <view class="info-item" v-for="(item, index) in detailData.basicInfo" :key="index">
          <text class="info-value">{{ item.value }}</text>
          <text class="info-label">{{ item.label }}</text>
        </view>
      </view>
    </view>

    <!-- 项目介绍 -->
    <view class="section">
      <view class="section-header">
        <text class="section-label">{{ detailData.intro.label }}</text>
        <text class="section-title">{{ detailData.intro.title }}</text>
      </view>
      <view class="intro-content">
        <text class="intro-text">{{ detailData.intro.description }}</text>
      </view>
      <view class="intro-highlights">
        <view class="highlight-item" v-for="(item, index) in detailData.intro.highlights" :key="index">
          <text class="highlight-icon">{{ item.icon }}</text>
          <text class="highlight-text">{{ item.text }}</text>
        </view>
      </view>
    </view>

    <!-- 技术亮点 -->
    <view class="section section-tech">
      <view class="section-header">
        <text class="section-label">{{ detailData.tech.label }}</text>
        <text class="section-title">{{ detailData.tech.title }}</text>
      </view>
      <view class="tech-grid">
        <view class="tech-item" v-for="(item, index) in detailData.tech.items" :key="index">
          <text class="tech-icon">{{ item.icon }}</text>
          <view class="tech-info">
            <text class="tech-name">{{ item.name }}</text>
            <text class="tech-desc">{{ item.description }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 服务流程 -->
    <view class="section">
      <view class="section-header">
        <text class="section-label">{{ detailData.process.label }}</text>
        <text class="section-title">{{ detailData.process.title }}</text>
      </view>
      <view class="process-timeline">
        <view class="process-step" v-for="(step, index) in detailData.process.steps" :key="index">
          <view class="step-dot"></view>
          <view class="step-content">
            <view class="step-header">
              <text class="step-name">{{ step.name }}</text>
              <text class="step-duration">{{ step.duration }}</text>
            </view>
            <text class="step-desc">{{ step.description }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 项目图片 -->
    <view class="section">
      <view class="section-header">
        <text class="section-label">{{ detailData.gallery.label }}</text>
        <text class="section-title">{{ detailData.gallery.title }}</text>
      </view>
      <scroll-view class="gallery-scroll" scroll-x>
        <view class="gallery-list">
          <view class="gallery-item" v-for="(img, index) in detailData.gallery.images" :key="index">
            <image class="gallery-image" :src="img" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 底部间距 -->
    <view style="height: 160rpx;"></view>

    <!-- 底部悬浮按钮 -->
    <view class="bottom-bar">
      <view class="consult-btn" @tap="handleConsult">
        <text class="consult-icon">📞</text>
        <text class="consult-text">立即咨询</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const detailData = ref({
  tag: 'CASE STUDY',
  title: '深港恒温酒窖整体建设工程',
  subtitle: '恒温恒湿 · 智能监控 · 5000支容量',
  coverImage: '/static/home/Banner/banner1.png',
  basicInfo: [
    { label: '投资金额', value: '¥580万' },
    { label: '建设周期', value: '45天' },
    { label: '建筑面积', value: '1200㎡' },
    { label: '设计寿命', value: '20年' }
  ],
  intro: {
    label: 'PROJECT INTRODUCTION',
    title: '项目介绍',
    description: '本项目位于深圳市南山区，是为某高端私人会所量身定制的恒温酒窖工程。总建筑面积约1200平方米，可存放5000支珍稀年份红酒。项目融合了意大利进口温控系统、法国百年橡木酒架、以及自主研发的智能监控平台，为客户打造顶级的酒类存储环境。',
    highlights: [
      { icon: '🌡️', text: '恒温12-18℃' },
      { icon: '💧', text: '恒湿60-75%' },
      { icon: '🌑', text: '避光存储' },
      { icon: '📱', text: '远程监控' }
    ]
  },
  tech: {
    label: 'TECHNICAL HIGHLIGHTS',
    title: '技术亮点',
    items: [
      { icon: '❄️', name: '双压缩机备份', description: '主备机组自动切换，零间断运行' },
      { icon: '🔇', name: '静音设计', description: '运行噪音低于45分贝' },
      { icon: '📊', name: '云端监控', description: '手机APP实时查看温湿度数据' },
      { icon: '🛡️', name: '安保系统', description: '24小时视频监控+入侵报警' }
    ]
  },
  process: {
    label: 'SERVICE PROCESS',
    title: '服务流程',
    steps: [
      { name: '现场勘测', duration: '1-2天', description: '工程师上门测量场地，评估环境条件' },
      { name: '方案设计', duration: '3-5天', description: '根据客户需求制定详细设计方案' },
      { name: '施工建设', duration: '20-25天', description: '土建、制冷系统、装饰工程同步推进' },
      { name: '设备安装', duration: '7-10天', description: '安装温控设备、酒架、智能系统' },
      { name: '调试验收', duration: '3-5天', description: '系统联调测试，温度达标后交付' },
      { name: '售后运维', duration: '终身', description: '每年2次巡检，24小时响应' }
    ]
  },
  gallery: {
    label: 'PROJECT GALLERY',
    title: '项目图集',
    images: [
      '/static/home/Banner/banner1.png',
      '/static/home/Banner/banner1.png',
      '/static/home/Banner/banner1.png',
      '/static/home/Banner/banner1.png'
    ]
  }
});

onMounted(() => {
  const pages = getCurrentPages();
  if (pages.length) {
    const currentPage = pages[pages.length - 1];
    if (currentPage.options && currentPage.options.id) {
      console.log('接收到的案例ID:', currentPage.options.id);
    }
  }
});

const goBack = () => {
  uni.navigateBack();
};

const handleConsult = () => {
  uni.showToast({
    title: '咨询功能开发中',
    icon: 'none'
  });
};
</script>

<style lang="scss" scoped>
.detail-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
  padding-bottom: env(safe-area-inset-bottom);
}

.detail-banner {
  position: relative;
  width: 100%;
  height: 520rpx;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 320rpx;
  background: linear-gradient(to top, rgba(0, 20, 40, 0.85), transparent);
}

.banner-content {
  position: absolute;
  bottom: 60rpx;
  left: 40rpx;
  right: 40rpx;
}

.banner-tag {
  display: inline-block;
  background: linear-gradient(135deg, #d4af37, #b8941f);
  padding: 10rpx 24rpx;
  border-radius: 20rpx;
  font-size: 22rpx;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 16rpx;
}

.banner-title {
  display: block;
  font-size: 48rpx;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 2px;
  margin-bottom: 12rpx;
}

.banner-subtitle {
  display: block;
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1px;
}

.banner-back {
  position: absolute;
  top: 80rpx;
  left: 30rpx;
  width: 70rpx;
  height: 70rpx;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  font-size: 48rpx;
  color: #ffffff;
  font-weight: bold;
  line-height: 1;
}

.info-card {
  margin: -60rpx 30rpx 30rpx;
  background: #ffffff;
  border-radius: 32rpx;
  padding: 40rpx;
  box-shadow: 0 8rpx 40rpx rgba(0, 32, 70, 0.12);
  position: relative;
  z-index: 10;
}

.info-row {
  display: flex;
  justify-content: space-between;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.info-value {
  font-size: 36rpx;
  font-weight: 900;
  color: #002046;
  margin-bottom: 8rpx;
}

.info-label {
  font-size: 22rpx;
  color: #888888;
}

.section {
  padding: 60rpx 30rpx 0;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
}

.section-label {
  font-size: 22rpx;
  color: #d4af37;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 8rpx;
}

.section-title {
  font-size: 40rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 2px;
}

.intro-content {
  background: #ffffff;
  border-radius: 24rpx;
  padding: 40rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 32, 70, 0.06);
}

.intro-text {
  font-size: 28rpx;
  color: #555555;
  line-height: 1.8;
}

.intro-highlights {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 24rpx;
  padding: 30rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 32, 70, 0.06);
}

.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.highlight-icon {
  font-size: 40rpx;
  margin-bottom: 10rpx;
}

.highlight-text {
  font-size: 22rpx;
  color: #666666;
}

.section-tech {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  padding-top: 60rpx;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.tech-item {
  background: #ffffff;
  border-radius: 24rpx;
  padding: 32rpx;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 4rpx 20rpx rgba(0, 32, 70, 0.06);
}

.tech-icon {
  font-size: 40rpx;
  margin-right: 20rpx;
}

.tech-info {
  flex: 1;
}

.tech-name {
  display: block;
  font-size: 28rpx;
  font-weight: 700;
  color: #002046;
  margin-bottom: 8rpx;
}

.tech-desc {
  display: block;
  font-size: 24rpx;
  color: #888888;
  line-height: 1.5;
}

.process-timeline {
  background: #ffffff;
  border-radius: 24rpx;
  padding: 40rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 32, 70, 0.06);
}

.process-step {
  display: flex;
  position: relative;
  padding-bottom: 40rpx;

  &:last-child {
    padding-bottom: 0;

    .step-dot::after {
      display: none;
    }
  }
}

.step-dot {
  width: 24rpx;
  height: 24rpx;
  background: #d4af37;
  border-radius: 50%;
  margin-right: 24rpx;
  margin-top: 6rpx;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 28rpx;
    left: 10rpx;
    width: 4rpx;
    height: calc(100% + 16rpx);
    background: #e8e8e8;
  }
}

.step-content {
  flex: 1;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rpx;
}

.step-name {
  font-size: 30rpx;
  font-weight: 700;
  color: #002046;
}

.step-duration {
  font-size: 22rpx;
  color: #d4af37;
  font-weight: 600;
}

.step-desc {
  font-size: 24rpx;
  color: #888888;
  line-height: 1.5;
}

.gallery-scroll {
  white-space: nowrap;
}

.gallery-list {
  display: inline-flex;
  padding-right: 30rpx;
}

.gallery-item {
  width: 300rpx;
  height: 220rpx;
  border-radius: 20rpx;
  overflow: hidden;
  margin-left: 20rpx;

  &:first-child {
    margin-left: 0;
  }
}

.gallery-image {
  width: 100%;
  height: 100%;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx 30rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 -4rpx 30rpx rgba(0, 32, 70, 0.1);
  z-index: 100;
}

.consult-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #002046, #003366);
  border-radius: 50rpx;
  padding: 28rpx;
}

.consult-icon {
  font-size: 36rpx;
  margin-right: 12rpx;
}

.consult-text {
  font-size: 32rpx;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 2px;
}
</style>