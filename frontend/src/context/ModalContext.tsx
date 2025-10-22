'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type View = 'login' | 'register';

interface ModalContextType {
  isOpen: boolean;
  view: View;
  openModal: (view: View) => void;
  closeModal: () => void;
  setView: (view: View) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('login');

  const openModal = (v: View) => {
    setView(v);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, view, openModal, closeModal, setView }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};