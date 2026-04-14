<template>
  <view class="product-waterfall" :style="containerStyle">
    <view class="waterfall-header">
      <view class="header-left">
        <text class="header-label">{{ headerConfig.label }}</text>
        <text class="header-title">{{ headerConfig.title }}</text>
      </view>
      <view class="header-right" v-if="totalCount > 0">
        <text class="total-count">{{ totalCount }} 款特产</text>
      </view>
    </view>

    <!-- 瀑布流布局 -->
    <view class="waterfall-container">
      <view class="waterfall-column" v-for="(column, colIndex) in columns" :key="colIndex">
        <view
          class="product-card"
          v-for="(product, index) in column"
          :key="product.id"
          :style="{ height: product.cardHeight + 'rpx' }"
          @tap="handleProductTap(product)">

          <!-- 商品图片 -->
          <view class="product-image-wrapper">
            <image
              class="product-image"
              :src="product.imageUrl"
              mode="aspectFill"
              lazy-load></image>
            <view class="product-overlay"></view>
            <!-- 收藏按钮 -->
            <view class="favorite-btn">
              <text class="favorite-icon">♡</text>
            </view>
          </view>

          <!-- 商品信息 -->
          <view class="product-info">
            <text class="product-title">{{ product.title }}</text>

            <view class="product-meta">
              <text class="product-brand">{{ product.brand }}</text>
              <view class="product-tags" v-if="product.tags && product.tags.length > 0">
                <text class="product-tag" v-for="(tag, tagIndex) in product.tags" :key="tagIndex">
                  {{ tag }}
                </text>
              </view>
            </view>

            <!-- 产地信息 -->
            <view class="product-origin" v-if="product.origin">
              <text class="origin-icon">📍</text>
              <text class="origin-text">{{ product.origin }}</text>
            </view>
          </view>

          <!-- 卡片角标 -->
          <view class="card-corner-badge" v-if="product.badge">
            <text class="badge-text">{{ product.badge }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => []
  },
  columnCount: {
    type: Number,
    default: 2
  },
  headerConfig: {
    type: Object,
    default: () => ({
      label: 'SPECIALTY SELECTION',
      title: '特产精选'
    })
  }
});

const emit = defineEmits(['product-tap']);

const columns = ref([]);

const totalCount = computed(() => props.products.length);

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--bg-cream': '#fff9eb',
  '--column-count': props.columnCount
}));

// 分配商品到不同列，实现瀑布流效果
const distributeProducts = () => {
  const cols = Array(props.columnCount).fill(null).map(() => []);

  props.products.forEach((product, index) => {
    // 找到当前高度最短的列
    let minHeight = Infinity;
    let minIndex = 0;

    cols.forEach((col, idx) => {
      const colHeight = col.reduce((sum, p) => sum + (p.cardHeight || 400), 0);
      if (colHeight < minHeight) {
        minHeight = colHeight;
        minIndex = idx;
      }
    });

    // 为每个产品生成随机卡片高度（模拟小红书长短不一的效果）
    const baseHeight = 420;
    const heightVariation = [60, 80, 100, 120, 140];
    product.cardHeight = baseHeight + heightVariation[index % heightVariation.length];

    cols[minIndex].push(product);
  });

  columns.value = cols;
};

const handleProductTap = (product) => {
  emit('product-tap', product);
};

watch(() => props.products, () => {
  distributeProducts();
}, { immediate: true, deep: true });

onMounted(() => {
  distributeProducts();
});
</script>

<style lang="scss" scoped>
.product-waterfall {
  width: 100%;
  padding: 0 30rpx 40rpx;
  box-sizing: border-box;
}

.waterfall-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30rpx;
  padding: 20rpx 0;
}

.header-left {
  display: flex;
  flex-direction: column;
}

.header-label {
  font-size: 22rpx;
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 8rpx;
}

.header-title {
  font-size: 42rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 6px;
}

.header-right {
  text-align: right;
}

.total-count {
  font-size: 24rpx;
  color: #999999;
  font-weight: 500;
}

.waterfall-container {
  display: flex;
  gap: 20rpx;
}

.waterfall-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.product-card {
  background: #ffffff;
  border-radius: 28rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 20rpx rgba(0, 32, 70, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2rpx 12rpx rgba(0, 32, 70, 0.08);
  }
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 280rpx;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  display: block;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 32, 70, 0.2) 100%);
}

.favorite-btn {
  position: absolute;
  top: 16rpx;
  right: 16rpx;
  width: 56rpx;
  height: 56rpx;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2rpx 8rpx rgba(0, 32, 70, 0.2);
}

.favorite-icon {
  font-size: 28rpx;
  color: #ff6b6b;
}

.product-info {
  padding: 20rpx 18rpx 18rpx;
}

.product-title {
  display: block;
  font-size: 28rpx;
  font-weight: 700;
  color: #002046;
  line-height: 1.4;
  margin-bottom: 12rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 80rpx;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12rpx;
}

.product-brand {
  font-size: 22rpx;
  color: #999999;
  font-weight: 500;
}

.product-tags {
  display: flex;
  gap: 8rpx;
  flex-wrap: wrap;
}

.product-tag {
  font-size: 18rpx;
  padding: 4rpx 12rpx;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(255, 183, 77, 0.08));
  color: #b8860b;
  border-radius: 8rpx;
  font-weight: 500;
}

.product-origin {
  display: flex;
  align-items: center;
  gap: 6rpx;
}

.origin-icon {
  font-size: 20rpx;
}

.origin-text {
  font-size: 20rpx;
  color: #666666;
}

.card-corner-badge {
  position: absolute;
  top: 16rpx;
  left: 16rpx;
  background: linear-gradient(135deg, #d4af37, #b8860b);
  padding: 8rpx 20rpx;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 12rpx rgba(212, 175, 55, 0.4);
}

.badge-text {
  font-size: 20rpx;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
