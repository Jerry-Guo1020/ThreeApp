<template>
  <view class="home-header">
    <!-- 轮播图 -->
    <view class="banner-container">
      <swiper class="banner-swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500"
        :indicator-color="'rgba(255, 255, 255, 0.5)'" :indicator-active-color="'#ffffff'">
        <swiper-item v-for="(item, index) in bannerList" :key="index">
          <view class="banner-item">
            <image class="banner-image" :src="item.imageUrl" mode="aspectFill"></image>
            <view class="banner-text">
              <text class="banner-title">{{ item.title }}</text>
              <text class="banner-desc" v-if="item.description">{{ item.description }}</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';



// 轮播图数据
const bannerList = ref([
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    linkUrl: '/pages/community/index',
    title: '校园社区动态',
    description: '了解最新校园活动与社区资讯'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    linkUrl: '/pages/club/index',
    title: '社团活动招新',
    description: '丰富多彩的社团等你加入'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    linkUrl: '/pages/service/index',
    title: '校园互助服务',
    description: '便捷的校园生活服务平台'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=2070&auto=format&fit=crop',
    linkUrl: '/pages/learning/index',
    title: '学习资源共享',
    description: '优质学习资源一站获取'
  }
]);
</script>

<style lang="scss" scoped>
.home-header {
  width: 100%;

  .welcome-section {
    padding: 0 5vw 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome-text {
      .greeting {
        font-size: 5vw;
        font-weight: 500;
        color: #333;
        letter-spacing: 0.05em;
      }

      .username {
        font-size: 5vw;
        font-weight: 600;
        color: #07c160;
        letter-spacing: 0.05em;
        position: relative;
        text-shadow: 0 1px 2px rgba(7, 193, 96, 0.2);
      }
    }

    .date-info {
      .date {
        font-size: 3.2vw;
        color: #666;
        background-color: #f5f5f5;
        padding: 1vw 3vw;
        border-radius: 4vw;
        letter-spacing: 0.5px;
      }
    }
  }

  .banner-container {
    padding: 0 5vw;
    margin-bottom: 4vw;

    .banner-swiper {
      width: 100%;
      height: 45vw;
      border-radius: 4vw;
      overflow: hidden;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

      .banner-item {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .banner-image {
          width: 100%;
          height: 100%;
          transition: transform 0.3s;

          &:hover {
            transform: scale(1.05);
          }
        }

        .banner-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 4vw;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));

          .banner-title {
            font-size: 4.5vw;
            font-weight: 600;
            color: #fff;
            display: block;
            margin-bottom: 1vw;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          }

          .banner-desc {
            font-size: 3.2vw;
            color: rgba(255, 255, 255, 0.9);
            display: block;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
}
</style>
