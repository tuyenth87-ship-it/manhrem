import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ANNOTATED_PRODUCT_POSTS,
  CANOPY_STANDARD_PRICE,
  DEDUPLICATION_SUMMARY,
  MARKET_PRICE_SUMMARY_TABLE,
  calculateCanopyOrderTotal,
  filterAnnotatedProducts,
  generateFullCatalogFacebookPost,
  getCanopyProductById,
  getDeduplicatedProductPosts,
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

test('Deduplication removes all duplicate primary and secondary images across all 34 annotated posts', () => {
  const dedupedPosts = getDeduplicatedProductPosts();
  assert.equal(dedupedPosts.length, 34);
  assert.equal(ANNOTATED_PRODUCT_POSTS.length, 34);
  assert.equal(MARKET_PRICE_SUMMARY_TABLE.length, 14);

  // Verify no two posts share the exact same primary imageUrl
  const primaryImages = dedupedPosts.map((p) => p.imageUrl);
  const uniquePrimaryImages = new Set(primaryImages);
  assert.equal(uniquePrimaryImages.size, dedupedPosts.length);

  // Verify no post has duplicate secondaryImages and no secondary image overlaps across posts
  const allSeenImages = new Set<string>(primaryImages);
  for (const post of dedupedPosts) {
    if (post.secondaryImages) {
      const uniqueSecondary = new Set(post.secondaryImages);
      assert.equal(
        uniqueSecondary.size,
        post.secondaryImages.length,
        `Post ${post.code} has duplicate secondaryImages`
      );
      for (const secImg of post.secondaryImages) {
        assert.ok(!allSeenImages.has(secImg), `Duplicate image across posts: ${secImg}`);
        allSeenImages.add(secImg);
      }
      // Verify known byte-for-byte duplicate files are excluded
      assert.ok(
        !post.secondaryImages.includes(
          '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu__1__6f3f19ae.png'
        )
      );
      assert.ok(
        !post.secondaryImages.includes(
          '/assets/aistudio/Gemini_Generated_Image_v2fukev2fukev2fu__2__6f3f19ae.png'
        )
      );
    }
  }

  // Verify deduplication summary accounting
  assert.equal(DEDUPLICATION_SUMMARY.totalUploaded, 75);
  assert.equal(DEDUPLICATION_SUMMARY.totalRemovedDuplicates, 25);
  assert.equal(DEDUPLICATION_SUMMARY.totalUniquePublished, 50);
  assert.equal(DEDUPLICATION_SUMMARY.groups.length, 6);
});

