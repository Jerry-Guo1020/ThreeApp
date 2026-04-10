<template>
  <view class="category-grid">
    <view class="category-scroll">
      <scroll-view scroll-x show-scrollbar="false" class="scroll-view">
        <view class="scroll-content">
          <view
            class="category-item"
            v-for="(item, index) in categories"
            :key="index"
            :class="{ active: activeIndex === index }"
            @tap="selectCategory(index, item)">
            <view class="category-icon-wrapper" :class="{ 'active-bg': activeIndex === index }">
              <text class="category-icon">{{ item.icon }}</text>
            </view>
            <text class="category-name">{{ item.name }}</text>
            <view class="category-indicator" v-if="activeIndex === index"></view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

defineProps({
  categories: {
    type: Array,
    default: () => [
      { id: 'all', name: '全部精选', icon: '⭐' },
      { id: 'wine', name: '法国名庄', icon: '🍷' },
      { id: 'whisky', name: '威士忌', icon: '🥃' },
      { id: 'baijiu', name: '中式白酒', icon: '🍶' },
      { id: 'beer', name: '精酿啤酒', icon: '🍺' },
      { id: 'seafood', name: '海鲜干货', icon: '🦐' },
      { id: 'fruit', name: '岭南鲜果', icon: '🍊' },
      { id: 'snack', name: '特色小吃', icon: '🥮' }
    ]
  }
});

const emit = defineEmits(['category-change']);

const activeIndex = ref(0);

const selectCategory = (index, item) => {
  activeIndex.value = index;
  emit('category-change', item);
};
</script>

<style lang="scss" scoped>
.category-grid {
  width: 100%;
  padding: 20rpx 40rpx;
  background: #ffffff;
  border-radius: 0 0 32rpx 32rpx;
  box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.04);
}

.category-scroll {
  width: 100%;
  overflow: hidden;

  .scroll-view {
    width: 100%;
    white-space: nowrap;
  }

  .scroll-content {
    display: inline-flex;
    gap: 24rpx;
    padding: 8rpx 0;
  }
}

.category-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 16rpx 20rpx;
  background: transparent;
  border-radius: 20rpx;
  transition: all 0.3s ease;
  position: relative;
  min-width: 120rpx;

  &.active {
    .category-icon-wrapper {
      background: linear-gradient(135deg, #002046, #003366);
      box-shadow: 0 8rpx 20rpx rgba(0, 32, 70, 0.3);
      transform: scale(1.1);

      .category-icon {
        filter: brightness(0) invert(1);
      }
    }

    .category-name {
      color: #002046;
      font-weight: 700;
    }
  }
}

.category-icon-wrapper {
  width: 88rpx;
  height: 88rpx;
  background: linear-gradient(135deg, #f5f7fa, #e8ecf1);
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12rpx;
  transition: all 0.3s ease;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);

  .category-icon {
    font-size: 44rpx;
    transition: all 0.3s ease;
  }
}

.category-name {
  font-size: 26rpx;
  color: #666666;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.category-indicator {
  position: absolute;
  bottom: 8rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 40rpx;
  height: 6rpx;
  background: linear-gradient(90deg, #d4af37, #b8941f);
  border-radius: 3rpx;
}
</style>
