<template>
  <view class="wine-contact" :style="containerStyle">
    <view class="contact-content">
      <view class="contact-header">
        <text class="contact-title">联系我们</text>
        <text class="contact-subtitle">CONTACT US</text>
      </view>

      <view class="contact-divider"></view>

      <view class="contact-list">
        <!-- 400 服务热线 -->
        <view class="contact-item" @click="handleCallTap">
          <view class="contact-icon-box">
            <image class="contact-icon" :src="icons.phone" mode="aspectFit"></image>
          </view>
          <view class="contact-info">
            <text class="contact-label">400 服务热线</text>
            <text class="contact-value">400-888-8888</text>
          </view>
          <view class="contact-arrow">›</view>
        </view>

        <!-- 详情更多内容联系方式 -->
        <view class="contact-text-row">
          <text class="contact-text">详情更多内容联系方式：</text>
        </view>

        <!-- 微信客服 -->
        <view class="contact-item" @click="handleWechatTap">
          <view class="contact-icon-box">
            <image class="contact-icon" :src="icons.wechat" mode="aspectFit"></image>
          </view>
          <view class="contact-info">
            <text class="contact-label">微信客服</text>
            <text class="contact-value">YSH_kefu</text>
          </view>
          <view class="contact-arrow">›</view>
        </view>

        <!-- 线下体验店 -->
        <view class="contact-item" @click="handleAddressTap">
          <view class="contact-icon-box">
            <image class="contact-icon" :src="icons.location" mode="aspectFit"></image>
          </view>
          <view class="contact-info">
            <text class="contact-label">线下体验店</text>
            <text class="contact-value">广州市天河区珠江新城 XX 路 XX 号</text>
          </view>
          <view class="contact-arrow">›</view>
        </view>
      </view>

      <view class="contact-footer">
        <text class="contact-footer-text">以上信息为示例占位符，实际使用请替换</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--deep-brown': '#654321',
  '--warm-brown': '#8b4513'
}));

const icons = ref({
  phone: '/static/wine/细节.jpg',
  wechat: '/static/wine/细节.jpg',
  location: '/static/wine/细节.jpg'
});

const handleCallTap = () => {
  uni.makePhoneCall({
    phoneNumber: '4008888888'
  });
};

const handleWechatTap = () => {
  uni.setClipboardData({
    data: 'YSH_kefu',
    success: () => {
      uni.showToast({
        title: '已复制微信号',
        icon: 'none',
        duration: 1500
      });
    }
  });
};

const handleAddressTap = () => {
  uni.showToast({
    title: '查看线下体验店',
    icon: 'none',
    duration: 1500
  });
};
</script>

<style lang="scss" scoped>
.wine-contact {
  width: 100%;
  padding: 50rpx 30rpx 60rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, #fef5e8 0%, #f5e6d3 100%);
  margin-top: 20rpx;
}

.contact-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 249, 240, 0.95));
  border-radius: 24rpx;
  padding: 40rpx 32rpx;
  border: 1rpx solid rgba(212, 175, 55, 0.15);
  box-shadow: 0 8rpx 32rpx rgba(184, 134, 11, 0.1);
}

.contact-header {
  text-align: center;
  margin-bottom: 20rpx;
}

.contact-title {
  display: block;
  font-size: 36rpx;
  font-weight: 700;
  color: #8b4513;
  letter-spacing: 4px;
}

.contact-subtitle {
  display: block;
  font-size: 20rpx;
  color: #b8860b;
  letter-spacing: 2px;
  margin-top: 8rpx;
}

.contact-divider {
  width: 80rpx;
  height: 3rpx;
  background: linear-gradient(90deg, #d4af37, transparent);
  margin: 0 auto 28rpx;
  border-radius: 2rpx;
}

.contact-list {
  display: flex;
  flex-direction: column;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 24rpx 0;
  border-bottom: 1rpx solid rgba(212, 175, 55, 0.1);
  transition: opacity 0.2s;
}

.contact-item:last-of-type {
  border-bottom: none;
}

.contact-item:active {
  opacity: 0.7;
}

.contact-icon-box {
  width: 64rpx;
  height: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(184, 134, 11, 0.05));
  border-radius: 50%;
  border: 2rpx solid rgba(212, 175, 55, 0.2);
}

.contact-icon {
  width: 40rpx;
  height: 40rpx;
  object-fit: contain;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 24rpx;
  color: #999999;
  margin-bottom: 6rpx;
}

.contact-value {
  font-size: 28rpx;
  font-weight: 600;
  color: #8b4513;
}

.contact-arrow {
  font-size: 40rpx;
  color: #d4af37;
  margin-left: 16rpx;
}

.contact-text-row {
  padding: 20rpx 0;
  text-align: center;
}

.contact-text {
  font-size: 26rpx;
  color: #b8860b;
  font-weight: 500;
}

.contact-footer {
  margin-top: 32rpx;
  text-align: center;
  padding-top: 24rpx;
  border-top: 1rpx dashed rgba(212, 175, 55, 0.2);
}

.contact-footer-text {
  font-size: 20rpx;
  color: #cccccc;
}
</style>
