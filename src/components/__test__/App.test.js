import React from "react";
import App from "../App";
import {shallow} from "enzyme";
import CommentList from "../CommentList";
import CommentBox from "../CommentBox";
let wrapped

beforeEach(() => {
    wrapped = shallow(<App/>)
})
it('renders commentbox ', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1)
})
it('renders commentlist', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})