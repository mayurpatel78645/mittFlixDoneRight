import MovieContainer from './MovieContainer';

export default function Home({ moviesData, handleWatchList, watchListData }) {

  return (
    <>
      <MovieContainer name='NetFlix' data={moviesData[0]} handleWatchList={handleWatchList} watchListData={watchListData} />
      <MovieContainer name='Crave' data={moviesData[1]} handleWatchList={handleWatchList} watchListData={watchListData} />
      <MovieContainer name='Disney +' data={moviesData[2]} handleWatchList={handleWatchList} watchListData={watchListData} />
      <MovieContainer name='Apple +' data={moviesData[3]} handleWatchList={handleWatchList} watchListData={watchListData} />
    </>
  )
}
