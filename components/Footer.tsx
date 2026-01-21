import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-3 border-black bg-black px-6 pb-10 pt-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        
        {/* Call to Action */}
        <h2 className="mb-10 text-center text-5xl font-black uppercase leading-none md:text-8xl">
          Ready to <br /> <span className="text-neo-green">Break Rules?</span>
        </h2>
        
        <Button variant="secondary" className="mb-16 h-20 w-full max-w-md gap-3 text-2xl font-black tracking-wider">
          Let's Talk <span className="material-symbols-outlined text-3xl font-black">chat_bubble</span>
        </Button>

        {/* Info Grid */}
        <div className="grid w-full grid-cols-1 gap-10 border-t border-gray-800 pt-10 md:grid-cols-3">
          
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase text-neo-green">Contact</h3>
            <a href="mailto:hello@chaos.agency" className="text-2xl font-black decoration-4 hover:text-neo-yellow hover:underline">
              hello@chaos.agency
            </a>
            <p className="font-mono text-gray-400">+1 (555) 000-CHAOS</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase text-neo-green">Socials</h3>
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="rounded-full border border-white px-4 py-2 font-bold uppercase transition-colors hover:bg-white hover:text-black"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="text-xl font-bold uppercase text-neo-green">Location</h3>
            <p className="text-xl font-bold uppercase md:text-right">
              123 Chaos Blvd<br />New York, NY 10012
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 w-full border-t border-gray-800 pt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            © 2024 Chaos Agency. All Rights Reserved. Designed without permission.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;