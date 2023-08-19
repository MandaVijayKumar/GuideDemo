import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../Style/SuicidePreventionButton.css'; // Import custom CSS styles

import ErrorIcon from '@material-ui/icons/Error';

const SuicidePreventionButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleRedButtonClick = () => {
        setShowModal(true);
        // Log the event for research and analysis (replace with appropriate implementation)
        // logEvent("redButtonClicked", { timestamp: Date.now() });

        // Open a chat window or start a messaging session
        // openChat();
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const message = "You're not alone. Help is available.\n\nPlease reach out to a mental health professional or call a helpline for immediate assistance.\n\nRemember, there is hope.";
    const resources = [
        { name: "Vandrevala Foundation Helpline", number: "1860-2662-345" },
        { name: "Snehi Helpline", number: "91-22-2772-6773" },
        { name: "Sumaitri Helpline", number: "91-2338-9090" },
        { name: "iCall - Tata Institute of Social Sciences", number: "91-22-2556-3291" },
        { name: "Roshni Helpline", number: "91-40-6620-2000" },
        { name: "COOJ Mental Health Foundation Helpline", number: "91-9822-116-033" },
        { name: "Sahai Helpline (for emotional support in Tamil)", number: "91-9176-833-332" },
        { name: "Parivarthan Counselling Helpline", number: "91-7676-602-602" },
        { name: "Connecting NGO Helpline", number: "1800-843-4353" },
        { name: "Sanjivini Society for Mental Health", number: "91-22-2772-6779" },
        { name: "VIMHANS Mental Health Helpline", number: "91-9717-348-348" },
        { name: "Andhra Pradesh State Mental Health Helpline", number: "0866-666-7777" },
        
        // Add more relevant resources as needed
    ];
    //   const videoResources = [
    //     { name: "Understanding Suicide: Warning Signs and Risk Factors", url: "https://example.com/video1" },
    //     { name: "Coping Strategies for Mental Well-being", url: "https://example.com/video2" },
    //     // Add more relevant video resources as needed
    //   ];
    const articles = [
        { title: "5 Tips for Managing Stress and Anxiety", url: "https://example.com/article1" },
        { title: "Building Resilience: How to Bounce Back from Challenges", url: "https://example.com/article2" },
        { title: "Understanding Depression: Signs, Symptoms, and Treatment", url: "https://example.com/article3" },
        { title: "Coping with Loneliness: Strategies for Connection and Well-being", url: "https://example.com/article4" },
        { title: "Self-Care Practices for Mental Health and Well-being", url: "https://example.com/article5" },
        // Add more relevant articles as needed
      ];
    const supportGroups = [
        { name: "Online Support Group for Teens", url: "https://example.com/supportgroup1" },
        { name: "Peer-to-Peer Chatroom for LGBTQ+ Community", url: "https://example.com/supportgroup2" },
        // Add more relevant support groups as needed
    ];

    return (
        <>
            <Button 
            onClick={handleRedButtonClick} 
            variant="contained"
            color="danger"
            style={{ width: '50px', height: '50px', borderRadius: '50%' , backgroundColor:'#1A857F'}}
        >
            <ErrorIcon style={{ fontSize: 28 }} />
        </Button>


            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Support Resources</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                    <p>Helpline Numbers:</p>
                    <ul>
                        {resources.map((resource, index) => (
                            <li key={index}>{resource.name}: {resource.number}</li>
                        ))}
                    </ul>
                    {/* <p>Video Resources:</p>
          <ul>
            {videoResources.map((video, index) => (
              <li key={index}>{video.name}: <a href={video.url}>{video.url}</a></li>
            ))}
          </ul> */}
                    <p>Self-Help Articles:</p>
                    <ul>
                        {articles.map((article, index) => (
                            <li key={index}><a href={article.url}>{article.title}</a></li>
                        ))}
                    </ul>
                    <p>Online Support Groups:</p>
                    <ul>
                        {supportGroups.map((group, index) => (
                            <li key={index}><a href={group.url}>{group.name}</a></li>
                        ))}
                    </ul>
                    <p>Remember that your parents and family members care about you deeply. They may also be experiencing emotional distress as they witness your struggles. It is important to reach out to them and let them know how you are feeling. Together, you can seek help and support each other through difficult times.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SuicidePreventionButton;
