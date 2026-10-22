import test from 'node:test';
import assert from 'node:assert/strict';
import { CURTAIN_ARTICLES } from '../src/data/curtainArticles.ts';

test('CURTAIN_ARTICLES contains all 5 key curtain categories with valid data', () => {
  assert.equal(CURTAIN_ARTICLES.length, 5);

  const expectedTypes = ['fabric', 'rainbow', 'honeycomb', 'insect-screen', 'motorized'];
  const types = CURTAIN_ARTICLES.map(a => a.curtainType);
  assert.deepEqual(types, expectedTypes);

  CURTAIN_ARTICLES.forEach(article => {
    assert.ok(article.id.length > 0, 'Article must have ID');
    assert.ok(article.title.length > 10, 'Article must have substantial title');
    assert.ok(article.primaryImage.startsWith('/assets/'), 'Article image must reference asset path');
    assert.ok(article.materialDetails.length >= 3, 'Must have at least 3 material components');
    assert.ok(article.sizeGuides.length >= 2, 'Must have at least 2 size recommendations');
    assert.ok(article.priceFrom > 0, 'Price must be positive');
    assert.ok(article.adCopy.heading.length > 0, 'Ad copy heading required');
    assert.ok(article.adCopy.cta.includes('0344 727 528'), 'Ad CTA must include Tuyến Hoa hotline');
  });
});
