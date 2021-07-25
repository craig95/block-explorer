import { useEffect, useRef } from 'react';

// useRecursiveTimeout: https://www.aaron-powell.com/posts/2019-09-23-recursive-settimeout-with-react-hooks/

const useRecursiveTimeout = (callback, delay = 1000) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = callback;
    });

    useEffect(() => {
        let timer;

        const tick = () => {
            const ret = ref.current();

            if (!ret) {
                timer = setTimeout(tick, delay);
            } else if (ret.constructor === Promise) {
                ret.then(() => {
                    timer = setTimeout(tick, delay);
                });
            }
        };

        tick();

        return () => clearTimeout(timer);
    }, [delay]);
};

export default useRecursiveTimeout;
