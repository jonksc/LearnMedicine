import React, { useState } from 'react';
import Modal from '../../components/UI/Modal';

const Galerie = ({ data }) => {
  const [mediaType, setMediaType] = useState('videos');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState();
  const [url, setUrl] = useState('');

  const changeMediaType = (event) => {
    setMediaType(event.target.value);
  };

  const toggleModal = (event) => {
    !isOpenModal && setTitle(event.target.innerText);
    !isOpenModal && setUrl(event.target.value);
    setIsOpenModal(!isOpenModal);
  };

  const videoData = data.videos.map((video) => {
    return { 
      title: video.name, 
      url: `https://wms01-avmz.germanywestcentral.cloudapp.azure.com/mkg/_definst/mp4:${video.file}/playlist.m3u8`
    };
  });

  // const urls = data.videos.map((video) => {
  //   return `https://wms01-avmz.germanywestcentral.cloudapp.azure.com/mkg/_definst/mp4:${video.file}/playlist.m3u8`;
  // });

  // const videoTitles = ['Bilaterale sagittale split Osteotomie', 'Unterkieferrückverlagerung'];

  const pictureTitles = ['Distalbisslage', 'Mesialbisslage'];

  return (
    <div>
      <div className="mb-4">
        <button className="btn bg-green-500 hover:bg-green-700 text-white mr-2" onClick={changeMediaType} value="videos">Videos</button>
        <button className="btn bg-green-500 hover:bg-green-700 text-white mr-2" onClick={changeMediaType} value="bilder">Bilder</button>
      </div>

      
      <div className="grid-magic">
        {mediaType === 'videos' && 
          <>
            {videoData.map((video, index) =>
              <>
                <button key={index} onClick={toggleModal} className="rounded-md px-2 py-2 bg-green-200 hover:bg-green-400 text-gray-800" value={video.url}>{video.title}</button>
              </>)
            }
          </>
        }

        {mediaType === 'bilder' && 
          <>
            {pictureTitles.map((pictureTitle, index) =>
              <>
                <button key={index} onClick={toggleModal} className="rounded-md px-2 py-1 bg-green-200 hover:bg-green-400 text-gray-800" value={pictureTitle}>{pictureTitle}</button>
              </>)
            }
          </>
        }
      </div>

      <Modal
        show={isOpenModal}
        onClose={toggleModal}
        title={title}
        url={url}
      />
    </div>
  );
};

export default Galerie;
