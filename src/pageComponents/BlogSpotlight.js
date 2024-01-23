import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function Blog() {
    return (
        <>
            <div className="subHeading">Discover</div>
            <div className="heading">Unlock Plant Knowledge</div>
            <h5 style={{"font-weight": "normal"}}>Get expert insights, care tips
            <br></br> and connect with a plant-loving community.</h5>

            <div className="blog">
                <div className="blog-column-border">
                    <div className="blog-column-border-inner">
                        <a className="subheading">Connect</a>
                        <a className="heading" style={{ textAlign: "left" }}>Join a Thriving Plant Community</a>
                        <a>Share your plant journey, ask questions, and get inspired by fellow plant enthusiasts.</a>
                        <div>
                            <button className="button-newsletter">Learn more <FontAwesomeIcon icon={icon({ name: 'leanpub', style: 'brands' })} /></button>
                        </div>
                    </div>
                    <div className="blog-column-image"></div>
                </div>
                <div className="blog-rectangle">
                    <div className="blog-rectangle-image">
                    </div>
                    <div>
                        <a className="blog-rectangle-subheading">Unlock Expert Advice</a><br />
                        <a className="blog-rectangle-heading" >
                            Connect with plant experts for personalized advice and guidance.
                        </a>
                    </div>
                </div>
                <div className="blog-column-border">
                    <div className="blog-column-border-inner">

                        <a className="subheading">Connect</a>
                        <a className="heading" style={{ textAlign: "left" }}>Join a Thriving Plant Community</a>
                        <a>Share your plant journey, ask questions, and get inspired by fellow plant enthusiasts.</a>
                        <div>
                            <button className="button-newsletter">Learn more <FontAwesomeIcon icon={icon({ name: 'leanpub', style: 'brands' })} /></button>
                        </div>
                    </div>
                    <div className="blog-column-image"></div></div>
                <div className="blog-square">
                    <a className="blog-square-heading" >
                        Discover Plant Care Guides
                    </a>
                    <a className="blog-square-text">Access a comprehensive library of plant care guides for every type of plant.</a><br />
                    <a className="blog-square-learn-more">Learn more <FontAwesomeIcon icon={icon({ name: 'leanpub', style: 'brands' })} /></a>

                </div>
                <div className="blog-square">
                    <a className="blog-square-heading" >
                        Find Plant Recommendations                            </a>
                    <a className="blog-square-text">Get personalized plant recommendations based on your preferences and location.</a><br />

                    <a className="blog-square-learn-more">Learn more <FontAwesomeIcon icon={icon({ name: 'leanpub', style: 'brands' })} /></a>
                </div>
            </div>
        </>
    );
}