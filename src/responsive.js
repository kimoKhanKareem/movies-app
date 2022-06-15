import { css } from "styled-components"

export const Disklab = (props)=>{
    return css`
        @media (max-width: 1440px){
            ${props}
        }
    `;
}
export const Mylabt = (props)=>{
    return css`
        @media (max-width: 1200px){
            ${props}
        }
    `;
}
export const NestHub = (props)=>{
    return css`
        @media (max-width: 1024px){
            ${props}
        }
    `;
}
export const IpadMini = (props)=>{
    return css`
        @media (max-width: 768px){
            ${props}
        }
    `;
}

export const Mobil425 = (props)=>{
    return css`
        @media (max-width: 425px){
            ${props}
        }
    `;
}

