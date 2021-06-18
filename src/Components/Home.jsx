import MovieContainer from './MovieContainer';

export default function Home({ moviesData }) {

  return (
    <>
      <MovieContainer name='NetFlix' data={moviesData[0]} />
      <MovieContainer name='Crave' data={moviesData[1]} />
      <MovieContainer name='Disney +' data={moviesData[2]} />
      <MovieContainer name='Apple +' data={moviesData[3]} />
    </>
  )
}
