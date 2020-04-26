import React, { useState } from 'react';
import Home from "./pages/home/Home";
import Favourite from './pages/favourite/Favourite';
import Setting from './pages/setting/Setting';
import Search from './pages/search/Search';
import { PageContext } from './store/PageContext';
import Navbar from './components/navbar/Navbar';
import PageView from './components/PageView/PageView';
import "./style/main.scss";
import Desktop from "./pages/desktop/Desktop";
import ClientJS from 'clientjs'

function App() {
  const client = new ClientJS();
  console.log(client.getDevice());
  const [page, setPage]= useState({number:0});

  const generatePage = (page) => {
    switch (page.number){
      case 0:
        return(
          <Home toPersianDigits={toPersianDigits}/>
        );
      case 1:
        return(
          <Favourite toPersianDigits={toPersianDigits}/>
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
  };

  const toPersianDigits= (number) => {
    let id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.replace(/[0-9]/g, function (w) {
        return id[+w]
    });
  };

  return (
    <PageContext.Provider value={{page, setPage}}>
        {
            client.getDevice().type !== undefined ?
                <PageView>
                    {
                    generatePage(page)
                    }
                    <Navbar/>
                </PageView> :
                <Desktop />
        }
    </PageContext.Provider>
  );
}

export default App;
