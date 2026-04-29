<template>
  <view class="info">
    <view class="section">
      <view class="section-header">
        <view class="header-line"></view>
        <text class="section-title">产品参数</text>
        <text class="section-label">PRODUCT INFO</text>
      </view>
      <view class="params-grid">
        <view class="param-item" v-for="(item, index) in params" :key="index">
          <text class="param-label">{{ item.label }}</text>
          <text class="param-value">{{ item.value }}</text>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-header">
        <view class="header-line"></view>
        <text class="section-title">品牌故事</text>
        <text class="section-label">BRAND STORY</text>
      </view>
      <view class="brand-content">
        <text class="brand-text">{{ brandStory }}</text>
        <text class="brand-text" style="margin-top: 20rpx;">{{ brandStory2 }}</text>
        <image class="brand-img" src="/static/wine/西凤酒.jpg" mode="widthFix" />
      </view>
    </view>

    <view class="section">
      <view class="section-header">
        <view class="header-line"></view>
        <text class="section-title">口感品鉴</text>
        <text class="section-label">TASTING NOTES</text>
      </view>
      <view class="taste-tags">
        <view class="taste-tag" v-for="(tag, index) in tasteTags" :key="index">
          <text class="taste-icon">{{ tag.icon }}</text>
          <text class="taste-text">{{ tag.name }}</text>
        </view>
      </view>
      <text class="taste-desc">{{ tasteDescription }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const params = ref([
  { label: '品牌', value: '西凤酒' },
  { label: '香型', value: '凤香型' },
  { label: '酒精度', value: '52%vol' },
  { label: '规格', value: '500ml/瓶' },
  { label: '产地', value: '陕西·宝鸡·柳林镇' },
  { label: '存储条件', value: '阴凉干燥处' },
  { label: '酿造工艺', value: '土窖发酵、酒海储存' },
  { label: '陈酿年限', value: '15年' }
]);

const brandStory = '西凤酒发源于陕西省宝鸡市凤翔县柳林镇，始于殷商，距今已有三千余年历史。作为中国四大名酒之一，西凤酒以其独特的"凤香型"酿造技艺，被列入国家级非物质文化遗产名录。';
const brandStory2 = '"酒海"是西凤酒独有的储酒容器，以荆条编织、内糊血料与蜂蜡，使酒体在自然呼吸中缓慢醇化，最终形成"醇香秀雅、甘甜爽口、回味悠长"的独特风格。';

const tasteTags = ref([
  { name: '醇香秀雅', icon: '🌾' },
  { name: '甘润挺爽', icon: '💧' },
  { name: '尾净悠长', icon: '🍃' },
  { name: '不上头不口干', icon: '✨' },
  { name: '凤香典型', icon: '🏆' },
  { name: '酒海陈藏', icon: '📜' }
]);

const tasteDescription = '开瓶香气扑鼻，初闻为淡淡的蜜香与果香交织；入口绵柔甘润，酒体丰满，不刺喉、不辣口；中段可感受到粮食发酵带来的醇厚与微微甜感；尾韵干净悠长，饮后回味持久。整体呈现出凤香型白酒"酸、甜、苦、辣、香"五味协调的典型特征。';
</script>

<style scoped>
.info {
  padding: 0 30rpx;
}

.section {
  padding: 40rpx 0;
  border-bottom: 1rpx solid rgba(197, 160, 89, 0.15);
}

.section:last-child {
  border-bottom: none;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
}

.header-line {
  width: 6rpx;
  height: 32rpx;
  background: #C5A059;
  border-radius: 3rpx;
  margin-right: 16rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: 800;
  color: #1A1A1A;
  letter-spacing: 2px;
  flex: 1;
}

.section-label {
  font-size: 18rpx;
  color: #CCCCCC;
  letter-spacing: 1px;
}

.params-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24rpx;
}

.param-item {
  display: flex;
  flex-direction: column;
  padding: 20rpx 24rpx;
  background: #FAFAFA;
  border-radius: 12rpx;
  border: 1rpx solid rgba(197, 160, 89, 0.1);
}

.param-label {
  font-size: 22rpx;
  color: #999999;
  margin-bottom: 8rpx;
}

.param-value {
  font-size: 26rpx;
  font-weight: 700;
  color: #1A1A1A;
}

.brand-content {
  padding: 10rpx 0;
}

.brand-text {
  display: block;
  font-size: 28rpx;
  color: #555555;
  line-height: 1.8;
}

.brand-img {
  width: 100%;
  height: 360rpx;
  margin-top: 30rpx;
  border-radius: 16rpx;
  object-fit: cover;
}

.taste-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  margin-bottom: 24rpx;
}

.taste-tag {
  display: flex;
  align-items: center;
  padding: 14rpx 24rpx;
  background: linear-gradient(135deg, #FFFBF0, #FFF8E6);
  border-radius: 40rpx;
  border: 1rpx solid rgba(197, 160, 89, 0.2);
}

.taste-icon {
  font-size: 28rpx;
  margin-right: 10rpx;
}

.taste-text {
  font-size: 24rpx;
  color: #8B6914;
  font-weight: 600;
}

.taste-desc {
  display: block;
  font-size: 28rpx;
  color: #555555;
  line-height: 1.8;
}
</style>
