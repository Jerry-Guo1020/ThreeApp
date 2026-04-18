<template>
  <view class="category-bar" :style="containerStyle">
    <scroll-view
      class="category-scroll"
      scroll-x
      :show-scrollbar="false"
      :enable-flex="true">
      <view class="category-list">
        <view
          class="category-item"
          v-for="(item, index) in categories"
          :key="index"
          :class="{ active: selectedId === item.id }"
          @tap="handleTap(item)">
          <text class="category-icon">{{ item.icon }}</text>
          <text class="category-name">{{ item.name }}</text>
          <view class="category-indicator" v-if="selectedId === item.id"></view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => []
  },
  selectedId: {
    type: String,
    default: 'all'
  }
});

const emit = defineEmits(['category-change']);

const containerStyle = computed(() => ({
  '--primary-gold': '#d4af37',
  '--light-gold': '#f4e4bc',
  '--bg-cream': '#fff9eb'
}));

const handleTap = (item) => {
  emit('category-change', item);
};
</script>

<style lang="scss" scoped>
.category-bar {
  width: 100%;
  padding: 0 30rpx 30rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 249, 235, 0.5));
}

.category-scroll {
  width: 100%;
  white-space: nowrap;
}

.category-list {
  display: inline-flex;
  gap: 20rpx;
  padding: 10rpx 0;
}

.category-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx 28rpx;
  background: #ffffff;
  border-radius: 28rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 32, 70, 0.08);
  border: 2rpx solid transparent;
  transition: all 0.3s ease;
  position: relative;
  min-width: 140rpx;

  &.active {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(255, 183, 77, 0.06));
    border-color: #d4af37;
  }

  &:active {
    transform: scale(0.95);
  }
}

.category-icon {
  font-size: 44rpx;
  margin-bottom: 10rpx;
  display: block;
}

.category-name {
  font-size: 26rpx;
  color: #002046;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
}

.category-indicator {
  position: absolute;
  bottom: 10rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 40rpx;
  height: 4rpx;
  background: linear-gradient(90deg, #d4af37, #f4c430);
  border-radius: 2rpx;
}
</style>
