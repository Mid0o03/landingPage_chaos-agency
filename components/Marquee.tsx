import React from 'react';

const Marquee: React.FC = () => {
  const text = "/// WE BREAK THINGS /// WE BREAK THINGS /// WE BREAK THINGS /// WE BREAK THINGS /// WE BREAK THINGS";
  
  return (
    <div className="w-full overflow-hidden border-b-3 border-black bg-black py-4">
      <div className="whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-4 text-4xl font-black uppercase italic tracking-tighter text-white">
            {text} {text} {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;