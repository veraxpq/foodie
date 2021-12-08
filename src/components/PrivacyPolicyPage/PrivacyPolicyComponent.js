import React from "react";
import {Link} from "react-router-dom";

const PrivacyPolicyComponent = () => {
    return (
        <>
            <div className={"container"}>
                <h2>Foodie Privacy Policy</h2>
                <ul className="list-group">
                    <li className={"list-group-item"}>
                        <h4 className={"btn-primary"}>Information We Collect and Use</h4>
                        <p>When you use or visit our Services, we collect information directly from
                            you (e.g., when you search for or save a restaurant or post a new
                            review). We may also generate information about you (e.g., information
                            about your profile or your own restaurant while you register on our
                            website). In some cases, we also obtain personal information from third
                            parties (e.g., restaurants, business, or other third parties).</p>
                    </li>
                    <li className={"list-group-item"}>
                        <h4 className={"btn-primary"}>How We Use Your Information</h4>
                        <p>We use your information to provide our Services, tailor your experience,
                            show you comments and saved restaurants made through Foodie, and for
                            other purposes described below.
                        </p>
                    </li>
                    <li className={"list-group-item"}>
                        <h4 className={"btn-primary"}>How We Share Your Information</h4>
                        <p>We use your information to provide our Services, tailor your experience,
                            show you comments and saved restaurants made through Foodie.
                        </p>
                    </li>
                    <li className={"list-group-item"}>
                        <h4 className={"btn-primary"}>How We Store and Protect Your Information</h4>
                        <p>We maintain technical, administrative, and physical security measures
                            designed to protect your information. We may retain your information for
                            as long as your account is active and for a period of time thereafter to
                            allow you to re-activate your account without loss of information.
                        </p>
                    </li>
                    <li className={"list-group-item"}>
                        <h4 className={"btn-primary"}>Your Choices and Rights</h4>
                        <p>You have choices about your information, and you are able to access and
                            update your information, retrieve your own and others' reviews, delete
                            your comments, save or remove your interested restaurants, and search
                            restaurants by key words.
                        </p>
                    </li>
                    <li className={"list-group-item"}>
                        <h4 className={"btn-primary"}>Children</h4>
                        <p>Our Services are not directed at or intended for use by children, nor do
                            we knowingly collect information from children under 16 years of age.
                        </p>
                    </li>

                </ul>
                <Link to={"/login"}>
                    <h4 className={"mt-5 btn btn-primary pull-right"}>Acknowledge</h4>
                </Link>


            </div>

        </>
    )
}

export default PrivacyPolicyComponent;