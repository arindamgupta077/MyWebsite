export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1224]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#16f2b3]"></div>
        <p className="text-white mt-4 text-lg">Loading...</p>
      </div>
    </div>
  );
}