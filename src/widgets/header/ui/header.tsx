import { TodoDialogCreate } from "@/features";
import Link from "next/link";

export function Header () {
    return (
        <header
            className="flex justify-between items-center"
        >
            <div
                className="flex gap-2"
            >
                <div>
                    <Link
                        href={'/'}
                    >
                        Todo ✌️
                    </Link>
                </div>
                <TodoDialogCreate />
            </div>
            <div>
                <Link
                    href={'/todos'}
                >
                    List
                </Link>
            </div>
        </header>
    )
}