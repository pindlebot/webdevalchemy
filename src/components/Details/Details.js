import React from 'react'
import FontAwesome from '../FontAwesome'
import classnames from 'classnames'
import { withStyles } from 'alchemy-ui'

export const styles = {
  details: {
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgba(255, 255, 255, 0.8)',
    padding: '1em',
    border: '2px dashed rgba(255, 255, 255, 0.8)',
    '& a': {
      color: 'rgba(255, 255, 255, 0.8)'
    }
  },
  detailsHeader: {
    marginTop: 0,
    textAlign: 'right',
    color: '#fff'
  },
  detailsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,
    marginBottom: 5
  }
}

const Details = ({ classes }) => (
  <div className={classnames(classes.details, 'details')}>
    <h3 className={classes.detailsHeader}>Ben Gardner</h3>
    <div className={classes.detailsRow}>
      <FontAwesome icon={'envelope'} />
      <a>
        bgardner620@gmail.com
      </a>
    </div>
    <div className={classes.detailsRow}>
      <FontAwesome icon={'linkedin'} />
      <a
        href='https://www.linkedin.com/in/gardnerbenjamin/'>
        LinkedIn
      </a>
    </div>
  </div>
)

export default withStyles(styles)(Details)
