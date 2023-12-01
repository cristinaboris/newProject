import styled from "styled-components";

export const Containter = styled.div`
    width: 80%;
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    
`
export const Uling = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 20px;
    flex-wrap: wrap;
`
export const Ling = styled.li`
    padding: 1px;
    display: flex;
    flex-direction:column;
    text-align: center;
`

export const Image = styled.img`
 border: 2px solid black;
  width: 150px;
  height: 150px;
  border-radius: 50%;

`
export const ContainerItem =styled.div`
display: flex;
gap: 5px;
background: white;
border: none;
flex-wrap: wrap;
justify-content: space-between;`