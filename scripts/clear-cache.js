import { rmSync } from 'fs';
import { join } from 'path';

try {
  rmSync(join(process.cwd(), '.next'), { recursive: true, force: true });
  console.log('[v0] .next cache cleared');
  
  rmSync(join(process.cwd(), 'node_modules', '.cache'), { recursive: true, force: true });
  console.log('[v0] node_modules cache cleared');
  
  console.log('[v0] All caches cleared successfully - webpack should rebuild cleanly');
} catch (error) {
  console.error('[v0] Error clearing cache:', error.message);
}
