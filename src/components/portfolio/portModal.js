import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '32px 32px 10px',
    outline: 'none',
  },
  scroll: {
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
    color: 'black',
      '&:focus': {
        backgroundColor: 'inherit'
      },
      '&:hover': {
        backgroundColor: '#ffae1a'
      },
  },
  modalTitle: {
    margin: '0 0 20px',
  },
  titles: {
    borderBottom: '2px solid black',
    display: 'inline-block'
  },
  projectDescription: {
    backgroundColor: 'rgba(242,242,242,0.5)',
    padding: '20px',
  }
})

function getModalStyle() {
  return {
    left: '50%',
    transform: 'translate(-50%)',
    margin: '64px 0',
    overflow: 'auto',
  }
}

class PortModal extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, card_info } = this.props
    const contribution = card_info.contribution ?
      <div>
        <h6 className={classes.titles}>My Contributions</h6>
        <div>
          <ul>
          {card_info.contribution.map(contribution =>
            <li key={contribution.id}>
              <i
                className="zmdi zmdi-circle"
                style={{fontSize: '6px'}}
              >
              </i>
              {' '}{contribution.text}
            </li>
          )}
          </ul>
        </div>
      </div>
      : null
    const source_code = card_info.title === 'Portfolio' ?
      <React.Fragment>
        {card_info.code.map((code, index) =>
          <Button className={classes.button} color='primary' href={code.version} key={code.id}>V{code.id}</Button>
        )}
        {' '}
      </React.Fragment> :
      <Button className={classes.button} color='primary' href={card_info.code}>Link</Button>
    const title = card_info.title === 'Tech Talk' ?
      'Tech Talk: Responsive Design' : card_info.title

    return (
      <div>
        <Button onClick={this.handleOpen} className={classes.button} color='primary'>
          Learn More
        </Button>
        <Modal
          aria-labelledby={card_info.title}
          aria-describedby={`${card_info.title}-description`}
          open={this.state.open}
          onClose={this.handleClose}
          className={classes.scroll}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.modalTitle} variant="h4" id={`${card_info.title}`}>
              {title}
            </Typography>
            <div className={classes.projectDescription} id={`${card_info.title}-description`}>
              <div>
                <h6 className={classes.titles}>Date</h6>
                <div>{card_info.date}</div>
              </div>
              <div>
                <h6 className={classes.titles}>Description</h6>
                <div>{card_info.description}</div>
              </div>
                {contribution}
              <div>
                <h6 className={classes.titles}>Technologies</h6>
                <div>{card_info.tech}</div>
              </div>
              <div>
                <h6 className={classes.titles}>Source Code</h6>
                <div>
                  {source_code}
                </div>
              </div>
            </div>
            <Button onClick={this.handleClose} className={classes.button} color='primary'>
              Close
            </Button>
          </div>
        </Modal>
      </div>
    )
  }
}

PortModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(PortModal)
