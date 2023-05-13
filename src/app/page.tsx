'use client'
import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image'

export default function Index() {

return (
  <HomeWrapper>

    {/* Filter Section */}
    <FilterWrapper>
      <FilterAltIcon style={{fontSize:40}} />
      <Category onClick={() => setFilter(AllData)}>All</Category>
      <Category onClick={() => setFilter(HealthData)}>Health</Category>
      <Category onClick={() => setFilter(EducationData)}>Education</Category>
      <Category onClick={() => setFilter(AnimalData)}>Animal</Category>
    </FilterWrapper>
     {/* Cards Container */}
     <CardsWrapper>

      {/* Card */}

      <Card>
      <CardImg>
            {/* <Image 
              alt="Crowdfunding dapp"
              layout='fill'  /> */}
          </CardImg>
          <Title>
            Treatment for my dog
            </Title>
            <CardData>
              <Text>Owner<AccountBoxIcon /></Text>
              <Text>0xc537...E27</Text>
            </CardData>
            <CardData>
              <Text>Amount<PaidIcon /></Text>
              <Text>100 Matic</Text>
            </CardData>
            <CardData>
              <Text><EventIcon /></Text>
              <Text>2/2/2022, 4:00:09 PM</Text>
            </CardData>
            <Button>
              Go to Campaign
            </Button>
      </Card>
      {/* card */}
      </CardsWrapper>
      </HomeWrapper>
)
}


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 15px;
`
const Category = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.bgDiv};
  margin: 0px 15px;
  border-radius: 8px;
  font-family: 'Poppins';
  font-weight: normal;
  cursor: pointer;
`
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`
const Card = styled.div`
  width: 30%;
  margin-top: 20px;
  background-color: ${(props) => props.theme.bgDiv};

  &:hover{
    transform: translateY(-10px);
    transition: transform 0.5s;
  }
  
  &:not(:hover){
    transition: transform 0.5s;
  }
`
const CardImg = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`
const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 18px;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  font-weight: normal;
`
const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
const Button = styled.button`
  padding: 8px;
  text-align: center;
  width: 100%;
  background-color:#00b712 ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%); 
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`
const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  `