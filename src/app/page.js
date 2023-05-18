// 'use client'

// import React from 'react'
// import Index from '../app/helperpage/helper';
// import GetStaticProps  from '../app/helperpage/helper';

// const createcampaign = () => {
//   return (
//     <helper>
//       <Form />
//     </helper>
//   )
// }

// export default createcampaign;


// import styled from 'styled-components';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import PaidIcon from '@mui/icons-material/Paid';
// import EventIcon from '@mui/icons-material/Event';
// import Image from 'next/image'
// import { ethers } from 'ethers';
// import CampaignFactory from '../../artifacts/contracts/Campaign.sol/CampaignFactory.json'
// import { useState } from 'react';
// import Link from 'next/link';
// import { NextPage } from "next";
// import { useEffect } from 'react';
// import { getStaticProps } from './helperpage/helper';

// export default function Index({ AllData, HealthData, EducationData, AnimalData }) {
//   const [filter, setFilter] = useState([])

//   useEffect(() => {
//     setFilter(AllData)
//   }, [AllData])

//   return (
//     <HomeWrapper>
//       {/* Filter Section */}
//       <FilterWrapper>
//         <FilterAltIcon style={{ fontSize: 40 }} />
//         <Category onClick={() => setFilter(AllData)}>All</Category>
//         <Category onClick={() => setFilter(HealthData)}>Health</Category>
//         <Category onClick={() => setFilter(EducationData)}>Education</Category>
//         <Category onClick={() => setFilter(AnimalData)}>Animal</Category>
//       </FilterWrapper>

//       {/* Cards Container */}
//       <CardsWrapper>
//         {/* Card */}
//         {filter && filter.length > 0 ? (
//           filter.map((e) => (
//             <Card key={e.title}>
//               <CardImg>
//                 <Image
//                   alt="Crowdfunding dapp"
//                   layout="fill"
//                   src={"https://ipfs.io/ipfs/" + e.image}
//                 />
//               </CardImg>
//               <Title>{e.title}</Title>
//               <CardData>
//                 <Text>
//                   Owner<AccountBoxIcon />
//                 </Text>
//                 <Text>
//                   {e.owner.slice(0, 6)}...{e.owner.slice(39)}
//                 </Text>
//               </CardData>
//               <CardData>
//                 <Text>
//                   Amount<PaidIcon />
//                 </Text>
//                 <Text>{e.amount} Matic</Text>
//               </CardData>
//               <CardData>
//                 <Text>
//                   <EventIcon />
//                 </Text>
//                 <Text>
//                   {new Date(e.timeStamp * 1000).toLocaleString()}
//                 </Text>
//               </CardData>
//               <Link passHref href={"/" + e.address}>
//                 <Button>Go to Campaign</Button>
//               </Link>
//             </Card>
//           ))
//         ) : (
//           <div>No data available</div>
//         )}
//         {/* Card */}
//       </CardsWrapper>
//     </HomeWrapper>
//   );
// }




// const HomeWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `
// const FilterWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   width: 80%;
//   margin-top: 15px;
// `
// const Category = styled.div`
//   padding: 10px 15px;
//   background-color: '#efe7fd';
//   margin: 0px 15px;
//   border-radius: 8px;
//   font-family: 'Poppins';
//   font-weight: normal;
//   cursor: pointer;
// `
// const CardsWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   width: 80%;
//   margin-top: 25px;
// `
// const Card = styled.div`
//   width: 30%;
//   margin-top: 20px;
//   background-color: '#efe7fd';

//   &:hover{
//     transform: translateY(-10px);
//     transition: transform 0.5s;
//   }
  
//   &:not(:hover){
//     transition: transform 0.5s;
//   }
// `
// const CardImg = styled.div`
//   position: relative;
//   height: 120px;
//   width: 100%;
// `
// const Title = styled.h2`
//   font-family: 'Roboto';
//   font-size: 18px;
//   margin: 2px 0px;
//   background-color: '#efe7fd';
//   padding: 5px;
//   cursor: pointer;
//   font-weight: normal;
// `
// const Text = styled.p`
//   display: flex;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   font-family: 'Roboto';
//   font-size: 18px;
//   font-weight: bold;
// `
// const Button = styled.button`
//   padding: 8px;
//   text-align: center;
//   width: 100%;
//   background-color:#00b712 ;
//   background-image:
//       linear-gradient(180deg, #00b712 0%, #5aff15 80%); 
//   border: none;
//   cursor: pointer;
//   font-family: 'Roboto';
//   text-transform: uppercase;
//   color: #fff;
//   font-size: 14px;
//   font-weight: bold;
// `
// const CardData = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 2px 0px;
//   background-color: '#efe7fd';
//   padding: 5px;
//   cursor: pointer;
//   `


'use client'
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CampaignFactory from '../../artifacts/contracts/Campaign.sol/CampaignFactory.json';
import styles from './page.module.css';
import Link from 'next/link';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://polygon-mumbai.infura.io/v3/0a5dd5afdd9043f3b67d773cfc85ea06'
      );

      const contract = new ethers.Contract(
        '0x8761cC2B453E7B7b03f9028A2613e82c4A8A1476',
        CampaignFactory.abi,
        provider
      );

      const getDeployedCampaign = contract.filters.campaignCreated();
      const events = await contract.queryFilter(getDeployedCampaign);
      const campaignData = events.map((event) => {
        const eventData = event.args;
        return {
          title: eventData.title,
          image: eventData.imgURI,
          owner: eventData.owner,
          timestamp: parseInt(eventData.timestamp),
          amount: ethers.utils.formatEther(eventData.requiredAmount),
          address: eventData.campaginAddress,
        };
      });
      setCampaigns(campaignData.reverse());
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="campaignlist">
      {campaigns.map((campaign) => (
        <div className={styles.campaign} key={campaign.address}>
          <img className={styles.campaignimage} src={"https://ipfs.io/ipfs/"+campaign.image} alt={campaign.title} />
          <div className={styles.campaigndetails}>
            <h2 className={styles.campaigntitle}>{campaign.title}</h2>
            <p className={styles.campaignowner}>{campaign.owner}</p>
            <p className={styles.campaigntimestamp}>{campaign.timestamp}</p>
            <p className={styles.campaignamount}>{campaign.amount} ETH</p>
            <p className={styles.campaignaddress}>{campaign.address}</p>
            <a href={"/" + campaign.owner}>Go to Campaign</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
