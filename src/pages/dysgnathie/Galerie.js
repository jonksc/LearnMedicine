import React, { useState } from 'react';
import Modal from '../../components/UI/Modal';

const Galerie = () => {
  const [mediaType, setMediaType] = useState('videos');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState();

  const changeMediaType = (event) => {
    setMediaType(event.target.value);
  };

  const toggleModal = (event) => {
    !isOpenModal && setTitle(event.target.value);
    setIsOpenModal(!isOpenModal);
  };

  const videoTitles = ['Bilaterale sagittale split Osteotomie', 'Unterkieferrückverlagerung'];

  const pictureTitles = ['Distalbisslage', 'Mesialbisslage'];

  return (
    <div>
      <div className="mb-4">
        <button className="btn bg-green-500 hover:bg-green-700 text-white mr-2" onClick={changeMediaType} value="videos">Videos</button>
        <button className="btn bg-green-500 hover:bg-green-700 text-white mr-2" onClick={changeMediaType} value="bilder">Bilder</button>
      </div>

      
      <div className="flex gap-5">
        {mediaType === 'videos' && 
          <>
            {videoTitles.map((videoTitle, index) =>
              <>
                <button key={index} onClick={toggleModal} className="rounded-md px-2 py-1 bg-green-200 hover:bg-green-400 text-gray-800" value={videoTitle}>{videoTitle}</button>
                <img className="galleryPoster" src="thumbs/Play_experimentell.png" alt="" />
              </>)
            }
          </>
        }

        {mediaType === 'bilder' && 
          <>
            {pictureTitles.map((pictureTitle, index) =>
              <>
                <button key={index} onClick={toggleModal} className="rounded-md px-2 py-1 bg-green-200 hover:bg-green-400 text-gray-800" value={pictureTitle}>{pictureTitle}</button>
                <img className="galleryPoster" src="thumbs/Play_experimentell.png" alt="" />
              </>)
            }
          </>
        }
      </div>

      <Modal
        show={isOpenModal}
        onClose={toggleModal}
        title={title}
      />
    </div>
  );
};

export default Galerie;
