import { Dispatch, SetStateAction } from "react";

export interface RegisterModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}


export interface StepOneVal {
  contact?: {
    email?: string
    phoneNumber?: string
  }
}

export interface StepOne {
  setStep1Data: Dispatch<SetStateAction<StepOneVal>>
  setStep: Dispatch<SetStateAction<number>>
}


export interface StepTwoVal {
  data?: string
  code: number,
  token: string
}

export interface StepTwo {
  setStep2Data: Dispatch<SetStateAction<StepTwoVal>>
  setStep: Dispatch<SetStateAction<number>>
}


export interface StepThreeVal {
  name: {
    firstName: string;
    lastName: string;
  };
  gender: string;
  birthdate: string;
  regionId: string;
  username: string;
  password: string
}

export interface StepThree {
  collection: StepThreeVal
}