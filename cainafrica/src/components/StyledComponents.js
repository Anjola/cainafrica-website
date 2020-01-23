import  { Link } from "react-router-dom";
import styled from 'styled-components';
import OurMissionParagraph2 from '../images/Our Mission/OurMissionParagraph2.JPG';
import RukeAsagba from '../images/Our Team/RukeAsagba.png';
import OlatomiwaLasebikan from '../images/Our Team/OlatomiwaLasebikan.png';
import DaisyIsibor from '../images/Our Team/DaisyIsibor.jpg';
import MoyosoreoluwaOrekoya from '../images/Our Team/MoyosoreoluwaOrekoya.jpg';
import TitilayoOlowoniyi from '../images/Our Team/TitilayoOlowoniyi.png';
import EricAsagba from '../images/Our Team/EricAsagba.png';

export const TopImage = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 70vh;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    justify-content: flex-start;

        @media (max-width: 768px) {
            justify-content: space-between;
            height: 30rem;
        }
`

export const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    // border: 1px solid white;
        @media (max-width: 768px) {
            height: 50%;
            margin-bottom: 5rem;
        }
`

export const TopHeaderText = styled.h2`
    color: #d8aa35;
    font-size: 5rem;
    text-align:center;
        @media (max-width: 768px) {
            font-size: 2rem
            margin: 0.5rem;
        }
`

export const TopParaText = styled.p`
    margin: 0 auto;
    width: 70%;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color:rgb(18,19,18);opacity:0.7;
    //border: 1px solid white;
        @media (max-width: 768px) {
            font-size: 1rem
        }
`
export const MidSection = styled.div`
    display: flex;
    margin: 5rem;
    justify-content: center;
    // border: 1px solid black;
        @media (max-width: 768px) {
            height: 55rem;
            padding: 1rem;
            margin: auto;
            flex-direction: column;
        }
`
export const MidParagraphOne = styled.div`
    width: 30rem;
    height: 30rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    //align-items: flex-start;
    justify-content: center;
    // border: 1px solid black;

        @media (max-width: 768px) {
            margin: auto;
            padding: 2rem 0;
            width: 90%;
            height: 30rem;
            // padding-bottom: 2rem;
        }
`
export const MidParagraphTwo = styled.div`
    width: 30rem;
    height: 30rem;
    margin: 2rem;
    background-image: url(${OurMissionParagraph2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

        &:before, &:after{
            z-index: -1;
            position: absolute;
            content: "";
            bottom: 25px;
            left: 10px;
            width: 50%;
            top: 80%;
            max-width:300px;
            background: #777;
            -webkit-box-shadow: 0 35px 20px #777;
            -moz-box-shadow: 0 35px 20px #777;
            box-shadow: 0 35px 20px #777;
            -webkit-transform: rotate(-8deg);
            -moz-transform: rotate(-8deg);
            -o-transform: rotate(-8deg);
            -ms-transform: rotate(-8deg);
            transform: rotate(-8deg);
            }

            &:after{
                -webkit-transform: rotate(8deg);
                -moz-transform: rotate(8deg);
                -o-transform: rotate(8deg);
                -ms-transform: rotate(8deg);
                transform: rotate(8deg);
                right: 10px;
                left: auto;
            }
            @media (max-width: 768px) {
                //height: 30rem;
                padding: 1rem;
                width: 90%;
                margin: 3rem auto;
                //flex-direction: column;
            }
`
export const OuterDiv = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
`
export const KeyDiv = styled.div`
    margin: 4rem 0;
        @media (max-width: 768px) {
            margin: 1rem auto;
        }
`
export const IndividualCard = styled.div`
    margin: auto;
    width: 19rem;
    height: 35rem;
    background-color:white;
    padding: 1rem;
    border: 0.15rem solid #d8aa35;
    border-radius: 1rem;
        @media (max-width: 320px) {
            width: 17rem;
            height: 38rem;
            margin: 1rem auto;
        }
`

export const TextBodyWrapper = styled.div`
    display:flex;
    flex-direction: column;
    // justify-content: space-between;
`
export const ButtonLink = styled.button`
    border: 1px solid #d8aa35;
    background-color: #d8aa35;
    border-radius: 2rem;
    cursor:pointer;
    color:#ffffff;
    padding: 0.5rem;
    text-decoration:none;
    text-align:center;
    width: 30%;
    outline:none;
        &:hover {
            background-color:white;
            border: 1px solid #d8aa35;
            color:#d8aa35;
            text-decoration:none;
        }
        @media (max-width: 320px) {
            width: 35%;
        }
`
export const PostLink = styled(Link)`
    text-decoration: none; 
    color:white;
    &:hover {
        color:#d8aa35;
    }
`
export const FilterWrapper = styled.div`
    display:flex;
    justify-content: center;
    padding: 2rem 0;
    @media (max-width: 768px) {
        margin: 0 0.5rem;
    }
`
export const FilterButtonLeft = styled.button`
    border: 1px solid #d8aa35;
    border-right: 1px solid white;
    background-color: #d8aa35;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    cursor:pointer;
    color:#ffffff;
    padding: 0.5rem;
    text-decoration:none;
    text-align:center;
    width: 7rem;
    outline: none;
        &:hover {
            background-color:white;
            border: 1px solid #d8aa35;
            color:#d8aa35;
            text-decoration:none;
        }
        &:focus{
            outline: none;
        }
