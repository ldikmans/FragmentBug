import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import {closeSharp, notificationsCircleOutline } from 'ionicons/icons';
import React, { useState, Fragment } from 'react';
import ButtonOnModal from './ButtonOnModal';

interface ContainerProps {
    hideCard: Function
}

const FragmentWithCardAndModal: React.FC<ContainerProps> = ({ hideCard }) => {

    const [showModal, setShowModal] = useState(false);

    function handleCloseCard(event: any) {
        hideCard();
        event.stopPropagation();
    }

    function showNotificationInformation() {
        setShowModal(true);
    }

    return (

        <Fragment>
            <IonCard  button={true} onClick={() => showNotificationInformation()}>
                <IonItem  lines="none">
                    <IonLabel>Card with modal</IonLabel>
                    <IonButton onClick={(event) => handleCloseCard(event)}>
                        <IonIcon icon={closeSharp}></IonIcon>
                    </IonButton>
                </IonItem>
                <IonItem lines="none" >
                    <IonLabel>Clicking on it will open the modal that is part of the fragment. The button on the modal gives an error</IonLabel>
                </IonItem>
            </IonCard>

            <IonModal
                isOpen={showModal}
                swipeToClose={true}
                onDidDismiss={() => setShowModal(false)}>
                <IonHeader>
                    <IonToolbar id="modal-toolbar" className="ion-no-padding ion-no-margin">
                        <IonTitle id="modal-title-text">My modal with a button that will hide the card</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent scrollY={false}>
                    <IonItem className="ion-no-margin ion-no-padding" lines="none" id="notification-content-icon-item">
                        <IonIcon icon={notificationsCircleOutline} id="notification-content-icon" />
                    </IonItem>
                    <IonItem lines="none" id="notification-content-subtitle-item" className="ion-no-margin ion-no-padding">
                        <IonLabel id="notification-content-subtitle-label" className="ion-text-wrap ion-no-margin ion-no-padding">
                         Don't miss anything
                        </IonLabel>
                    </IonItem>
                </IonContent>
                <ButtonOnModal setShowModal={setShowModal} hideCard={hideCard}/>;
            </IonModal>
        </Fragment>
    );
};

export default FragmentWithCardAndModal;