import React, { createContext, useState, useContext, ReactNode } from "react";

interface LoginModalContextType {
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModalContext = createContext<LoginModalContextType | undefined>(undefined);

export const LoginModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <LoginModalContext.Provider value={{ setOpenLoginModal }}>
      {children}
      {openLoginModal && (
        <>
          <div className="absolute w-full min-h-screen bg-black/40" onClick={() => setOpenLoginModal(false)}></div>
          {/* Render the LoginModal here if it is open */}
        </>
      )}
    </LoginModalContext.Provider>
  );
};

export const useLoginModalContext = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error("useLoginModalContext must be used within a LoginModalProvider");
  }
  return context;
};
