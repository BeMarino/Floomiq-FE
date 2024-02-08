import { GoPlus  } from "react-icons/go";

export default function Faq() {
    return (
        <>
            <div className="faq-container">
                <h3>FAQ</h3>
                <h5>Find answers to common questions about using Project Garden for plant information.</h5>
                <div className="faq-box"><a>How do I search?</a><div><GoPlus  /></div></div>
                <div className="faq-box"><a>How can I filter?</a><div><GoPlus  /></div></div>
                <div className="faq-box"><a>How do I save plants?</a><div><GoPlus  /></div></div>
                <div className="faq-box"><a>How can I contact support?</a><div><GoPlus  /></div></div>
                <div className="faq-box"><a>How do I create an account?</a><div><GoPlus  /></div></div>
                <div className="still-question">
                    <h3>Still have questions?</h3>
                    <div>Contact us for further assistance.</div>
                    <button className="button is-primary">Contact us</button>
                </div>
            </div>
        </>
    )
}