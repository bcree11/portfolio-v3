import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  button: {
    margin: theme.spacing.unit,
  },
  titles: {
    borderBottom: '2px solid black',
    display: 'inline-block'
  }
})

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
            <li>
              <i
                className="zmdi zmdi-circle"
                style={{fontSize: '6px'}}
              >
              </i>
              {' '}{contribution}
            </li>
          )}
          </ul>
        </div>
      </div>
      : null
    const source_code = card_info.title === 'Portfolio' ?
      <React.Fragment>
        {card_info.code.map((code, index) =>
          <Button href={code}>V{index+1}</Button>
        )}
        {' '}
      </React.Fragment> :
      <Button href={card_info.code}>Link</Button>
    const title = card_info.title === 'Tech Talk' ?
      'Tech Talk: Responsive Design' : card_info.title

    return (
      <div>
        <Button onClick={this.handleOpen} className={classes.button} variant="text">
          Learn More
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h4" id={`${card_info.title}`}>
              {title}
            </Typography>
            <Typography id={`${card_info.title}-description`}>
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
            </Typography>
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
