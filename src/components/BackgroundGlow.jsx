export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050607]">
      {/* Luzes em blur que se espalham pelo site inteiro */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-linear-to-br from-[#00fff0]/25 via-[#00e0b8]/10 to-transparent blur-[220px] rounded-full" />
      <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-linear-to-tl from-[#00fff0]/20 via-[#00e0b8]/10 to-transparent blur-[220px] rounded-full" />
    </div>
  );
}
