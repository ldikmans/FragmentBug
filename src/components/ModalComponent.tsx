import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { notificationsCircleOutline } from 'ionicons/icons';
import React from 'react';
import ButtonOnModal from './ButtonOnModal';

interface ContainerProps {
    handleDismiss: Function,
    presentingElement?: HTMLElement
}

const ModalComponent: React.FC<ContainerProps> = ({ handleDismiss, presentingElement }) => {

    return (
        <IonContent >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My modal as a component with a button that will hide the card</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonItem  lines="none">
                    <IonIcon icon={notificationsCircleOutline} />
                </IonItem>
                <IonItem lines="none">
                    <IonLabel>
                        Don't miss anything
                    </IonLabel>
                </IonItem>
            </IonContent>
            <ButtonOnModal hideCard={handleDismiss} />
        </IonContent>
    )
};

export default ModalComponent;