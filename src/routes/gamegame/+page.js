// add a redirect from kevindial.com/gamegame to its article page

import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(308, '/personal/gamegame');
}
