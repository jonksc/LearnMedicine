import React from 'react';

const Lernziele = ({ lernziele }) => {
  return (
    <div>
      <table className="table">
        {lernziele}
      </table>
    </div>
  );
};

export default Lernziele;
