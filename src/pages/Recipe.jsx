import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${"f98d32491ab248b69166a032679093b8"}`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => {setActiveTab('instructions')}}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => {setActiveTab('ingredients')}}>Ingredients</Button>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img{
    width: 500px;
    height: auto;
  }
`;

const Button = styled.button`
  padding: 1rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
