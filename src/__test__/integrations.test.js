import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import App from "../components/App";
let wrapped

beforeEach(() => {
    wrapped = mount(
        <Root>
            <App/>
        </Root>)
})

afterEach(() => {
    wrapped.unmount()
})

it('can fetch a list of comments and list them', (done) => {
    const mockSuccessResponse = [{name: '1'},{name: '2'}]
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    wrapped.find('.fetch-comments').simulate('click')
    setTimeout(()=>{
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
    },100)

})