import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <Button onClick={handleClose} primary>I Accept</Button>
  )
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is an important agreement for you to accept
      </p>
    </Modal>
  )

  return(
    <div>
      <Button onClick={handleClick} primary>open</Button>
      {showModal && modal}
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
      <p>
      orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et magna nisl. Nunc rutrum erat est, in accumsan risus suscipit sit amet. Morbi tincidunt dapibus neque, consectetur volutpat ligula tincidunt at. Fusce non felis et mi elementum convallis. Cras ultrices libero neque, vel pellentesque lorem venenatis et. Sed aliquet libero est, pharetra consequat est volutpat id. Duis lacinia velit at ante aliquam, vitae accumsan eros viverra. Aenean rutrum enim in tellus feugiat fermentum. Nullam orci leo, rhoncus eget porttitor vitae, commodo ac lacus. Ut accumsan velit lacus. Aenean vel sapien mollis, luctus nisi id, consequat turpis. Integer vel massa pretium, porttitor orci laoreet, suscipit neque. Aliquam justo ligula, dignissim tempus ante vel, accumsan pellentesque leo.
      </p>
    </div>
  )
  
}

export default ModalPage;
