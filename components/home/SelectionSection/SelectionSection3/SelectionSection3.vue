<template>
  <view class="selection-section">
    <view class="section-header">
      <view class="title-wrapper">
        <text class="section-title">软件开发</text>
        <text class="section-subtitle">SOFTWARE DEVELOPMENT</text>
      </view>
    </view>

    <view class="software-card">
      <view class="software-content">
        <view class="software-icon">
          <text>💻</text>
        </view>
        <view class="software-info">
          <text class="software-title">专业软件开发服务</text>
          <text class="software-desc">小程序开发 | 网站构建 | 企业系统定制</text>
        </view>
      </view>

      <view class="contact-section">
        <view class="contact-item" v-for="(contact, index) in contactList" :key="index"
          @tap="copyContact(contact)">
          <view class="contact-icon">{{ contact.icon }}</view>
          <view class="contact-details">
            <text class="contact-label">{{ contact.label }}</text>
            <text class="contact-value">{{ contact.value }}</text>
          </view>
          <view class="contact-action">
            <text class="copy-btn">复制</text>
          </view>
        </view>
      </view>

      <view class="service-tags">
        <text class="tag" v-for="(tag, index) in serviceTags" :key="index">{{ tag }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const contactList = ref([
  {
    id: 1,
    icon: '📱',
    label: '联系电话',
    value: '138-XXXX-XXXX',
    rawValue: '138XXXXXXXX'
  },
  {
    id: 2,
    icon: '💬',
    label: '微信咨询',
    value: 'XXXXXX',
    rawValue: 'XXXXXX'
  },
  {
    id: 3,
    icon: '📧',
    label: '电子邮箱',
    value: 'contact@example.com',
    rawValue: 'contact@example.com'
  }
]);

const serviceTags = ref([
  '需求分析',
  'UI/UX 设计',
  '前后端开发',
  '测试部署',
  '运维支持'
]);

// 复制联系方式
const copyContact = (contact) => {
  uni.setClipboardData({
    data: contact.rawValue,
    success: () => {
      uni.showToast({
        title: `已复制${contact.label}`,
        icon: 'success',
        duration: 1500
      });
    }
  });
};
</script>

<style lang="scss" scoped>
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

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 40rpx;
}

.section-title {
  font-size: 64rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 12px;
  position: relative;
  z-index: 1;
  padding-bottom: 16rpx;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120rpx;
  height: 6rpx;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  border-radius: 3rpx;
}

.section-subtitle {
  font-size: 24rpx;
  color: #999999;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 8rpx;
}

.software-card {
  background: linear-gradient(135deg, #002046 0%, #003366 100%);
  border-radius: 40rpx;
  padding: 48rpx;
  box-shadow: 0 12rpx 40rpx rgba(0, 32, 70, 0.2);
}

.software-content {
  display: flex;
  align-items: center;
  margin-bottom: 40rpx;
  padding-bottom: 40rpx;
  border-bottom: 1rpx solid rgba(255, 255, 255, 0.1);
}

.software-icon {
  width: 100rpx;
  height: 100rpx;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24rpx;
  flex-shrink: 0;

  text {
    font-size: 56rpx;
  }
}

.software-info {
  flex: 1;

  .software-title {
    display: block;
    font-size: 36rpx;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12rpx;
    letter-spacing: 1px;
  }

  .software-desc {
    display: block;
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
}

.contact-section {
  margin-bottom: 40rpx;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 24rpx;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20rpx;
  margin-bottom: 16rpx;
  transition: background 0.2s ease;

  &:active {
    background: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }

  .contact-icon {
    font-size: 40rpx;
    margin-right: 20rpx;
    flex-shrink: 0;
  }

  .contact-details {
    flex: 1;
    min-width: 0;

    .contact-label {
      display: block;
      font-size: 24rpx;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 6rpx;
    }

    .contact-value {
      display: block;
      font-size: 28rpx;
      color: #ffffff;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .contact-action {
    flex-shrink: 0;

    .copy-btn {
      font-size: 24rpx;
      color: #d4af37;
      font-weight: 600;
      padding: 8rpx 20rpx;
      background: rgba(212, 175, 55, 0.1);
      border-radius: 12rpx;
      border: 1rpx solid rgba(212, 175, 55, 0.3);
    }
  }
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;

  .tag {
    font-size: 22rpx;
    color: rgba(255, 255, 255, 0.8);
    padding: 10rpx 20rpx;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.2);
  }
}
</style>
