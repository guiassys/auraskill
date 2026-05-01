// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const navItems = [
    { label: "Overview", href: "/" },
    { label: "Repositories", href: "/repositories" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/pages/skills" },
    { label: "Achievements", href: "/achievements" },
];

export default function Header() {
    const { data: session } = useSession();
    const [activeTab, setActiveTab] = useState("/");
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    return (
        <header className="bg-gray-100 border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-[1280px] mx-auto px-4">
                {/* Top bar */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo & Search */}
                    <div className="flex items-center gap-4 flex-1">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span>AuraSkill</span>
                        </Link>
                    </div>

                    {/* User Menu */}
                    <div className="relative">
                        {session ? (
                            <>
                                <button
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                                        {session.user?.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="font-medium text-sm hidden sm:block">{session.user?.name}</span>
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isUserMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-medium">{session.user?.name}</p>
                                            <p className="text-xs text-gray-500">{session.user?.email}</p>
                                        </div>
                                        <div className="border-t border-gray-100 mt-1 pt-1">
                                            <button
                                                onClick={() => signOut()}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Sign out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => signIn("keycloak")}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Sign in
                            </button>
                        )}
                    </div>
                </div>

                {/* Navigation Tabs */}
                <nav className="flex items-center gap-1 -mb-px">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveTab(item.href)}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === item.href
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
