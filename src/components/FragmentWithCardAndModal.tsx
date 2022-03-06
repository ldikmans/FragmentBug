import { IonButton, IonCard, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import {closeSharp, notificationsCircle, notificationsCircleOutline } from 'ionicons/icons';
import React, { useState, Fragment } from 'react';
import ButtonOnCard from './ButtonOnCard';

interface ContainerProps {
    hideCard: Function
}

const FragmentWithCardAndModal: React.FC<ContainerProps> = ({ hideCard }) => {

    const [showModal, setShowModal] = useState(false);

    function handleCloseCard(event: any) {
        hideCard();
        event.stopPropagation();
    }

    /**
     * Opens a modal when we are in a single column layout on native
     * if we are on a 2 column layout (portrait tablet) or 3 column layout (landscape tablet) we open the page
     */
    function showNotificationInformation() {
        setShowModal(true);
    }

    return (

        <Fragment>
            <IonCard className="ion-no-padding" id="notification-card" button={true} onClick={() => showNotificationInformation()}>
                <IonItem id="notification-card-header-item" lines="none" className="ion-no-padding ion-no-margin notification-card-item">
                    <IonIcon id="notification-card-icon-notifications" className="ion-no-padding ion-no-margin" icon={notificationsCircle}></IonIcon>
                    <IonLabel id="notification-card-header-label-text" className="ion-text-left ion-no-padding ion-no-margin">Card with modal</IonLabel>
                    <IonButton id="notification-card-button-close" className="ion-no-padding ion-no-margin" onClick={(event) => handleCloseCard(event)}>
                        <IonIcon id="notification-card-icon-close" icon={closeSharp}></IonIcon>
                    </IonButton>
                </IonItem>
                <IonItem lines="none" id="notification-card-content-item" class="ion-no-padding ion-no-margin notification-card-item" >
                    <IonLabel id="notification-card-body" class="ion-no-padding ion-no-margin ion-text-wrap notification-card-item">Clicking on it will open the modal that is part of the fragment. The button on the modal gives an error</IonLabel>
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
                <ButtonOnCard setShowModal={setShowModal} hideCard={hideCard}/>;
            </IonModal>
        </Fragment>
    );
};

export default FragmentWithCardAndModal;