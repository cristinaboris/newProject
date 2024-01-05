import styled from "styled-components";
export const Container = styled.div`
padding-top:100px;
width: 80%;
min-height: 100vh;
height: 100%;
margin: 0 auto;
`

export const ContainerSide = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
`
export const Left = styled.div`
    flex: 1;
`
export const LeftImg = styled.img`
    width: 500px;
    height: 500px;
`
export const Right = styled.div`
display: flex;
flex-direction: column;
flex: 1;
text-align:left;
`
export const Title = styled.h2`
    letter-spacing: .3rem;
`
export const Category = styled.h3`
margin-top: 10px;
color: wheat;
`
export const Rating = styled.h4`
margin-top: 20px;
`
export const Price = styled.h2`
    color: red;
    margin-top: 40px;
`
export const CoverButton = styled.div`
    display:flex;
    justify-content: center;
    gap: 10px;
`
export const ButtonBuy = styled.button`
    width: 200px;
    height: 80px;
    background-color: black;
    font-size: 20px;
    color: white;
    border: none;
    margin-top: 40%;
    cursor: pointer;
    &:hover{
     background: wheat
    }
    &:disabled{
        background: grey
    }
`
export const Description = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    margin-top: 30px;
    color: gray;;
`
export const DescriptionText = styled.div`
    color: black;
`