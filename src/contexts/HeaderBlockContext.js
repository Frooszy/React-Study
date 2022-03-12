import { createContext, useState } from "react";

export const HeaderBlockContext = createContext({});

function HeaderBlockProvider({ children }) {

    const [BlockOpen, setBlockOpen] = useState(false)

    return (
        <HeaderBlockContext.Provider value={{ BlockStatus: BlockOpen, setBlockStatus: setBlockOpen }}>
            {children}
        </HeaderBlockContext.Provider>
    )
}

export default HeaderBlockProvider