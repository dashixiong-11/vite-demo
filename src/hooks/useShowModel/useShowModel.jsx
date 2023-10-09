import { useEffect } from 'react';
import { ReactElement, useCallback, useRef, Profiler, useState } from 'react';
import { createPortal, render } from 'react-dom';
import ReactDOM from 'react-dom/client';

const Dom = () => {
    const [value,setValue] = useState('')
    const onInput = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }
    return <input type="text" value={value} onChange={onInput} />
}

export function useShowModel() {
    const node = useRef(null);
    const rootRef = useRef(null);  // 使用 useRef 来保存 root


    const portal = () => {
        const div = document.createElement('div');
        node.current = div;
        const root = ReactDOM.createRoot(node.current);
        rootRef.current = root;
        // document.body.appendChild(div);
        // root.render(<div>
        //     <input type="text" value={value} onChange={onInput} />
        // </div>)
        //createPortal(<div>Hello, World!</div>, div);

        root.render(createPortal(
            <Profiler id="PortalContent">
                <>
                    <div className='protal-wrapper'>
                        <Dom />
                    </div>
                </>
            </Profiler>, document.body
        ));
    }

    const remove = () => {
        if (node.current) {
            rootRef.current?.unmount();  // 使用 root 的 unmount 方法
            document.body.removeChild(node.current);
        }
    }


    return {
        portal,
        remove
    }
}