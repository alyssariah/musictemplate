import React from "react"
import '../sass/About.sass'

class About extends React.Component {
    render() {
        return(
        <>
             <div className="card">
                <h4>About Me</h4>
                <p>“Music expresses that which cannot be said and on which it is impossible to be silent.” ― Victor Hugo</p>
                <img src="https://res.cloudinary.com/dwbqzx4rr/image/upload/v1591405302/Alyssa_Jackson_pknzzk.jpg" alt="a profile pitcure of me"/>
                <h6>
                    I have been teaching private music lessons for six years. I have taught in my private studio, at Music and Arts, and in student's homes. I recently finished
                    my Bachelors in psychology at Arizona State Unversity. Before ASU, I attended Eastern Arizona College and participated 
                    in the music program. I took theory classes, aural perceptions, choir, private piano lessons, and more. In college, I mostly played classical music and accompanied the Women's choir and vocal students during rehearsals and performances. 
                    I have also been the church choir pianist for a couple of years and have enjoyed playing with voices. If you have any questions about me, please feel free to reach out! 
                </h6>

                <video width="280" height="240" controls src="https://res.cloudinary.com/dwbqzx4rr/video/upload/v1592884787/video_o40szs.mov" alt="chopsticks duet with husband"/>
                <h6>
                    Two years ago, I married my husband, Brian, who also happens to play piano. We have enjoyed playing fun duets together. In the video above is a chopsticks variation played by my husband and I while we were dating.
                </h6>
            </div>
        </>
        )
    }
}
export default About