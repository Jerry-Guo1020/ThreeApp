<template>
  <view class="specialty-page">
    <!-- 顶部导航栏 - 滚动到一定距离后显示 -->
    <PageHeader
      :visible="showHeader"
      title="岭南特产"
      :menu-icon-url="headerMenuIconUrl"
    />

    <!-- 顶部标题 -->
    <SpecialtyTitle />

    <!-- 品牌故事 -->
    <BrandStory :config="brandStoryConfig" />

    <!-- 核心亮点 -->
    <Highlights />

    <!-- 分类导航 -->
    <CategoryBar
      :categories="categories"
      :selected-id="selectedCategory"
      @category-change="handleCategoryChange"
    />

    <!-- 瀑布流商品列表 -->
    <ProductWaterfall
      :products="filteredProducts"
      :column-count="2"
      :header-config="waterfallHeaderConfig"
      @product-tap="handleProductTap"
    />

    <!-- 地区特产 -->
    <RegionSpecialty
      :config="regionSpecialtyConfig"
      @region-tap="handleRegionTap"
    />

    <!-- 空状态提示 -->
    <view class="empty-state" v-if="filteredProducts.length === 0">
      <text class="empty-icon">📦</text>
      <text class="empty-text">暂无商品</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';
import PageHeader from '@/components/common/PageHeader/PageHeader.vue';
import SpecialtyTitle from '@/components/specialty/SpecialtyTitle/SpecialtyTitle.vue';
import BrandStory from '@/components/specialty/BrandStory/BrandStory.vue';
import Highlights from '@/components/specialty/Highlights/Highlights.vue';
import CategoryBar from '@/components/specialty/CategoryBar/CategoryBar.vue';
import ProductWaterfall from '@/components/specialty/ProductWaterfall/ProductWaterfall.vue';
import RegionSpecialty from '@/components/specialty/RegionSpecialty/RegionSpecialty.vue';

// ===== 分类数据 =====
const categories = ref([
  { id: 'all', name: '全部精选', icon: '⭐' },
  { id: 'qingyuan', name: '清远特产', icon: '🐔' },
  { id: 'meat', name: '禽肉蛋品', icon: '🦆' },
  { id: 'vegetable', name: '山珍蔬食', icon: '🎋' },
  { id: 'fruit', name: '岭南鲜果', icon: '🍒' },
  { id: 'tea', name: '茶叶冲饮', icon: '🍵' },
  { id: 'snack', name: '休闲零食', icon: '🍪' }
]);

// 当前选中的分类
const selectedCategory = ref('all');

// ===== 品牌故事配置 =====
const brandStoryConfig = ref({
  label: 'ABOUT SPECIALTY',
  title: '关于特产',
  description: '广东特产源远流长，承载着岭南大地千年的饮食文化。从清远走地鸡的鲜嫩多汁，到英德红茶的醇厚香甜，每一款特产都是大自然与匠人智慧的完美结合。',
  slogan: '岭南风味 · 传承经典'
});

// ===== 瀑布流头部配置 =====
const waterfallHeaderConfig = ref({
  label: 'SPECIALTY SELECTION',
  title: '特产精选'
});

