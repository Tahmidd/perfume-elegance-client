import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
    return (
        <div className='container w-75'>
            <h4 className='text-center my-3 text-pink'>Frequently Asked Questions</h4>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How is perfume made?</Accordion.Header>
                    <Accordion.Body>
                        Many perfumes are made by extracting scented oil from natural ingredients. These ingredients can include various plants, fruits, woods and even animal secretions. Other resources like alcohol, coal, tars and petrochemicals can be used during the manufacturing process.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Benefits of Perfume</Accordion.Header>
                    <Accordion.Body>
                        Fragrance.
                        <br />
                        Enhances Mood.
                        <br />
                        Boosts Confidence.
                        <br />
                        Makes You Attractive.
                        <br />
                        Aphrodisiac.
                        <br />
                        Boosts Health.
                        <br />
                        Triggers Memories.
                        <br />
                        Aromatherapy.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>History of Perfume</Accordion.Header>
                    <Accordion.Body>
                        The history of perfume is definitely not recent. The origin of perfume is commonly attributed to the ancient Egyptians. They utilized scents to celebrate prayers and religious ceremony by burning essential oils, resin, and perfumed unguents.

                        This practice had several functions. First, the oils and unguents burned were necessary to ensure divinities protection and benevolence. Besides, scents were also used to convey messages and prayers to the dead, to purify the body and to conduct embalming ceremonies.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;