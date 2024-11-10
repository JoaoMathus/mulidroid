import React from "react";

/**
 * Vai crescer
 */
type UserContextType = {
    logado: boolean;
    setLogado: (logado: boolean) => void;
    adminAqui: boolean;
    setAdminAqui: (adminAqui: boolean) => void;
    employeeId: string;
    setEmployeeId: (id: string) => void;
};

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;