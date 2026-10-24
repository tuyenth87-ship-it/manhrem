import test from 'node:test';
import assert from 'node:assert/strict';
import { CURTAIN_ARTICLES } from '../src/data/curtainArticles.ts';
import { BEAD_SHAPES, BEAD_ART_PATTERNS } from '../src/data/beadCurtains.ts';

test('CURTAIN_ARTICLES contains all 7 key product & curtain categories with valid data', () => {
  assert.equal(CURTAIN_ARTICLES.length, 7);

  const expectedTypes = ['fabric', 'fabric', 'rainbow', 'honeycomb', 'insect-screen', 'motorized', 'bead'];
  const types = CURTAIN_ARTICLES.map(a => a.curtainType);
  assert.deepEqual(types, expectedTypes);

  CURTAIN_ARTICLES.forEach(article => {
    assert.ok(article.id.length > 0, 'Article must have ID');
    assert.ok(article.title.length > 10, 'Article must have substantial title');
    assert.ok(article.materialDetails.length >= 3, 'Must have at least 3 material components');
    assert.ok(article.sizeGuides.length >= 2, 'Must have at least 2 size recommendations');
    assert.ok(article.priceFrom > 0, 'Price must be positive');
    assert.ok(article.adCopy.heading.length > 0, 'Ad copy heading required');
    assert.ok(
      article.adCopy.cta.includes('0344 727 528') || article.adCopy.cta.includes('0344.727.528'),
      'Ad CTA must include Tuyến Hoa hotline'
    );
  });
});

test('BEAD_SHAPES and BEAD_ART_PATTERNS meet user price and size specifications', () => {
  // Test shapes: 5 shapes, standard price 1m x 2m = 600,000đ
  assert.ok(BEAD_SHAPES.length >= 5);
  BEAD_SHAPES.forEach(shape => {
    assert.equal(shape.standardPrice1mx2m, 600000, 'Standard 1mx2m bead curtain must be 600,000đ');
    assert.ok(shape.standardPrice1m2x2m > 600000);
    assert.ok(shape.name.length > 0);
  });

  // Test art patterns: 1.2m x 2m plastic art must be 1,300,000đ
  const plasticPatterns = BEAD_ART_PATTERNS.filter(p => p.theme === 'plastic-art');
  assert.ok(plasticPatterns.length >= 4);
  plasticPatterns.forEach(p => {
    assert.equal(p.standardPrice1m2x2m, 1300000, 'Pattern 1.2mx2m must be 1,300,000đ');
  });

  // Test wood art: starting from 1,200,000đ
  const woodPatterns = BEAD_ART_PATTERNS.filter(p => p.theme === 'wood-fengshui');
  assert.ok(woodPatterns.length >= 3);
  woodPatterns.forEach(p => {
    assert.ok(p.standardPrice1mx2m >= 1200000, 'Wood bead curtain must start from 1,200,000đ');
  });
});
