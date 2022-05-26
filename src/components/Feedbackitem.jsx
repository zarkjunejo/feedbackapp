import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
function Feedbackitem({ item }) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card className='card'>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => editFeedback(item)} className='edit'><FaEdit color='purple' /></button>
            <button onClick={() => deleteFeedback(item.id)} className='close'><FaTimes /></button>

            <div className='text-display'>
                {item.text}
            </div>
        </Card>
    )

}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default Feedbackitem
