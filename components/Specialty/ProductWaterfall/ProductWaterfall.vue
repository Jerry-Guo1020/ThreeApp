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

          <!-- 品牌标签 -->
          <view class="brand-tag" v-if="item.brand">
            <image class="brand-logo" :src="item.brandLogo" mode="aspectFit" v-if="item.brandLogo"></image>
            <text class="brand-name" v-else>{{ item.brand }}</text>
          </view>

          <!-- 促销标签 -->
          <view class="sale-tag" v-if="item.saleTag">
            <text>{{ item.saleTag }}</text>
          </view>
        </view>

        <!-- 商品信息 -->
        <view class="product-info">
          <text class="product-title">{{ item.title }}</text>

          <!-- 商品标签 -->
          <view class="product-tags" v-if="item.tags && item.tags.length > 0">
            <text class="tag" v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag }}</text>
          </view>

          <!-- 价格和购买按钮 -->
          <view class="product-footer">
            <view class="price-section">
              <text class="price-symbol">¥</text>
              <text class="price-value">{{ item.price }}</text>
              <text class="price-unit" v-if="item.priceUnit">{{ item.priceUnit }}</text>
            </view>
            <button class="buy-btn" @tap.stop="addToCart(item)">
              <text class="buy-text">购买</text>
            </button>
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

const emit = defineEmits(['product-tap', 'add-to-cart']);

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

// 加入购物车
const addToCart = (item) => {
  emit('add-to-cart', item);
  uni.showToast({
    title: '已加入购物车',
    icon: 'success',
    duration: 1500
  });
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
  height: 100%;
  min-height: 300rpx;
  display: block;
}

.brand-tag {
  position: absolute;
  top: 16rpx;
  left: 16rpx;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8rpx);
  padding: 8rpx 16rpx;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.brand-logo {
  width: 32rpx;
  height: 32rpx;
  border-radius: 50%;
}

.brand-name {
  font-size: 20rpx;
  font-weight: 700;
  color: #002046;
  letter-spacing: 1px;
}

.sale-tag {
  position: absolute;
  top: 16rpx;
  right: 16rpx;
  background: linear-gradient(135deg, #ff4d4f, #ff7a45);
  color: #ffffff;
  padding: 8rpx 16rpx;
  border-radius: 12rpx;
  font-size: 22rpx;
  font-weight: 600;
  box-shadow: 0 4rpx 12rpx rgba(255, 77, 79, 0.3);
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
  margin-bottom: 20rpx;
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

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-section {
  display: flex;
  align-items: baseline;
}

.price-symbol {
  font-size: 24rpx;
  font-weight: 700;
  color: #c41e3a;
  margin-right: 4rpx;
}

.price-value {
  font-size: 40rpx;
  font-weight: 900;
  color: #c41e3a;
  line-height: 1;
}

.price-unit {
  font-size: 22rpx;
  color: #999999;
  margin-left: 8rpx;
}

.buy-btn {
  background: linear-gradient(135deg, #002046, #003366);
  color: #ffffff;
  border: none;
  border-radius: 16rpx;
  padding: 12rpx 32rpx;
  font-size: 26rpx;
  font-weight: 600;
  box-shadow: 0 4rpx 16rpx rgba(0, 32, 70, 0.3);
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
}

.buy-text {
  color: #ffffff;
}
</style>
