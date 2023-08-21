import Video from './components/video/Video'

const App = () => {
  return (
    <>
      <Video
        videoID="t99KH0TR-J4"
        autoplay={true}
        color={true}
        controls={true}
        start="23"
        end="25"
        loop={true}
        seed="50"
        thumbnail={false}
      />
    </>
  )
}
export default App
