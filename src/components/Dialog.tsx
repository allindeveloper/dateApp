import React, { FC } from 'react'
import { Modal, StatusBar, TouchableOpacity, View } from 'react-native'
import { globalStyle } from '../styles/globalStyle'


type CustomModalProps = {
    showModal: boolean,
    handleCloseModal: () => void,
    content?: JSX.Element
}

const CustomModal: FC<CustomModalProps> = ({ content, handleCloseModal, showModal }) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                statusBarTranslucent
                onRequestClose={handleCloseModal}
            >
                <TouchableOpacity
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center' }}
                    onPress={handleCloseModal}
                >
                    <View style={globalStyle.centeredView}>
                        <View style={globalStyle.modalViewRoot}>

                            {content}
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

export default CustomModal