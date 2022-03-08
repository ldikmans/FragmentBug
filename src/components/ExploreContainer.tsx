import { IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { Fragment, useEffect, useState } from 'react';
import ButtonOnModal from './ButtonOnModal';
import CardOnly from './CardOnly';
import CardWithOverlay from './CardWithOverlay';
import './ExploreContainer.css';
import FragmentWithCardAndModal from './FragmentWithCardAndModal';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {


  const [showFragmentWithCardAndModal, setShowFragmentWithCardAndModal] = useState(true);
  const [showContainerModal, setShowContainerModal] = useState(false);
  const [showCardOnly, setShowCardOnly] = useState(true);
  const [showCardWithOverlay, setShowCardWithOverlay] = useState(true)

  function hideFragmentwithCardAndModal() {
    setShowFragmentWithCardAndModal(false);
  }

  function hideCardOnly(){
    setShowCardOnly(false);
  }

  async function hideCardWithOverlay(){
    
    const card = document.getElementById('card-overlay') as HTMLElement;
    //can't use this because a memory leak occurs
    //setShowCardWithOverlay(false);
    if(card){
      card.style.display='none';
    }
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

        {
          showCardWithOverlay && 
            <CardWithOverlay hideCard={hideCardWithOverlay}/>
        }

      </IonGrid>

      <IonModal
        isOpen={showContainerModal}
        swipeToClose={true}
        onDidDismiss={() => setShowContainerModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle >The modal that is in the container</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
          <IonItem lines="none" id="notification-content-subtitle-item" className="ion-no-margin ion-no-padding">
            <IonLabel id="notification-content-subtitle-label" className="ion-text-wrap ion-no-margin ion-no-padding">
              Don't miss anything
            </IonLabel>
          </IonItem>
        </IonContent>
        <ButtonOnModal setShowModal={setShowContainerModal} hideCard={setShowCardOnly} />
      </IonModal>
    </Fragment>

  );
};

export default ExploreContainer;
