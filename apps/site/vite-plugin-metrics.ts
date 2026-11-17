import { execFileSync } from 'node:child_process';
import path from 'node:path';
import type { Plugin } from 'vite';

function runGenerate(root: string) {
  const script = path.join(root, 'scripts/generate-metrics.mjs');
  execFileSync(process.execPath, [script], { stdio: 'inherit' });
}

/** Regenerates metrics.generated.ts before dev/build so chips stay honest. */
export function metricsPlugin(): Plugin {
  let root = process.cwd();
  return {
    name: 'rocket-metrics',
    configResolved(config) {
      root = config.root;
      runGenerate(root);
    },
    buildStart() {
      runGenerate(root);
    },
  };
}
