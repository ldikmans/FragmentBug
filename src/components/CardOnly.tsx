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
            <IonCard button={true} onClick={() => setShowModal(true)}>
                <IonItem lines="none" >
                    <IonLabel>Card only</IonLabel>
                    <IonButton  onClick={(event) => handleCloseCard(event)}>
                        <IonIcon icon={closeSharp}></IonIcon>
                    </IonButton>
                </IonItem>
                <IonItem lines="none"  >
                    <IonLabel >This card is not part of a fragment</IonLabel>
                </IonItem>
            </IonCard>

          
        </Fragment>
    );
};

export default CardOnly;