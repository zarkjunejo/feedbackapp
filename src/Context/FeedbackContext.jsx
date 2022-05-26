import { createContext, useState } from "react";
import { v4 as uuid4 } from 'uuid'
const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is  feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'this is  feedback item 2',
            rating: 2,
        },

        {
            id: 3,
            text: 'this is  feedback item 3',
            rating: 6,
        },

    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    //Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid4()
        setFeedback([newFeedback, ...feedback])
    }
    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    const updateFeeback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }
    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeeback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext