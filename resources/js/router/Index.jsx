import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Home from '../components/HomePage'
import Home from '../pages/HomePage'
import Freelancer from '../pages/Freelancer'
import Owner from '../pages/Owner'
import Detail from '../pages/Detail'
import Star from '../pages/StarPage'
import CaseMng from '../pages/CaseManager'
import SeleTaker from '../pages/SeleTaker'
import Test from '../pages/Test'
import Testform from '../pages/TestForm'
import NotFound from '../pages/NotfoundPage'


const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/star" element={<Star />} />
            <Route path="/casemng" element={<CaseMng />} />
            <Route path="/seletaker" element={<SeleTaker />} />
            <Route path="/test" element={<Test />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/form" element={<Testform />} />{/* TestForm 頁面 */}
        </Routes>
    )
}

export default Index