`
export const FilterButtonMid = styled.button`
    border: 1px solid #d8aa35;
    border-left: 1px solid white;
    border-right: 1px solid white;
    background-color: #d8aa35;
    cursor:pointer;
    color:#ffffff;
    padding: 0.5rem;
    text-decoration:none;
    text-align:center;
    width: 7rem;
    outline:none;
        &:hover {
            background-color:white;
            border: 1px solid #d8aa35;
            color:#d8aa35;
            text-decoration:none;
        }
        &:focus{
            outline: none;
        }
`
export const FilterButtonRight = styled.button`
    border: 1px solid #d8aa35;
    border-left: 1px solid white;
    background-color: #d8aa35;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor:pointer;
    color:#ffffff;
    padding: 0.5rem;
    text-decoration:none;
    text-align:center;
    width: 7rem;
    outline: none;
        &:hover {
            background-color:white;
            border: 1px solid #d8aa35;
            color:#d8aa35;
            text-decoration:none;
        }

        &:focus{
            outline: none;
        }
`
export const OverallWrapper = styled.div`
    margin: 3rem;
    padding: 1rem;
    border: 0.15rem solid #d8aa35;
    border-radius: 1rem; 
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    // flex-direction: column;
    @media (max-width: 768px) {
        margin: 0.5rem;
        flex-direction:column;
    }
`
export const PostWrapper = styled.div`
    width:45%
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    //border: 1px solid black;
    @media (max-width: 768px) {
        margin: 0 auto;
        width:98%
    }
`
export const PostHeader = styled.h2`
    width: 100%;
    font-size: 2rem;
`
export const PostParagraph = styled.div`
    width: 100%;
    font-size: 1.25rem;
    //border: 2px solid black;
    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`
export const MediaWrapper = styled.div`
    margin-top: 2rem;
    width:45%
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:flex-start;
    //border: 2px solid black;
    @media (max-width: 768px) {
        margin: 0 auto;
        width:100%
    }
`
export const SingleImage = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    //align-items:flex-start;
    text-align: center;
    width: 95%;
    padding: 0.5rem;
    // border: 2px solid black;
`
export const PostImage = styled.img`
    width: 100%;
`
export const PostIframeWrapper = styled.div`
    margin:0 auto;
    position: relative;
    width: 95%;
    padding-bottom: 56.25%; 
    height: 0;
`
export const PostIframe = styled.iframe`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid white;

`
export const DonateLink = styled(Link)`
    text-decoration: none;    
`

export const ExecutiveMother = styled.div`
    diplay:flex;
    flex-direction:column;
    flex-wrap:wrap;
    text-align:center;
`

export const FlipContainer = styled.div`
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin:1rem;
`

export const HeadingTwo = styled.h2`
    font-size: 4rem;
    padding: 2rem;
    color: #202020;
    @media (max-width: 768px) {
        font-size: 2rem;
        margin: 0;
        margin-top:2rem;
        padding: 1rem;
    }
`

export const President = styled.div`
    width:100%;
    height:35rem;
    background-image: url(${RukeAsagba});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;    
`
export const VP = styled.div`
    width:100%;
    height:35rem;
    background-image: url(${OlatomiwaLasebikan});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
`
export const PublicityChair = styled.div`
    width:100%;
    height:35rem;
    background-image: url(${DaisyIsibor});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
`
export const Position = styled.h2`
    font-size: 1.5rem;
    padding: 0.5rem;    
`
export const Bio = styled.p`
    text-align:left;
    color: black;
`
export const Moyo = styled.div`
    width:100%;
    height:35rem;
    background-image: url(${MoyosoreoluwaOrekoya});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
`
export const Titilayo = styled.div`
    width:100%;
    height:35rem;
    background-image: url(${TitilayoOlowoniyi});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
`
export const Eric = styled.div`
    width:100%;
    height:35rem;
    background-image: url(${EricAsagba});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
`
export const FlipContainerMember = styled.div`
display:flex;
justify-content: space-around;
flex-wrap: wrap;
border: 1rem solid white;    
// margin:1rem;
`
export const MemberMother = styled.div`
diplay:flex;
background: white;
flex-direction:column;
text-align:center;
`
export const Button = styled.button`
	border: 1px solid #d8aa35;
    background-color: #d8aa35;
    display:inline-block;
    border-radius: 2rem;
    cursor:pointer;
    color:#ffffff;
    padding: 0.5rem 1rem;
    text-decoration:none;
    text-align:center;
    width: 10rem;
    outline:none;
        &:hover {
            background-color:white;
            border: 1px solid #d8aa35;
            color:#d8aa35;
            text-decoration:none;
        }
`
export const NavLink = styled.a`
    text-decoration: none;
`
export const OuterPaymentsDiv = styled.div`
margin: 2rem auto;
// height: 100rem;
display: flex;
justify-content: space-around;
align-items: center;
width: 80%;

`
export const PayCardDiv = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 92rem;
    @media (max-width: 768px) {
        height: 95rem;
    }
`
export const IndividualPaymentsCard = styled.div`
width: 19rem;
background-color:white;
padding: 1rem;
border: 0.15rem solid #d8aa35;
border-radius: 1rem; 
    @media (max-width: 768px) {
        width: 17rem;
    }
`
export const DonateBodyImage = styled.img`
    width: 100%;        
`
export const DonateCardTextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`