import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';
import EditVideoView from './EditVideo.view';
import sampleVideos from '../ListVideos/samplevideos';
import { useParams } from 'react-router-dom';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Version': 'v6',
};

function EditVideoContainer() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [payloadJSON, setPayloadJSON] = useState('');
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { videoId } = useParams();

  const handleSubmit = async (values) => {
    setErrorMsg(null);
    try {
      const headersWithToken = { ...headers, Authorization: `Bearer ${user.accessToken}` };
      const _payloadJSON = { method: 'POST', headersWithToken, values };
      setPayloadJSON(_payloadJSON);
    } catch (error) {
      setErrorMsg('Error in payload building');
    }
  };

  const videoInfos = sampleVideos.find((video) => video.id == videoId);
  if (videoInfos == undefined) {
    history.push('/home');
    return <></>;
  }

  const initialValues = {
    id: videoInfos.id,
    title: videoInfos.title,
    description: videoInfos.description,
    duration: videoInfos.duration,
    thumbnail: videoInfos.thumbnail,
  };
  return (
    <div>
      <EditVideoView
        initialValues={initialValues}
        onSubmit={handleSubmit}
        errorMsg={errorMsg}
        payloadJSON={payloadJSON}
      />
    </div>
  );
}

export default EditVideoContainer;
