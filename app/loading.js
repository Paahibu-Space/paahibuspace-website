export default function RootLoading() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative w-24 h-24">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-secondary animate-spin"></div>
        {/* Inner spinning ring (opposite direction) */}
        <div className="absolute inset-2 rounded-full border-l-4 border-r-4 border-primary animate-spin-slow"></div>
        {/* Logo or icon in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.png" alt="Paahibu Space" className="w-12 h-12 object-contain" />
        </div>
      </div>
    </div>
  );
}
