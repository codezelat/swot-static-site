"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main id="main" className="state-page"><div><h1>PAUSE.</h1><p>Something interrupted this move.</p><button className="button button-ink" onClick={reset}>Try again</button></div></main>; }
