// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import op1 from '../images/op1.jpeg';
import dr1 from '../images/dr1.jpeg';
import drf1 from '../images/drf1.jpeg';
import st1 from '../images/st1.jpeg';
import memcard1 from '../images/memcard1.png';
import { specialtiesData, testimonialsData, benefitsData, faqData, HOSPITAL_NAME } from '../data';
import { ChevronDownIcon, AccessibilityIcon, ConvenienceIcon, SecurityIcon, ConfidentialityIcon, CertifiedIcon, AffordabilityIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';

const images = [op1, dr1, drf1, st1];

const HomePage = ({ openIndex, handleToggle, handleDoctorClick }) => {
    const [currentSlideHome, setCurrentSlideHome] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const aboutImages = [
        'https://i.postimg.cc/HnCctxcp/hospital.jpg',
        'https://placehold.co/800x400/28a745/ffffff?text=State-of-the-Art+Facilities',
        'https://i.postimg.cc/HnCctxcp/hospital.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideHome((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [aboutImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
    };

    // Select first three doctors for featured section
    const featuredDoctors = specialtiesData.slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100 py-12 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-center md:text-left md:w-1/2">
                        <p className="text-[#40c1b9] font-medium mb-2">The right care, is wherever you are.</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
                            Consult India's Top Doctor ParshanthHealth.
                        </h1>
                        <div className="inline-block bg-[#40c1b9] bg-opacity-10 text-[#40c1b9] text-sm font-semibold py-2 px-4 rounded-full mb-6">
                            Flat 10% Off &nbsp; <span className="text-sm bg-[#fe6645] text-white rounded-full py-1 px-3 ml-2">NEW10</span>
                        </div>
                        <button className="bg-[#fe6645] text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-colors duration-200" onClick={() => {/* Handle navigation to Consultation */ }}>
                            Consult Now
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">
                        <div className="relative w-full max-w-lg h-64 md:h-80 overflow-hidden rounded-3xl shadow-2xl">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlideHome ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlideHome(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlideHome ? 'bg-[#40c1b9] scale-110' : 'bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Scroller Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">State-of-the-Art Facilities</h2>
                    <div className="relative w-full max-w-5xl mx-auto group">
                        <div className="overflow-hidden rounded-3xl shadow-2xl h-64 md:h-96 relative border-4 border-white">
                            {aboutImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`About ${index + 1}`}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none"
                                aria-label="Previous Slide"
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none"
                                aria-label="Next Slide"
                            >
                                <ChevronRightIcon />
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            {aboutImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#40c1b9] scale-125' : 'bg-white/50 hover:bg-white'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Doctors Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Team</h2>
                    <p className="text-xl text-gray-600 mb-12">Meet our top specialists ready to assist you</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {featuredDoctors.map((specialty, index) => {
                            const doctor = specialty.doctorDetails;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-[#40c1b9] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                    onClick={() => handleDoctorClick(doctor)}
                                >
                                    {/* Doctor Image */}
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={doctor.doctorImageUrl}
                                            alt={`${doctor.name}`}
                                            className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-[#fe6645] shadow-lg"
                                        />
                                    </div>

                                    {/* Doctor Name & Specialty */}
                                    <div className="text-center mb-3">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{doctor.name}</h3>
                                        <p className="text-sm font-medium text-[#40c1b9]">{specialty.title}</p>
                                    </div>

                                    {/* Qualifications */}
                                    <p className="text-gray-600 mb-6 text-sm line-clamp-3 text-center">
                                        {doctor.qualifications}
                                    </p>

                                    {/* Details Button */}
                                    <div className="flex justify-center">
                                        <button
                                            className="bg-[#fe6645] text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDoctorClick(doctor);
                                            }}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Consult Online Section */}
            <section className="bg-white py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Why Consult Online on {HOSPITAL_NAME}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefitsData.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-4 bg-[#e0f7fa] rounded-full text-[#40c1b9] group-hover:bg-[#40c1b9] group-hover:text-white transition-colors duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 ml-4">{benefit.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-[#eaf1ff] rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <span className="bg-[#6c7df3] text-white px-3 py-1 text-xs rounded-full font-semibold mb-4 inline-block">1 MONTHS</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {HOSPITAL_NAME} Membership
                            </h2>
                            <p className="text-gray-600 mb-6">Dedicated services, special discounts and partner benefits</p>
                            <p className="text-2xl font-bold text-gray-900 mb-6">
                                ₹999 <span className="text-lg text-gray-400 line-through">₹1999</span>
                            </p>
                            <p className="text-xl font-semibold text-gray-900 mb-4">Why become a member?</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Flat 30% Off on Doctor Consultations</li>
                                <li>Flat 20% Off on Lab Tests & more</li>
                            </ul>
                            <button className="mt-8 bg-[#fe6645] text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-colors duration-200">
                                Download the App
                            </button>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <img src={memcard1} alt="Membership Card" className="w-full max-w-md h-auto rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="bg-[#eaf1ff] p-6 rounded-3xl shadow-lg text-left border-2 border-transparent hover:border-[#40c1b9] transition-colors duration-200">
                                <div className="flex items-start mb-4">
                                    <img src={`https://placehold.co/60x60/f0f0f0/333333?text=${testimonial.name.split(' ')[0][0]}`} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{testimonial.text}</p>
                                        <p className="text-sm text-gray-500 mt-2">- {testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Image Album Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        My Image Album
                    </h2>
                    <p className="text-gray-600 mb-8 md:mb-12">
                        Space reserved for the photo album. Your uploaded images are shown below.
                    </p>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {images.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-48 flex items-center justify-center"
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Album image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                    {/* End Image Grid */}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-12 md:py-20">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">FAQ</h2>
                    <div className="space-y-4 text-left">
                        {faqData.map((faq, index) => (
                            <div key={index} className="rounded-2xl shadow-md overflow-hidden border border-gray-200">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center p-6 text-xl font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDownIcon isOpen={openIndex === index} />
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0'}`}
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;