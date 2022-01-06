import { getSession, GetSessionParams } from 'next-auth/react';
import * as React from 'react';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import Login from '@/components/Login';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage({session}: {session:any}) {
  if(!session) return <Login/>;
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Header />
      
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context: GetSessionParams | undefined) {
  //get the user
  const session = await getSession(context);

  return {
    props : {
      session
    }
  }
}