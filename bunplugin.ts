// from https://bun.sh/docs/runtime/plugins#loaders 
import { plugin } from 'bun';

plugin({
  name: 'YAML',

  setup(builder) {
    const { load } = require('js-yaml');
    const { readFileSync } = require('fs');
    builder.onLoad({ filter: /\.(yaml|yml)$/ }, (args) => {
      const text = readFileSync(args.path, 'utf8');
      const json = load(text);

      return {
        exports: {
          default: json, // added this line
          ...json // and this line
        },
        loader: 'object',
      };
    });
  },
});