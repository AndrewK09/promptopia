import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html Lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <Nav />
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
