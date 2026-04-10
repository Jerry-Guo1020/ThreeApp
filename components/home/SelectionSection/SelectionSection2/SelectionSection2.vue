<template>
  <view class="selection-section">
    <view class="section-header">
      <view class="title-wrapper">
        <text class="section-title">酒水特产</text>
        <text class="section-subtitle">FINE WINE & SPECIALTY</text>
      </view>
    </view>

    <!-- 酒水特产卡片 -->
    <view class="specialty-cards">
      <scroll-view class="specialty-scroll" scroll-x show-scrollbar="false">
        <view class="specialty-scroll-content">
          <view class="specialty-card" v-for="(item, index) in specialtyList" :key="index"
            @tap="navigateToSpecialty(item)">
            <view class="specialty-image-wrapper">
              <image class="specialty-image" :src="item.imageUrl" mode="aspectFill"></image>
              <view class="specialty-tag" v-if="item.tag">
                <text>{{ item.tag }}</text>
              </view>
              <view class="specialty-price" v-if="item.price">
                <text class="price-symbol">¥</text>
                <text class="price-value">{{ item.price }}</text>
              </view>
            </view>
            <view class="specialty-info">
              <text class="specialty-title">{{ item.title }}</text>
              <text class="specialty-desc">{{ item.description }}</text>
              <view class="specialty-origin" v-if="item.origin">
                <text class="origin-icon">📍</text>
                <text class="origin-text">{{ item.origin }}</text>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const specialtyList = ref([
  {
    id: 1,
    title: '茅台飞天白酒',
    description: '贵州茅台镇核心产区，酱香型白酒经典之作',
    imageUrl: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEECPRpAZAXQl3cBfhxDxuSt1AojYoeHQAC7iAAAtCQCFQvkTsfSeUnwjYE.jpg',
    price: '1299',
    origin: '贵州茅台镇',
    tag: '热门'
  },
  {
    id: 2,
    title: '五粮液经典装',
    description: '浓香型白酒代表，五谷精酿，醇香浓郁',
    imageUrl: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEECP5pAZDT2lKDbMs1BC1kkTo76bcj3AAC-CAAAtCQCFQGU12qYNcw8DYE.jpg',
    price: '899',
    origin: '四川宜宾',
    tag: '爆款'
  },
  {
    id: 3,
    title: '法国进口红酒',
    description: '波尔多 AOC 产区，单宁柔和，果香馥郁',
    imageUrl: 'https://api.hcyj.xyz/images/dnfw.png',
    price: '368',
    origin: '法国波尔多',
    tag: ''
  },
  {
    id: 4,
    title: '云南普洱茶饼',
    description: '古树纯料，传统工艺，越陈越香',
    imageUrl: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESETBpwP6ugYWtISs6XQ81KokrT4mBIgACnCQAAiLeCFbhCOwpzFtBizoE.png',
    price: '258',
    origin: '云南普洱',
    tag: '收藏'
  },
  {
    id: 5,
    title: '更多特产',
    description: '全国各地特色产品持续上架中',
    imageUrl: 'https://api.hcyj.xyz/images/gdfw.jpg',
    price: '',
    origin: '',
    tag: ''
  }
]);

// 跳转到特产详情
const navigateToSpecialty = (item) => {
  if (!item.id) return;
  uni.navigateTo({
    url: `/pages/specialty/detail?id=${item.id}`
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

// 横向滑动卡片样式
.specialty-cards {
  .specialty-scroll {
    width: 100%;
    height: 100%;
    white-space: nowrap;

    .specialty-scroll-content {
      display: inline-block;
      padding-bottom: 20rpx;

      .specialty-card {
        display: inline-block;
        width: 320rpx;
        height: 500rpx;
        background-color: #ffffff;
        border-radius: 32rpx;
        margin-right: 24rpx;
        overflow: hidden;
        box-shadow: 0 6rpx 24rpx rgba(0, 32, 70, 0.1);
        transition: all 0.3s ease;
        vertical-align: top;

        &:active {
          transform: scale(0.98);
          box-shadow: 0 4rpx 16rpx rgba(0, 32, 70, 0.08);
        }

        &:last-child {
          margin-right: 0;
        }

        .specialty-image-wrapper {
          position: relative;
          width: 100%;
          height: 320rpx;
          overflow: hidden;
          background: #f5f5f5;

          .specialty-image {
            width: 100%;
            height: 100%;
          }

          .specialty-tag {
            position: absolute;
            top: 20rpx;
            left: 20rpx;
            background: linear-gradient(135deg, #c41e3a, #8b0000);
            padding: 8rpx 20rpx;
            border-radius: 16rpx;
            box-shadow: 0 4rpx 12rpx rgba(196, 30, 58, 0.3);

            text {
              font-size: 22rpx;
              color: #ffffff;
              font-weight: 700;
            }
          }

          .specialty-price {
            position: absolute;
            bottom: 0;
            right: 0;
            background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7));
            padding: 12rpx 20rpx;
            border-radius: 16rpx 0 0 0;

            .price-symbol {
              font-size: 24rpx;
              color: #ffd700;
              font-weight: 700;
            }

            .price-value {
              font-size: 36rpx;
              color: #ffd700;
              font-weight: 700;
            }
          }
        }

        .specialty-info {
          padding: 24rpx;

          .specialty-title {
            display: block;
            font-size: 32rpx;
            font-weight: 700;
            color: #002046;
            margin-bottom: 12rpx;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .specialty-desc {
            display: block;
            font-size: 24rpx;
            color: #666666;
            line-height: 1.5;
            margin-bottom: 16rpx;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .specialty-origin {
            display: flex;
            align-items: center;
            padding-top: 12rpx;
            border-top: 1rpx solid #f0f0f0;

            .origin-icon {
              font-size: 24rpx;
              margin-right: 8rpx;
            }

            .origin-text {
              font-size: 24rpx;
              color: #999999;
            }
          }
        }
      }
    }
  }
}
</style>
