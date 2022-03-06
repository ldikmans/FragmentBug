import { IonFooter, IonItem, IonButton } from "@ionic/react";

interface ContainerProps{
    hideCard: Function;
    setShowModal: Function;
}

const ButtonOnCard: React.FC<ContainerProps> = ({hideCard, setShowModal}) => {

    async function hideModalAndCard() {
        setShowModal(false);
        hideCard();

    };

    return(

     <IonFooter id="notification-footer" className="ion-no-border">
     <IonItem className="indented-item-divider" lines="full" />
     <IonItem id="notification-footer-turnonmessages-item" className="ion-no-padding ion-no-margin" lines="none">
         <IonButton
             shape="round"
             className="button-wide button-primary"
             onClick={() => { hideModalAndCard() }}>
             Click on the button to close modal and hide card
         </IonButton>
     </IonItem>
 </IonFooter>
    );
}

export default ButtonOnCard;