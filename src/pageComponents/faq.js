import { FaPlus } from "react-icons/fa";

export default function Faq() {
    return (
        <>
            <div className="faq-container">
                <h3>Frequently Asked Questions</h3>
                <h5>Find answers to common questions about using Project Garden for plant information.</h5>
                <div className="faq-box"><a>How do I search?</a><div><FaPlus /></div></div>
                <div className="faq-box"><a>How can I filter?</a><div><FaPlus /></div></div>
                <div className="faq-box"><a>How do I save plants?</a><div><FaPlus /></div></div>
                <div className="faq-box"><a>How can I contact support?</a><div><FaPlus /></div></div>
                <div className="faq-box"><a>How do I create an account?</a><div><FaPlus /></div></div>
                <div className="still-question">
                <h3>Still have questions?</h3>
                <h5>Contact us for further assistance.</h5>
                <button className="button-newsletter">Cotact us</button>
                </div>
            </div>
        </>
    )
}