const STORAGE_KEY = 'wine_detail_reviews';

const mockReviews = [
  {
    id: 'mock-1',
    avatar: '/static/avatar/default.png',
    nickname: '老陕酒客',
    score: 5,
    time: '2026-04-20',
    content: '凤香经典，入口绵柔不辣喉。开瓶就能闻到浓郁的粮食香，第一口下去就确认是正品。酒体醇厚，回味悠长，确实对得起十五年陈酿这个定位，会继续回购。',
    images: ['/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg']
  },
  {
    id: 'mock-2',
    avatar: '/static/avatar/default.png',
    nickname: '陈老板',
    score: 5,
    time: '2026-04-18',
    content: '买来送礼很体面，礼盒做工不错，金色元素很高级。朋友反馈说酒香干净、入口顺，宴请和节日送礼都很合适。',
    images: ['/static/wine/西凤酒.jpg']
  },
  {
    id: 'mock-3',
    avatar: '/static/avatar/default.png',
    nickname: '品酒师小李',
    score: 4,
    time: '2026-04-15',
    content: '作为凤香型白酒代表，这款酒的前段香气舒展得很好，入口甜润，中段醇厚，尾韵比较干净。相比同价位产品，风格识别度很高，物流外箱再扎实一点会更好。',
    images: ['/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg']
  },
  {
    id: 'mock-4',
    avatar: '/static/avatar/default.png',
    nickname: '张大爷',
    score: 5,
    time: '2026-04-12',
    content: '喝了很多年西凤，还是熟悉的味道。每天晚饭来一小杯，舒服，尾味很净，第二天也不觉得口干。',
    images: []
  },
  {
    id: 'mock-5',
    avatar: '/static/avatar/default.png',
    nickname: '阿辉',
    score: 5,
    time: '2026-04-09',
    content: '公司聚餐带了两瓶，同事都说香气很特别，不是那种冲鼻的风格。醒酒几分钟后层次更明显，整体很稳。',
    images: ['/static/wine/西凤酒.jpg']
  },
  {
    id: 'mock-6',
    avatar: '/static/avatar/default.png',
    nickname: '南城食客',
    score: 4,
    time: '2026-04-07',
    content: '包装细节做得挺好，防震也还行。酒体偏柔，不刺激，适合平时小酌。个人觉得价格再活动一些会更有竞争力。',
    images: []
  },
  {
    id: 'mock-7',
    avatar: '/static/avatar/default.png',
    nickname: '礼赠采购',
    score: 5,
    time: '2026-04-03',
    content: '这次集中采购了几箱，客户反馈很不错。外观大气、辨识度高，酒质也稳定，商务送礼确实省心。',
    images: ['/static/wine/西凤酒.jpg', '/static/wine/西凤酒.jpg']
  },
  {
    id: 'mock-8',
    avatar: '/static/avatar/default.png',
    nickname: '清风',
    score: 4,
    time: '2026-03-30',
    content: '第一次喝凤香型，和浓香、酱香都不太一样，辨识度挺高。入口顺滑，回甜舒服，适合想尝试新风格的人。',
    images: []
  }
];

const clone = (data) => JSON.parse(JSON.stringify(data));

export const loadWineReviews = () => {
  const stored = uni.getStorageSync(STORAGE_KEY);

  if (stored && Array.isArray(stored) && stored.length) {
    return clone(stored);
  }

  const initialReviews = clone(mockReviews);
  uni.setStorageSync(STORAGE_KEY, initialReviews);
  return initialReviews;
};

export const saveWineReviews = (reviews) => {
  uni.setStorageSync(STORAGE_KEY, clone(reviews));
};

export const createWineReview = ({ score, content, images }) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');

  return {
    id: `review-${now.getTime()}`,
    avatar: '/static/avatar/default.png',
    nickname: '新用户',
    score,
    time: `${year}-${month}-${day}`,
    content: content.trim(),
    images: [...images]
  };
};

export const getWineReviewStats = (reviews) => {
  const total = reviews.length;
  const average = total
    ? (reviews.reduce((sum, item) => sum + item.score, 0) / total).toFixed(1)
    : '5.0';

  const avgNum = Number(average);

  return {
    overallScore: average,
    commentCount: total,
    scoreBars: [
      { label: '口感', value: avgNum.toFixed(1), percent: Math.min(100, Math.round(avgNum * 20)) },
      { label: '包装', value: Math.max(4.0, (avgNum - 0.1)).toFixed(1), percent: Math.min(100, Math.round((avgNum - 0.1) * 20)) },
      { label: '物流', value: Math.max(4.0, (avgNum - 0.05)).toFixed(1), percent: Math.min(100, Math.round((avgNum - 0.05) * 20)) },
      { label: '性价比', value: Math.max(4.0, (avgNum - 0.2)).toFixed(1), percent: Math.min(100, Math.round((avgNum - 0.2) * 20)) }
    ]
  };
};
