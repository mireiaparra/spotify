"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    return (
        <MyUserContextProvider>
        <div>
            {children}
        </div>
        </MyUserContextProvider>
    )
}

export default UserProvider;