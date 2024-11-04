import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }
        
    body{

        font-family: 'Poppins', sans-serif;
        background-color: lightgrey;
    }

    footer{
    color: #fff;
    background-color: rgba(0, 0, 0, 0.534);
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 20px;
    width: 100%;
    justify-content:center;
    align-items: center;
    position: fixed;
    bottom: 0;
    max-height: 20px;
    font-size: 0.6rem;
    }

    footer  h4{
        font-weight: bold;
        margin-bottom: 5px;
    }

    footer p{
        font-style: italic;
    }

    .f1{
        margin-right: 30px;
    }
    
    @media (max-width: 768px) {
        footer{
            display: none;
        }
    }
`;

  export default Global;