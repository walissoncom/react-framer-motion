import styled from 'styled-components';

export const Nav = styled.nav`
    background: #FFF;
    color: #333;
    padding: 10px 25px;
    display: flex;

    h1 {
        font-size: 1rem;
    }

    img {
        max-width: 100px;
    }
`;

export const Container = styled.div`
    width: 95%;
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 60px;

    color: #FFF;
`;

export const Header = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin: 50px 0;
    }

    button {
        padding: 10px 15px;
        background-color: #fff;
        color: #000;
        border: none;
        margin-top: 25px;
    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-gap: 20px;
`;

export const Card = styled.div`
    padding: 30px 20px 40px;
    margin-bottom: 20px;
    background-color: #FFF;
    color: #000;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);

    img {
        width: 100%;
        margin-bottom: 35px;
    }
    
    h3 {
        display: inline;
        font-size: 2.5rem;
        border-bottom: 4px solid #ffcc00;
    }
`;