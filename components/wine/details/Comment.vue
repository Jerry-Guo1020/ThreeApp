<template>
  <view class="comment">
    <ReviewSummary
      :overall-score="overallScore"
      :comment-count="commentCount"
      :score-bars="scoreBars"
      :show-action="true"
      @write-review="$emit('write-review')"
    />

    <ReviewList
      title="用户评价"
      :items="previewComments"
      :header-action-text="sortLabel"
      :header-action-active="true"
      :footer-action-text="footerActionText"
      empty-text="还没有人发评价，抢先说说你的体验。"
      @preview-image="handlePreview"
      @header-action="handleFilter"
      @footer-action="$emit('view-all')"
    />
  </view>
</template>

<script setup>
import { computed } from 'vue';
import ReviewSummary from '@/components/wine/detail/rating/ReviewSummary.vue';
import ReviewList from '@/components/wine/detail/rating/ReviewList.vue';

const props = defineProps({
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
  comments: {
    type: Array,
    default: () => []
  },
  sortType: {
    type: String,
    default: 'latest'
  },
  previewLimit: {
    type: Number,
    default: 5
  }
});

defineEmits(['write-review', 'view-all']);

const previewComments = computed(() => props.comments.slice(0, props.previewLimit));
const footerActionText = computed(() => (
  props.comments.length > props.previewLimit
    ? `查看更多评价（剩余${props.comments.length - props.previewLimit}条）`
    : ''
));
const sortLabel = computed(() => (props.sortType === 'score' ? '高分优先' : '最新'));

const handleFilter = () => {
  uni.showToast({
    title: props.sortType === 'latest' ? '当前按最新排序' : '当前按高分优先排序',
    icon: 'none'
  });
};

const handlePreview = ({ current, images }) => {
  uni.previewImage({
    current,
    urls: images
  });
};
</script>

<style scoped>
.comment {
  padding: 0 30rpx;
}
</style>
