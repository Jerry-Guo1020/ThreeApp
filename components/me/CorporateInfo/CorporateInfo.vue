<template>
  <view class="corporate-info">
    <text class="section-title">企业信息</text>
    <view class="info-card">
      <!-- 背景装饰 -->
      <view class="bg-decoration">
        <text class="decoration-icon">&#xe528;</text>
      </view>

      <view class="info-content">
        <view class="info-left">
          <view class="info-section">
            <text class="info-label">Corporate Title</text>
            <text class="info-value">广东领鲜冷链工程有限公司</text>
          </view>

          <view class="info-section">
            <view class="info-row" @click="handleCall">
              <view class="info-icon-wrapper">
                <text class="info-icon">&#xe0b0;</text>
              </view>
              <view class="info-text-group">
                <text class="info-desc">服务热线 (点击拨打)</text>
                <text class="info-phone">400-123-4567</text>
              </view>
            </view>

            <view class="info-row">
              <view class="info-icon-wrapper">
                <text class="info-icon">&#xe192;</text>
              </view>
              <view class="info-text-group">
                <text class="info-desc">工作时间</text>
                <text class="info-time">周一至周五 09:00 - 18:00</text>
              </view>
            </view>
          </view>
        </view>

        <view class="info-right">
          <view class="qr-wrapper">
            <image class="qr-code" :src="qrCodeUrl" mode="aspectFill" />
          </view>
          <text class="qr-desc">长按识别添加微信咨询</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const qrCodeUrl = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuBoP1hx1XTN3rOA4RhsZvjNGLvMYV3fmY0xyOorhwh1bG5Mx9miq_zmpR7yjA-_zm9REJZqihIhW9OTDT79FP1JeLETTd6tT5jsb-Fj2fuy5LojVUEaB_KIZ6vhUrgAAvtSbcDBsMf15llmK5CQXC0yUJnUMOkOO9062xWPKTxEjxOQczAeb2l0tHOlLhiKijrKnaZCEP_YFl4H3fZ4r2BH1nirupkzCrh5AjdA5b4IZrhBioFyp0zy422f95UiqKZYIJ-gh0fKgO4');

const handleCall = () => {
  uni.makePhoneCall({
    phoneNumber: '4001234567'
  });
};
</script>

<style scoped>
.corporate-info {
  margin-bottom: 48rpx;
  padding: 0 30rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #002046;
  font-family: 'Manrope', sans-serif;
  margin-bottom: 24rpx;
  display: block;
}

.info-card {
  background-color: #1b365d;
  color: #ffffff;
  padding: 48rpx;
  border-radius: 32rpx;
  position: relative;
  overflow: hidden;
}

.bg-decoration {
  position: absolute;
  right: -40rpx;
  top: -40rpx;
  opacity: 0.1;
}

.decoration-icon {
  font-size: 144rpx;
  color: #ffffff;
  font-family: 'Material Icons Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

.info-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 48rpx;
}

.info-left {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.info-label {
  font-size: 20rpx;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.info-value {
  font-size: 30rpx;
  font-weight: 700;
  color: #ffffff;
  margin-top: 8rpx;
  display: block;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.info-icon-wrapper {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 16rpx;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon {
  font-size: 36rpx;
  color: #ffffff;
  font-family: 'Material Icons Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

.info-text-group {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.info-desc {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.6);
}

.info-phone,
.info-time {
  font-size: 26rpx;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
}

.info-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-wrapper {
  background-color: #ffffff;
  padding: 12rpx;
  border-radius: 16rpx;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  margin-bottom: 16rpx;
  transform: rotate(2deg);
}

.qr-code {
  width: 128rpx;
  height: 128rpx;
  border-radius: 16rpx;
}

.qr-desc {
  font-size: 22rpx;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v140/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}
</style>
