import { useRef } from 'react';


function usePageTitle(title) {
    const titleRef = useRef();

    if (titleRef.current !== title) {
        titleRef.current = title;
        document.title = titleRef.current;
    }
}

export default usePageTitle;
