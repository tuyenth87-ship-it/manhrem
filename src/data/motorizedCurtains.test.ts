import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMotorizedCurtainQuote,
  filterMotorizedSystems,
  getSmartSchedulePresetPosition,
  MOTORIZED_CURTAIN_PRODUCTS,
  SHADE_STORE_ANALYSIS,
  MOTORIZED_VIDEO_DEMOS,
} from './motorizedCurtains';

test('SHADE_STORE_ANALYSIS and MOTORIZED_VIDEO_DEMOS have complete entries', () => {
  assert.equal(SHADE_STORE_ANALYSIS.length, 4);
  assert.equal(MOTORIZED_VIDEO_DEMOS.length, 4);
  assert.equal(MOTORIZED_CURTAIN_PRODUCTS.length, 6);
});

test('calculateMotorizedCurtainQuote computes single-layer 600k/m + Tuya motor accurately', () => {
  const quote = calculateMotorizedCurtainQuote({
    widthMeters: 3.0,
    fabricOption: 'single-600k',
    motorId: 'motor-tuya-wifi',
    isDualLayerMotor: false,
  });

  // 3.0m * 600,000 = 1,800,000 fabric
  // 1 * 1,450,000 = 1,450,000 motor
  // 3.0m * 280,000 = 840,000 track
  // Total = 4,090,000
  assert.equal(quote.fabricCost, 1800000);
  assert.equal(quote.motorCost, 1450000);
  assert.equal(quote.trackCost, 840000);
  assert.equal(quote.installationCost, 0);
  assert.equal(quote.totalPrice, 4090000);
});

test('calculateMotorizedCurtainQuote computes dual-layer 850k/m + 2 motors accurately', () => {
  const quote = calculateMotorizedCurtainQuote({
    widthMeters: 2.5,
    fabricOption: 'double-850k',
    motorId: 'motor-aqara-homekit',
    isDualLayerMotor: true,
  });

  // 2.5m * 850,000 = 2,125,000 fabric
  // 2 * 2,650,000 = 5,300,000 motors
  // 2.5m * 310,000 * 2 = 1,550,000 tracks
  // Total = 8,975,000
  assert.equal(quote.fabricCost, 2125000);
  assert.equal(quote.motorCost, 5300000);
  assert.equal(quote.trackCost, 1550000);
  assert.equal(quote.totalPrice, 8975000);
});

test('filterMotorizedSystems filters by category and search query', () => {
  const draperyOnly = filterMotorizedSystems(MOTORIZED_CURTAIN_PRODUCTS, 'drapery');
  assert.equal(draperyOnly.length, 2);

  const somfySearch = filterMotorizedSystems(MOTORIZED_CURTAIN_PRODUCTS, 'all', 'Somfy');
  assert.equal(somfySearch.length >= 2, true);
});

test('getSmartSchedulePresetPosition returns valid percentages for all smart scenes', () => {
  const sunrise = getSmartSchedulePresetPosition('morning-sunrise');
  assert.equal(sunrise.curtainClosedPercent, 15);
  assert.equal(sunrise.sheerClosedPercent, 80);

  const sleep = getSmartSchedulePresetPosition('night-sleep');
  assert.equal(sleep.curtainClosedPercent, 100);
  assert.equal(sleep.sheerClosedPercent, 100);
});
