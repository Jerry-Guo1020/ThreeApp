<template>
  <view class="comments-list">
    <view class="comments-header">
      <text class="comments-title">{{ title }}</text>
      <text
        v-if="headerActionText"
        class="comments-filter"
        :class="{ active: headerActionActive }"
        @tap="$emit('header-action')"
      >{{ headerActionText }}</text>
    </view>

    <view v-if="items.length">
      <view class="comment-item" v-for="item in items" :key="item.id">
        <view class="comment-header">
          <image class="comment-avatar" :src="item.avatar" mode="aspectFill" />
          <view class="comment-user">
            <text class="comment-nickname">{{ item.nickname }}</text>
            <view class="comment-stars">
              <text
                v-for="s in 5"
                :key="s"
                class="comment-star"
                :style="{ color: s <= item.score ? '#C5A059' : '#DDD' }"
              >★</text>
            </view>
          </view>
          <text class="comment-time">{{ item.time }}</text>
        </view>
        <text class="comment-text">{{ item.content }}</text>
        <view class="comment-images" v-if="item.images && item.images.length">
          <image
            class="comment-img"
            v-for="(img, idx) in item.images"
            :key="`${item.id}-${idx}`"
            :src="img"
            mode="aspectFill"
            @tap="$emit('preview-image', { current: img, images: item.images })"
          />
        </view>
      </view>
    </view>

    <view v-else class="empty-state">
      <text class="empty-title">还没有评价内容</text>
      <text class="empty-desc">{{ emptyText }}</text>
    </view>

    <view v-if="footerActionText" class="footer-action" @tap="$emit('footer-action')">
      <text class="footer-action-text">{{ footerActionText }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '用户评价'
  },
  items: {
    type: Array,
    default: () => []
  },
  headerActionText: {
    type: String,
    default: ''
  },
  headerActionActive: {
    type: Boolean,
    default: false
  },
  footerActionText: {
    type: String,
    default: ''
  },
  emptyText: {
    type: String,
    default: '提交第一条评价，告诉大家你的真实感受。'
  }
});

defineEmits(['preview-image', 'header-action', 'footer-action']);
</script>

<style scoped>
.comments-list {
  padding-bottom: 40rpx;
}

.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
}

.comments-title {
  font-size: 32rpx;
  font-weight: 800;
  color: #1A1A1A;
  letter-spacing: 1px;
}

.comments-filter {
  font-size: 24rpx;
  color: #999999;
  padding: 8rpx 20rpx;
  border: 1rpx solid #E0E0E0;
  border-radius: 30rpx;
}

.comments-filter.active {
  color: #8B6914;
  border-color: rgba(197, 160, 89, 0.35);
  background: #FFF9ED;
}

.comment-item {
  padding: 30rpx 0;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
}

.comment-item:last-child {
  border-bottom: none;
}

.comment-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16rpx;
}

.comment-avatar {
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  margin-right: 16rpx;
  flex-shrink: 0;
  border: 2rpx solid rgba(197, 160, 89, 0.2);
  background: #F5F5F5;
}

.comment-user {
  flex: 1;
}

.comment-nickname {
  font-size: 28rpx;
  font-weight: 700;
  color: #1A1A1A;
}

.comment-stars {
  margin-top: 4rpx;
}

.comment-star {
  font-size: 22rpx;
}

.comment-time {
  font-size: 22rpx;
  color: #BBBBBB;
  align-self: flex-start;
  margin-top: 6rpx;
}

.comment-text {
  display: block;
  font-size: 28rpx;
  color: #444444;
  line-height: 1.7;
  margin-bottom: 20rpx;
}

.comment-images {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
}

.comment-img {
  width: 180rpx;
  height: 180rpx;
  border-radius: 8rpx;
  object-fit: cover;
}

.empty-state {
  padding: 60rpx 0 40rpx;
  text-align: center;
}

.empty-title {
  display: block;
  font-size: 30rpx;
  color: #1A1A1A;
  font-weight: 700;
}

.empty-desc {
  display: block;
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #999999;
  line-height: 1.6;
}

.footer-action {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12rpx;
  padding: 24rpx 0;
}

.footer-action-text {
  font-size: 26rpx;
  color: #8B6914;
  font-weight: 700;
}
</style>
