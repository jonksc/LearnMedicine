import { useState } from 'react';

const Grundlagen = ({ grundlagen }) => {
  const [chapter, setChapter] = useState(grundlagen[0].chapter);

  const changeChapter = (event) => {
    setChapter(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:gap-20">
        <div>
          <p className="font-semibold text-lg">Kapitel</p>
          <hr />
          <div className="flex flex-col items-start">
            {
              grundlagen.map((grundlage, index) => 
                <button className="text-left btn" key={index} onClick={changeChapter} value={grundlage.chapter}>{grundlage.chapter}</button>)
            }
          </div>
        </div>

        <div className="max-w-2xl">
          {
            grundlagen.filter(grundlage => chapter === grundlage.chapter).map((grundlage, index) => {
              return (
                <div key={index}>
                  <h1 className="font-semibold text-lg">{grundlage.chapter}</h1>
                  <p>{grundlage.content}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default Grundlagen;
