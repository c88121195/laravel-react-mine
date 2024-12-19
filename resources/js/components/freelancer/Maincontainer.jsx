import React from 'react';
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


const Maincontainer = () => (
    <div className="fmaincontainer">
        {/* <!-- tab/search --> */}
        <div className="fsearch">
            <div></div>
            {/* <!-- search keyword --> */}
            <div className="fkeyword">
                <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Search.png?raw=true" alt="fsearch" />
                <p>|</p>
                <p>search keyword</p>
            </div>
            <div></div>
        </div>
        {/* <!-- order --> */}
        <div className="forder">
            <p style={{ flex: 5 }}>顯示 5-5 of 共 2222 筆資料</p>
            <a href="#">最近更新</a>
            <a href="#">點閱率最高</a>
            <a href="#">企業評價最高</a>
            <a href="#">應徵人數</a>
        </div>
        {/* <!-- content --> */}
        <div>
            {/* <!-- contentone --> */}
            <div className="fcontentone">
                <div className="fcontent1">
                    <a href="/detail">
                        <div className="fhot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                        <div style={{ flex: 1 }}></div>
                        <div className="fcompanyphoto">
                            <img src={Company1} alt="company1" />
                        </div>
                        <div className="fcompanyname">
                            <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                        </div>
                        <div className="fcompanystar">
                            <div></div>
                            <div className="fgreen">
                                <img src={Green} alt="green" />
                            </div>
                            <div className="fstar">
                                <img src={Star} alt="star" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="fcontent2">
                    <a href="/detail">
                        <div className="ftitle">
                            <h1>獨立品牌網頁設計</h1>
                        </div>
                        <div className="fset">
                            <div className="fdate">
                                <h4>案件時間：2025/01/01-2025/04/30</h4>
                            </div>
                            <div className="fcaseprice">
                                <h4>案件預算：$20,000 - $50,000</h4>
                            </div>
                        </div>
                        <div className="flocation">地區：台灣/台北市信義區</div>
                        <div className="fcasecontent">
                            快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                            專注於提供優質、健康、和有趣的狗狗用品...更多
                        </div>
                        <div className="frequire">
                            <p style={{ margin: '16px 4px' }}>需求語言：</p>
                            <div>
                                <p>HTML</p>
                                <p>C++</p>
                                <p>CSS</p>
                                <p>Java</p>
                                <p>PHP</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="fcontentnew">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/New.png?raw=true" alt="new" />
                </div>
                <div className="fcontent3">
                    <div className="ftime">3分鐘前更新</div>
                    <div className="fcontent3btn">
                        <a className="fcollect" href="#">收藏</a>
                        <a className="ftakecase" href="#">接案</a>
                    </div>
                    <div className="fpeople">0~5 人爭取中</div>
                    <div className="ffrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content2 --> */}
            <div className="fcontent">
                <div className="fcontent1">
                    {/* <!-- <div className="fhot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1 }}></div>
                    <div className="fcompanyphoto">
                        <img src={Company2} alt="" />
                    </div>
                    <div className="fcompanyname">
                        <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                    </div>
                    <div className="fcompanystar">
                        <div></div>
                        <div className="fgreen">
                            <img src={Red} alt="green" />
                        </div>
                        <div className="fstar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="fcontent2">
                    <div className="ftitle">
                        <h1>獨立品牌網頁設計</h1>
                    </div>
                    <div className="fset">
                        <div className="fdate">
                            <h4>案件時間：2025/01/01-2025/04/30</h4>
                        </div>
                        <div className="fcaseprice">
                            <h4>案件預算：$20,000 - $50,000</h4>
                        </div>
                    </div>
                    <div className="flocation">地區：台灣/台北市信義區</div>
                    <div className="fcasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="frequire">
                        <p style={{ margin: '16px 4px' }}>需求語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="fcontentnew">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Fire.png?raw=true" alt="Fire" />
                </div>
                <div className="fcontent3">
                    <div className="ftime">3分鐘前更新</div>
                    <div className="fcontent3btn">
                        <a className="fcollect" href="#">收藏</a>
                        <a className="ftakecase" href="#">接案</a>
                    </div>
                    <div className="fpeople">0~5 人爭取中</div>
                    <div className="ffrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content3 --> */}
            <div className="fcontent">
                <div className="fcontent1">
                    {/* <!-- <div className="fhot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1 }}></div>
                    <div className="fcompanyphoto">
                        <img src={Company3} alt="" />
                    </div>
                    <div className="fcompanyname">
                        <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                    </div>
                    <div className="fcompanystar">
                        <div></div>
                        <div className="fgreen">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="fstar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="fcontent2">
                    <div className="ftitle">
                        <h1>獨立品牌網頁設計</h1>
                    </div>
                    <div className="fset">
                        <div className="fdate">
                            <h4>案件時間：2025/01/01-2025/04/30</h4>
                        </div>
                        <div className="fcaseprice">
                            <h4>案件預算：$20,000 - $50,000</h4>
                        </div>
                    </div>
                    <div className="flocation">地區：台灣/台北市信義區</div>
                    <div className="fcasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="frequire">
                        <p style={{ margin: '16px 4px' }}>需求語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="fcontentnew"></div>
                <div className="fcontent3">
                    <div className="ftime">3分鐘前更新</div>
                    <div className="fcontent3btn">
                        <a className="fcollect" href="#">收藏</a>
                        <a className="ftakecase" href="#">接案</a>
                    </div>
                    <div className="fpeople">0~5 人爭取中</div>
                    <div className="ffrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content4 --> */}
            <div className="fcontent">
                <div className="fcontent1">
                    {/* <!-- <div className="fhot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1.5 }}></div>
                    <div className="fcompanyphoto">
                        <img src={Company4} alt="" />
                    </div>
                    <div className="fcompanyname">
                        <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                    </div>
                    <div className="fcompanystar">
                        <div></div>
                        <div className="fgreen">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="fstar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="fcontent2">
                    <div className="ftitle">
                        <h1>獨立品牌網頁設計</h1>
                    </div>
                    <div className="fset">
                        <div className="fdate">
                            <h4>案件時間：2025/01/01-2025/04/30</h4>
                        </div>
                        <div className="fcaseprice">
                            <h4>案件預算：$20,000 - $50,000</h4>
                        </div>
                    </div>
                    <div className="flocation">地區：台灣/台北市信義區</div>
                    <div className="fcasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="frequire">
                        <p style={{ margin: '16px 4px' }}>需求語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="fcontentnew"></div>
                <div className="fcontent3">
                    <div className="ftime">3分鐘前更新</div>
                    <div className="fcontent3btn">
                        <a className="fcollect" href="#">收藏</a>
                        <a className="ftakecase" href="#">接案</a>
                    </div>
                    <div className="fpeople">0~5 人爭取中</div>
                    <div className="ffrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content5 --> */}
            <div className="fcontent">
                <div className="fcontent1">
                    {/* <!-- <div className="fhot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1.5 }}></div>
                    <div className="fcompanyphoto">
                        <img src={Company5} alt="" />
                    </div>
                    <div className="fcompanyname">
                        <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                    </div>
                    <div className="fcompanystar">
                        <div></div>
                        <div className="fgreen">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="fstar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="fcontent2">
                    <div className="ftitle">
                        <h1>獨立品牌網頁設計</h1>
                    </div>
                    <div className="fset">
                        <div className="fdate">
                            <h4>案件時間：2025/01/01-2025/04/30</h4>
                        </div>
                        <div className="fcaseprice">
                            <h4>案件預算：$20,000 - $50,000</h4>
                        </div>
                    </div>
                    <div className="flocation">地區：台灣/台北市信義區</div>
                    <div className="fcasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="frequire">
                        <p style={{ margin: '16px 4px' }}>需求語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="fcontentnew"></div>
                <div className="fcontent3">
                    <div className="ftime">3分鐘前更新</div>
                    <div className="fcontent3btn">
                        <a className="fcollect" href="#">收藏</a>
                        <a className="ftakecase" href="#">接案</a>
                    </div>
                    <div className="fpeople">0~5 人爭取中</div>
                    <div className="ffrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
        </div>
        {/* <!-- tab --> */}
        <div className="ftab">
            <a href="#"><img src={Left} alt="" /></a>
            <a href="#"><div className="fLeftnext"><img src={Leftnext} alt="" /><p>上一頁</p></div></a>
            <a style={{ color: ' #464646', backgroundColor: '#FFA500', border: '1px solid #000000' }} href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <p>...</p>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#"><div className="fRightnext"><p>下一頁</p><img src={Rightnext} alt="" /></div></a>
            <a href="#"><img src={Right} alt="" /></a>
        </div>
    </div>
);

export default Maincontainer;
