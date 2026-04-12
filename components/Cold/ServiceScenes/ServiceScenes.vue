<template>
  <view class="service-scenes" :style="containerStyle">
    <view class="scenes-header">
      <text class="header-label">{{ config.label }}</text>
      <text class="header-title">{{ config.title }}</text>
    </view>

    <view class="scenes-grid">
      <view
        class="scene-card"
        v-for="(scene, index) in config.scenes"
        :key="index"
        @tap="handleSceneTap(scene)">
        <view class="scene-image-wrapper">
          <image class="scene-image" :src="scene.image" mode="aspectFill"></image>
          <view class="scene-overlay"></view>
          <view class="scene-index">{{ index + 1 }}</view>
        </view>
        <view class="scene-info">
          <text class="scene-name">{{ scene.name }}</text>
          <text class="scene-description">{{ scene.description }}</text>
          <view class="scene-tags" v-if="scene.tags">
            <text class="scene-tag" v-for="(tag, tagIndex) in scene.tags" :key="tagIndex">{{ tag }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, defineEmits } from 'vue';

const props = defineProps({
  config: {
    type: Object,
    required: true,
    default: () => ({
      label: 'SERVICE SCENARIOS',
      title: '服务场景',
      scenes: [
        {
          name: '生鲜食品',
          description: '果蔬、肉类、海鲜等生鲜产品恒温保鲜',
          image: '/static/cold/scene-fresh.jpg',
          tags: ['0-4℃冷藏', '湿度控制']
        },
        {
          name: '冷冻食品',
          description: '速冻食品、冰淇淋等深度冷冻存储',
          image: '/static/cold/scene-frozen.jpg',
          tags: ['-18℃冷冻', '快速降温']
        },
        {
          name: '医药产品',
          description: '疫苗、生物制品等专业医药冷链',
          image: '/static/cold/scene-pharma.jpg',
          tags: ['GSP 认证', '全程追溯']
        },
        {
          name: '餐饮连锁',
          description: '中央厨房食材统一仓储配送',
          image: '/static/cold/scene-restaurant.jpg',
          tags: ['批量存储', '定时配送']
        }
      ]
    })
  }
});

const emit = defineEmits(['scene-tap']);

const containerStyle = computed(() => ({
  '--primary-blue': '#005293',
  '--light-blue': '#0078cc',
  '--bg-light': '#e6f0fa'
}));

const handleSceneTap = (scene) => {
  emit('scene-tap', scene);
};
</script>

<style lang="scss" scoped>
.service-scenes {
  width: 100%;
  padding: 0 30rpx 60rpx;
  box-sizing: border-box;
  background: #ffffff;
}

.scenes-header {
  text-align: center;
  margin-bottom: 48rpx;
}

.header-label {
  display: block;
  font-size: 22rpx;
  color: #0078cc;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12rpx;
}

.header-title {
  display: block;
  font-size: 44rpx;
  font-weight: 900;
  color: #005293;
  letter-spacing: 8px;
}

.scenes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  width: 100%;
  box-sizing: border-box;
}

.scene-card {
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 20rpx rgba(0, 82, 147, 0.1);
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2rpx 12rpx rgba(0, 82, 147, 0.08);
  }
}

.scene-image-wrapper {
  position: relative;
  width: 100%;
  height: 240rpx;
  overflow: hidden;
}

.scene-image {
  width: 100%;
  height: 100%;
  display: block;
}

.scene-info {
  padding: 20rpx;
}

.scene-name {
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #005293;
  margin-bottom: 10rpx;
  letter-spacing: 2px;
}

.scene-description {
  display: block;
  font-size: 24rpx;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 16rpx;
}

.scene-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
}

.scene-tag {
  font-size: 20rpx;
  padding: 6rpx 14rpx;
  background: rgba(0, 120, 204, 0.1);
  color: #0078cc;
  border-radius: 8rpx;
  font-weight: 500;
}

.scene-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0, 82, 147, 0.4) 100%);
}

.scene-index {
  position: absolute;
  top: 16rpx;
  left: 16rpx;
  width: 56rpx;
  height: 56rpx;
  background: linear-gradient(135deg, #005293, #0078cc);
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  font-weight: 700;
  color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 82, 147, 0.3);
}
</style>
