"use client";

import { AxiosError } from "axios";
import { CloudOff } from "lucide-react";
import { ReactNode } from "react";
import { toast } from "sonner";
import { SWRConfig } from "swr";

export function SWRProvider({ children }: { children: ReactNode }) {
    return (
        <SWRConfig
            value={{
                onError: (err: AxiosError) => {
                    return toast.error("Ошибка", {
                        description: err.message,
                        icon: <CloudOff color="white"/>
                    });
                },
            }}
        >
            {children}
        </SWRConfig>
    );
}
