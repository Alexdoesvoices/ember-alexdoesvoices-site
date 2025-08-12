import { module, test } from 'qunit';
import { setupTest } from 'ember-alexdoesvoices-site/tests/helpers';

module('Unit | Route | portfolio', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:portfolio');
    assert.ok(route);
  });
});
