import BarraPadrao from '../components/BarraPadrao'
import Post from '../components/Post'

function Feed() {
  return (
    <div>
      <BarraPadrao />
      <br/>
      <div className="">
        <Post />
      </div>

    </div>
  );
}
export default Feed