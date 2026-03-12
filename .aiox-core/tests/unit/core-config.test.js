/**
 * Core Config Unit Tests
 *
 * Validates core-config.yaml loading and schema.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

describe('core-config.yaml', () => {
  let config;

  beforeAll(() => {
    const configPath = path.resolve(__dirname, '../../core-config.yaml');
    const raw = fs.readFileSync(configPath, 'utf8');
    config = yaml.load(raw);
  });

  test('loads without errors', () => {
    expect(config).toBeDefined();
    expect(config.project).toBeDefined();
  });

  test('has required project fields', () => {
    expect(config.project.type).toBeDefined();
    expect(config.project.version).toBeDefined();
  });

  test('has IDE configuration', () => {
    expect(config.ide).toBeDefined();
    expect(config.ide.selected).toBeInstanceOf(Array);
  });

  test('has story location configured', () => {
    expect(config.devStoryLocation).toBe('docs/stories');
  });

  test('has squads location configured', () => {
    expect(config.squadsLocation).toBe('squads');
  });

  test('has boundary protection enabled', () => {
    expect(config.boundary).toBeDefined();
    expect(config.boundary.frameworkProtection).toBe(true);
  });
});
