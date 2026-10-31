# getnodo.eu

The nodo website and waitlist, served by GitHub Pages at https://getnodo.eu.

- `index.html`: the page. Styles and the waitlist script are inline; no build step.
- `privacy.html`: the privacy notice for the waitlist.
- `fonts/`: Outfit and Figtree, self-hosted (SIL Open Font License), so the site loads nothing from third parties.
- `CNAME`: the custom domain.

The waitlist form posts to the `waitlist` table in the nodo Supabase project (EU region) with the public publishable key. Row-level security lets visitors insert only; nobody can read the table through the API. Admins see counts through `public.admin_waitlist()`.
