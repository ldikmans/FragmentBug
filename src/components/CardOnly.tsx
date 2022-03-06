import { IonButton, IonCard, IonIcon, IonItem, IonLabel } from '@ionic/react';
import {closeSharp } from 'ionicons/icons';
import React, { Fragment } from 'react';

interface ContainerProps {
    hideCard: Function,
    setShowModal: Function

}

const CardOnly: React.FC<ContainerProps> = ({ hideCard, setShowModal }) => {


    function handleCloseCard(event: any) {
        hideCard();
        event.stopPropagation();
    }

    return (

        <Fragment>
            <IonCard className="ion-no-padding" id="notification-card" button={true} onClick={() => setShowModal(true)}>
                <IonItem id="notification-card-header-item" lines="none" className="ion-no-padding ion-no-margin notification-card-item">
                    <IonLabel id="notification-card-header-label-text" className="ion-text-left ion-no-padding ion-no-margin">Card only</IonLabel>
                    <IonButton id="notification-card-button-close" className="ion-no-padding ion-no-margin" onClick={(event) => handleCloseCard(event)}>
                        <IonIcon id="notification-card-icon-close" icon={closeSharp}></IonIcon>
                    </IonButton>
                </IonItem>
                <IonItem lines="none" id="notification-card-content-item" class="ion-no-padding ion-no-margin notification-card-item" >
                    <IonLabel id="notification-card-body" class="ion-no-padding ion-no-margin ion-text-wrap notification-card-item">This card is not part of a fragement</IonLabel>
                </IonItem>
            </IonCard>

          
        </Fragment>
    );
};

export default CardOnly;