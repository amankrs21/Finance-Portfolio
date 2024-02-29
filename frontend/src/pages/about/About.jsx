import React from 'react'
import Layout from '../Layout'
import financeBanner from "/hii.jpg"; // Import the image
import "./About.css"

export default function About() {
    return (
        <Layout>
            <div className="about-container">
                <div className="about-header">
                    <h1>We Are...</h1>
                    <img src={financeBanner} alt="Finance Banner" />
                </div>
                <div className="about-content">
                    <p>An investment advisory firm, committed to guiding our clients towards financial success. With over two decades of industry experience, we bring unparalleled expertise to the table.</p>
                    <p>Our team of seasoned professionals is renowned for their in-depth market knowledge and forward-thinking approach. By meticulously analyzing market trends, news, and employing cutting-edge technical analysis, we deliver tailored investment strategies that meet the unique needs and goals of each client.</p>
                    <p>At our firm, client satisfaction is paramount. We strive to build lasting relationships based on trust, transparency, and exceptional service. Whether you're a seasoned investor or just starting your financial journey, we're here to help you navigate the complexities of the financial markets with confidence and clarity.</p>
                </div>
            </div>
        </Layout>
    );
}
