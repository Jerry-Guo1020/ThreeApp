<template>
  <view class="specialty-page">
    <!-- 顶部标题 -->
    <SpecialtyTitle />

    <!-- 分类导航金刚区 -->
    <CategoryGrid
      :categories="categories"
      @category-change="handleCategoryChange"
    />

    <!-- 瀑布流商品列表 -->
    <ProductWaterfall
      :products="filteredProducts"
      :columnCount="2"
      @product-tap="handleProductTap"
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
import SpecialtyTitle from '@/components/specialty/SpecialtyTitle/SpecialtyTitle.vue';
import CategoryGrid from '@/components/specialty/CategoryGrid/CategoryGrid.vue';
import ProductWaterfall from '@/components/specialty/ProductWaterfall/ProductWaterfall.vue';

// 分类数据
const categories = ref([
  { id: 'all', name: '全部精选', icon: '⭐' },
  { id: 'qingyuan', name: '清远特产', icon: '🐔' },
  { id: 'meat', name: '禽肉蛋品', icon: '🦆' },
  { id: 'vegetable', name: '山珍蔬食', icon: '🎋' },
  { id: 'fruit', name: '岭南鲜果', icon: '🍒' },
  { id: 'tea', name: '茶叶冲饮', icon: '🍵' }
]);

// 当前选中的分类
const selectedCategory = ref('all');

// 商品数据 - 广东/清远特产
const products = ref([
  {
    id: 1,
    title: '清远走地鸡 散养土鸡 约 3 斤',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '清远农家',
    tags: ['肉质鲜嫩', '散养走地鸡'],
    category: 'qingyuan',
    url: '/pages/specialty/detail?id=1'
  },
  {
    id: 2,
    title: '阳山冬笋 新鲜竹笋 500g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '阳山特产',
    tags: ['鲜嫩爽口', '高山竹笋'],
    category: 'vegetable',
    url: '/pages/specialty/detail?id=2'
  },
  {
    id: 3,
    title: '阳山马蹄 新鲜荸荠 约 500g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '阳山农家',
    tags: ['清甜多汁', '新鲜采摘'],
    category: 'vegetable',
    url: '/pages/specialty/detail?id=3'
  },
  {
    id: 4,
    title: '增城荔枝干 甘甜可口 500g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '岭南鲜果',
    tags: ['天然晒干', '广东特产'],
    category: 'fruit',
    url: '/pages/specialty/detail?id=4'
  },
  {
    id: 5,
    title: '英德红茶 英红九号 一级红茶 100g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '英德茶业',
    tags: ['香气浓郁', '广东名茶'],
    category: 'tea',
    url: '/pages/specialty/detail?id=5'
  },
  {
    id: 6,
    title: '连州大鹅 农家散养 约 4 斤',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '连州农家',
    tags: ['肉质紧实', '散养大鹅'],
    category: 'meat',
    url: '/pages/specialty/detail?id=6'
  },
  {
    id: 7,
    title: '清远麻油鸡 即食熟食 500g',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '清远风味',
    tags: ['开袋即食', '地道风味'],
    category: 'qingyuan',
    url: '/pages/specialty/detail?id=7'
  },
  {
    id: 8,
    title: '阳山番薯干 软糯香甜 250g 装',
    imageUrl: '/static/home/Banner/banner1.png',
    brand: '阳山农家',
    tags: ['传统工艺', '自然晾晒'],
    category: 'vegetable',
    url: '/pages/specialty/detail?id=8'
  }
]);

// 根据选中分类过滤商品
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value;
  }
  return products.value.filter(p => p.category === selectedCategory.value);
});

// 处理分类切换
const handleCategoryChange = (item) => {
  selectedCategory.value = item.id;
  console.log('切换到分类:', item.name);
};

// 处理商品点击
const handleProductTap = (item) => {
  console.log('点击商品:', item.title);
};
</script>

<style lang="scss" scoped>
.specialty-page {
  min-height: 100vh;
  background: #f8f9fa;
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
