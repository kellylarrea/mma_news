import {useState, useEffect} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {

    const url = (`https://api.sportsdata.io/v3/mma/scores/json/Schedule/ufc/2022/${API_KEY}`)
    const [data, setData] = useState([])

    const fetchNews = async () => {
        const results = await fetch(url)
        const newsData = await results.json()
        setData(newsData)
        console.log('this is response', newsData)
    }

    useEffect(() => {
        fetchNews()
    }, [])


  return (
    <div>This is where I will display news</div>
  )
}

export default Home
