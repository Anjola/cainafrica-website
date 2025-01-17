import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import styled from 'styled-components';
import {TopImage,TextWrapper, TopHeaderText, TopParaText, Button, NavLink, OuterPaymentsDiv, IndividualPaymentsCard, DonateBodyImage, DonateCardTextWrapper, PayCardDiv} from './StyledComponents.js';
import PayPal from '../images/PayPal.png';
import paystack from '../images/paystack.png';
import Benevity from '../images/Benevity.png';
import AmazonSmile from'../images/AmazonSmile.png'
import Donate3 from '../images/Donate/Donate3.jpg'
import DonateHeader2 from '../images/Donate/DonateHeader2.JPG'

const ContentImage = styled.div`
    margin: 0 auto;
    width: 60%;
    height: 91rem;
    background-image: url(${Donate3});
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;    
    align-items: center;
    justify-content: center;
    //border: 1px solid black;
        @media (max-width: 768px) {
            display:none;
        }
`


const DonateParent = (props) => {    

        return( 
            <div>
                <TopImage style={{backgroundImage: `url(${DonateHeader2})`}}>
                        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                        {props.sideDrawer}
                        <TextWrapper>
                            <TopHeaderText>DONATE</TopHeaderText>
                            <TopParaText>“GIVING IS NOT JUST ABOUT MAKING A DONATION. IT IS ABOUT MAKING A DIFFERENCE.” - KATHY CALVIN</TopParaText>
                        </TextWrapper>
                </TopImage>

                <OuterPaymentsDiv>       
                    <PayCardDiv>
                        
                        <IndividualPaymentsCard>
                            <DonateBodyImage src={PayPal}/>
                            <DonateCardTextWrapper>                        
                                <h2>Donate online with PayPal</h2>
                                <p> 
                                    Please donate by clicking the button below that would link you to our PayPal account
                                </p>
                                <Button> 
                                    <NavLink href= 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Q6WDVHX8W873U' target="_blank">
                                        Donate
                                    </NavLink>                                    
                                </Button>

                            </DonateCardTextWrapper>
                        </IndividualPaymentsCard>

                        <IndividualPaymentsCard>
                            <DonateBodyImage src={paystack} />
                            <DonateCardTextWrapper>
                                <h2>Donate in Nigeria with paystack</h2>
                                <p> 
                                    Please donate through our payment processor, Paystack by clicking the button below.
                                </p>
                                <Button>
                                    <NavLink href='https://paystack.com/pay/cain' target="_blank">
                                        Donate
                                    </NavLink>                                    
                                </Button>
                            </DonateCardTextWrapper>
                        </IndividualPaymentsCard>

                        <IndividualPaymentsCard>
                            <DonateBodyImage src={Benevity} />
                            <DonateCardTextWrapper>
                                <h2>Donate through your employer</h2>
                                <p> 
                                    Find us "Catering to Africans In Need" in your Employer Workplace Giving and Matching Program powered by Benevity Inc.
                                </p>
                                <Button>
                                    <NavLink href='https://www.benevity.com/' target="_blank">
                                        Find Us
                                    </NavLink>                                    
                                </Button>
                            </DonateCardTextWrapper>
                        </IndividualPaymentsCard>

                        <IndividualPaymentsCard>
                            <DonateBodyImage src={AmazonSmile} />
                            <DonateCardTextWrapper>
                                <h2>Give with Amazon Smile</h2>
                                <p> By clicking on this link, you add CAIN to a list of charitable organizations you support when you shop on Amazon. By doing so, Amazon will donate 0.5% of the price of your eligible AmazonSmile purchases to CAIN!
                                </p>
                                    <Button>
                                        <NavLink href='https://smile.amazon.com/ch/46-2424490' target="_blank">
                                            Donate
                                        </NavLink>                                        
                                    </Button>
                            </DonateCardTextWrapper>
                        </IndividualPaymentsCard>

                    </PayCardDiv>
                    
                    <ContentImage>
                    </ContentImage>
                </OuterPaymentsDiv>
            </div>
        )
}

export default DonateParent;
