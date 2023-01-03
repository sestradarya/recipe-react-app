import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${"f98d32491ab248b69166a032679093b8"}&cuisine=${name}`)
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image}/>
            <h4>{item.title}</h4>
          </Card>
        )
      }) }
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2.5rem;
`

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`
