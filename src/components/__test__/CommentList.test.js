import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
import CommentList from "../CommentList";
let wrapped
let initialState

beforeEach(() => {
    initialState = {
        comments:['comment1', "comment2"]
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>)
})

afterEach(() => {
    wrapped.unmount()
})

it('create one li/comment', () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length)
})

it('should show the comment', () => {
    const text = wrapped.render().text()
    expect(text).toContain(initialState.comments[0])
    expect(text).toContain(initialState.comments[1])
})
