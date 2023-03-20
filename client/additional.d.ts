import { ChangeEvent, FormEvent } from 'react'

export interface RootLayout {
  children: React.ReactNode;
  title: string;
}

export interface HeaderLinks {
  path: string;
  label: string;
  links?: {
    path: string;
    label: string;
  }[];
}

export interface HeaderActionProps {
  links: HeaderLinks[]
}

type CustomMethodsProps = [boolean, (() => void)]

export interface CustomHeaderProps {
    drawer: CustomMethodsProps
    links: HeaderLinks[]
}

export interface CustomDrawerProps extends CustomHeaderProps {
    collapse: CustomMethodsProps
}

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export interface ProductCardProps {
  element: {
    name: string
    rating: number
    price: number
  }
}

export interface CategoryServerSideProps {
  params: {
    category: string
  }
}

export interface Products { 
      _id: string
      name: string
      image: {
        src: string
      }
      category: string
      description?: string
      price: number
      discount?: number
      rating: number
      brand?: string
      createdAt: Date
      __v: number 
}

export interface CategoryProps {
  products: Products[]
}


// User Session
export type SessionMode = "login" | "register";

export interface FormTypes {
  name?: string;
  email: string;
  password: string;
}

export interface SessionRequestProps {
  form: FormTypes;
  mode: SessionMode;
}

export interface UserSessionTools {
    form: FormTypes,
    setInput: (event: ChangeEvent<HTMLInputElement>) => void
    setSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export interface BackgroundWrapperProps {
  children: React.ReactElement;
  padTop: number;
}

export interface CreateBlockProps {
  d: string;
  className: string;
  alt: string;
}
