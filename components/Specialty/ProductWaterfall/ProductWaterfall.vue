<template>
  <view class="product-waterfall">
    <view class="waterfall-column" v-for="col in columnCount" :key="col" :class="'column-' + col">
      <view
        class="product-card"
        v-for="(item, index) in getProductsForColumn(col - 1)"
        :key="item.id || index"
        @tap="navigateToDetail(item)">
        <!-- 商品图片 -->
        <view class="product-image-wrapper">
          <image class="product-image" :src="item.imageUrl" mode="aspectFill"></image>
        </view>

        <!-- 商品信息 -->
        <view class="product-info">
          <text class="product-title">{{ item.title }}</text>

          <!-- 商品标签 -->
          <view class="product-tags" v-if="item.tags && item.tags.length > 0">
            <text class="tag" v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag }}</text>
          </view>

          <!-- 品牌信息 -->
          <view class="brand-info" v-if="item.brand">
            <text class="brand-text">{{ item.brand }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  columnCount: {
    type: Number,
    default: 2
  }
});

const emit = defineEmits(['product-tap']);

// 为瀑布流分配商品到不同列
const getProductsForColumn = (columnIndex) => {
  if (!props.products || props.products.length === 0) return [];
  return props.products.filter((_, index) => index % props.columnCount === columnIndex);
};

// 点击商品
const navigateToDetail = (item) => {
  emit('product-tap', item);
  if (item.url) {
    uni.navigateTo({ url: item.url });
  }
};
</script>

<style lang="scss" scoped>
.product-waterfall {
  display: flex;
  gap: 20rpx;
  padding: 20rpx 40rpx;
}

.waterfall-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.product-card {
  background: #ffffff;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
  }
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 400rpx;
  display: block;
}

.product-info {
  padding: 24rpx;
}

.product-title {
  display: block;
  font-size: 28rpx;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  margin-bottom: 16rpx;

  // 限制 2 行
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
  margin-bottom: 16rpx;
}

.tag {
  font-size: 20rpx;
  padding: 6rpx 16rpx;
  border-radius: 8rpx;
  font-weight: 500;
}

.tag:first-child {
  background: linear-gradient(135deg, #fff4e6, #ffe8cc);
  color: #d96d00;
}

.tag:last-child {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  color: #2e7d32;
}

.brand-info {
  font-size: 22rpx;
  color: #999999;
}

.brand-text {
  color: #999999;
}
</style>
