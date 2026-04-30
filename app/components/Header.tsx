// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
    { label: "Overview", href: "/" },
    { label: "Repositories", href: "/repositories" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/pages/skills" },
    { label: "Achievements", href: "/achievements" },
];

export default function Header() {
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
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                                G
                            </div>
                            <span className="font-medium text-sm hidden sm:block">guiassys</span>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown */}
                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <p className="text-sm font-medium">guiassys</p>
                                    <p className="text-xs text-gray-500">guiassys@email.com</p>
                                </div>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50"
                                    onClick={() => setIsUserMenuOpen(false)}
                                >
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Seu perfil
                                </Link>
                                <Link
                                    href="/settings"
                                    className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50"
                                    onClick={() => setIsUserMenuOpen(false)}
                                >
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Configurações
                                </Link>
                                <div className="border-t border-gray-100 mt-1 pt-1">
                                    <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Sair
                                    </button>
                                </div>
                            </div>
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
