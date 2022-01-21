import React from 'react'
import './featuredinfo.css'
import QuizIcon from '@mui/icons-material/Quiz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GroupIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';



export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Total Questions</span>
                <div className="featuredContainer">

                    <span className="featuredCount"><ArrowForwardIcon />2000</span>
                    <QuizIcon className='featuredIcon' />
                </div>
                <span className="featuredSub">This is the total Number of Questions</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle"> Unanswered Questions</span>
                <div className="featuredContainer">

                    <span className="featuredCount"><ArrowForwardIcon />2000</span>
                    <HelpIcon className='featuredIcon' />
                </div>
                <span className="featuredSub">This is the total Number of Questions</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Answered Questions</span>
                <div className="featuredContainer">

                    <span className="featuredCount"><ArrowForwardIcon />2000</span>
                    <QuestionAnswerIcon className='featuredIcon' />
                </div>
                <span className="featuredSub">This is the total Number of Questions</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Total Registered User</span>
                <div className="featuredContainer">

                    <span className="featuredCount"><ArrowForwardIcon />2000</span>
                    <GroupIcon className='featuredIcon' />
                </div>
                <span className="featuredSub">This is the total Number of Questions</span>
            </div>
        </div>
    )
}
