import ListVideosView from './ListVideos.view';
import { useHistory } from 'react-router-dom';

function ListVideoContainer() {
  const history = useHistory();
  return (
    <div>
      <ListVideosView history={history} />
    </div>
  );
}

export default ListVideoContainer;
