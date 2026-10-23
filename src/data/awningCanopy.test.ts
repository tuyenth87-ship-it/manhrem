import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  AWNING_PHOTO_ARTICLES,
  CURATED_AWNING_VIDEOS,
  AWNING_UNIT_PRICE_PER_SQM,
  calculateAwningCanopyQuote,
  filterAwningPhotoArticles,
  filterCuratedAwningVideos,
} from './awningCanopy';

test('AWNING_PHOTO_ARTICLES contains all 5 uploaded photos with tailored articles at 350,000 VND/m2', () => {
  assert.equal(AWNING_PHOTO_ARTICLES.length, 5);
  assert.equal(AWNING_UNIT_PRICE_PER_SQM, 350000);

  const expectedImages = [
    '/assets/aistudio/IMG_6787_3dc0c93a.JPG',
    '/assets/aistudio/IMG_6788_36978811.JPG',
    '/assets/aistudio/IMG_6789_90126eda.JPG',
    '/assets/aistudio/IMG_6790_02a22c42.JPG',
    '/assets/aistudio/IMG_6791_228353ec.JPG',
  ];

  AWNING_PHOTO_ARTICLES.forEach((article, idx) => {
    assert.equal(article.image, expectedImages[idx]);
    assert.equal(article.pricePerSqm, 350000);
    assert.ok(article.title.length > 20);
    assert.ok(article.articleParagraphs.length >= 3);
    assert.ok(article.socialPostCopy.includes('350.000'));
  });
});

test('CURATED_AWNING_VIDEOS includes 3 local Tuyến Hoa videos and 6 curated internet motorized awning videos', () => {
  assert.equal(CURATED_AWNING_VIDEOS.length, 9);

  const localVideos = filterCuratedAwningVideos(CURATED_AWNING_VIDEOS, 'video-tuyen-hoa');
  assert.equal(localVideos.length, 3);
  assert.equal(localVideos[0].localVideoUrl, '/assets/aistudio/lv_0_20260706112032_1ddbd08c.mp4');
  assert.equal(localVideos[1].localVideoUrl, '/assets/aistudio/2026-07-05-161259219_b4419ba0.mp4');
  assert.equal(localVideos[2].localVideoUrl, '/assets/aistudio/gemini_generated_video_493AC8E9_855479a1.mp4');

  const autoWaveVideos = filterCuratedAwningVideos(CURATED_AWNING_VIDEOS, 'bat-xep-tu-dong');
  assert.equal(autoWaveVideos.length, 4);
  autoWaveVideos.forEach((v) => {
    assert.ok(v.youtubeId && v.youtubeId.length === 11);
  });
});

test('calculateAwningCanopyQuote computes 350,000 VND/m2 all-inclusive price and optional motor accurately', () => {
  // 4m x 5m = 20m2 -> 20 * 350,000 = 7,000,000 VND
  const standardQuote = calculateAwningCanopyQuote({
    widthMeters: 4,
    projectionMeters: 5,
    includeMotor: false,
  });
  assert.equal(standardQuote.areaSqm, 20);
  assert.equal(standardQuote.canopyAndInstallCost, 7000000);
  assert.equal(standardQuote.motorCost, 0);
  assert.equal(standardQuote.totalCost, 7000000);

  // With 400kg motor (+3,200,000 VND) -> 10,200,000 VND
  const motorizedQuote = calculateAwningCanopyQuote({
    widthMeters: 4,
    projectionMeters: 5,
    includeMotor: true,
    motorId: 'motor-bat-400kg',
  });
  assert.equal(motorizedQuote.areaSqm, 20);
  assert.equal(motorizedQuote.canopyAndInstallCost, 7000000);
  assert.equal(motorizedQuote.motorCost, 3200000);
  assert.equal(motorizedQuote.totalCost, 10200000);
});

test('filterAwningPhotoArticles filters by category', () => {
  assert.equal(filterAwningPhotoArticles(AWNING_PHOTO_ARTICLES, 'all').length, 5);
  assert.equal(filterAwningPhotoArticles(AWNING_PHOTO_ARTICLES, 'san-thuong').length, 1);
  assert.equal(filterAwningPhotoArticles(AWNING_PHOTO_ARTICLES, 'gara-o-to').length, 1);
});
