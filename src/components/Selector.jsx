import React, { useState, useEffect } from 'react'

const Selector = ({ onButtonClick }) => {
  const [breed, setBreed] = useState('')
  const [num, setNum] = useState(1)
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      let res = await fetch('https://dog.ceo/api/breeds/list/all')
      let data = await res.json()
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    onButtonClick(breed, num)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={breed} onChange={(e) => setBreed(e.target.value)}>
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
        placeholder="Number of images" 
        min="1"
        max="100"
      />
      <button type="submit">Fetch Images</button>
    </form>
  )
}

export default Selector