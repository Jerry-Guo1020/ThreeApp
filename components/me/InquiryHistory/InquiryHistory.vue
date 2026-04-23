<template>
  <view class="inquiry-history">
    <view class="section-header">
      <text class="section-title">我的留言记录</text>
      <text class="view-all" @click="viewAll">查看全部</text>
    </view>
    <view class="inquiry-list">
      <view
        class="inquiry-card"
        v-for="(item, index) in inquiryList"
        :key="index"
        @click="viewDetail(item)"
      >
        <view class="card-header">
          <view class="card-left">
            <text class="inquiry-id">单号：{{ item.id }}</text>
            <text class="inquiry-title">{{ item.title }}</text>
          </view>
          <view :class="['status-tag', item.statusClass]">
            {{ item.status }}
          </view>
        </view>
        <text class="inquiry-desc">{{ item.description }}</text>
        <view class="card-footer">
          <text class="inquiry-date">{{ item.date }}</text>
          <view class="detail-btn" @click.stop="viewDetail(item)">
            <text>详情</text>
            <!-- 使用 unicode 字符 -->
            <text class="arrow-icon">&#xe5c8;</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const inquiryList = ref([
  {
    id: '20240315-001',
    title: '波尔多地下酒窖温控工程咨询',
    status: '处理中',
    statusClass: 'status-processing',
    description: '关于冷库恒温系统在 12-14 度之间的能耗表现，以及针对高湿度环境的抗腐蚀方案...',
    date: '2024 年 3 月 15 日 14:20'
  },
  {
    id: '20240228-042',
    title: '岭南特产供应链仓储建设',
    status: '已回复',
    statusClass: 'status-replied',
    description: '感谢对荔枝保鲜冷库方案的反馈，附件中是更新后的报价清单。',
    date: '2024 年 2 月 28 日 09:15'
  }
]);

const viewAll = () => {
  uni.navigateTo({
    url: '/pages/inquiry/list/list'
  });
};

const viewDetail = (item) => {
  uni.navigateTo({
    url: `/pages/inquiry/detail?id=${item.id}`
  });
};
</script>

<style scoped>
.inquiry-history {
  margin-bottom: 48rpx;
  padding: 0 30rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #002046;
  font-family: 'Manrope', sans-serif;
}

.view-all {
  font-size: 24rpx;
  color: #43474e;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}

.view-all:active {
  color: #002046;
}

.inquiry-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.inquiry-card {
  background-color: #edeeef;
  padding: 28rpx;
  border-radius: 16rpx;
  transition: all 0.3s ease;
}

.inquiry-card:active {
  background-color: #e7e8e9;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12rpx;
}

.card-left {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.inquiry-id {
  font-size: 20rpx;
  font-weight: 700;
  color: rgba(67, 71, 78, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.inquiry-title {
  font-size: 28rpx;
  font-weight: 700;
  color: #002046;
}

.status-tag {
  font-size: 20rpx;
  font-weight: 900;
  padding: 6rpx 16rpx;
  border-radius: 20rpx;
}

.status-processing {
  background-color: rgba(59, 130, 246, 0.1);
  color: #1e40af;
}

.status-replied {
  background-color: rgba(34, 197, 94, 0.1);
  color: #166534;
}

.inquiry-desc {
  font-size: 26rpx;
  color: #43474e;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 24rpx;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24rpx;
  border-top: 1rpx solid rgba(196, 198, 207, 0.3);
}

.inquiry-date {
  font-size: 22rpx;
  color: rgba(67, 71, 78, 0.7);
  font-style: italic;
}

.detail-btn {
  display: flex;
  align-items: center;
  gap: 6rpx;
  font-size: 26rpx;
  font-weight: 700;
  color: #002046;
  cursor: pointer;
  transition: all 0.2s ease;
}

.detail-btn:active {
  gap: 10rpx;
}

.arrow-icon {
  font-size: 28rpx;
  font-family: 'Material Icons Outlined', sans-serif;
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v140/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}
</style>
