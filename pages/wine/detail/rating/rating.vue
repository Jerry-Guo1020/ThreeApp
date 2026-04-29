<template>
  <view class="rating-page">
    <view class="custom-nav" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="nav-content">
        <view class="nav-back" @tap="handleBack">
          <text class="nav-back-icon">‹</text>
        </view>
        <text class="nav-title">{{ pageTitle }}</text>
        <view class="nav-placeholder"></view>
      </view>
    </view>

    <view class="page-body" :style="{ paddingTop: `calc(${statusBarHeight}px + 100rpx)` }">
      <ReviewSummary
        :overall-score="reviewStats.overallScore"
        :comment-count="reviewStats.commentCount"
        :score-bars="reviewStats.scoreBars"
      />

      <view class="page-switcher">
        <view
          class="switch-chip"
          :class="{ active: mode === 'write' }"
          @tap="handleSwitchMode('write')"
        >
          <text class="switch-chip-text">写评价</text>
        </view>
        <view
          class="switch-chip"
          :class="{ active: mode === 'list' }"
          @tap="handleSwitchMode('list')"
        >
          <text class="switch-chip-text">全部评价</text>
        </view>
      </view>

      <ReviewComposer v-if="showComposer" @submit="handleSubmitReview" />

      <view class="list-card">
        <view class="list-toolbar">
          <view class="toolbar-tip">
            <text class="toolbar-tip-text">共 {{ reviews.length }} 条真实评价</text>
          </view>
          <view class="toolbar-actions">
            <view
              class="toolbar-chip"
              :class="{ active: sortType === 'latest' }"
              @tap="handleChangeSort('latest')"
            >
              <text class="toolbar-chip-text">最新</text>
            </view>
            <view
              class="toolbar-chip"
              :class="{ active: sortType === 'score' }"
              @tap="handleChangeSort('score')"
            >
              <text class="toolbar-chip-text">高分优先</text>
            </view>
            <view
              class="toolbar-chip"
              :class="{ active: onlyWithImages }"
              @tap="handleToggleImagesOnly"
            >
              <text class="toolbar-chip-text">有图</text>
            </view>
          </view>
        </view>

        <ReviewList
          title="全部评价"
          :items="displayReviews"
          :header-action-text="sortLabel"
          :header-action-active="true"
          :footer-action-text="showBackToWrite ? '去写评价' : ''"
          :empty-text="emptyText"
          @preview-image="handlePreview"
          @header-action="handleCycleSort"
          @footer-action="handleSwitchMode('write')"
        />
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import ReviewSummary from '@/components/wine/detail/rating/ReviewSummary.vue';
import ReviewComposer from '@/components/wine/detail/rating/ReviewComposer.vue';
import ReviewList from '@/components/wine/detail/rating/ReviewList.vue';
import {
  loadWineReviews,
  saveWineReviews,
  createWineReview,
  getWineReviewStats
} from '@/components/wine/detail/rating/reviewStore.js';

const statusBarHeight = ref(0);
const reviews = ref([]);
const mode = ref('write');
const sortType = ref('latest');
const onlyWithImages = ref(false);

const showComposer = computed(() => mode.value !== 'list');
const pageTitle = computed(() => (showComposer.value ? '发表评价' : '全部评价'));
const reviewStats = computed(() => getWineReviewStats(reviews.value));
const sortedReviews = computed(() => {
  const list = [...reviews.value];

  if (sortType.value === 'score') {
    return list.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
  }

  return list.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
});
const displayReviews = computed(() => (
  onlyWithImages.value
    ? sortedReviews.value.filter((item) => item.images && item.images.length)
    : sortedReviews.value
));
const sortLabel = computed(() => (sortType.value === 'score' ? '高分优先' : '最新'));
const emptyText = computed(() => (
  onlyWithImages.value
    ? '当前筛选为有图评价，暂时没有匹配内容。'
    : '暂时还没有评价，写下你的第一条体验吧。'
));
const showBackToWrite = computed(() => mode.value === 'list');

onLoad((options) => {
  const systemInfo = uni.getSystemInfoSync();
  statusBarHeight.value = systemInfo.statusBarHeight || 0;
  mode.value = options?.mode || 'write';
  sortType.value = options?.sort === 'score' ? 'score' : 'latest';
  reviews.value = loadWineReviews();
});

const handleBack = () => {
  uni.navigateBack();
};

const handlePreview = ({ current, images }) => {
  uni.previewImage({
    current,
    urls: images
  });
};

const handleSwitchMode = (nextMode) => {
  mode.value = nextMode;
};

const handleChangeSort = (nextSort) => {
  sortType.value = nextSort;
};

const handleCycleSort = () => {
  sortType.value = sortType.value === 'latest' ? 'score' : 'latest';
};

const handleToggleImagesOnly = () => {
  onlyWithImages.value = !onlyWithImages.value;
};

const handleSubmitReview = (payload) => {
  const newReview = createWineReview(payload);
  reviews.value = [newReview, ...reviews.value];
  saveWineReviews(reviews.value);

  uni.showToast({
    title: '评价提交成功',
    icon: 'success'
  });

  mode.value = 'list';
  sortType.value = 'latest';
  onlyWithImages.value = false;
};
</script>

<style scoped>
.rating-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFF9F0 0%, #FFFFFF 38%, #F8F8F8 100%);
}

.custom-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
}

.nav-content {
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24rpx;
}

.nav-back,
.nav-placeholder {
  width: 64rpx;
  height: 64rpx;
  flex-shrink: 0;
}

.nav-back {
  border-radius: 50%;
  background: rgba(197, 160, 89, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-back-icon {
  font-size: 48rpx;
  color: #6F5316;
  line-height: 1;
}

.nav-title {
  font-size: 32rpx;
  font-weight: 800;
  color: #1A1A1A;
  letter-spacing: 2rpx;
}

.page-body {
  padding: 0 24rpx 40rpx;
}

.page-switcher {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.switch-chip {
  flex: 1;
  height: 76rpx;
  border-radius: 999rpx;
  background: rgba(255, 255, 255, 0.78);
  border: 1rpx solid rgba(197, 160, 89, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch-chip.active {
  background: linear-gradient(135deg, #C5A059, #E8D48B);
  box-shadow: 0 10rpx 24rpx rgba(197, 160, 89, 0.18);
}

.switch-chip-text {
  font-size: 26rpx;
  color: #7A5C18;
  font-weight: 700;
}

.switch-chip.active .switch-chip-text {
  color: #FFFFFF;
}

.list-card {
  padding: 30rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  box-shadow: 0 8rpx 28rpx rgba(0, 0, 0, 0.05);
}

.list-toolbar {
  margin-bottom: 16rpx;
}

.toolbar-tip {
  margin-bottom: 20rpx;
}

.toolbar-tip-text {
  font-size: 24rpx;
  color: #999999;
}

.toolbar-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14rpx;
}

.toolbar-chip {
  padding: 12rpx 22rpx;
  border-radius: 999rpx;
  background: #F7F7F7;
  border: 1rpx solid transparent;
}

.toolbar-chip.active {
  background: #FFF8E8;
  border-color: rgba(197, 160, 89, 0.28);
}

.toolbar-chip-text {
  font-size: 24rpx;
  color: #777777;
}

.toolbar-chip.active .toolbar-chip-text {
  color: #8B6914;
  font-weight: 700;
}
</style>
