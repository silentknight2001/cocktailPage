import React from 'react'
import SingleCocktail from '../Components/CocktailList'
import SearchForm from '../Components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <SingleCocktail/>
    </main>
  )
}

export default Home