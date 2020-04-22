import React, { useState } from 'react';
import Home from "./pages/home/Home";
import Favourite from './pages/favourite/Favourite';
import Setting from './pages/setting/Setting';
import Search from './pages/search/Search';
import { PageContext } from './store/PageContext';
import Navbar from './components/navbar/Navbar';
import "./style/main.scss";

function App() {

  const [page, setPage]= useState({number:0});

  const generatePage = (page) => {
    switch (page.number){
      case 0:
        return(
          <Home/>
        );
      case 1:
        return(
          <Favourite/>
        );
      // case 2:
      //   return(
      //     <Setting/>
      //   );
      case 3:
        return(
          <Search/>
        );
    }
  }

  return (
    <PageContext.Provider value={{page, setPage}}>
      <React.Fragment>
        {
            generatePage(page)
        }
        <Navbar/>
      </React.Fragment>
    </PageContext.Provider>
  );
}

export default App;