test('All annotated products have market price tiers, visual annotations, specs, and clear Facebook post copy', () => {
  const canopyAndBeddingItems = filterAnnotatedProducts('man-khung-1tr');
  assert.equal(canopyAndBeddingItems.length, 13);

  // Verify the 4 newly added video & showroom posts (with duplicates & CapCut screen removed)
  const remTuDong = getCanopyProductById('RTD-TH-01');
  assert.ok(remTuDong);
  assert.equal(remTuDong?.mediaType, 'video');
  assert.equal(remTuDong?.imageUrl, '/assets/aistudio/IMG_5314_ae0205c4.PNG');

  const videoToHop3Tang = getCanopyProductById('VID-TH-01');
  assert.ok(videoToHop3Tang);
  assert.equal(videoToHop3Tang?.mediaType, 'video');
  assert.equal(videoToHop3Tang?.videoUrl, '/assets/aistudio/lv_0_20260706112032_1ddbd08c.mp4');

  const videoRemXanhCoVit = getCanopyProductById('VID-TH-02');
  assert.ok(videoRemXanhCoVit);
  assert.equal(videoRemXanhCoVit?.mediaType, 'video');
  assert.equal(videoRemXanhCoVit?.videoUrl, '/assets/aistudio/2026-07-05-161259219_b4419ba0.mp4');

  const videoVongXep = getCanopyProductById('VX-NT-01');
  assert.ok(videoVongXep);
  assert.equal(videoVongXep?.mediaType, 'video');
  assert.equal(videoVongXep?.numericPrice, 550000);

  // Verify the 6 mattress posts (16 photos)
  const demLongVu = getCanopyProductById('DLV-TH-01');
  assert.ok(demLongVu);
  assert.equal(demLongVu?.numericPrice, 1850000);
  assert.equal(demLongVu?.secondaryImages?.length, 3);

  const demKimCuong = getCanopyProductById('DKC-TH-01');
  assert.ok(demKimCuong);
  assert.equal(demKimCuong?.numericPrice, 1850000);
  assert.equal(demKimCuong?.secondaryImages?.length, 2);

  const demVicuna = getCanopyProductById('DVC-TH-01');
  assert.ok(demVicuna);
  assert.equal(demVicuna?.numericPrice, 2150000);
  assert.equal(demVicuna?.secondaryImages?.length, 2);

  const demCaro = getCanopyProductById('DCR-TH-01');
  assert.ok(demCaro);
  assert.equal(demCaro?.numericPrice, 1750000);
  assert.equal(demCaro?.secondaryImages?.length, 1);

  const demGamDo = getCanopyProductById('DGD-TH-01');
  assert.ok(demGamDo);
  assert.equal(demGamDo?.numericPrice, 1450000);
  assert.equal(demGamDo?.secondaryImages?.length, 1);

  const khoPhoiDem = getCanopyProductById('KXD-TH-01');
  assert.ok(khoPhoiDem);
  assert.equal(khoPhoiDem?.numericPrice, 1350000);
  assert.equal(khoPhoiDem?.secondaryImages?.length, 1);

  const chieuMay = getCanopyProductById('CM-TH-01');
  assert.ok(chieuMay);
  assert.equal(chieuMay?.numericPrice, 450000);
  assert.equal(chieuMay?.imageUrl, '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png');

  const demLoXo = getCanopyProductById('DLX-EH-01');
  assert.ok(demLoXo);
  assert.equal(demLoXo?.numericPrice, 2850000);
  assert.equal(demLoXo?.imageUrl, '/assets/aistudio/dem_lo_xo_everhome_tuyen_hoa.png');

  const demCaoSu = getCanopyProductById('DCS-EH-01');
  assert.ok(demCaoSu);
  assert.equal(demCaoSu?.numericPrice, 4850000);
  assert.equal(demCaoSu?.imageUrl, '/assets/aistudio/dem_cao_su_everhome_tuyen_hoa.png');

  const canopyItems = canopyAndBeddingItems.filter((item) => item.code.startsWith('MK-'));
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
  assert.equal(projectItems.length, 17);
  for (const item of projectItems) {
    assert.ok(item.marketPriceTiers.length >= 3);
  }

  const remToOngVom = getCanopyProductById('RTO-TH-01');
  assert.ok(remToOngVom);
  assert.equal(remToOngVom?.imageUrl, '/assets/aistudio/vach_rem_to_ong_cua_vom_tuyen_hoa.png');

  const remCuonVP = getCanopyProductById('RC-TH-01');
  assert.ok(remCuonVP);
  assert.equal(remCuonVP?.imageUrl, '/assets/aistudio/rem_cuon_van_phong_tuyen_hoa.png');

  const quyTrinh7Buoc = getCanopyProductById('QT-NT-01');
  assert.ok(quyTrinh7Buoc);
  assert.equal(quyTrinh7Buoc?.imageUrl, '/assets/aistudio/quy_trinh_7_buoc_ngoc_tuyen.png');
});

test('generateFullCatalogFacebookPost produces comprehensive market-priced post copy', () => {
  const fullPost = generateFullCatalogFacebookPost('all');
  assert.ok(fullPost.includes('1.000.000đ / 1 bộ'));
  assert.ok(fullPost.includes('450.000đ/bộ'));
  assert.ok(fullPost.includes('220.000đ / 1 m²'));
  assert.ok(fullPost.includes('550.000đ / 1 m²'));
  assert.ok(fullPost.includes('600.000đ / mét ngang'));
  assert.ok(fullPost.includes('65.000đ / chai'));
  assert.ok(fullPost.includes('0344.727.528'));
});
