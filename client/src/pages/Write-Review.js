import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../utils/queries';
import './courses.css'

const WriteReview = () => {
     const { loading, data } = useQuery(QUERY_COURSES);
     console.log({ loading, data })
     return (
        <div className='review-container'>
            <div className='review-1'>
                <h1>Write a Review</h1>
                <p>
                    Here you will Write a review of the Bootcamps you've attended and completed!
                </p>
            </div>
            <div className='review-card'>
                <h5>Which Bootcamp Would you like to Review?</h5>
                <div className="form-group"></div>
                <input type="text" name="school" id="nav-search-input" value="" placeholder="Type a school name..." class="form-control" required="required" autocomplete="off" data-auto-focus="true" data-parsley-required-message="School is required." data-autocomplete="/search/autocomplete_school_name" data-id-element="#review_school_id" data-parsley-id="9031"></input>
                <h5>Title</h5>
                <input class="form-control" required="required" data-parsley-required-message="Title is required." type="text" name="review[title]" id="review_title" data-parsley-id="7404"></input>
                <div className="form-group"></div>
                <h5>Description</h5>
                <trix-editor class="formatted_content trix-content" input="review_body_trix_input_review" required="required" id="review_body" contenteditable="" role="textbox" aria-label="Description" trix-id="1" toolbar="trix-toolbar-1"></trix-editor>
                <h5>Rating</h5>
                
            </div>
            
        </div>
        
     )}


export default WriteReview