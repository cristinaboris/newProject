import styled from "styled-components";

export const PlusMinus = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Container = styled.div`
display: flex;
margin-bottom: 7%;
justify-content: space-between;
cursor: pointer;
&:hover{
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}
`
export const Right = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
gap: 20px;
width: 200px;
margin-left: 40px;
`
export const ImageRight = styled.img`
    width: 150px;
    height: 150px;
`
export const Left = styled.div`

`
export const Cancel = styled.button`

`
export const Center = styled.div`
    
`
export const ContainerCart = styled.div`
padding-top: 30px;
width: 40%;
margin: 0 auto;
min-height: 100vh;
height: 100%;
align-items: center;
justify-content: center;
`