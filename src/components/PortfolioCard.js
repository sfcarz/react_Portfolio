import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Card from 'react-bootstrap/Card';
import JamieJade from './JJ'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.black,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      {/* <button className='bg-dark text-info' type="button" onClick={handleOpen}>
        Portfolio
      </button> */}
      <Card.Link
        className='text-justify-center pt-2'
        type="button"
        onClick={handleOpen}
        href="#"
      >Portfolio</Card.Link>
      <Modal
        className='bg-secondary'
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        class={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div class={classes.paper}>
            <Card className='bg-secondary' style={{ width: '18rem' }}>
              <JamieJade />
              <Card.Body>
                <Card.Title className='text-center text-light'> About Me </Card.Title>
                <Card.Text className='text-light text-center'>
                  I have had JJ, since she was 6 weeks old. She has been with me for everything. All my ups and downs. She teaches me what unconditional love is everyday.
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
