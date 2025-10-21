export default function EmailVerificationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="text-center space-y-4">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold text-white">Loading Email Verification</h2>
        <p className="text-gray-400">Checking DNS configuration...</p>
      </div>
    </div>
  )
}
