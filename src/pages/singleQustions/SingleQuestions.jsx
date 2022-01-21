import React from 'react'
import './singleQustions.css'


export default function SingleQuestions() {
    return (
        <div className='singleQuesitons'>
            <div className="quesitonsbox">
                <div className="questionTitle">how to download movie</div>
                <div className="subtitileAndUser">
                    <div className="questionSubTitle">
                        <div className="askingTime">asked 7 days ago</div>
                        <div className="categoryOfQuestions"> Category: <a href="#">Movie</a></div>
                        <div className="userName"> Question asked by <a href="#">Username</a></div>
                    </div>
                    <div className="userInSignleQuestions">

                        <img src="https://www.hdnicewallpapers.com/Walls/Normal/Cat/Beautiful_Cat_Imge_Download.jpg" alt="" className='profileOnQuestions' />

                    </div>
                </div>
                <div className="questionsBody">
                    <p>how to download the movie</p>
                </div>
                <div className="socialicon">
                    <button>Like</button>
                    <button>Dislike</button>
                </div>

                <div className="answerarea">
                    <textarea type="answer" > </textarea>
                    <button >Answer</button>
                </div>

                <div className="oldAnswer">
                    <h3>All Answers</h3>
                    <div className="questionsAnswersall">
                        <div className="userInfoAnswer">
                            <div className="userPhotoinAnswer">
                                <img src="https://www.hdnicewallpapers.com/Walls/Normal/Cat/Beautiful_Cat_Imge_Download.jpg" alt="" className='profileOnQuestions' />

                            </div>
                            <div className="username">Answered By <a href="#">Username</a></div>

                            <div className="answerDate">Answered at 3 second ago</div>
                        </div>
                        <div className="answerBody">
                            this is the answer
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
