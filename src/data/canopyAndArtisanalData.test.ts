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

test('Deduplication removes all duplicate primary and secondary images across all 59 annotated posts', () => {
  const dedupedPosts = getDeduplicatedProductPosts();
  assert.equal(dedupedPosts.length, 59);
  assert.equal(ANNOTATED_PRODUCT_POSTS.length, 59);
  assert.equal(MARKET_PRICE_SUMMARY_TABLE.length, 22);

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
  assert.equal(DEDUPLICATION_SUMMARY.totalUploaded, 152);
  assert.equal(DEDUPLICATION_SUMMARY.totalRemovedDuplicates, 45);
  assert.equal(DEDUPLICATION_SUMMARY.totalUniquePublished, 107);
  assert.equal(DEDUPLICATION_SUMMARY.groups.length, 11);
});

test('All annotated products have market price tiers, visual annotations, specs, and clear Facebook post copy', () => {
  const canopyAndBeddingItems = filterAnnotatedProducts('man-khung-1tr');
  assert.equal(canopyAndBeddingItems.length, 32);

  // Verify the 6 newest posts from the 18 uploaded Alyda Royal Embroidery & Korean Princess Lavender bedding photos
  const alydaPeony = getCanopyProductById('CGL-AL-01');
  assert.ok(alydaPeony);
  assert.equal(alydaPeony?.numericPrice, 2150000);
  assert.equal(alydaPeony?.secondaryImages?.length, 2);

  const alydaVersailles = getCanopyProductById('CGL-AL-02');
  assert.ok(alydaVersailles);
  assert.equal(alydaVersailles?.numericPrice, 2150000);
  assert.equal(alydaVersailles?.secondaryImages?.length, 2);

  const alydaCrown = getCanopyProductById('CGL-AL-03');
  assert.ok(alydaCrown);
  assert.equal(alydaCrown?.numericPrice, 2150000);
  assert.equal(alydaCrown?.secondaryImages?.length, 2);

  const alydaLeopard = getCanopyProductById('CGL-AL-04');
  assert.ok(alydaLeopard);
  assert.equal(alydaLeopard?.numericPrice, 2150000);
  assert.equal(alydaLeopard?.secondaryImages?.length, 1);

  const alydaGarden = getCanopyProductById('CGL-AL-05');
  assert.ok(alydaGarden);
  assert.equal(alydaGarden?.numericPrice, 2150000);
  assert.equal(alydaGarden?.secondaryImages?.length, 4);

  const princessLavender = getCanopyProductById('CGL-CC-01');
  assert.ok(princessLavender);
  assert.equal(princessLavender?.numericPrice, 1350000);
  assert.equal(
    princessLavender?.imageUrl,
    '/assets/aistudio/1792915225334_4373635352308930219_4373635352308930219_b1cc4f9fe287531332cb288e86597c7e_3574b865.jpg'
  );

  // Verify the 6 previous posts from the 18 uploaded Alyda LT 28 & Sky Silk Tencel bedding photos
  const alydaLt28 = getCanopyProductById('CGL-LT-28');
  assert.ok(alydaLt28);
  assert.equal(alydaLt28?.numericPrice, 2150000);
  assert.equal(alydaLt28?.secondaryImages?.length, 1);
  assert.equal(
    alydaLt28?.imageUrl,
    '/assets/aistudio/1792915211423_4373635352308930219_4373635352308930219_72e61c228464506313c098328bfdea78_43281348.jpg'
  );

  const skySilkRedPink = getCanopyProductById('CGL-SK-01');
  assert.ok(skySilkRedPink);
  assert.equal(skySilkRedPink?.numericPrice, 1150000);
  assert.equal(skySilkRedPink?.secondaryImages?.length, 2);

  const skySilkGoldWhite = getCanopyProductById('CGL-SK-02');
  assert.ok(skySilkGoldWhite);
  assert.equal(skySilkGoldWhite?.numericPrice, 1150000);
  assert.equal(skySilkGoldWhite?.secondaryImages?.length, 2);

  const skySilkGreenTeal = getCanopyProductById('CGL-SK-03');
  assert.ok(skySilkGreenTeal);
  assert.equal(skySilkGreenTeal?.numericPrice, 1150000);
  assert.equal(skySilkGreenTeal?.secondaryImages?.length, 3);

  const skySilkBlueIce = getCanopyProductById('CGL-SK-04');
  assert.ok(skySilkBlueIce);
  assert.equal(skySilkBlueIce?.numericPrice, 1150000);
  assert.equal(skySilkBlueIce?.secondaryImages?.length, 3);

  const skySilkGreySlate = getCanopyProductById('CGL-SK-05');
  assert.ok(skySilkGreySlate);
  assert.equal(skySilkGreySlate?.numericPrice, 1150000);
  assert.equal(skySilkGreySlate?.secondaryImages?.length, 2);

  // Verify the 5 internet-researched & downloaded mattress posts
  const demSongHongBackEssential = getCanopyProductById('DSH-BE-01');
  assert.ok(demSongHongBackEssential);
  assert.equal(demSongHongBackEssential?.numericPrice, 6750000);
  assert.equal(demSongHongBackEssential?.imageUrl, '/assets/aistudio/dem_song_hong_back_essential_1.png');
  assert.equal(demSongHongBackEssential?.secondaryImages?.length, 1);

  const nemCaoSuKimCuong = getCanopyProductById('DKC-HG-01');
  assert.ok(nemCaoSuKimCuong);
  assert.equal(nemCaoSuKimCuong?.numericPrice, 4950000);
  assert.equal(nemCaoSuKimCuong?.imageUrl, '/assets/aistudio/nem_cao_su_kim_cuong_happy_gold_1.jpg');

  const demEveronArtemis = getCanopyProductById('DEV-AT-01');
  assert.ok(demEveronArtemis);
  assert.equal(demEveronArtemis?.numericPrice, 3850000);
  assert.equal(demEveronArtemis?.imageUrl, '/assets/aistudio/dem_everon_artemis_1.png');
  assert.equal(demEveronArtemis?.secondaryImages?.length, 1);

  const nemCaoSuLienALaDome = getCanopyProductById('DLA-LD-01');
  assert.ok(nemCaoSuLienALaDome);
  assert.equal(nemCaoSuLienALaDome?.numericPrice, 8950000);
  assert.equal(nemCaoSuLienALaDome?.imageUrl, '/assets/aistudio/nem_cao_su_lien_a_ladome_1.jpg');
  assert.equal(nemCaoSuLienALaDome?.secondaryImages?.length, 1);

  const demHanvicoNano = getCanopyProductById('DHV-NN-01');
  assert.ok(demHanvicoNano);
  assert.equal(demHanvicoNano?.numericPrice, 2850000);
  assert.equal(demHanvicoNano?.imageUrl, '/assets/aistudio/dem_hanvico_nano_khang_khuan_1.png');
  assert.equal(demHanvicoNano?.secondaryImages?.length, 1);

  // Verify the 4 newest posts from the 2 videos & 6 photos (Mành trúc biệt thự & Màn hộp thông minh vân gỗ)
  const manhTrucBietThu = getCanopyProductById('MT-TH-01');
  assert.ok(manhTrucBietThu);
  assert.equal(manhTrucBietThu?.numericPrice, 260000);
  assert.equal(manhTrucBietThu?.imageUrl, '/assets/aistudio/IMG_9290_f6c3666b.JPG');
  assert.equal(manhTrucBietThu?.secondaryImages?.length, 1);

  const videoBietThu = getCanopyProductById('VID-BT-01');
  assert.ok(videoBietThu);
  assert.equal(videoBietThu?.mediaType, 'video');
  assert.equal(videoBietThu?.videoUrl, '/assets/aistudio/2026-10-27-120102922_bd1f1539.mp4');

  const manHopVanGo = getCanopyProductById('MH-TH-01');
  assert.ok(manHopVanGo);
  assert.equal(manHopVanGo?.numericPrice, 1350000);
  assert.equal(manHopVanGo?.imageUrl, '/assets/aistudio/IMG_9295_0a9c81ad.JPG');
  assert.equal(manHopVanGo?.secondaryImages?.length, 1);

  const videoXuongManHop = getCanopyProductById('XMH-TH-01');
  assert.ok(videoXuongManHop);
  assert.equal(videoXuongManHop?.mediaType, 'video');
  assert.equal(videoXuongManHop?.videoUrl, '/assets/aistudio/efac290438e544afea301caf4816b714_2cb14457.mp4');
  assert.equal(videoXuongManHop?.secondaryImages?.length, 1);

  // Verify the 4 posts from the 24 uploaded photos (deduplicated)
  const remCauVongNgocTuyen = getCanopyProductById('RCV-NT-01');
  assert.ok(remCauVongNgocTuyen);
  assert.equal(remCauVongNgocTuyen?.numericPrice, 520000);
  assert.equal(
    remCauVongNgocTuyen?.imageUrl,
    '/assets/aistudio/1792619301615_1293093313519991016_1293093313519991016_001b83f41e2f124f06dffb5c9042fba8_3768728a.jpg'
  );

  const remCauVongThongTang = getCanopyProductById('RCV-TH-02');
  assert.ok(remCauVongThongTang);
  assert.equal(remCauVongThongTang?.numericPrice, 520000);
  assert.equal(remCauVongThongTang?.imageUrl, '/assets/aistudio/20261017_162136_c08f9065.jpg');

  const remVaiPhongKhach = getCanopyProductById('RV-TH-03');
  assert.ok(remVaiPhongKhach);
  assert.equal(remVaiPhongKhach?.numericPrice, 600000);

  const khaoSatViewHo = getCanopyProductById('KS-VH-01');
  assert.ok(khaoSatViewHo);
  assert.equal(khaoSatViewHo?.numericPrice, 550000);
  assert.equal(khaoSatViewHo?.secondaryImages?.length, 2);

  // Verify the 4 video & showroom posts (with duplicates & CapCut screen removed)
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
  assert.equal(projectItems.length, 23);
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
