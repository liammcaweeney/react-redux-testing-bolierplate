import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";
let wrapped

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>)
})

afterEach(() => {
    wrapped.unmount()
})

it('renders commentbox ', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})


describe('the textarea', () =>{

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target:{value: 'new comment'}})
        wrapped.update()
    })

    it('has a textarea that people can type into', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('should empty the textbox when the submit but is pressed', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})