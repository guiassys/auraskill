// app/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="max-w-[1280px] mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>© 2025 AuraSkill. Todos os direitos reservados.</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="/terms" className="hover:text-gray-700 transition-colors">
                            Termos
                        </a>
                        <a href="/privacy" className="hover:text-gray-700 transition-colors">
                            Privacidade
                        </a>
                        <a href="/support" className="hover:text-gray-700 transition-colors">
                            Suporte
                        </a>
                        <a href="/docs" className="hover:text-gray-700 transition-colors">
                            Documentação
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
