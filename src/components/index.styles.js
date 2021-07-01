import styled from 'styled-components';
const Wrap = styled.div`
width: 90vw;
max-width: 1170px;
margin: 0 auto;


    .title {
        margin: 80px 0 0 0;
        padding: 0;
        color: #102a42;
        font-size: 40px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: 1.5px;
    }
    .input-style {
        width:100%;
        max-width: calc(600px - 32px); 
        appearance: none;
        border: none;
        margin: 26px 0 48px 0;
        padding: 16px 0;
        background-color: transparent;
        border-bottom: 3px solid #BCCCDC;
        color: #324d67;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
    }
    .pagination-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 24px 0;
        .btn-style {
            appearance: none;
            border: none;
            background-color: #49a6e9;
            color: #fff;
            border-radius: 3px;
            font-weight: 700;
            font-size: 13px;
            padding: 6px 12px;
            letter-spacing: 0.5px;
            margin: 16px;
        }
        .number-style {
            color: #324d67;
            font-size: 19px;
            line-height: 29px;
            font-weight: 700;
            padding: 0 6px ;
        }
    }
    .wrap-news {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        gap: 2rem;
    }
    @media only screen and (max-width: 991px) and (min-width: 50px) {
        .wrap-news {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 2rem;
            gap: 2rem;
        }
    
    }
`;

export {Wrap}