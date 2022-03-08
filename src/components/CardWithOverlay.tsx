import { IonAlert, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { closeSharp, notificationsCircleOutline } from 'ionicons/icons';
import React, { useState, Fragment } from 'react';
import ButtonOnModal from './ButtonOnModal';
import ModalComponent from './ModalComponent';

interface ContainerProps {
    hideCard: Function
}

const CardWithOverlay: React.FC<ContainerProps> = ({ hideCard }) => {

    async function handleDismiss() {
        hideCard();
        dismiss();
    }

    const [present, dismiss] = useIonModal(ModalComponent, { handleDismiss });

    function handleCloseCard(event: any) {
        hideCard();
        event.stopPropagation();
    }

    function showNotificationInformation() {
        present();
    }

    return (

        <IonCard id='card-overlay' button={true} onClick={() => showNotificationInformation()}>
            <IonItem lines="none">
                <IonLabel >Card with modal</IonLabel>
                <IonButton onClick={(event) => handleCloseCard(event)}>
                    <IonIcon icon={closeSharp}></IonIcon>
                </IonButton>
            </IonItem>
            <IonItem lines="none" >
                <IonLabel >Clicking on it will open the modal that is used as a component. This is the correct way to reuse modal components in Ionic 6</IonLabel>
            </IonItem>
        </IonCard>

    );
};

export default CardWithOverlay;