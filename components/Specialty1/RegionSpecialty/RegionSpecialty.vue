<template>
  <view class="region-specialty" :style="containerStyle">
    <view class="region-header">
      <view class="header-left">
        <text class="header-label">{{ config.label }}</text>
        <text class="header-title">{{ config.title }}</text>
      </view>
    </view>

    <view class="region-grid">
      <view
        class="region-card"
        v-for="(region, index) in config.regions"
        :key="index"
        :class="{ 'featured': region.featured }"
        @tap="handleRegionTap(region)">

        <view class="region-image-wrapper">
          <image
            class="region-image"
            :src="region.imageUrl"
            mode="aspectFill"></image>
          <view class="region-overlay"></view>

          <!-- 角标 -->
          <view class="region-badge" v-if="region.badge">
            <text class="badge-text">{{ region.badge }}</text>
          </view>

          <!-- 收藏数 -->
          <view class="region-stats">
            <view class="stat-item">
              <text class="stat-icon">❤️</text>
              <text class="stat-value">{{ region.likes }}</text>
            </view>
          </view>
        </view>

        <view class="region-info">
          <view class="region-name-row">
            <text class="region-name">{{ region.name }}</text>
            <view class="region-tags" v-if="region.tags">
              <text class="region-tag" v-for="(tag, tagIndex) in region.tags" :key="tagIndex">
                {{ tag }}
              </text>
            </view>
          </view>
          <text class="region-description">{{ region.description }}</text>

          <view class="region-products">
            <view class="product-item" v-for="(product, pIndex) in region.products" :key="pIndex">
              <text class="product-dot">•</text>
              <text class="product-name">{{ product }}</text>
            </view>
          </view>
        </view>

        <view class="region-footer">
          <view class="explore-btn">
            <text class="explore-text">探索</text>
            <text class="explore-icon">›</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  config: {
    type: Object,
    required: true,
    default: () => ({
      label: 'REGIONAL SPECIALTY',
      title: '地区特产',
      regions: [
        {
          name: '清远',
          description: '中国优秀旅游城市，素有"岭南名郡"之称',
          imageUrl: '/static/home/Banner/banner1.png',
          badge: '热门',
          likes: '12.5 万',
          tags: ['粤北', '历史文化'],
          products: ['清远鸡', '英德红茶', '阳山鹅', '连州菜心'],
          featured: true
        },
        {
          name: '潮汕',
          description: '潮汕文化发源地，美食之都',
          imageUrl: '/static/home/Banner/banner1.png',
          badge: '推荐',
          likes: '9.8 万',
          tags: ['粤东', '美食天堂'],
          products: ['牛肉丸', '蚝烙', '工夫茶', '腐乳饼'],
          featured: false
        },
        {
          name: '顺德',
          description: '世界美食之都，粤菜发源地之一',
          imageUrl: '/static/home/Banner/banner1.png',
          badge: '',
          likes: '8.2 万',
          tags: ['粤中', '美食之都'],
          products: ['双皮奶', '均安蒸猪', '陈村粉', '伦教糕'],
          featured: false
        }
      ]
    })
  }
});

const emit = defineEmits(['region-tap']);

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--bg-cream': '#fff9eb',
  '--navy-blue': '#002046'
}));

const handleRegionTap = (region) => {
  emit('region-tap', region);
};
</script>

<style lang="scss" scoped>
.region-specialty {
  width: 100%;
  padding: 0 30rpx 50rpx;
  box-sizing: border-box;
}

.region-header {
  display: flex;
  justify-content: flex-start;
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

.region-grid {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.region-card {
  background: #ffffff;
  border-radius: 28rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 20rpx rgba(0, 32, 70, 0.1);
  transition: all 0.3s ease;

  &.featured {
    border: 2rpx solid rgba(212, 175, 55, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2rpx 12rpx rgba(0, 32, 70, 0.08);
  }
}

.region-image-wrapper {
  position: relative;
  width: 100%;
  height: 280rpx;
  overflow: hidden;
}

.region-image {
  width: 100%;
  height: 100%;
  display: block;
}

.region-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0, 32, 70, 0.4) 100%);
}

.region-badge {
  position: absolute;
  top: 20rpx;
  left: 20rpx;
  background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
  padding: 8rpx 20rpx;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 12rpx rgba(255, 107, 107, 0.4);
}

.badge-text {
  font-size: 20rpx;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
}

.region-stats {
  position: absolute;
  bottom: 16rpx;
  right: 16rpx;
  display: flex;
  gap: 16rpx;
}

.stat-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 6rpx 14rpx;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 32, 70, 0.15);
}

.stat-icon {
  font-size: 18rpx;
  margin-right: 6rpx;
}

.stat-value {
  font-size: 20rpx;
  color: #002046;
  font-weight: 600;
}

.region-info {
  padding: 24rpx 24rpx 20rpx;
}

.region-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12rpx;
}

.region-name {
  font-size: 36rpx;
  font-weight: 900;
  color: #002046;
  letter-spacing: 2px;
}

.region-tags {
  display: flex;
  gap: 8rpx;
}

.region-tag {
  font-size: 18rpx;
  padding: 4rpx 12rpx;
  background: rgba(212, 175, 55, 0.15);
  color: #b8860b;
  border-radius: 8rpx;
  font-weight: 500;
}

.region-description {
  display: block;
  font-size: 24rpx;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 16rpx;
}

.region-products {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  padding: 16rpx;
  background: rgba(212, 175, 55, 0.05);
  border-radius: 16rpx;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.product-dot {
  font-size: 16rpx;
  color: #d4af37;
  flex-shrink: 0;
}

.product-name {
  font-size: 24rpx;
  color: #333333;
}

.region-footer {
  padding: 16rpx 24rpx 20rpx;
  border-top: 1rpx solid rgba(0, 32, 70, 0.08);
}

.explore-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
}

.explore-text {
  font-size: 26rpx;
  color: #002046;
  font-weight: 700;
  letter-spacing: 1px;
}

.explore-icon {
  font-size: 36rpx;
  color: #002046;
  transition: transform 0.3s ease;
}

.region-card:active .explore-icon {
  transform: translateX(8rpx);
}
</style>
