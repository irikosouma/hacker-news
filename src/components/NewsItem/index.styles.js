import styled from 'styled-components';
const WrapItem = styled.div`
    background-color: #fff;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    
    .news-title {
        color: #102a42;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        margin: 0;
    }
    .point-comment {
        color: #617d98;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        margin: 8px 0;
    }
    .btn-style {
        appearance: none;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0 12px 0 0px; 
        cursor: pointer;
        text-decoration: none;
        font-size: 14px;
        line-height: 20px;
    }
    .read-more {
        color: #49a6e9;

    }
    .delete {
        color: #bb2525;
    }
`;
export {WrapItem}