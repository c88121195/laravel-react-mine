import React from 'react';
import Hanber from '../../../../public/img/hanber.png'
import Tick from '../../../../public/img/Tick Box.png'
import Left from '../../../../public/img/left.png'
import Leftnext from '../../../../public/img/leftnext.png'
import Rightnext from '../../../../public/img/rightnext.png'
import Right from '../../../../public/img/right.png'
import Green from '../../../../public/img/Green Circle.png'
import Red from '../../../../public/img/Red Circle.png'
import Star from '../../../../public/img/Star 5.png'
import Company1 from '../../../../public/img/company1.png'
import Company2 from '../../../../public/img/company2.png'
import Company3 from '../../../../public/img/company3.png'
import Company4 from '../../../../public/img/company4.png'
import Company5 from '../../../../public/img/company5.png'
import Fire from '../../../../public/img/Fire.png'


const Maincontainer = () => (
    <div className="maincontainer">
        {/* <!-- tab/search --> */}
        <div className="search">
            <div className="searchtab">
                <h2>缺工&ensp; &gt; &ensp;HTML</h2>
            </div>
            {/* <!-- search keyword --> */}
            <div className="keyword">
                <a href="#">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Search.png?raw=true" alt="search" />
                </a>
                <p style={{ fontsize: '30px' }}>|</p>
                <p>search keyword</p>
            </div>
            <div className="space"></div>
            {/* <!-- hanber --> */}
            {/* <!-- 觸發彈出框的按鈕 --> */}
            <div className="hanber">
                {/* <!-- 觸發彈出框的連結 --> */}
                {/* <!-- 彈出框結構 --> */}
                <a href="#" id="openModalBtn" className="open-modal-btn" onClick={(e) => { e.preventDefault(); openModal(); }}>
                    <img src={Hanber} style={{ width: '40px' }} alt="Hanber" />
                </a>
            </div>
        </div>
        {/* <!-- order --> */}
        <div className="order">
            <p style={{ flex: 5 }}>顯示 5-5 of 共 2222 筆資料</p>
            <a href="#">最近更新</a>
            <a href="#">點閱率最高</a>
            <a href="#">企業評價最高</a>
            <a href="#">應徵人數</a>
        </div>
        {/* <!-- content --> */}
        <div>
            {/* <!-- contentone --> */}
            <div className="contentone">
                <div className="content1">
                    <div className="hot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                    <div style={{ flex: 1 }}></div>
                    <div className="companyphoto">
                        <img src={Company1} alt="company1" />
                    </div>
                    <div className="companyname">
                    </div>
                    <div className="companystar">
                        <div></div>
                        <div className="green">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="star">
                            <img src={Star} alt="star" />
                        </div>
                        <p>評論數</p>
                    </div>
                </div>
                <div className="content2">
                    <div className="title">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="set">
                        <div className="date">
                            <h4>工作年資：3~4年</h4>
                        </div>
                        <div className="caseprice">
                        </div>
                    </div>
                    <div className="location">地區：台灣/台北市信義區</div>
                    <div className="casecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="require">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="contentnew">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/New.png?raw=true" alt="new" />
                </div>
                <div className="content3">
                    <div className="time">3分鐘前更新</div>
                    <div className="content3btn">
                        <a className="collect" href="#">收藏</a>
                        <a className="takecase" href="#">委託</a>
                    </div>
                    <div className="people"><p>已完成專案件數：10 件</p></div>
                    <div className="frequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content2 --> */}
            <div className="content">
                <div className="content1">
                    <div style={{ flex: 1 }}></div>
                    <div className="companyphoto">
                        <img src={Company2} alt="company1" />
                    </div>
                    <div className="companyname">
                    </div>
                    <div className="companystar">
                        <div></div>
                        <div className="green">
                            <img src={Red} alt="red" />
                        </div>
                        <div className="star">
                            <img src={Star} alt="star" />
                        </div>
                        <p>評論數</p>
                    </div>
                </div>
                <div className="content2">
                    <div className="title">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="set">
                        <div className="date">
                            <h4>工作年資：3~4年</h4>
                        </div>
                        <div className="caseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="location">地區：台灣/台北市信義區</div>
                    <div className="casecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="require">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>

                <div className="contentnew">
                    <img src={Fire} alt="new" />
                </div>
                <div className="content3">
                    <div className="time">3分鐘前更新</div>
                    <div className="content3btn">
                        <a className="collect" href="#">收藏</a>
                        <a className="takecase" href="#">委託</a>
                    </div>
                    <div className="people"><p>已完成專案件數：10 件</p></div>
                    <div className="frequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content3 --> */}
            <div className="content">
                <div className="content1">
                    {/* <!-- <div className="hot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1 }}></div>
                    <div className="companyphoto">
                        <img src={Company3} alt="" />
                    </div>
                    <div className="companyname">
                    </div>
                    <div className="companystar">
                        <div></div>
                        <div className="green">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="star">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="title">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="set">
                        <div className="date">
                            <h4>工作年資：3~4年</h4>                        </div>
                        <div className="caseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="location">地區：台灣/台北市信義區</div>
                    <div className="casecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="require">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="contentnew"></div>
                <div className="content3">
                    <div className="time">3分鐘前更新</div>
                    <div className="content3btn">
                        <a className="collect" href="#">收藏</a>
                        <a className="takecase" href="#">委託</a>
                    </div>
                    <div className="people"><p>已完成專案件數：10 件</p></div>
                    <div className="frequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content4 --> */}
            <div className="content">
                <div className="content1">
                    {/* <!-- <div className="hot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1.5 }}></div>
                    <div className="companyphoto">
                        <img src={Company4} alt="" />
                    </div>
                    <div className="companyname">
                    </div>
                    <div className="companystar">
                        <div></div>
                        <div className="green">
                            <img src={Red} alt="red" />
                        </div>
                        <div className="star">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="title">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="set">
                        <div className="date">
                            <h4>工作年資：3~4年</h4>                        </div>
                        <div className="caseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="location">地區：台灣/台北市信義區</div>
                    <div className="casecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="require">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="contentnew"></div>
                <div className="content3">
                    <div className="time">3分鐘前更新</div>
                    <div className="content3btn">
                        <a className="collect" href="#">收藏</a>
                        <a className="takecase" href="#">委託</a>
                    </div>
                    <div className="people"><p>已完成專案件數：10 件</p></div>
                    <div className="frequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content5 --> */}
            <div className="content">
                <div className="content1">
                    {/* <!-- <div className="hot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1.5 }}></div>
                    <div className="companyphoto">
                        <img src={Company5} alt="" />
                    </div>
                    <div className="companyname">
                    </div>
                    <div className="companystar">
                        <div></div>
                        <div className="green">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="star">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="title">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="set">
                        <div className="date">
                            <h4>工作年資：3~4年</h4>                        </div>
                        <div className="caseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="location">地區：台灣/台北市信義區</div>
                    <div className="casecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="require">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="contentnew"></div>
                <div className="content3">
                    <div className="time">3分鐘前更新</div>
                    <div className="content3btn">
                        <a className="collect" href="#">收藏</a>
                        <a className="takecase" href="#">委託</a>
                    </div>
                    <div className="people"><p>已完成專案件數：10 件</p></div>
                    <div className="frequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
        </div>
        {/* <!-- tab --> */}
        <div className="tab">
            <a href="#"><img src={Left} alt="" /></a>
            <a href="#"><div className="Leftnext"><img src={Leftnext} alt="" /><p>上一頁</p></div></a>
            <a style={{ color: ' #464646', backgroundColor: '#FFA500', border: '1px solid #000000' }} href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <p>...</p>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#"><div className="Rightnext"><p>下一頁</p><img src={Rightnext} alt="" /></div></a>
            <a href="#"><img src={Right} alt="" /></a>
        </div>
    </div>
);

export default Maincontainer;
