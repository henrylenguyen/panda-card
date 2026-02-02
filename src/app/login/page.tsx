"use client";

import loginBg from "@/assets/login.svg";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Unsupported Screen Message - Shows below 1200px */}
      <div className="min-h-screen w-full bg-[#828189] flex items-center justify-center xl:hidden">
        <div className="text-center px-8">
          <div className="text-6xl mb-4">🐼</div>
          <h1 className="text-white text-2xl font-bold mb-2">Screen Not Supported</h1>
          <p className="text-gray-200">
            Please use a device with a screen width of at least 1200px to access this page.
          </p>
        </div>
      </div>

      {/* Main Login Page - Shows at 1200px and above */}
      <div className="hidden xl:flex min-h-screen w-full bg-[#828189] items-center justify-center overflow-hidden">
        {/* Main Container - Full screen */}
        <div className="absolute inset-0">
          {/* Background SVG Image */}
          <Image
            src={loginBg}
            alt="Panda Card Login"
            fill
            className="object-cover object-center "
            priority
          />

          {/* Logo - Top Left Corner */}
          <Link href="/" className="absolute top-4 left-4 z-20 xl:top-6 xl:left-6 2xl:top-8 2xl:left-8">
            <Image
              src="/logo_tran.png"
              alt="Panda Card Logo"
              width={180}
              height={60}
              className="w-[140px] xl:w-[160px] 2xl:w-[200px] 3xl:scale-150 h-auto mt-[-80px] 3xl:mt-[-60px] 3xl:ml-8"
            />
          </Link>

          {/* Login Form Overlay - Centered on the white card using transform */}
          <div
            className="absolute z-10 flex flex-col w-72 xl:w-80 2xl:w-96 3xl:w-[700px]"
            style={{
              top: "68%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Header */}
            <div className="text-center mb-[8%]">
              <h1 className="text-blue-600 font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl whitespace-nowrap tracking-tight">
                Welcom To Panda Card
              </h1>
              <p className="text-gray-500 text-sm xl:text-base 2xl:text-lg 3xl:text-xl mt-[3%] leading-snug">
                Enter your credentials to access your financial dashboard
              </p>
            </div>

            {/* Login Form - Only Email and Password as per design */}
            <div className="flex flex-col gap-[18%]">

              {/* Email Input */}
              <div className="flex flex-col gap-[4%]">
                <label className="text-gray-700 text-sm xl:text-base 2xl:text-lg 3xl:text-xl font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="John@example.com"
                  className="w-full bg-white border border-gray-300 text-gray-800 text-sm xl:text-base 2xl:text-lg 3xl:text-xl rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-3 xl:p-4 2xl:p-5 3xl:p-6 placeholder-gray-400 transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-[4%]">
                <label className="text-gray-700 text-sm xl:text-base 2xl:text-lg 3xl:text-xl font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-white border border-gray-300 text-gray-800 text-sm xl:text-base 2xl:text-lg 3xl:text-xl rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-3 xl:p-4 2xl:p-5 3xl:p-6 pr-12 3xl:pr-14 placeholder-gray-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[4%] top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5 xl:w-6 xl:h-6 3xl:w-7 3xl:h-7" /> : <Eye className="w-5 h-5 xl:w-6 xl:h-6 3xl:w-7 3xl:h-7" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
