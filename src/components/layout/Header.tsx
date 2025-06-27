import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="w-full px-6 py-4 bg-background border-b">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h1 className="text-sm tracking-tight">
                    <Link href="/">Personal webpage</Link>
                </h1>
                <nav className="flex items-center gap-4">
                    <Button variant="ghost" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/blog">Blog</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/cv">CV</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
