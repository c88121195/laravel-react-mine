import React, { useEffect } from 'react';
import '../../css/tast.css';
import { initializeJQuery } from '../JS or jQuery/test'; // 引用 jQuery 初始化函數

const Test = () => {
    useEffect(() => {
        const cleanup = initializeJQuery(); // 初始化 jQuery

        return () => {
            cleanup(); // 清理事件綁定
        };
    }, []);

    return (
        <div className='test'>
            <h1>測試用 我在想JS</h1>
        </div>
    );
};

export default Test;
