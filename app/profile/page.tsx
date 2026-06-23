'use client'

import {
  UserButton,
  useUser,
} from '@clerk/nextjs'

export default function ProfilePage() {
  const { user } = useUser()

  return (
    <div className="min-h-screen bg-[#f8f4ef] p-6 text-black md:p-10">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}

        <div>
          <h1 className="text-5xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-black/60">
            Your Japanese learning account.
          </p>
        </div>

        {/* Profile Card */}

        <div className="mt-10 rounded-[2.5rem] bg-white p-10 shadow-2xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* User Image */}

            <div className="scale-150">
              <UserButton />
            </div>

            {/* User Info */}

            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-black/50">
                    Full Name
                  </p>

                  <h2 className="text-3xl font-bold">
                    {user?.fullName}
                  </h2>
                </div>

                <div>
                  <p className="text-sm text-black/50">
                    Email
                  </p>

                  <h2 className="text-2xl font-semibold">
                    {
                      user?.primaryEmailAddress
                        ?.emailAddress
                    }
                  </h2>
                </div>

                <div>
                  <p className="text-sm text-black/50">
                    Learning Interest
                  </p>

                  <h2 className="text-2xl font-semibold">
                    Japanese Language 🇯🇵
                  </h2>
                </div>

                <div>
                  <p className="text-sm text-black/50">
                    Account Created
                  </p>

                  <h2 className="text-2xl font-semibold">
                    {new Date(
                      user?.createdAt || ''
                    ).toLocaleDateString()}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-pink-200 p-8 shadow-xl">
            <h2 className="text-4xl font-bold">
              AI
            </h2>

            <p className="mt-2 text-lg">
              Smart Learning
            </p>
          </div>

          <div className="rounded-3xl bg-yellow-100 p-8 shadow-xl">
            <h2 className="text-4xl font-bold">
              日本語
            </h2>

            <p className="mt-2 text-lg">
              Japanese Practice
            </p>
          </div>

          <div className="rounded-3xl bg-green-100 p-8 shadow-xl">
            <h2 className="text-4xl font-bold">
              Daily
            </h2>

            <p className="mt-2 text-lg">
              Learning Journey
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}