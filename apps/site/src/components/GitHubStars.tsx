import { useEffect, useState } from 'react';

const REPO = 'YehudaMenahem/ui-rocket';

function formatStars(n: number) {
  if (n < 1000) return String(n);
  return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '')}k`;
}

/** Live star count from GitHub; hides the number if the fetch fails. */
export function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const ctrl = new AbortController();
    fetch(`https://api.github.com/repos/${REPO}`, {
      signal: ctrl.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        /* hide count */
      });
    return () => {
      cancelled = true;
      ctrl.abort();
    };
  }, []);

  if (stars == null) return null;
  return <small>{formatStars(stars)}</small>;
}
