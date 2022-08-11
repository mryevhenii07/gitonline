import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Registration from './Registration/Registration';
import s from './ModalRegistration.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#222222',
  border: '2px solid #222',
  boxShadow: 24,
  p: 2,
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>REGISTRATION</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Registration />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className={s.text}
          >
            Duis mollis, est non .
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
