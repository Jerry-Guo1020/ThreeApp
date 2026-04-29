<template>
  <view class="rating-banner">
    <view class="rating-left">
      <text class="rating-score">{{ overallScore }}</text>
      <view class="stars-mini">
        <text
          v-for="s in 5"
          :key="s"
          class="star-star"
          :style="{ color: s <= Math.round(Number(overallScore)) ? '#C5A059' : '#DDD' }"
        >★</text>
      </view>
      <text class="rating-count">{{ commentCount }}条评价</text>
    </view>
    <view class="rating-right">
      <view class="score-breakdown" v-for="(bar, index) in scoreBars" :key="index">
        <text class="score-label">{{ bar.label }}</text>
        <view class="bar-track">
          <view class="bar-fill" :style="{ width: bar.percent + '%' }"></view>
        </view>
        <text class="score-num">{{ bar.value }}</text>
      </view>

      <view v-if="showAction" class="summary-action" @tap="$emit('write-review')">
        <text class="summary-action-text">写评价</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  overallScore: {
    type: [String, Number],
    default: '5.0'
  },
  commentCount: {
    type: Number,
    default: 0
  },
  scoreBars: {
    type: Array,
    default: () => []
  },
  showAction: {
    type: Boolean,
    default: false
  }
});

defineEmits(['write-review']);
</script>

<style scoped>
.rating-banner {
  display: flex;
  padding: 40rpx 30rpx;
  margin: 30rpx 0;
  background: #FFFFFF;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.06);
  border: 1rpx solid rgba(197, 160, 89, 0.1);
}

.rating-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 40rpx;
  border-right: 1rpx solid #F0F0F0;
}

.rating-score {
  font-size: 64rpx;
  font-weight: 900;
  color: #C5A059;
  line-height: 1;
}

.stars-mini {
  margin-top: 10rpx;
}

.star-star {
  font-size: 26rpx;
}

.rating-count {
  font-size: 22rpx;
  color: #999999;
  margin-top: 10rpx;
}

.rating-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40rpx;
}

.score-breakdown {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.score-breakdown:last-of-type {
  margin-bottom: 0;
}

.score-label {
  font-size: 24rpx;
  color: #666666;
  width: 70rpx;
  flex-shrink: 0;
}

.bar-track {
  flex: 1;
  height: 10rpx;
  background: #F0F0F0;
  border-radius: 5rpx;
  margin: 0 16rpx;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #C5A059, #E8D48B);
  border-radius: 5rpx;
}

.score-num {
  font-size: 24rpx;
  color: #C5A059;
  font-weight: 700;
  width: 40rpx;
  text-align: right;
  flex-shrink: 0;
}

.summary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 24rpx;
  padding: 14rpx 28rpx;
  border-radius: 999rpx;
  background: linear-gradient(135deg, #C5A059, #E8D48B);
}

.summary-action-text {
  font-size: 24rpx;
  color: #FFFFFF;
  font-weight: 700;
}
</style>
