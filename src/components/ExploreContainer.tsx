import { IonButton, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { Fragment, useState } from 'react';
import ButtonOnCard from './ButtonOnCard';
import CardOnly from './CardOnly';
import './ExploreContainer.css';
import FragmentWithCardAndModal from './FragmentWithCardAndModal';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {


  const [showFragmentWithCardAndModal, setShowFragmentWithCardAndModal] = useState(true);
  const [showContainerModal, setShowContainerModal] = useState(false);
  const [showCardOnly, setShowCardOnly] = useState(true);

  function hideFragmentwithCardAndModal() {
    setShowFragmentWithCardAndModal(false);
  }

  function hideCardOnly(){
    setShowCardOnly(false);
  }


  return (
    <Fragment>
      <IonGrid className="ion-no-padding ion-no-margin">
        {showFragmentWithCardAndModal &&
          <FragmentWithCardAndModal hideCard={hideFragmentwithCardAndModal} />
        }

        {showCardOnly && 
          <CardOnly hideCard={hideCardOnly} setShowModal={setShowContainerModal}/>
        }

      </IonGrid>

      <IonModal
        isOpen={showContainerModal}
        swipeToClose={true}
        onDidDismiss={() => setShowContainerModal(false)}>
        <IonHeader>
          <IonToolbar id="modal-toolbar" className="ion-no-padding ion-no-margin">
            <IonTitle id="modal-title-text">The modal that is in the container</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
          <IonItem lines="none" id="notification-content-subtitle-item" className="ion-no-margin ion-no-padding">
            <IonLabel id="notification-content-subtitle-label" className="ion-text-wrap ion-no-margin ion-no-padding">
              Don't miss anything
            </IonLabel>
          </IonItem>
        </IonContent>
        <ButtonOnCard setShowModal={setShowContainerModal} hideCard={setShowCardOnly} />
      </IonModal>
    </Fragment>

  );
};

export default ExploreContainer;
