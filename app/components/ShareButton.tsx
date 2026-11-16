'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface ShareButtonProps {
  className?: string;
  label?: string;
}

/**
 * Shares the current page when the device supports the Web Share API
 * (most Korean mobile browsers), otherwise copies the link to the clipboard.
 */
export default function ShareButton({ className = '', label }: ShareButtonProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(t.fortune.share.manualCopy, url);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: t.fortune.share.title,
      text: t.fortune.share.text,
      url,
    };

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        // The user closed the share sheet: leave it at that.
        if (error instanceof Error && error.name === 'AbortError') return;
      }
    }

    await copyLink(url);
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`font-semibold py-3 rounded-full border-2 border-purple-500 text-purple-700 bg-white hover:bg-purple-50 transition-all ${className}`}
    >
      {copied ? `✅ ${t.fortune.share.copied}` : label || t.fortune.share.button}
    </button>
  );
}
