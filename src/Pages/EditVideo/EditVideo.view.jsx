import { Form, Field } from 'react-final-form';
import { PrimaryButton } from '../../widgets/Buttons/Buttons';
import RenderTextInput from '../../Renderers/RenderTextInput';
import styles from './editvideo.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function EditVideoView({ initialValues, onSubmit, errorMsg, payloadJSON }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <h1 className={styles.title}>Edit Video</h1>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, invalid }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Field name="title" label="Title" type="input" component={RenderTextInput} />
              <Field
                name="description"
                label="Description"
                type="input"
                component={RenderTextInput}
              />
              <div className={styles.errorMsg}>{!!errorMsg && errorMsg}</div>
              <PrimaryButton
                label="Edit"
                type="submit"
                className={styles.btn}
                disabled={invalid}
                onClick={handleOpen}
              />
              <Modal open={open} onClose={handleClose}>
                <Box className={styles.box}>
                  <Typography className={styles.box_text}>
                    {`${JSON.stringify(payloadJSON, null, 2)}`}
                  </Typography>
                </Box>
              </Modal>
            </form>
          );
        }}
      </Form>
    </div>
  );
}
export default EditVideoView;
