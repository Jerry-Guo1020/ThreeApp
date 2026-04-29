<template>
  <view class="comment">
    <view class="rating-banner">
      <view class="rating-left">
        <text class="rating-score">{{ overallScore }}</text>
        <view class="stars-mini">
          <text
            v-for="s in 5"
            :key="s"
            class="star-star"
            :style="{ color: s <= Math.round(overallScore) ? '#C5A059' : '#DDD' }"
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
      </view>
    </view>

    <view class="comments-list">
      <view class="comments-header">
        <text class="comments-title">用户评价</text>
        <text class="comments-filter" @tap="handleFilter">最新</text>
      </view>

      <view class="comment-item" v-for="(item, index) in comments" :key="index">
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
        <view class="comment-images" v-if="item.images.length">
          <image
            class="comment-img"
            v-for="(img, idx) in item.images"
            :key="idx"
            :src="img"
            mode="aspectFill"
            @tap="handlePreview(img, item.images)"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const overallScore = ref(4.8);
const commentCount = ref(236);

const scoreBars = ref([
  { label: '口感', value: 4.9, percent: 98 },
  { label: '包装', value: 4.7, percent: 94 },
  { label: '物流', value: 4.8, percent: 96 },
  { label: '性价比', value: 4.6, percent: 92 }
]);

const comments = ref([
  {
    avatar: '/static/avatar/default.png',
    nickname: '老陕酒客',
    score: 5,
    time: '2026-04-20',
    content: '凤香经典，入口绵柔不辣喉。开瓶就能闻到浓郁的粮食香，第一口下去就确认是正品。酒体醇厚，回味悠长，确实是对得起"十五年陈酿"这个称号。会长期回购。',
    images: ['/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg']
  },
  {
    avatar: '/static/avatar/default.png',
    nickname: '陈老板',
    score: 5,
    time: '2026-04-15',
    content: '买来送礼的，包装非常大气，礼盒有质感。朋友收到后喝了说口感不错，性价比很高。下次过节准备再订几箱。',
    images: ['/static/wine/西凤酒.jpg']
  },
  {
    avatar: '/static/avatar/default.png',
    nickname: '品酒师小李',
    score: 4,
    time: '2026-04-08',
    content: '作为凤香型白酒的代表作，这款西凤酒在香气和口感上做到了很好的平衡。入口甜润，中段醇厚，尾韵干净。比起同价位的浓香型，个人更偏爱凤香的独特风格。扣一分是因为物流包装可以再加强。',
    images: ['/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg']
  },
  {
    avatar: '/static/avatar/default.png',
    nickname: '张大爷',
    score: 5,
    time: '2026-03-28',
    content: '喝了三十多年酒了，西凤还是那个味道。酒海陈藏出来的酒，确实不一样。每天晚饭来一杯，美得很！',
    images: []
  }
]);

const handleFilter = () => {
  uni.showToast({ title: '筛选功能开发中', icon: 'none' });
};

const handlePreview = (current, images) => {
  uni.previewImage({
    current: current,
    urls: images
  });
};
</script>

<style scoped>
.comment {
  padding: 0 30rpx;
}

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
</style>