// ===== 商品数据 - 广东/清远特产 =====
const products = ref([
  // 清远特产
  {
    id: 1,
    title: '清远走地鸡 散养土鸡 约 3 斤',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '清远农家',
    tags: ['肉质鲜嫩', '散养'],
    category: 'qingyuan',
    origin: '广东清远',
    badge: '热销',
    url: '/pages/specialty/detail?id=1'
  },
  {
    id: 2,
    title: '英德红茶 英红九号 一级红茶 100g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '英德茶业',
    tags: ['香气浓郁', '广东名茶'],
    category: 'tea',
    origin: '广东英德',
    badge: '推荐',
    url: '/pages/specialty/detail?id=2'
  },
  {
    id: 3,
    title: '阳山冬笋 新鲜竹笋 500g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '阳山特产',
    tags: ['鲜嫩爽口', '高山竹笋'],
    category: 'vegetable',
    origin: '广东阳山',
    url: '/pages/specialty/detail?id=3'
  },
  {
    id: 4,
    title: '连州大鹅 农家散养 约 4 斤',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '连州农家',
    tags: ['肉质紧实', '散养'],
    category: 'meat',
    origin: '广东连州',
    url: '/pages/specialty/detail?id=4'
  },
  {
    id: 5,
    title: '阳山马蹄 新鲜荸荠 约 500g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '阳山农家',
    tags: ['清甜多汁', '新鲜采摘'],
    category: 'vegetable',
    origin: '广东阳山',
    url: '/pages/specialty/detail?id=5'
  },
  {
    id: 6,
    title: '清远麻油鸡 即食熟食 500g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '清远风味',
    tags: ['开袋即食', '地道风味'],
    category: 'qingyuan',
    origin: '广东清远',
    badge: '新品',
    url: '/pages/specialty/detail?id=6'
  },
  // 其他广东特产
  {
    id: 7,
    title: '增城荔枝干 甘甜可口 500g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '岭南鲜果',
    tags: ['天然晒干', '广东特产'],
    category: 'fruit',
    origin: '广东广州',
    url: '/pages/specialty/detail?id=7'
  },
  {
    id: 8,
    title: '阳山番薯干 软糯香甜 250g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '阳山农家',
    tags: ['传统工艺', '自然晾晒'],
    category: 'snack',
    origin: '广东阳山',
    url: '/pages/specialty/detail?id=8'
  },
  {
    id: 9,
    title: '潮汕牛肉丸 手打弹牙 500g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '潮汕风味',
    tags: ['手打', '弹牙'],
    category: 'meat',
    origin: '广东潮汕',
    badge: '热销',
    url: '/pages/specialty/detail?id=9'
  },
  {
    id: 10,
    title: '顺德双皮奶 传统甜品 200g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '顺德美食',
    tags: ['传统工艺', '香甜滑嫩'],
    category: 'snack',
    origin: '广东顺德',
    url: '/pages/specialty/detail?id=10'
  },
  {
    id: 11,
    title: '新会陈皮 十年陈化 50g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '新会特产',
    tags: ['十年陈化', '药用价值'],
    category: 'tea',
    origin: '广东江门',
    badge: '珍藏',
    url: '/pages/specialty/detail?id=11'
  },
  {
    id: 12,
    title: '茂名荔枝 新鲜现摘 1000g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '茂名果园',
    tags: ['新鲜现摘', '核小肉厚'],
    category: 'fruit',
    origin: '广东茂名',
    url: '/pages/specialty/detail?id=12'
  }
]);

// ===== 地区特产配置 =====
const regionSpecialtyConfig = ref({
  label: 'REGIONAL SPECIALTY',
  title: '地区特产',
  regions: [
    {
      name: '清远',
      description: '中国优秀旅游城市，素有"岭南名郡"之称',
      imageUrl: '/static/home/Banner/banner1.png',
      badge: '热门',
      likes: '12.5 万',
      tags: ['粤北', '历史文化'],
      products: ['清远鸡', '英德红茶', '阳山鹅', '连州菜心'],
      featured: true
    },
    {
      name: '潮汕',
      description: '潮汕文化发源地，美食之都',
      imageUrl: '/static/home/Banner/banner1.png',
      badge: '推荐',
      likes: '9.8 万',
      tags: ['粤东', '美食天堂'],
      products: ['牛肉丸', '蚝烙', '工夫茶', '腐乳饼'],
      featured: false
    },
    {
      name: '顺德',
      description: '世界美食之都，粤菜发源地之一',
      imageUrl: '/static/home/Banner/banner1.png',
      badge: '',
      likes: '8.2 万',
      tags: ['粤中', '美食之都'],
      products: ['双皮奶', '均安蒸猪', '陈村粉', '伦教糕'],
      featured: false
    }
  ]
});

// ===== 根据选中分类过滤商品 =====
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value;
  }
  return products.value.filter(p => p.category === selectedCategory.value);
});

// 控制 Header 显示/隐藏
const showHeader = ref(false);
const headerShowThreshold = 100;
const headerMenuIconUrl = '/static/home/NavGrid/特产.png';

// 使用 uni-app 的 onPageScroll 生命周期
onPageScroll((e) => {
  const scrollTop = e.scrollTop;
  showHeader.value = scrollTop > headerShowThreshold;
});

// ===== 事件处理函数 =====
const handleCategoryChange = (item) => {
  selectedCategory.value = item.id;
  console.log('切换到分类:', item.name);
};

const handleProductTap = (product) => {
  console.log('点击商品:', product.title);
  uni.showToast({
    title: `查看：${product.title}`,
    icon: 'none',
    duration: 1500
  });
};

const handleRegionTap = (region) => {
  console.log('点击地区:', region.name);
  uni.showToast({
    title: `探索：${region.name}`,
    icon: 'none',
    duration: 1500
  });
};
</script>

<style lang="scss" scoped>
.specialty-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff9eb 0%, #f5f7fa 40%, #ffffff 100%);
  padding-bottom: 40rpx;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120rpx 40rpx;
}

.empty-icon {
  font-size: 120rpx;
  margin-bottom: 24rpx;
}

.empty-text {
  font-size: 28rpx;
  color: #999999;
}
</style>
