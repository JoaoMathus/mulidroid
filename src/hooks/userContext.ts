import React from "react";

/**
 * Por enquanto é essa simplicidade aí.
 */
type UserContextType = {
    logado: boolean;
    setLogado: (logado: boolean) => void;
    adminAqui: boolean;
    setAdminAqui: (adminAqui: boolean) => void;
};

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;