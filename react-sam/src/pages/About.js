import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import sobre from '../assets/images/about-us.jpg';
import TypoGraphy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';

export function About() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth='lg'>
        <section className='intro'>
          <TypoGraphy variant='h2' gutterBottom>
            ¿Quién es SAM?
          </TypoGraphy>
          <p>
            <TypoGraphy variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              obcaecati hic ducimus culpa nam suscipit, iusto, voluptates
              distinctio nesciunt dolore blanditiis eaque veritatis sed
              laudantium velit. Tempore delectus veritatis quis.
            </TypoGraphy>
          </p>
        </section>

        <section className='content'>
          <img src={sobre} width='100%vw' />
          <p>
            <TypoGraphy variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              quisquam ut laborum magnam, iste accusamus veritatis asperiores
              consectetur voluptatibus eius quos molestiae quas. Itaque qui ut
              fuga voluptates aspernatur et?
            </TypoGraphy>
          </p>
          <p>
            <TypoGraphy variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              minus totam dolorem neque similique et cumque obcaecati
              accusantium consequuntur explicabo, deserunt est, architecto iste
              minima consectetur vel ratione corrupti sit.
            </TypoGraphy>
          </p>
        </section>

        <section className='contact' id='contactUs'>
          <TypoGraphy variant='h4' gutterBottom>
            Contáctanos
          </TypoGraphy>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email'
              type='email'
              variant='standard'
            />
            <TextField
              margin='dense'
              id='name'
              label='Texto'
              type='text'
              fullWidth
            />
          </DialogContent>
          <Button variant='contained' color='primary'>
            Enviar
          </Button>
        </section>

        <div className='job'>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleClickOpen}
          >
            ¿Quieres trabajar con nosotros?
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>Datos</DialogTitle>
            <DialogContent>
              <DialogContentText>Escribe aquí tus datos</DialogContentText>
              <TextField
                autofocus
                margin='dense'
                id='name'
                label='Nombre'
                type='text'
                fullWidth
              />
              <TextField
                margin='dense'
                id='surname'
                label='Apellidos'
                type='text'
                fullWidth
              />
              <TextField
                margin='dense'
                id='phone'
                label='Teléfono'
                type='phone'
                fullWidth
              />
              <TextField
                margin='dense'
                id='mail'
                label='Email'
                type='email'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancelar
              </Button>
              <Button onClick={handleClose} color='primary'>
                Enviar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
