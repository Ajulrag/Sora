import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'Sora',
    description: 'A Next.js 13 Meta Sora Application'
}

export default function RootLayout({
        children
    }: { 
        children: React.ReactNode 
    }) {
    return (<ClerkProvider>

    </ClerkProvider>
    )
}