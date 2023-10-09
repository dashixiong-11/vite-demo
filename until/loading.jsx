import { ReactElement, useCallback, useRef, Profiler } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom/client';

function showLoading() {
    const findDiv = document.querySelector('#loading-wrapper')
    if (findDiv) { return }
    const div = document.createElement('div')
    div.id = 'loading-wrapper'
    const root = ReactDOM.createRoot(div);
    root.render(
        <Profiler id="PortalContent" >
            <>
                {<div className='loading-mask' />}
                <div className='loading-wrapper '>
                    <div className="loading" />
                </div>
            </>
        </Profiler>)
    document.body.appendChild(div);
}
function hideLoading() {
    const findDiv = document.querySelector('#loading-wrapper')
    if (findDiv) {
        document.body.removeChild(findDiv);
    }
}

export {
    showLoading, hideLoading
}