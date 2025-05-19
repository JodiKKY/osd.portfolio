import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          {/* GitHub */}
          <a href="https://github.com/JodiKKY" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.495.997.11-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.125-.303-.535-1.523.115-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.652 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.628-5.48 5.922.43.37.823 1.1.823 2.22 0 1.606-.014 2.898-.014 3.292 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/JodiKKY" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.03 9.03 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.5 0-4.5 2.05-4.5 4.58 0 .36.04.72.12 1.06A12.94 12.94 0 0 1 3 1.64a4.6 4.6 0 0 0-.61 2.3c0 1.58.78 2.97 2 3.78a4.48 4.48 0 0 1-2.04-.58v.06c0 2.2 1.5 4.03 3.5 4.45a4.51 4.51 0 0 1-2.02.08c.56 1.78 2.2 3.08 4.13 3.12a9.05 9.05 0 0 1-5.6 1.97c-.36 0-.72-.02-1.08-.06a12.8 12.8 0 0 0 7 2.12c8.38 0 12.96-7.07 12.96-13.2 0-.2 0-.39-.01-.58A9.4 9.4 0 0 0 23 3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/jodi.osd" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0-2C3.47 0 0 3.47 0 7.75v8.5C0 20.53 3.47 24 7.75 24h8.5C20.53 24 24 20.53 24 16.25v-8.5C24 3.47 20.53 0 16.25 0h-8.5zM12 6.4a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0-1.4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm6.5-.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"/>
            </svg>
          </a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Yirenkyi Jodi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
