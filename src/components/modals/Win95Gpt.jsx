import { Button, Frame, Input, Modal } from '@react95/core';
import { Computer, Inetcpl1313 } from '@react95/icons';
import { useRequestChat } from '../../hooks/useRequestChat';
import React, { useState, useEffect } from 'react';

export const Win95Gpt = ({ handleOpenModal, handleCloseModal, showModal }) => {
    const { StartSendMessage } = useRequestChat();
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setMessageInput(e.target.value);
    };

    const handleButtonClick = async () => {
        if (messageInput.trim() === '') {
            return alert('Escribe algo');
        }

        setMessages([...messages, { text: messageInput, type: 'user' }]);
        setMessageInput('');
        setLoading(true);

        try {
            const response = await StartSendMessage(messageInput);
            if (response && response.outputs[0] && response.outputs[0].text) {
                setMessages(prevMessages => [...prevMessages, { text: response.outputs[0].text, type: 'Elvis' }]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };


    return (
        <>
            {showModal && (
                <Modal
                    id='Modal_chatGPT'
                    defaultPosition={{ x: 50, y: 50 }}
                    icon={<Computer variant="16x16_4" />}
                    title="Elvis-GPT"
                    onClose={handleCloseModal}
                    onHelp={() => { console.log('Help!'); }}
                >
                    <Frame bg="white" boxShadow="$in" h="80%" w="100%" padding="15px" style={{ overflowY: 'auto' }}>
                        <div id='content_message' style={{ fontSize: '16px', width: '100%', maxHeight: '100%', overflowY: 'auto' }}>
                            <Inetcpl1313 variant="32x32_4" />
                            {messages.map((msg, index) => (
                                <p key={index} style={{ textAlign: msg.type === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                                    <b>{msg.type === 'user' ? 'Tú: ' : 'Elvis: '}</b>{msg.text}
                                </p>
                            ))}
                            {loading && (
                                <p style={{ textAlign: 'left', margin: '5px 0' }}>
                                    <b>Elvis: </b>Cargando...
                                </p>
                            )}
                        </div>
                    </Frame>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                        <Input
                            id="txt_send_message"
                            type="text"
                            placeholder='Escribe algo...'
                            width={'85%'}
                            style={{ marginRight: '10px', padding: '10px' }}
                            value={messageInput}
                            onChange={handleInputChange}
                            onKeyUp={handleKeyPress}
                        />
                        <Button onClick={handleButtonClick} width={'15%'} style={{ padding: '10px' }}>Enviar</Button>
                    </div>
                </Modal>
            )}
        </>
    );
};