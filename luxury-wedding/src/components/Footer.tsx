import type { WeddingConfig } from '../config'

export function Footer({ config }: { config: WeddingConfig }) {
  return <footer className="border-t border-[#dac7b4] bg-[#f7f1e8] px-6 py-12 text-center">
    <p className="font-display text-3xl text-[#4e382f]">{config.brideName} <span className="text-[#C79B63]">&amp;</span> {config.groomName}</p>
    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[.25em] text-[#977158]">Made with love</p>
  </footer>
}
