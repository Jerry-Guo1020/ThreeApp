<template>
  <view class="composer">
    <view class="section-head">
      <text class="section-title">发表评价</text>
      <text class="section-subtitle">分享你的饮用体验</text>
    </view>

    <view class="score-panel">
      <text class="field-label">综合评分</text>
      <view class="score-stars">
        <text
          v-for="star in 5"
          :key="star"
          class="score-star"
          :class="{ active: star <= score }"
          @tap="handleChooseStar(star)"
        >★</text>
      </view>
      <text class="score-tip">{{ scoreTips[score - 1] || '请选择评分' }}</text>
    </view>

    <view class="field-card">
      <text class="field-label">评价内容</text>
      <textarea
        v-model="content"
        class="review-textarea"
        maxlength="300"
        placeholder="写下你的真实感受，比如口感、包装、物流体验等"
        placeholder-class="textarea-placeholder"
      />
      <text class="field-count">{{ content.length }}/300</text>
    </view>

    <view class="field-card">
      <view class="upload-head">
        <text class="field-label">上传图片</text>
        <text class="upload-tip">最多 6 张</text>
      </view>
      <view class="image-grid">
        <view class="image-cell" v-for="(item, index) in images" :key="`${item}-${index}`">
          <image class="upload-image" :src="item" mode="aspectFill" @tap="handlePreview(item)" />
          <view class="remove-btn" @tap="handleRemoveImage(index)">
            <text class="remove-text">×</text>
          </view>
        </view>
        <view v-if="images.length < maxImages" class="image-upload" @tap="handleChooseImage">
          <text class="upload-plus">+</text>
          <text class="upload-label">添加图片</text>
        </view>
      </view>
    </view>

    <view class="submit-btn" @tap="handleSubmit">
      <text class="submit-text">提交评价</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit']);

const maxImages = 6;
const score = ref(5);
const content = ref('');
const images = ref([]);

const scoreTips = ['非常不满意', '不太满意', '一般', '满意', '非常满意'];

const handleChooseStar = (star) => {
  score.value = star;
};

const handleChooseImage = () => {
  uni.chooseImage({
    count: maxImages - images.value.length,
    sizeType: ['compressed'],
    success: (res) => {
      images.value = [...images.value, ...res.tempFilePaths].slice(0, maxImages);
    }
  });
};

const handleRemoveImage = (index) => {
  images.value.splice(index, 1);
};

const handlePreview = (current) => {
  uni.previewImage({
    current,
    urls: images.value
  });
};

const resetForm = () => {
  score.value = 5;
  content.value = '';
  images.value = [];
};

const handleSubmit = () => {
  if (!content.value.trim()) {
    uni.showToast({
      title: '请先填写评价内容',
      icon: 'none'
    });
    return;
  }

  emit('submit', {
    score: score.value,
    content: content.value,
    images: images.value
  });

  resetForm();
};
</script>

<style scoped>
.composer {
  margin-bottom: 30rpx;
  padding: 30rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  box-shadow: 0 8rpx 28rpx rgba(0, 0, 0, 0.05);
}

.section-head {
  margin-bottom: 28rpx;
}

.section-title {
  display: block;
  font-size: 34rpx;
  font-weight: 800;
  color: #1A1A1A;
}

.section-subtitle {
  display: block;
  margin-top: 10rpx;
  font-size: 24rpx;
  color: #999999;
}

.score-panel {
  margin-bottom: 28rpx;
  padding: 24rpx;
  border-radius: 18rpx;
  background: linear-gradient(180deg, #FFF9ED 0%, #FFFFFF 100%);
  border: 1rpx solid rgba(197, 160, 89, 0.15);
}

.field-card {
  margin-bottom: 24rpx;
  padding: 24rpx;
  border-radius: 18rpx;
  background: #FAFAFA;
}

.field-label {
  display: block;
  margin-bottom: 18rpx;
  font-size: 28rpx;
  font-weight: 700;
  color: #333333;
}

.score-stars {
  display: flex;
  gap: 14rpx;
}

.score-star {
  font-size: 50rpx;
  color: #DDDDDD;
  line-height: 1;
}

.score-star.active {
  color: #C5A059;
}

.score-tip {
  display: block;
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #8B6914;
}

.review-textarea {
  width: 100%;
  min-height: 220rpx;
  font-size: 28rpx;
  color: #333333;
  line-height: 1.7;
}

.textarea-placeholder {
  color: #BBBBBB;
}

.field-count {
  display: block;
  margin-top: 14rpx;
  text-align: right;
  font-size: 22rpx;
  color: #AAAAAA;
}

.upload-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18rpx;
}

.upload-tip {
  font-size: 22rpx;
  color: #AAAAAA;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 18rpx;
}

.image-cell,
.image-upload {
  position: relative;
  width: 190rpx;
  height: 190rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.image-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2rpx dashed rgba(197, 160, 89, 0.35);
  background: #FFFDF8;
}

.upload-image {
  width: 100%;
  height: 100%;
}

.upload-plus {
  font-size: 50rpx;
  color: #C5A059;
  line-height: 1;
}

.upload-label {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: #8B6914;
}

.remove-btn {
  position: absolute;
  top: 10rpx;
  right: 10rpx;
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-text {
  font-size: 28rpx;
  color: #FFFFFF;
  line-height: 1;
}

.submit-btn {
  height: 84rpx;
  border-radius: 999rpx;
  background: linear-gradient(135deg, #C5A059, #E8D48B);
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-text {
  font-size: 28rpx;
  color: #FFFFFF;
  font-weight: 800;
  letter-spacing: 2rpx;
}
</style>
