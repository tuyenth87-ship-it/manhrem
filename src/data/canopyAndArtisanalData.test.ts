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

test('Deduplication removes all duplicate primary and secondary images across all 71 annotated posts', () => {
  const dedupedPosts = getDeduplicatedProductPosts();
  assert.equal(dedupedPosts.length, 71);
  assert.equal(ANNOTATED_PRODUCT_POSTS.length, 71);
  assert.equal(MARKET_PRICE_SUMMARY_TABLE.length, 28);

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
  assert.equal(DEDUPLICATION_SUMMARY.totalUploaded, 420);
  assert.equal(DEDUPLICATION_SUMMARY.totalRemovedDuplicates, 65);
  assert.equal(DEDUPLICATION_SUMMARY.totalUniquePublished, 355);
  assert.equal(DEDUPLICATION_SUMMARY.groups.length, 20);
});

test('All annotated products have market price tiers, visual annotations, specs, and clear Facebook post copy', () => {
  const canopyAndBeddingItems = filterAnnotatedProducts('man-khung-1tr');
  assert.equal(canopyAndBeddingItems.length, 36);

  // Verify the 2 newest bamboo roll-up blind posts (MT-TC-05 & MT-TC-06) covering all 12 uploaded photos
  const mtTc05 = getCanopyProductById('MT-TC-05');
  assert.ok(mtTc05);
  assert.equal(mtTc05?.numericPrice, 300000);
  assert.equal(mtTc05?.imageUrl, '/assets/aistudio/MT_TC_05_tam_lien_khung_trien_long_chim_hd.jpg');
  assert.equal(mtTc05?.secondaryImages?.length, 6);
  assert.equal(Object.keys(mtTc05?.imageCaptions || {}).length, 7);

  const mtTc06 = getCanopyProductById('MT-TC-06');
  assert.ok(mtTc06);
  assert.equal(mtTc06?.numericPrice, 260000);
  assert.equal(mtTc06?.imageUrl, '/assets/aistudio/MT_TC_06_lien_hoa_ngu_ngu_son_thuy_truc_hd.jpg');
  assert.equal(mtTc06?.secondaryImages?.length, 6);
  assert.equal(Object.keys(mtTc06?.imageCaptions || {}).length, 7);

  // Verify the 6 posts from the 18 uploaded Alyda Royal Embroidery & Korean Princess Lavender bedding photos
  const alydaPeony = getCanopyProductById('CGL-AL-01');
  assert.ok(alydaPeony);
  assert.equal(alydaPeony?.numericPrice, 2150000);
  assert.equal(alydaPeony?.secondaryImages?.length, 2);

  const alydaVersailles = getCanopyProductById('CGL-AL-02');
  assert.ok(alydaVersailles);
  assert.equal(alydaVersailles?.numericPrice, 2150000);
  assert.equal(alydaVersailles?.secondaryImages?.length, 2);
  assert.equal(Object.keys(alydaVersailles?.imageCaptions || {}).length, 3);

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
  assert.equal(Object.keys(alydaGarden?.imageCaptions || {}).length, 5);

  const princessLavender = getCanopyProductById('CGL-CC-01');
  assert.ok(princessLavender);
  assert.equal(princessLavender?.numericPrice, 1350000);
  assert.equal(princessLavender?.secondaryImages?.length, 8);
  assert.equal(Object.keys(princessLavender?.imageCaptions || {}).length, 9);
  assert.equal(
    princessLavender?.imageUrl,
    '/assets/aistudio/CGL_CC_01_ren_cong_chua_bang_gia_hd.jpg'
  );

  const drorTencel = getCanopyProductById('CGL-DR-01');
  assert.ok(drorTencel);
  assert.equal(drorTencel?.numericPrice, 1450000);
  assert.equal(Object.keys(drorTencel?.imageCaptions || {}).length, 5);

  // Verify the 6 previous posts from the 18 uploaded Alyda LT 28 & Sky Silk Tencel bedding photos
  const alydaLt28 = getCanopyProductById('CGL-LT-28');
  assert.ok(alydaLt28);
  assert.equal(alydaLt28?.numericPrice, 2150000);
  assert.equal(alydaLt28?.secondaryImages?.length, 2);
  assert.equal(
    alydaLt28?.imageUrl,
    '/assets/aistudio/CGL_LT_28_alyda_7_mon_bang_gia_hd.jpg'
  );

  const skySilkRedPink = getCanopyProductById('CGL-SK-01');
  assert.ok(skySilkRedPink);
  assert.equal(skySilkRedPink?.numericPrice, 1150000);
  assert.equal(skySilkRedPink?.secondaryImages?.length, 3);

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

  // Verify the upgraded MT-TH-01 post with 21 bamboo blind designs & 10 HD images
  const manhTrucBietThu = getCanopyProductById('MT-TH-01');
  assert.ok(manhTrucBietThu);
  assert.equal(manhTrucBietThu?.numericPrice, 260000);
  assert.equal(manhTrucBietThu?.imageUrl, '/assets/aistudio/MT_PT_01_manh_truc_phong_tho_hd.jpg');
  assert.equal(manhTrucBietThu?.secondaryImages?.length, 9);
  assert.equal(Object.keys(manhTrucBietThu?.imageCaptions || {}).length, 10);

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

  // Verify the newly edited bamboo blind posts are at the very top
  assert.deepEqual(
    ANNOTATED_PRODUCT_POSTS.slice(0, 8).map((p) => p.code),
    ['MT-TC-05', 'MT-TC-06', 'MT-TC-01', 'MT-TC-02', 'MT-TC-03', 'MT-TC-04', 'MT-NT-01', 'MT-NT-02']
  );

  const demLongVu = getCanopyProductById('DLV-TH-01');
  assert.ok(demLongVu);
  assert.equal(demLongVu?.numericPrice, 1850000);
  assert.equal(demLongVu?.imageUrl, '/assets/aistudio/DLV_TH_01_dem_long_vu_mat_tran_hd.jpg');
  assert.equal(demLongVu?.secondaryImages?.length, 4);
  assert.equal(Object.keys(demLongVu?.imageCaptions || {}).length, 5);

  const demKimCuong = getCanopyProductById('DKC-TH-01');
  assert.ok(demKimCuong);
  assert.equal(demKimCuong?.numericPrice, 1850000);
  assert.equal(demKimCuong?.imageUrl, '/assets/aistudio/DKC_TH_01_kim_cuong_mat_tran_hd.jpg');
  assert.equal(demKimCuong?.secondaryImages?.length, 3);
  assert.equal(Object.keys(demKimCuong?.imageCaptions || {}).length, 4);

  const demVicuna = getCanopyProductById('DVC-TH-01');
  assert.ok(demVicuna);
  assert.equal(demVicuna?.numericPrice, 2150000);
  assert.equal(demVicuna?.secondaryImages?.length, 2);
  assert.equal(Object.keys(demVicuna?.imageCaptions || {}).length, 3);

  const demCaro = getCanopyProductById('DCR-TH-01');
  assert.ok(demCaro);
  assert.equal(demCaro?.numericPrice, 1750000);
  assert.equal(demCaro?.secondaryImages?.length, 1);
  assert.equal(Object.keys(demCaro?.imageCaptions || {}).length, 2);

  const demGamDo = getCanopyProductById('DGD-TH-01');
  assert.ok(demGamDo);
  assert.equal(demGamDo?.numericPrice, 1450000);
  assert.equal(demGamDo?.imageUrl, '/assets/aistudio/DGD_TH_01_dem_gam_do_la_phong_hd.jpg');
  assert.equal(demGamDo?.secondaryImages?.length, 2);
  assert.equal(Object.keys(demGamDo?.imageCaptions || {}).length, 3);

  const khoPhoiDem = getCanopyProductById('KXD-TH-01');
  assert.ok(khoPhoiDem);
  assert.equal(khoPhoiDem?.numericPrice, 1350000);
  assert.equal(khoPhoiDem?.imageUrl, '/assets/aistudio/KXD_AM_01_cao_su_non_american_hd.jpg');
  assert.equal(khoPhoiDem?.secondaryImages?.length, 2);
  assert.equal(Object.keys(khoPhoiDem?.imageCaptions || {}).length, 3);

  const chieuMay = getCanopyProductById('CM-TH-01');
  assert.ok(chieuMay);
  assert.equal(chieuMay?.numericPrice, 450000);
  assert.equal(chieuMay?.imageUrl, '/assets/aistudio/chieu_may_dieu_hoa_tuyen_hoa.png');
  assert.equal(chieuMay?.secondaryImages?.length, 3);
  assert.equal(Object.keys(chieuMay?.imageCaptions || {}).length, 4);

  const batCuonLuoi = getCanopyProductById('BC-TH-01');
  assert.ok(batCuonLuoi);
  assert.equal(batCuonLuoi?.numericPrice, 220000);
  assert.equal(batCuonLuoi?.imageUrl, '/assets/aistudio/BC_TH_01_bat_tu_cuon_hien_nha_typography_hd.jpg');
  assert.equal(batCuonLuoi?.secondaryImages?.length, 4);
  assert.equal(Object.keys(batCuonLuoi?.imageCaptions || {}).length, 5);

  const showroomMatTien = getCanopyProductById('SR-TH-01');
  assert.ok(showroomMatTien);
  assert.equal(showroomMatTien?.imageUrl, '/assets/aistudio/Showroom_Ch_n_Ga_G_i___m_Tuy_n_Hoa_0311597c.png');
  assert.equal(showroomMatTien?.secondaryImages?.length, 3);
  assert.equal(Object.keys(showroomMatTien?.imageCaptions || {}).length, 4);

  const demLoXo = getCanopyProductById('DLX-EH-01');
  assert.ok(demLoXo);
  assert.equal(demLoXo?.numericPrice, 2850000);
  assert.equal(demLoXo?.imageUrl, '/assets/aistudio/DLX_EH_01_dem_lo_xo_everhome_typography_hd.jpg');
  assert.equal(demLoXo?.secondaryImages?.length, 7);
  assert.equal(Object.keys(demLoXo?.imageCaptions || {}).length, 8);

  const demCaoSu = getCanopyProductById('DCS-EH-01');
  assert.ok(demCaoSu);
  assert.equal(demCaoSu?.numericPrice, 4850000);
  assert.equal(demCaoSu?.imageUrl, '/assets/aistudio/DCS_EH_01_nem_cao_su_everhome_typography_hd.jpg');
  assert.equal(demCaoSu?.secondaryImages?.length, 4);
  assert.equal(Object.keys(demCaoSu?.imageCaptions || {}).length, 5);

  const showroom2Tang = getCanopyProductById('SR-TH-02');
  assert.ok(showroom2Tang);
  assert.equal(
    showroom2Tang?.imageUrl,
    '/assets/aistudio/SR_NT_01_cua_hang_ngoc_tuyen_typography_hd.jpg'
  );
  assert.equal(showroom2Tang?.secondaryImages?.length, 4);
  assert.equal(Object.keys(showroom2Tang?.imageCaptions || {}).length, 5);

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
  assert.equal(projectItems.length, 31);
  for (const item of projectItems) {
    assert.ok(item.marketPriceTiers.length >= 3);
  }

  const remToOngVom = getCanopyProductById('RTO-TH-01');
  assert.ok(remToOngVom);
  assert.equal(remToOngVom?.imageUrl, '/assets/aistudio/RTO_TH_01_vach_to_ong_cua_vom_typography_hd.jpg');
  assert.equal(remToOngVom?.secondaryImages?.length, 2);
  assert.equal(Object.keys(remToOngVom?.imageCaptions || {}).length, 3);

  const remCuonVP = getCanopyProductById('RC-TH-01');
  assert.ok(remCuonVP);
  assert.equal(remCuonVP?.imageUrl, '/assets/aistudio/RC_TH_01_rem_cuon_van_phong_typography_hd.jpg');
  assert.equal(remCuonVP?.secondaryImages?.length, 4);
  assert.equal(Object.keys(remCuonVP?.imageCaptions || {}).length, 5);

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
