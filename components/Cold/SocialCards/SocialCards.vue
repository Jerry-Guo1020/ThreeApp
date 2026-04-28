<template>
  <view class="social-cards">
    <view class="section-header">
      <text class="header-label">CONTACT US</text>
      <text class="header-title">联系我们</text>
      <text class="header-subtitle">期待与您建立合作关系</text>
    </view>

    <view class="contact-grid">
      <view class="contact-item" v-for="(item, index) in contactList" :key="index" @tap="handleContact(item)">
        <view class="contact-icon-wrapper">
          <text class="contact-icon">{{ item.icon }}</text>
        </view>
        <view class="contact-info">
          <text class="contact-name">{{ item.name }}</text>
          <text class="contact-value">{{ item.value }}</text>
        </view>
        <view class="contact-arrow" v-if="item.actionText">
          <text class="arrow-icon">›</text>
        </view>
      </view>
    </view>

    <view class="social-icons">
      <view class="social-item" v-for="(social, index) in socialList" :key="index" @tap="handleSocialTap(social)">
        <image class="social-icon" :src="social.icon" mode="aspectFit"></image>
        <text class="social-name">{{ social.name }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const contactList = ref([
  {
    id: 'phone',
    icon: '📞',
    name: '联系电话',
    value: '400-888-8888',
    actionText: '点击拨打'
  },
  {
    id: 'wechat',
    icon: '💬',
    name: '微信客服',
    value: 'Cold888_888',
    actionText: '添加好友'
  },
  {
    id: 'email',
    icon: '✉️',
    name: '电子邮箱',
    value: 'info@cold-storage.cn',
    actionText: ''
  },
  {
    id: 'address',
    icon: '📍',
    name: '公司地址',
    value: '广东省深圳市南山区科技园北路88号',
    actionText: '查看地图'
  }
]);

const socialList = ref([
  {
    id: 'channels',
    name: '微信视频号',
    icon: '/static/logo/视频号.png'
  },
  {
    id: 'douyin',
    name: '抖音',
    icon: '/static/logo/抖音.png'
  }
]);

const handleContact = (item) => {
  switch (item.id) {
    case 'phone':
      uni.makePhoneCall({
        phoneNumber: '4008888888',
        fail: () => {
          uni.showToast({ title: '拨打功能开发中', icon: 'none' });
        }
      });
      break;
    case 'wechat':
      uni.setClipboardData({
        data: item.value,
        success: () => {
          uni.showToast({ title: '微信号已复制', icon: 'success' });
        }
      });
      break;
    case 'email':
      uni.setClipboardData({
        data: item.value,
        success: () => {
          uni.showToast({ title: '邮箱已复制', icon: 'success' });
        }
      });
      break;
    case 'address':
      uni.showToast({ title: '地图功能开发中', icon: 'none' });
      break;
  }
};

const handleSocialTap = (social) => {
  if (social.id === 'channels') {
    uni.showModal({
      title: '微信视频号',
      content: '请在微信中搜索：粤叁荟冷库\n或长按识别下方二维码',
      showCancel: false,
      confirmText: '我知道了'
    });
  } else if (social.id === 'douyin') {
    uni.setClipboardData({
      data: '粤叁荟冷库',
      success: () => {
        uni.showToast({ title: '抖音号已复制，去抖音搜索吧', icon: 'none', duration: 2500 });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.social-cards {
  padding: 80rpx 30rpx 60rpx;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60rpx;
}

.header-label {
  display: block;
  font-size: 22rpx;
  color: #d4af37;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 12rpx;
}

.header-title {
  display: block;
  font-size: 44rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 6px;
  margin-bottom: 16rpx;
}

.header-subtitle {
  display: block;
  font-size: 26rpx;
  color: #888888;
}

.contact-grid {
  background: #ffffff;
  border-radius: 32rpx;
  padding: 20rpx;
  margin-bottom: 50rpx;
  box-shadow: 0 8rpx 40rpx rgba(0, 32, 70, 0.08);
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 32rpx 24rpx;
  border-bottom: 1rpx solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
}

.contact-icon-wrapper {
  width: 90rpx;
  height: 90rpx;
  background: linear-gradient(135deg, #e8f4ff, #f5f9ff);
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 82, 147, 0.1);
}

.contact-icon {
  font-size: 44rpx;
}

.contact-info {
  flex: 1;
}

.contact-name {
  display: block;
  font-size: 26rpx;
  color: #888888;
  margin-bottom: 8rpx;
}

.contact-value {
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #002046;
}

.contact-arrow {
  margin-left: 16rpx;
}

.arrow-icon {
  font-size: 40rpx;
  color: #cccccc;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 40rpx;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-icon {
  width: 80rpx;
  height: 80rpx;
  margin-bottom: 12rpx;
}

.social-name {
  font-size: 22rpx;
  color: #666666;
}
</style>