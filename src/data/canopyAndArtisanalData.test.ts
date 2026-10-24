import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ANNOTATED_PRODUCT_POSTS,
  CANOPY_STANDARD_PRICE,
  MARKET_PRICE_SUMMARY_TABLE,
  calculateCanopyOrderTotal,
  filterAnnotatedProducts,
  generateFullCatalogFacebookPost,
  getCanopyProductById,
} from './canopyAndArtisanalData';

test('Màn khung standard price is exactly 1,000,000 VND per 1.8m x 2.0m set', () => {
  assert.equal(CANOPY_STANDARD_PRICE, 1000000);
  const singleSet = calculateCanopyOrderTotal({
    modelCode: 'MK-TH-01',
    setsCount: 1,
  });
  assert.equal(singleSet.canopyUnitPrice, 1000000);
  assert.equal(singleSet.canopySubtotal, 1000000);
  assert.equal(singleSet.discountAmount, 0);
  assert.equal(singleSet.finalTotal, 1000000);
  assert.equal(singleSet.freeInstallation, true);
});

test('Multi-set Màn khung order applies 50,000 VND/set discount and calculates combo items accurately', () => {
  const comboOrder = calculateCanopyOrderTotal({
    modelCode: 'MK-TH-02',
    setsCount: 2,
    includeWindowCurtainMeters: 2.5,
    tuongBottle500mlCount: 2,
    tuongGiftJarCount: 1,
  });
  // 2 sets = 2,000,000; 2.5m curtain * 600,000 = 1,500,000; 2*65,000 + 1*120,000 = 250,000
  // Discount for 2 sets = 100,000 -> Final = 3,650,000
  assert.equal(comboOrder.canopySubtotal, 2000000);
  assert.equal(comboOrder.curtainSubtotal, 1500000);
  assert.equal(comboOrder.tuongSubtotal, 250000);
  assert.equal(comboOrder.discountAmount, 100000);
  assert.equal(comboOrder.finalTotal, 3650000);
});

test('All annotated products have market price tiers, visual annotations, specs, and clear Facebook post copy', () => {
  assert.ok(ANNOTATED_PRODUCT_POSTS.length >= 14);
  assert.ok(MARKET_PRICE_SUMMARY_TABLE.length >= 8);

  const canopyItems = filterAnnotatedProducts('man-khung-1tr');
  assert.equal(canopyItems.length, 4);
  for (const item of canopyItems) {
    assert.equal(item.numericPrice, 1000000);
    assert.ok(item.standardDimensions.includes('1,8m'));
    assert.ok(item.standardDimensions.includes('2,0m'));
    assert.ok(item.visualAnnotations.length >= 3);
    assert.ok(item.marketPriceRange.length > 5);
    assert.ok(item.marketPriceTiers.length >= 3);
  }

  const tuongItems = filterAnnotatedProducts('tuong-ngoc-tuyen');
  assert.equal(tuongItems.length, 4);
  for (const item of tuongItems) {
    assert.ok(item.marketPriceTiers.length >= 3);
  }

  const projectItems = filterAnnotatedProducts('cong-trinh-video');
  assert.equal(projectItems.length, 6);
  for (const item of projectItems) {
    assert.ok(item.marketPriceTiers.length >= 3);
  }

  const foundByCode = getCanopyProductById('MK-TH-01');
  assert.ok(foundByCode);
  assert.equal(foundByCode?.id, 'man-khung-xanh-duong-hoa-mai-mk01');
});

test('generateFullCatalogFacebookPost produces comprehensive market-priced post copy', () => {
  const fullPost = generateFullCatalogFacebookPost('all');
  assert.ok(fullPost.includes('1.000.000đ / 1 bộ'));
  assert.ok(fullPost.includes('600.000đ / mét ngang'));
  assert.ok(fullPost.includes('520.000đ / 1 m²'));
  assert.ok(fullPost.includes('65.000đ / chai'));
  assert.ok(fullPost.includes('0344.727.528'));
});
