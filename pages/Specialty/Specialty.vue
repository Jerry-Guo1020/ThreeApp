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
      @add-to-cart="handleAddToCart"
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
  { id: 'wine', name: '法国名庄', icon: '🍷' },
  { id: 'whisky', name: '威士忌', icon: '🥃' },
  { id: 'baijiu', name: '中式白酒', icon: '🍶' },
  { id: 'beer', name: '精酿啤酒', icon: '🍺' },
  { id: 'seafood', name: '海鲜干货', icon: '🦐' },
  { id: 'fruit', name: '岭南鲜果', icon: '🍊' },
  { id: 'snack', name: '特色小吃', icon: '🥮' }
]);

// 当前选中的分类
const selectedCategory = ref('all');

// 商品数据
const products = ref([
  {
    id: 1,
    title: '波尔多列级庄 红葡萄酒 2018 年份',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6v3kuzWjzvCu3QVNOnMyYeNrcpu-6EHstX3_VHsYniJiAyXu4f152VptM631K9MCuZ0W3GYhBozN-KswDHdUGIWLN_ZozIxD4vFqm53T_g5MJOioTwnaWLp8L5_lwVVnqEumT_xby9Qb14m9uvjxpTbAFy-rGLZ_enJGZlsrIUKxRR-RTlBYljH1ErN06ofKmU478i-jXHy71hRGs4PlM7yjalfMYbLH3Hyg6HSzGtoB0rjqq5aEO_KC2KKhZZwFgDQchW-qcSgQ',
    brand: 'VINTAGE CO',
    price: '598',
    priceUnit: '起',
    tags: ['橡木桶陈酿', '产地直供'],
    category: 'wine',
    url: '/pages/specialty/detail?id=1'
  },
  {
    id: 2,
    title: '喜力星银 Heineken Silver 500ml*12 罐',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJvk845uCmsF0oipUslwx6K7X_psFeBW64RjRM9P2tVUM_PtmyfoCcS1sf8SuK-Q7wAYy-Uhg954nU5E3F8SnK3j6HMWWyLceXFlOb201kXoopIG2ktkdr5fVm6d-hEflmDNUv3X5YPddzbHCjaTJLr8mfYVkcaP0uvlZe2mVhkefLsIwyKV8j9prOTvNwLQ6ywZOfzuw35eo27TFFWPtpKamjr_SdGvTpCDG_IwCpw0_RoXfsMxu8arepmb8FEgBj3wS3Cn4l2vI',
    brand: 'HEINEKEN',
    price: '89',
    priceUnit: '起',
    tags: ['麦香浓郁', '冷链配送'],
    category: 'beer',
    url: '/pages/specialty/detail?id=2'
  },
  {
    id: 3,
    title: '典藏级 52 度 浓香型白酒 500ml 礼盒装',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4r2gVv3syoK64XZ64bQtIGW9jW8UHtngZVnpQM5mWU3jrOz1vIowKnWdtvTJ-xssUj_7R2MXd4lFc5km2QUhpT1mO4_e2O-VgLKqBksFcGv0L53tn0dRX4Lxiv64wxISzvhqEmYwP9f0Np_8AWJlsZWZSdOkCvRKLhzcF9Jj_nPDDqOa1eZe_1_OQW_xeRGln24JNM__7SLOkMd3e42SIapblEN2plLP3Iic--ZD8lD8mG7qoSsQ47MIWvLynt2PHAKpDoOiCUYQ',
    brand: '国窖品鉴',
    price: '1299',
    priceUnit: '起',
    tags: ['国货经典', '岁月珍藏'],
    category: 'baijiu',
    url: '/pages/specialty/detail?id=3'
  },
  {
    id: 4,
    title: '斯佩塞 12 年 单一麦芽苏格兰威士忌',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUdf8-wLJH5BhIhTf3kKOC5J2UR1KGpVdCF-H6HIe7EU4C0_41WkZ0L8cyYeGLaifJ7-ZWapaEA0iEIByKWjyFKOJi9CEsUNkIYT2HbUzEGYEUAyJRqeipNxF_8itYnAPo4cxL2N4d0p5Gi-LHYwXLyGDfEaVCb7_FufGv3o5mvuzLahtbjUfFNQ2yswsgSe-p7TfNp0giRLezIxGvlDuqy9a_rBEVwUtO2rwQldaJPOZdOcoh60AbR9ArqGnP35tBfpl-2mJaiQ',
    brand: 'SINGLE MALT',
    price: '428',
    tags: ['果香悠长'],
    category: 'whisky',
    url: '/pages/specialty/detail?id=4'
  },
  {
    id: 5,
    title: '酩悦 香槟 750ml 欢庆时刻首选',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpbo_fBl1D0kbEz5e6D78mlI5yLVtplhzeDfRKMZEZqyR6TuSpELMdCASukyIBgZSoIswLBS0nj9ENWHdXR8IfElQGjxahE-8QRUInHO5hQ7akwofG-QlpABM1eAFfhlk1bLASTKXs3wC9ll91vjfhmvff6n1aQSWWt4VxE_jsSHjjpU2wLjYdDp2vWJp9Z40ag5KWbsvetA3Btek-Kmu7QCJY2FIXMrBfUkw5ihKrX6tOpmNtYAnR7U_MXgD6w-7Y5i6CxBwuIrQ',
    brand: 'MOËT CHANDON',
    price: '450',
    tags: ['气泡细腻', '旗舰推荐'],
    category: 'wine',
    url: '/pages/specialty/detail?id=5'
  },
  {
    id: 6,
    title: '福建宁德大黄鱼干 海鲜特产礼盒',
    imageUrl: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEECPRpAZAXQl3cBfhxDxuSt1AojYoeHQAC7iAAAtCQCFQvkTsfSeUnwjYE.jpg',
    brand: '宁德海产',
    price: '168',
    tags: ['福建特产', '天然晾晒'],
    category: 'seafood',
    url: '/pages/specialty/detail?id=6'
  },
  {
    id: 7,
    title: '广东新会陈皮 十年陈化 珍藏版',
    imageUrl: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESETBpwP6ugYWtISs6XQ81KokrT4mBIgACnCQAAiLeCFbhCOwpzFtBizoE.png',
    brand: '新会陈皮',
    price: '398',
    tags: ['十年陈化', '养生佳品'],
    category: 'snack',
    url: '/pages/specialty/detail?id=7'
  },
  {
    id: 8,
    title: '岭南荔枝干 甘甜可口 500g 装',
    imageUrl: 'https://api.hcyj.xyz/images/dnfw.png',
    brand: '岭南鲜果',
    price: '58',
    tags: ['天然晒干', '甘甜可口'],
    category: 'fruit',
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

// 处理加入购物车
const handleAddToCart = (item) => {
  console.log('加入购物车:', item.title);
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
