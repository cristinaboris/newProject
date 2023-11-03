import { ContainerTextRecent, Container,ContainerImage,
ImageRecent,PriceRecent,DescriptionRecent,TitleRecent } from "./RecentSectionitemStyled"

//title,price,desc


const RecentSectionItem = ({item}) => {
  return (
    <Container>
    <ContainerImage>
        <ImageRecent src={item.image}/>
        </ContainerImage>
        <ContainerTextRecent>
        <TitleRecent>{item.title}</TitleRecent>
    <PriceRecent>${item.price}</PriceRecent>
    <DescriptionRecent>{item.description}</DescriptionRecent>
    </ContainerTextRecent>
    </Container>
  )
}

export default RecentSectionItem
