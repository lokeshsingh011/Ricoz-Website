import { useEffect } from "react"
import { Link } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"
import { useNoIndex } from "@/lib/seo"

export default function PortalProfile() {
  useNoIndex()
  const { user } = usePortalAuth()

  useEffect(() => {
    document.title = "Profile — Ricoz Customer Portal"
  }, [])

  return (
    <div className="max-w-lg">
      <div className="mb-8">
        <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
          Profile
        </h1>
        <p className="text-sm text-[#6B6B67]">Your account information.</p>
      </div>

      {/* Account card */}
      <div className="border border-[#E5E5E0] rounded-[4px] bg-white overflow-hidden mb-6">
        {/* Avatar area */}
        <div className="px-6 py-6 border-b border-[#F0EDE8] flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#E5E5E0] flex items-center justify-center text-[#3A3A3A] font-semibold text-lg shrink-0">
            {user?.displayName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium text-[#111110]">
              {user?.displayName}
            </p>
            <p className="text-xs text-[#6B6B67]">{user?.email}</p>
          </div>
        </div>

        {/* Fields */}
        <div className="px-6 py-5 flex flex-col gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-1.5">
              Name
            </p>
            <p className="text-sm text-[#3A3A3A]">{user?.displayName}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-1.5">
              Email Address
            </p>
            <p className="text-sm text-[#3A3A3A]">{user?.email}</p>
          </div>
          {user?.company && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-1.5">
                Company
              </p>
              <p className="text-sm text-[#3A3A3A]">{user.company}</p>
            </div>
          )}
        </div>
      </div>

      {/* Update info note */}
      <div className="border border-[#E5E5E0] rounded-[4px] bg-[#F7F5F1] px-5 py-4 text-sm text-[#6B6B67] mb-6">
        To update your account information, contact your Ricoz account team
        directly.
      </div>

      <Link
        to="/contact"
        className="inline-flex items-center text-sm font-medium border border-[#D9D6D0] text-[#3A3A3A] px-5 py-2.5 rounded-[4px] hover:border-[#111110] hover:text-[#111110] transition-colors min-h-[44px]"
      >
        Contact Ricoz
      </Link>
    </div>
  )
}
