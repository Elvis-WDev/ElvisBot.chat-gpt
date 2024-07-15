import React, { useState } from 'react';
import { Modal, TaskBar, List } from '@react95/core';
import { WindowsExplorer, ReaderClosed, Mmsys113 } from '@react95/icons';

export const Taskbar = ({ handleOpenModal, handleCloseModal }) => {
    const [first, toggleFirst] = useState(false);
    const [second, toggleSecond] = useState(false);

    const closeFirst = () => toggleFirst(false);
    const closeSecond = () => toggleSecond(false);

    return (
        <>
            {first && (
                <Modal
                    icon={<WindowsExplorer variant="16x16_4" />}
                    title="Windows Explorer"
                    onClose={closeFirst}
                    width="300px"
                    height="200px"
                />
            )}

            {second && (
                <Modal
                    defaultPosition={{ x: 50, y: 50 }}
                    width="300px"
                    height="200px"
                    icon={<ReaderClosed variant="16x16_4" />}
                    title="Local Disk (C:)"
                    onClose={closeSecond}
                />
            )}

            <TaskBar
                list={
                    <List>
                        <List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => toggleSecond(true)}>
                            Local Disk (C:)
                        </List.Item>
                        <List.Item icon={<WindowsExplorer variant="32x32_4" />} onClick={() => toggleFirst(true)}>
                            Windows Explorer
                        </List.Item>
                        <List.Item icon={<Mmsys113 variant="32x32_4" />} onClick={handleOpenModal}>
                            Elvis-GPT
                        </List.Item>
                    </List>
                }
            />
        </>
    );
};