import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { ConceptExample } from '../types/concept';

interface ExampleCardProps {
  example: ConceptExample;
  index: number;
  selfTestMode: boolean;
}

export function ExampleCard({ example, index, selfTestMode }: ExampleCardProps) {
  const [revealed, setRevealed] = useState(!selfTestMode);

  useEffect(() => {
    setRevealed(!selfTestMode);
  }, [selfTestMode]);

  return (
    <article className="atlas-surface rounded-xl p-5 transition-colors">
      <div className="flex items-center justify-between gap-3 mb-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
          Example {index + 1} · {example.context}
        </span>
        {selfTestMode && (
          <button
            type="button"
            onClick={() => setRevealed((r) => !r)}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
          >
            {revealed ? (
              <>
                <EyeOff className="h-3.5 w-3.5" />
                Hide Analysis
              </>
            ) : (
              <>
                <Eye className="h-3.5 w-3.5" />
                Reveal Analysis
              </>
            )}
          </button>
        )}
      </div>

      <p className="text-[15px] leading-relaxed text-[var(--text-primary)] font-medium">
        {example.scenario}
      </p>

      <div className="mt-3.5 pt-3.5 border-t border-[var(--border-subtle)]">
        {revealed ? (
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mr-2">
              Why it fits:
            </span>
            {example.breakdown}
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="w-full rounded-lg border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface-muted)]/60 px-4 py-3 text-left text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors cursor-pointer"
          >
            Self-test paused — pause to diagnose why this scenario matches, then click to reveal analysis.
          </button>
        )}
      </div>
    </article>
  );
}
