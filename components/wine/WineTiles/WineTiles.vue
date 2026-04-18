<template>
  <view class="wine-tiles" :style="containerStyle">
    <view class="tiles-grid">
      <!-- 左上大卡片 - 湾区臻选 -->
      <view class="tile-card tile-large-left" :style="{ backgroundImage: `url(${tiles[0].bgImage})` }">
        <view class="tile-overlay"></view>
        <view class="tile-content">
          <text class="tile-title">{{ tiles[0].title }}</text>
          <text class="tile-desc">{{ tiles[0].description }}</text>
        </view>
      </view>

      <!-- 右上大卡片 - 陈年珍藏 -->
      <view class="tile-card tile-large-right" :style="{ backgroundImage: `url(${tiles[1].bgImage})` }">
        <view class="tile-overlay"></view>
        <view class="tile-content">
          <text class="tile-title">{{ tiles[1].title }}</text>
          <text class="tile-desc">{{ tiles[1].description }}</text>
        </view>
      </view>

      <!-- 中左小卡片 - 福莱好日子 (40% 宽) -->
      <view class="tile-card tile-medium-left" :style="{ backgroundImage: `url(${tiles[2].bgImage})` }">
        <view class="tile-overlay"></view>
        <view class="tile-content">
          <text class="tile-title">{{ tiles[2].title }}</text>
          <text class="tile-desc">{{ tiles[2].description }}</text>
        </view>
      </view>

      <!-- 中右小卡片 - 生肖定制 (60% 宽) -->
      <view class="tile-card tile-medium-right" :style="{ backgroundImage: `url(${tiles[3].bgImage})` }">
        <view class="tile-overlay"></view>
        <view class="tile-content">
          <text class="tile-title">{{ tiles[3].title }}</text>
          <text class="tile-desc">{{ tiles[3].description }}</text>
        </view>
      </view>

      <!-- 左下小卡片 - 雅致自饮 -->
      <view class="tile-card tile-small-bottom-left" :style="{ backgroundImage: `url(${tiles[4].bgImage})` }">
        <view class="tile-overlay"></view>
        <view class="tile-content">
          <text class="tile-title">{{ tiles[4].title }}</text>
          <text class="tile-desc">{{ tiles[4].description }}</text>
        </view>
      </view>

      <!-- 右下小卡片 - 节庆伴手 -->
      <view class="tile-card tile-small-bottom-right" :style="{ backgroundImage: `url(${tiles[5].bgImage})` }">
        <view class="tile-overlay"></view>
        <view class="tile-content">
          <text class="tile-title">{{ tiles[5].title }}</text>
          <text class="tile-desc">{{ tiles[5].description }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--cream-bg': '#fff9f0',
  '--coral-red': '#c9a959',
  '--warm-pink': '#ffe4e1',
  '--ivory': '#fffff0'
}));

const tiles = ref([
  {
    title: '波本蓝君邑 XO',
    description: '高端威士忌 · 醇厚绵柔',
    iconUrl: '/static/wine/波本蓝君邑xo酒水.png',
    bgImage: '/static/wine/波本蓝君邑xo产品.jpg'
  },
  {
    title: '西凤酒',
    description: '千年传承 · 凤香经典',
    iconUrl: '/static/wine/西凤酒.jpg',
    bgImage: '/static/wine/西凤酒.jpg'
  },
  {
    title: '福莱好日子',
    description: '喜庆专用 · 佳节必备',
    iconUrl: '/static/wine/福莱好日子.jpg',
    bgImage: '/static/wine/福莱好日子.jpg'
  },
  {
    title: '生肖定制',
    description: '生肖艺术 · 独特收藏',
    iconUrl: '/static/wine/细节.jpg',
    bgImage: '/static/wine/细节.jpg'
  },
  {
    title: '雅致自饮',
    description: '简约优雅 · 日常品味',
    iconUrl: '/static/wine/细节.jpg',
    bgImage: '/static/wine/细节.jpg'
  },
  {
    title: '节庆伴手',
    description: '精美礼盒 · 情意满满',
    iconUrl: '/static/wine/细节.jpg',
    bgImage: '/static/wine/细节.jpg'
  }
]);
</script>

<style lang="scss" scoped>
.wine-tiles {
  width: 100%;
  padding: 30rpx 30rpx 40rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, #fff9f0 0%, #fef5e8 100%);
}

.tiles-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20rpx;
  height: 600rpx;
}

.tile-card {
  position: relative;
  border-radius: 20rpx;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-color: #f5e6d3;
  box-shadow: 0 8rpx 24rpx rgba(184, 134, 11, 0.15);
  transition: transform 0.2s;
}

.tile-card:active {
  transform: scale(0.98);
}

.tile-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(255, 249, 240, 0.7) 0%,
    rgba(255, 235, 220, 0.5) 100%);
}

.tile-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24rpx 20rpx;
}

.tile-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #3d2817;
  margin-bottom: 8rpx;
  text-align: center;
  text-shadow: 0 1rpx 2rpx rgba(255, 255, 255, 0.8);
}

.tile-desc {
  font-size: 22rpx;
  color: #4a3728;
  text-align: center;
  text-shadow: 0 1rpx 2rpx rgba(255, 255, 255, 0.8);
}

/* 左上大卡片 - 占 3x2 格 */
.tile-large-left {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

/* 右上大卡片 - 占 3x2 格 */
.tile-large-right {
  grid-column: 4 / 7;
  grid-row: 1 / 3;
}

/* 中左小卡片 - 福莱好日子 (占 40% 宽，约 2.4 格) */
.tile-medium-left {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
}

/* 中右小卡片 - 生肖定制 (占 60% 宽，约 3.6 格) */
.tile-medium-right {
  grid-column: 4 / 7;
  grid-row: 3 / 4;
}

/* 左下小卡片 - 占 2x1 格 */
.tile-small-bottom-left {
  grid-column: 1 / 3;
  grid-row: 4 / 5;
}

/* 右下小卡片 - 占 4x1 格 */
.tile-small-bottom-right {
  grid-column: 3 / 7;
  grid-row: 4 / 5;
}
</style>
