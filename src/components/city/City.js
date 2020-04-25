import React from 'react';
import "./city.scss";
import { ReactComponent as Alborz } from '../../style/images/city/state_alborz.svg';
import { ReactComponent as Ardabil } from '../../style/images/city/state_ardabil.svg';
import { ReactComponent as AzarbayjanGarbi } from '../../style/images/city/state_azarbaijan_gharbi.svg';
import { ReactComponent as AzarbayjanSharghi } from '../../style/images/city/state_azarbaijan_sharghi.svg';
import { ReactComponent as Booshehr } from '../../style/images/city/state_booshehr.svg';
import { ReactComponent as Charmahal } from '../../style/images/city/state_chahrmahl_bakhtiarii.svg';
import { ReactComponent as Esfahan } from '../../style/images/city/state_esfahan.svg';
import { ReactComponent as Ghom } from '../../style/images/city/state_ghom.svg';
import { ReactComponent as Gilan } from '../../style/images/city/state_gilan.svg';
import { ReactComponent as Golestan } from '../../style/images/city/state_golestan.svg';
import { ReactComponent as Hamedan } from '../../style/images/city/state_hamedan.svg';
import { ReactComponent as Hormozgan } from '../../style/images/city/state_hormozgan.svg';
import { ReactComponent as Kerman } from '../../style/images/city/state_kerman.svg';
import { ReactComponent as Kernamshah } from '../../style/images/city/state_kermanshah.svg';
import { ReactComponent as Khoozestan } from '../../style/images/city/state_khoozestan.svg';
import { ReactComponent as KhorasanJonubi } from '../../style/images/city/state_khorasan_jonobi.svg';
import { ReactComponent as KhorasanRazavi } from '../../style/images/city/state_khorasanrazavi.svg';
import { ReactComponent as Kogiluye } from '../../style/images/city/state_kohgilooye.svg';
import { ReactComponent as Kordestan } from '../../style/images/city/state_kordestan.svg';
import { ReactComponent as Lorestan } from '../../style/images/city/state_lorestan.svg';
import { ReactComponent as Markazi } from '../../style/images/city/state_markazi.svg';
import { ReactComponent as Mazandaran } from '../../style/images/city/state_mzandaran.svg';
import { ReactComponent as Qazvin } from '../../style/images/city/state_qazvin.svg';
import { ReactComponent as Shiraz } from '../../style/images/city/state_shiraz.svg';
import { ReactComponent as Sistan } from '../../style/images/city/state_sistan_balochestan.svg';
import { ReactComponent as Tehran } from '../../style/images/city/state_tehran.svg';
import { ReactComponent as Yazd } from '../../style/images/city/state_yazd.svg';


function City(props) {

    const GenerateCity = {
        "آذربایجان شرقی": <AzarbayjanSharghi/>,
        "آذربایجان غربی": <AzarbayjanGarbi/>,
        "اردبیل": <Ardabil/>,
        "اصفهان": <Esfahan/>,
        "البرز": <Alborz/>,
        // "ایلام": <Elam/>,
        "بوشهر": <Booshehr/>,
        "تهران": <Tehran/>,
        "چهارمحال و بختیاری": <Charmahal/>,
        "خراسان جنوبی": <KhorasanJonubi/>,
        "خراسان رضوی": <KhorasanRazavi/>,
        // "خراسان شمالی": <KhorasanShomali/>,
        "خوزستان": <Khoozestan/>,
        // "زنجان": <Zanjan/>,
        // "سمنان": <Semnan/>,
        "سیستان و بلوچستان": <Sistan/>,
        "فارس": <Shiraz/>,
        "قزوین": <Qazvin/>,
        "قم": <Ghom/>,
        "کردستان": <Kordestan/>,
        "کرمان": <Kerman/>,
        "کرمانشاه": <Kernamshah/>,
        "کهگیلویه و بویراحمد": <Kogiluye/>,
        "گلستان": <Golestan/>,
        "گیلان": <Gilan/>,
        "لرستان": <Lorestan/>,
        "مازندران": <Mazandaran/>,
        "مرکزی": <Markazi/>,
        "هرمزگان": <Hormozgan/>,
        "همدان": <Hamedan/>,
        "یزد": <Yazd/>
    };

    return (
        <div className="city-vector">
            {GenerateCity[props.province]}
        </div>
    )
};

export default City;